import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  Toast: any;
  constructor() {
    this.Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    })
  }
  successToast(message) {
    this.Toast.fire({
      type: 'success',
      title: message
    })
  }
  errorToast(message) {
    this.Toast.fire({
      type: 'error',
      title: message
    })
  }
}