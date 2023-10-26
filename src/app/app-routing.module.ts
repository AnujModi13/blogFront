import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"about", component:AboutUsComponent},
{path:"post/:id",component:SinglePostComponent},
{path:"category/:category/:id",component:SingleCategoryComponent},
{path:"terms-conditions",component:TermsConditionComponent},
{path:"contact",component:ContactsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
