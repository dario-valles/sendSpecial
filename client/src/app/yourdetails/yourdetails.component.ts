import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-yourdetails',
  templateUrl: './yourdetails.component.html',
  styleUrls: ['./yourdetails.component.css']
})
export class YourdetailsComponent implements OnInit {
  @Output()
  public details = {
    sender: '',
    name: '',
    text: ''
  };

  constructor() {}

  ngOnInit() {}
}
