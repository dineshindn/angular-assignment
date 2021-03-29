import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const Material = [
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatExpansionModule,
  FlexLayoutModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
