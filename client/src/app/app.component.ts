import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = false;
  params;

  openGenerator() {
    console.log(this.clicked);
    this.clicked = true;
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.params = params['object-id'] || params['material-id'];
      console.log(this.params);
    });
  }
}
