import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionServiceService {
readonly inspectionApiUrl = "https://localhost:7081/api";
  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/inspections');
  }

  addInspection(data:any){
    return this.http.post(this.inspectionApiUrl + '/inspections', data);
  }

  updateInspection(id:number|string,data:any) {
    return this.http.put(this.inspectionApiUrl + `/inspections/${id}`, data);
  }

  deleteteInspection(id:number|string) {
    return this.http.delete(this.inspectionApiUrl + `/inspections/${id}`);
  }

  //inspection types

  getInspectionTypesList():Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/inspectionTypes');
  }

  addInspectionTypes(data:any){
    return this.http.post(this.inspectionApiUrl + '/inspectionTypes', data);
  }

  updateInspectionTypes(id:number|string,data:any) {
    return this.http.put(this.inspectionApiUrl + `/inspectionTypes/${id}`, data);
  }

  deleteteInspectionTypes(id:number|string) {
    return this.http.delete(this.inspectionApiUrl + `/inspectionTypes/${id}`);
  }

  // Statuses

  getStatusList():Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.inspectionApiUrl + '/status', data);
  }

  updateStatus(id:number|string,data:any) {
    return this.http.put(this.inspectionApiUrl + `/status/${id}`, data);
  }

  deleteteStatus(id:number|string) {
    return this.http.delete(this.inspectionApiUrl + `/status/${id}`);
  }
}
