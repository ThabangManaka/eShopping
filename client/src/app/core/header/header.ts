import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-header',
  imports: [CommonModule,BreadcrumbComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
    constructor(public bcService: BreadcrumbService){}
}
