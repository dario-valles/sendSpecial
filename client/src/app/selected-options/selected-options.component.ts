import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatStepper, MatDialog } from '@angular/material';
import { Models3dService } from '../services/models3d/models3d.service';
import { MaterialService } from '../services/material/material.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Material } from '../material';
import { Model3d } from '../model3d';
import { PreviewDialogComponent } from '../previewdialog/previewdialog.component';

export interface GeneratedModel {
  generated_url: string;
}
@Component({
  selector: 'app-selected-options',
  templateUrl: './selected-options.component.html',
  styleUrls: ['./selected-options.component.css']
})
export class SelectedOptionsComponent implements OnInit {
  model: Model3d;
  material: Material;
  audio: string;
  previewDisabled = true;
  modelComplete = false;
  materialComplete = false;
  audioComplete = false;
  yourDetails = false;

  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('details') detailsForm;

  constructor(
    private ModelS: Models3dService,
    private MaterialS: MaterialService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

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

  cb() { }

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
    this.ModelS.generatePreview(
      this.model.id,
      this.audio,
      this.detailsForm.details
    ).subscribe((data: GeneratedModel) => {
      this.dialog.open(PreviewDialogComponent, {
        data: {
          qrCode: data.generated_url,
          url: data.generated_url,
          marker:
            'https://s3.eu-west-3.amazonaws.com/sendspecial/Hiro_marker_ARjs.png' // TODO creating a marger generator function
        }
      });
    });
  }

  changeMaterial() {
    this.router.navigate([], {
      queryParams: {
        relativeTo: this.route,
        'material-id': null
      },
      queryParamsHandling: 'merge'
    });
    this.material = null;
    this.materialComplete = false;
  }

  changeModel() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        'object-id': null
      },
      queryParamsHandling: 'merge'
    });
    this.model = null;
    this.modelComplete = false;
  }
  checkText() {
    this.yourDetails =
      this.detailsForm.details.name &&
        this.detailsForm.details.sender &&
        this.detailsForm.details.text
        ? true
        : false;
    this.previewDisabled =
      this.modelComplete && this.materialComplete && this.yourDetails
        ? false
        : true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const objectId = this.route.snapshot.queryParamMap.get('object-id');
      const materialId = this.route.snapshot.queryParamMap.get('material-id');
      this.audio = this.route.snapshot.queryParamMap.get('audio-url');

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
      if (this.audio) {
        // TODO: Grab generated audio if it has been recorded
        this.stepper.selectedIndex = 3;
        this.audioComplete = true;
      }
      this.previewDisabled =
        materialId && objectId && this.yourDetails ? false : true;
    });
  }
}
