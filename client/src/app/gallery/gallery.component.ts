import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  searchTerm: string;
  @Input() models;
  @Input() cb: () => void;

  constructor() {}

  ngOnInit() {}
}
