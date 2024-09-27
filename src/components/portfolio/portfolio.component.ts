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
      title: 'Repair shop management',
      description:
        'A website that helps with coordinating a team.It has authentication and authorization',
      image: 'img1.png',
      link: 'https://sipostechnotes.onrender.com',
      tech: [
        { name: 'React', icon: 'react.png' },
        { name: 'Node', icon: 'node.png' },
        { name: 'Express', icon: 'express.png' },
        { name: 'MongoDB', icon: 'mongo.png' },
      ],
    },
    {
      title: 'Pokemon nuzlocke tracker',
      description:
        'Helps keeping track of nuzlocke encounters in pokémon games.Currently supporting up to generation 6',
      image: 'img2.png',
      link: 'https://nuzlocke-tracker-fe.onrender.com/#/login',
      tech: [
        { name: 'Angular', icon: 'angular.png' },
        { name: 'Springboot', icon: 'springboot.png' },
        { name: 'mysql', icon: 'mysql.png' },
      ],
    },
  ];
}
