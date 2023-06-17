import { Component, OnInit } from '@angular/core';

interface Song {
  title: string;
  artist: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
  newReleasedSongs: Song[] = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      imageUrl: 'assets/slideshow/5.jpg'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      imageUrl: 'assets/slideshow/6.jpg'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      imageUrl: 'assets/slideshow/4.jpg'
    }
  ];

  slideIndex = 0;

  previousSlide() {
    this.slideIndex = (this.slideIndex === 0) ? this.newReleasedSongs.length - 1 : this.slideIndex - 1;
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex === this.newReleasedSongs.length - 1) ? 0 : this.slideIndex + 1;
  }
}