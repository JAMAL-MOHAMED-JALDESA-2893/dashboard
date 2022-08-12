import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule
      ],
  
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ] 

})
export class SharedModule { }
