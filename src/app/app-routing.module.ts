import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { MainLayoutRoutingModule } from './core/main-layout/main-layout-routing.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {}), MainLayoutRoutingModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
