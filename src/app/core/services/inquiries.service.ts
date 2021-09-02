import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  baseUrl_For_SeekersCloud_Service = environment.baseUrl_For_SeekersCloud_Service;

  constructor(private http: HttpClient) {
  }

  public makeAnInquiry(name: string, contact: string, email: string, subject: string, message: string):Observable<any>{
    return this.http.post(this.baseUrl_For_SeekersCloud_Service+'inquiryRoute/makeInquiry',{
      name,
      contact,
      email,
      subject,
      message
    })
  }
}
