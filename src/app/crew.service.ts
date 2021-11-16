import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrewMember } from './crew.service.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  constructor(private readonly http: HttpClient) {}
  private readonly spacexUrl: string = 'https://api.spacexdata.com/v4/crew';
  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  public getAllCrewMembers(): Observable<CrewMember[]> {
    return this.http.get<CrewMember[]>(this.spacexUrl).pipe();
  }
}
