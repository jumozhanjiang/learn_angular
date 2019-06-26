import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {


  public jbk = '这是jbk';
  // @ts-ignore
  @ViewChild('footerChild') headercomponent: any;
  constructor() {

  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
  }

  ngOnInit() {

  }

  runParent(e) {
    alert(e);
  }

}
