import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'privacy-police', component: PrivacyPoliceComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
