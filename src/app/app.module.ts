import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesService } from './courses.service';
import { RatingComponent } from './rating/rating.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    RatingComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GitHubProfileComponent,
    NotFoundComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'followers/:id/:username', component: GitHubProfileComponent, canActivate: [AuthGuard]},
      {path: 'followers', component: GithubFollowersComponent, canActivate: [AuthGuard]},
      {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'no-access', component: NoAccessComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [
    CoursesService, 
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler },
    AuthService,
    OrderService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
