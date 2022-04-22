import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new Subject();
  public data$ = this.data.asObservable();

  getData() {
    
  }
}
