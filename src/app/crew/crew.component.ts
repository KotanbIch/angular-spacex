import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrewService } from '../crew.service';
import { CrewMember } from '../crew.service.interfaces';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  constructor(private readonly crewService: CrewService) {}
  public crewMembers$: Observable<CrewMember[]>;

  ngOnInit(): void {
    this.crewMembers$ = this.crewService.getAllCrewMembers();
  }
}
