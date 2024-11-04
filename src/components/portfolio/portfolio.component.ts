import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Tech webstore',
      description:
        'A webstore with full functionality, authentication, authorization and a nice admin panel.',
      image: 'img3.png',
      github: 'https://github.com/SiposSzabolcs/OverclockHeaven-fe',
      link: 'https://overclockheaven.onrender.com',
      tech: [
        { name: 'Angular', icon: 'angular.svg' },
        { name: 'Springboot', icon: 'springboot.svg' },
        { name: 'mysql', icon: 'mysql.svg' },
      ],
    },
    {
      title: 'Repair shop management',
      description:
        'A website that helps with coordinating a team.It has authentication and authorization',
      image: 'img1.png',
      github: 'https://github.com/SiposSzabolcs/technotes-fe',
      link: 'https://sipostechnotes.onrender.com',
      tech: [
        { name: 'React', icon: 'react.svg' },
        { name: 'Node', icon: 'node.svg' },
        { name: 'Express', icon: 'express.svg' },
        { name: 'MongoDB', icon: 'mongo.svg' },
      ],
    },
    {
      title: 'Pokemon nuzlocke tracker',
      description:
        'Helps keeping track of nuzlocke encounters in pokémon games.Currently supporting up to generation 6',
      image: 'img2.png',
      github: 'https://github.com/SiposSzabolcs/nuzlocke-tracker-fe',
      link: 'https://nuzlocke-tracker-fe.onrender.com/#/login',
      tech: [
        { name: 'Angular', icon: 'angular.svg' },
        { name: 'Springboot', icon: 'springboot.svg' },
        { name: 'mysql', icon: 'mysql.svg' },
      ],
    },
  ];
}
