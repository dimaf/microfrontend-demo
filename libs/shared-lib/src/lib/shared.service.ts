import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
    private likesSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public readonly likes: Observable<boolean>=this.likesSubject.asObservable();
    triggerLike(){
        this.likesSubject.next(!this.likesSubject.value)
    }
 }
