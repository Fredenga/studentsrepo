import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:username',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
