import { Component, OnInit } from '@angular/core';
import { SubjectProviderService } from './service/subject-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subjectSubscriptions: SubjectData[] = [];
  asyncSubscriptions: SubjectData[] = [];
  behaviorSubscriptions: SubjectData[] = [];
  replaySubscriptions: SubjectData[] = [];

  constructor(private subjectProviderService: SubjectProviderService) {}

  /**
   * Add a subscription to the subject observable and emit a new value to the observers.
   */
  clickAddSub() {
    let name = `Subject subscription: ${this.subjectSubscriptions.length}`;
    let newSubscription: SubjectData = {
      name: name,
      data: []
    }

    this.subjectSubscriptions.push(newSubscription);

    let subscription = this.subjectProviderService.getSubjectObservable(name)
      .subscribe(val => {
        newSubscription.data.push(val);
      });
  }

  /**
   * Add a subscription to the AsyncSubject observable and emit a new value to the observers.
   */
  clickAddAsync() {
    let name = `Async subscription: ${this.asyncSubscriptions.length}`;
    let newAsyncSubscription: SubjectData = {
      name: name,
      data: []
    }

    this.asyncSubscriptions.push(newAsyncSubscription);

    let asyncSubscription = this.subjectProviderService.getAsyncObservable(name)
    .subscribe(val => {
      newAsyncSubscription.data.push(val);
    });
  }

  /**
   * Add a subscription to the BehaviorSubject observable and emit a new value to the observers.
   */
  clickAddBehavior() {
    let name = `Behavior subscription: ${this.behaviorSubscriptions.length}`;
    let newBehaviorSubscription: SubjectData = {
      name: name,
      data: []
    }

    this.behaviorSubscriptions.push(newBehaviorSubscription);

    let behaviorSubscription = this.subjectProviderService.getBehaviorObservable(name)
    .subscribe(val => {
      newBehaviorSubscription.data.push(val);
    });
  }

  /**
   * Add a subscription to the ReplaySubject observable and emit a new value to the observers.
   */
  clickAddReplay() {
    let name = `Replay subscription: ${this.replaySubscriptions.length}`;
    let newReplaySubscription: SubjectData = {
      name: name,
      data: []
    }

    this.replaySubscriptions.push(newReplaySubscription);

    let replaySubscription = this.subjectProviderService.getReplayObservable(name)
      .subscribe(val => {
        newReplaySubscription.data.push(val);
      });
  }

  /**
   * Complete the subject.
   */
  subjectComplete() {
    this.subjectProviderService.completeSubject();
  }

  /**
   * Complete the AsyncSubject.
   */
  asyncComplete() {
    this.subjectProviderService.completeAsync();
  }

  /**
   * Complete the BehaviorSubject.
   */
  behaviorComplete() {
    this.subjectProviderService.completeBehavior();
  }

  /**
   * Complete the ReplaySubject.
   */
  replayComplete() {
    this.subjectProviderService.completeReplay();
  }

  OnInit() {
    //
  }
}

export interface SubjectData {
  name: string;
  data: string[];
}
