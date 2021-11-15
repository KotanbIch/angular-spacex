import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {RocketsComponent} from "./rockets/rockets.component";
import {CrewComponent} from "./crew/crew.component";
import {LandPadsComponent} from "./land-pads/land-pads.component";
import {LaunchesComponent} from "./launches/launches.component";

const routes: Routes = [
  {path: 'crew', component: CrewComponent},
  {path: 'rockets', component: RocketsComponent},
  {path: 'land-pads', component: LandPadsComponent},
  {path: 'launches', component: LaunchesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
