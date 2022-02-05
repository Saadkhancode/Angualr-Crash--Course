import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  // private subject2 = new BehaviorSubject<any>(this.showAddTask=false);

  constructor() { }
  toggleAddTask(): void {

    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  onTogggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
