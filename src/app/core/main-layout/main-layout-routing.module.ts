import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { PlaylistToCsvComponent } from '../../playlist-to-csv/playlist-to-csv.component';
import { MovingFilesFromCsvComponent } from '../../moving-files-from-csv/moving-files-from-csv.component';
import { MusicTagEditorComponent } from '../../music-tag-editor/music-tag-editor.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                component: PlaylistToCsvComponent,
            },
            {
                path: 'playlist-to-csv',
                component: PlaylistToCsvComponent,
            },
            {
                path: 'moving-files',
                component: MovingFilesFromCsvComponent,
            },
            {
                path: 'tag-editor',
                component: MusicTagEditorComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
