import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  catImg = 'cat-0.png';

  ngOnInit(): void {
    this.animateCat();
  }

  animateCat() {
    let current = 0;

    setInterval(() => {
      if (current === 3) {
        current = 0;
      } else {
        current++;
      }

      this.catImg = `cat-${current}.png`;
    }, 250);
  }
}
