import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms'
import { TodoService } from './services/todo.service'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

const appRoutes:Routes = [
  {path:"", component:UserComponent },
  {path:"about", component:AboutusComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
