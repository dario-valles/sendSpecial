import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  url: string;
  marker: string;
  qrCode: string;
}

@Component({
  selector: 'app-previewdialog',
  templateUrl: './previewdialog.component.html',
  styleUrls: ['./previewdialog.component.css']
})
export class PreviewDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}
}
