import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { HomeComponent } from './pages/home/home.component';
import { MisionComponent } from './pages/mision/mision.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VisionComponent } from './pages/vision/vision.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent,
  children:[
    {path:'mision', component:MisionComponent},
    {path:'vision', component:VisionComponent},
  ]
},
  {path:'contactos', component:ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
