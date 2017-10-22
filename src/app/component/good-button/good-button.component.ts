import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

/**
 * This component demenstrates the RxJS way to add an observable to something like a click.
 * This as an angular adoption of a pattern shown in "On the subject of Subjects"
 * https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93
 */
@Component({
  selector: 'app-good-button',
  templateUrl: './good-button.component.html',
  styleUrls: ['./good-button.component.scss']
})
export class GoodButtonComponent implements OnInit {

  @ViewChild('goodButton') button;

  constructor() {
    //
  }

  ngOnInit() {
    Observable.fromEvent(this.button._elementRef.nativeElement, 'click').subscribe(e => {
      console.log(e);
    });
  }

}
