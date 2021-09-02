import { Component, OnInit } from '@angular/core';
import LoginValidators from "../../../../../validators/LoginValidators";
import {InquiriesService} from "../../../../../core/services/inquiries.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-make-inquiries',
  templateUrl: './make-inquiries.component.html',
  styleUrls: ['./make-inquiries.component.scss']
})
export class MakeInquiriesComponent implements OnInit {

  constructor(private toasterService: ToastrService, private inquiryService: InquiriesService) {
  }

  name = '';
  nameErrorState = false;
  email = '';
  emailErrorState = false;
  subject = '';
  contact = '';
  contactErrorState = false;
  message = '';

  loading = false;

  ngOnInit(): void {
  }

  makeInquiry() {

    this.loading = false;
    this.nameErrorState = false;
    this.emailErrorState = false;
    this.contactErrorState = false;

    if (this.name.trim().length > 2) {
    } else {
      this.nameErrorState = true;
      this.onWarning('Please Provide a valid name!');
      return;
    }

    if (!LoginValidators.validateMyContact(this.contact.trim())) {
      this.contactErrorState = true;
      this.onWarning('Contact Number is required!');
      return;
    }

    if (!LoginValidators.validateMyEmail(this.email.trim())) {
      this.emailErrorState = true;
      this.onWarning('email address is required!');
      return;
    }
    this.loading = true;
    this.inquiryService.makeAnInquiry(
      this.name.trim(),
      this.contact.trim(),
      this.email.trim(),
      this.subject.trim(),
      this.message.trim()
    ).subscribe(() => {
      this.loading = false;
      this.onSuccess('THANK YOU!');
      document.getElementById('inquiryModelId')?.click();

      this.name = '';
      this.contact = '';
      this.email = '';
      this.subject = '';
      this.message = '';

    }, () => {
      this.onError('TRY AGAIN!');
    });

  }

  onWarning(message: string) {
    this.toasterService.warning(message, 'Warning!');
  }

  onSuccess(message: string) {
    this.toasterService.info(message, 'Success!');
  }

  onError(message: string) {
    this.toasterService.error(message, 'Error!');
  }

}
