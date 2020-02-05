import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
