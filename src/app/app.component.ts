import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cards = [];
  title = 'mtn-demo';
  constructor() {}
  ngOnInit() {
    this.cards = [
      {
        imgPath: '../../assets/images/test.png',
        title: 'Mobile internet',
        btnText: 'Start Here',
        altText: 'Please add Path with prefix to root folder ../../',
      },
      {
        imgPath: '../../assets/images/test.png',
        title: 'Home internet',
        btnText: 'Start Here',
        altText: 'Please add Path with prefix to root folder ../../',
      },
      {
        imgPath: '../../assets/images/test.png',
        title: 'Get a device',
        btnText: 'Start Here',
        altText: 'Please add Path with prefix to root folder ../../',
      },
      {
        imgPath: '../../assets/images/test.png',
        title: 'Add a phone line',
        btnText: 'Start Here',
        altText: 'Please add Path with prefix to root folder ../../',
      },
      {
        imgPath: '../../assets/images/test.png',
        title: 'Upgrade',
        btnText: 'Start Here',
        altText: 'Please add Path with prefix to root folder ../../',
      },
      {
        imgPath: '../../assets/images/test.png',
        title: 'Fixed the issue',
        btnText: 'Start Here',
        altText: 'Please add Path with prefix to root folder ../../',
      },
      {
        imgPath: '../../assets/images/test.png',
        title: 'Customer Care',
        btnText: 'Start Here',
        altText: 'Please add Path with prefix to root folder ../../',
      },
    ];
  }
  carouselEventHandler(event) {
    console.log('Event ', event);
  }
}
