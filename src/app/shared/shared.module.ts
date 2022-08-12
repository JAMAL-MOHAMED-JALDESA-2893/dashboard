import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from "@angular/material/divider";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    MatDividerModule
      ],
  
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ] 

})
export class SharedModule { }
