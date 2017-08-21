import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../album.model';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() { }

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  }

  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", "A live album by English progressive rock band released 1995.", 1),
    new Album("Kid A", "Radiohead", "Alt-rock band's successful follow up to their OK Computer album, embracing electronica.", 2),
    new Album("Oh Mercy", "Bob Dylan", "Dylan's 1987 comeback, teaming up with Grammy award winning producer, Daniel Lanois.", 3),
    new Album("Time Out", "Dave Brubeck Quartet", "Cool Jazz album that experiments with time signatures, and features the alto saxophonist, Paul Desmond.", 4)

  ];
}
