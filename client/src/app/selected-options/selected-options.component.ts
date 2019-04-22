import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {
  MatStepper,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Models3dService } from '../services/models3d/models3d.service';
import { MaterialService } from '../services/material/material.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Material } from '../material';
import { Model3d } from '../model3d';

export interface DialogData {
  url: string;
  marker: string;
  qrCode: string;
}

export interface GeneratedModel {
  generated_url: string;
}

@Component({
  selector: 'app-dialog-preview',
  template: `
    <div>
      <h1 mat-dialog-title>
        Please scan the qrCode nad point with your mobile to the image
      </h1>
    </div>
    <div mat-dialog-content>
      <div fxFlex="calc2Cols">
        <div>
          <qr-code [value]="data.qrCode" [size]="250"></qr-code>
        </div>
        <div>
          Or Navigate to:
        </div>
        <div>
          <h2>{{ data.url }}</h2>
        </div>
      </div>
      <div fxFlex="calc4Cols">
        <img src="{{ data.marker }}" />
      </div>
    </div>
  `
})
export class PreviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

@Component({
  selector: 'app-selected-options',
  templateUrl: './selected-options.component.html',
  styleUrls: ['./selected-options.component.css']
})
export class SelectedOptionsComponent implements OnInit {
  model: Model3d;
  material: Material;
  audio;
  previewDisabled = true;
  modelComplete = false;
  materialComplete = false;
  audioComplete = false;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    private ModelS: Models3dService,
    private MaterialS: MaterialService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  getModel(id) {
    this.ModelS.getModel(id).subscribe((mode: Model3d) => {
      this.model = mode;
    });
  }

  getMaterial(id) {
    this.MaterialS.getMaterial(id).subscribe(
      (mat: Material) => (this.material = mat)
    );
  }

  cb() {}

  selectModel() {
    this.router.navigate(['/models'], {
      queryParamsHandling: 'merge'
    });
  }

  selectMaterial() {
    this.router.navigate(['/materials'], {
      queryParamsHandling: 'merge'
    });
  }
  reset() {
    this.router.navigate([], {
      queryParams: {
        'object-id': null,
        'material-id': null
      },
      queryParamsHandling: 'merge'
    });
    this.model = null;
    this.material = null;
    this.materialComplete = this.modelComplete = false;
  }

  generatePreview() {
    this.ModelS.generatePreview(this.model.id).subscribe(
      (data: GeneratedModel) => {
        this.dialog.open(PreviewDialogComponent, {
          width: '80%',
          data: {
            qrCode: data.generated_url,
            url: data.generated_url,
            marker:
              'https://s3.eu-west-3.amazonaws.com/sendspecial/Hiro_marker_ARjs.png'
          }
        });
      }
    );
  }

  changeMaterial() {
    this.router.navigate([], {
      queryParams: {
        'material-id': null
      }
    });
    this.material = null;
  }

  changeModel() {
    this.router.navigate([], {
      queryParams: {
        'object-id': null
      }
    });
    this.model = null;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      const objectId = this.route.snapshot.queryParamMap.get('object-id');
      const materialId = this.route.snapshot.queryParamMap.get('material-id');
      if (objectId) {
        this.getModel(objectId);
        this.stepper.selectedIndex = 1;
        this.modelComplete = true;
      }
      if (materialId) {
        this.getMaterial(materialId);
        this.stepper.selectedIndex = 2;
        this.materialComplete = true;
      }
      this.previewDisabled = materialId && objectId ? false : true;
    });
  }
}
