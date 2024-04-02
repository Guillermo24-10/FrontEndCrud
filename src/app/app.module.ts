import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

//componentes para las tablas de material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

//para alertas
import {MatSnackBarModule} from '@angular/material/snack-bar';

//para iconos
import {MatIconModule} from '@angular/material/icon';

//modales
import {MatDialogModule} from '@angular/material/dialog'

//cuadriculas(GRID)
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogAddEditComponent } from './Dialogs/dialog-add-edit/dialog-add-edit.component';
import { DialogoDeleteComponent } from './Dialogs/dialogo-delete/dialogo-delete.component'

@NgModule({
  declarations: [
    AppComponent,
    DialogAddEditComponent,
    DialogoDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
