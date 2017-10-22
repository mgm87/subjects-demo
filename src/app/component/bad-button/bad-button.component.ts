import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * This component demenstrates the non-RxJS way to add an observable to something like a click.
 * This as an angular adoption of a pattern shown in "On the subject of Subjects"
 * https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93
 */
@Component({
  selector: 'app-bad-button',
  templateUrl: './bad-button.component.html',
  styleUrls: ['./bad-button.component.scss']
})
export class BadButtonComponent implements OnInit {
  private subject: Subject<MouseEvent>;

  constructor() {
    this.subject = new Subject();
  }

  clickHandler(event: MouseEvent) {
    this.subject.next(event);
  }

  ngOnInit() {
    this.subject.asObservable().subscribe(e => {
      console.log(e);
    });
  }

}
