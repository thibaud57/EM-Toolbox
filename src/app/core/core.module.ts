import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        MainLayoutComponent,
        SidenavComponent,
        FooterComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterLink,
        MatSidenavModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        RouterOutlet,
        MatButtonModule,
        RouterLinkActive,
        MatTooltipModule,
    ],
})
export class CoreModule {}
