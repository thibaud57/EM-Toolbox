import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {
        console.log('HomeComponent INIT');
    }
}
