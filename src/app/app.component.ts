import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { HeroComponent } from '../components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    PortfolioComponent,
    HeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-website';
}
