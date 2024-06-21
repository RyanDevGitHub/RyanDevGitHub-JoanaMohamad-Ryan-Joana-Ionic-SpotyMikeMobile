import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  private modalOpenSubject = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpenSubject.asObservable();
  constructor() { }
  setModalOpen(isOpen: boolean) {
    this.modalOpenSubject.next(isOpen);
  }
}
