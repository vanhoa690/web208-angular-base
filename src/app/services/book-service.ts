import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private refresh = new Subject<void>();

  refresh$ = this.refresh.asObservable();

  triggerRefresh() {
    this.refresh.next();
  }
}

// query client => query key
