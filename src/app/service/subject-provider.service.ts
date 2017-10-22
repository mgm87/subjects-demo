import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SubjectProviderService {

  private sub: Subject<string>;
  private asyncSub: AsyncSubject<string>;
  private behaviorSub: BehaviorSubject<string>;
  private replaySub: ReplaySubject<string>;

  constructor() {
    this.sub = new Subject();
    this.asyncSub = new AsyncSubject();
    this.behaviorSub = new BehaviorSubject('First One!');
    this.replaySub = new ReplaySubject();
  }

  /**
   * Call next with the new value and get an observable from the subject.
   * @param name The name of the next value to emit.
   * @returns The observable from the subject
   */
  getSubjectObservable(name: string) {
    this.sub.next(name);
    return this.sub.asObservable();
  }

  /**
   * Call next with the new value and get an observable from the AsyncSubject.
   * @param name The name of the next value to emit.
   * @returns The observable from the subject
   */
  getAsyncObservable(name: string) {
    this.asyncSub.next(name);
    return this.asyncSub.asObservable();
  }

  /**
   * Call next with the new value and get an observable from the BehaviorSubject.
   * @param name The name of the next value to emit.
   * @returns The observable from the subject
   */
  getBehaviorObservable(name: string) {
    this.behaviorSub.next(name);
    return this.behaviorSub.asObservable();
  }

  /**
   * Call next with the new value and get an observable from the ReplaySubject.
   * @param name The name of the next value to emit.
   * @returns The observable from the subject
   */
  getReplayObservable(name: string) {
    this.replaySub.next(name);
    return this.replaySub.asObservable();
  }

  /**
   * Complete the subject.
   */
  completeSubject() {
    this.sub.complete();
  }

  /**
   * Complete the AsyncSubject.
   */
  completeAsync() {
    this.asyncSub.complete();
  }

  /**
   * Complete the BehaviorSubject.
   */
  completeBehavior() {
    this.behaviorSub.complete();
  }

  /**
   * Complete the ReplaySubject.
   */
  completeReplay() {
    this.replaySub.complete();
  }

}
