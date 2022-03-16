import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MonsterCComponent } from './monster-c/monster-c.component';
import { MonsterDataServiceService } from './monster-data-service.service';
import { UserPageComponent } from './user-page/user-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users', component: UserPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'monster/:name', component: MonsterDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MonsterCComponent,
    UserPageComponent,
    HomePageComponent,
    ContactPageComponent,
    MonsterDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [MonsterDataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
