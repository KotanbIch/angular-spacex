import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrewService } from '../crew.service';
import { CrewMember } from '../crew.service.interfaces';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  constructor(private readonly crewService: CrewService) {}
  // public allCrewMembers$: Observable<CrewMember[]>;
  private allCrewMembers: CrewMember[];
  public crewMembers: CrewMember[];
  private readonly pageSize: number = 5;
  private page: number = 0;

  ngOnInit(): void {
    this.crewService.getAllCrewMembers().subscribe((allCrewMembers) => {
      this.allCrewMembers = allCrewMembers;
      this.crewMembers = this.allCrewMembers.slice(
        this.page,
        this.pageSize * (this.page + 1)
      );
    });
  }

  public onScroll(): void {
    this.page += 1;
    this.crewMembers = [
      ...this.crewMembers,
      ...this.allCrewMembers.slice(
        this.page * this.pageSize,
        this.pageSize * (this.page + 1)
      ),
    ];
  }
}
