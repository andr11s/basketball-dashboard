import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
  imports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    SplitButtonModule,
    InputNumberModule,
    DropdownModule,
    TableModule,
    DialogModule,
    SpeedDialModule,
  ],
  exports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    PanelModule,
    InputNumberModule,
    SplitButtonModule,
    DropdownModule,
    TableModule,
    DialogModule,
    SpeedDialModule,
  ],
})
export class PrimeComponentsModule {}
