import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MainpageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainpageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    MainpageComponent
  ]
})
export class DbzModule { }
