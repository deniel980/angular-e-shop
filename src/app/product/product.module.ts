import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class ProductModule {}
