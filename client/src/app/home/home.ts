import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [CommonModule,
            NgbCarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    onSlide(event: any) {
    console.log(event);
  }
}
