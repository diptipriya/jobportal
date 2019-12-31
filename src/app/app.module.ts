import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PortalComponent } from './portal/portal.component';



const routes: Routes = [
  
  
  
  {path:'', component:PortalComponent},

  

];

@NgModule({
  declarations: [
    AppComponent,
  
    PortalComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 





  
}
