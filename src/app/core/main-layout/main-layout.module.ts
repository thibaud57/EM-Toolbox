import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, SharedModule, MainLayoutRoutingModule],
})
export class MainLayoutModule {}
