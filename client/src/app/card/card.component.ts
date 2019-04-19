import { Component, OnInit, Input } from '@angular/core';
import { Model3d } from '../model3d';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() model;
  constructor() {}

  ngOnInit() {}
}
