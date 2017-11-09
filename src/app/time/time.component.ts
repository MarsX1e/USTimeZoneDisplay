import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimeComponent implements OnInit {
  num:number=0;
  PST:string=new Date( new Date().getTime() + (-8) * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
  MST:string=new Date( new Date().getTime() + (-7) * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
  CST:string=new Date( new Date().getTime() + (-6) * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
  EST:string=new Date( new Date().getTime() + (-7) * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
  constructor() { }

  ngOnInit() {
  }

}
