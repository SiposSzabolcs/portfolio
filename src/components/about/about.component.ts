import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  tech = {
    frontend: [
      { name: 'html', icon: 'html.svg' },
      { name: 'css', icon: 'css.svg' },
      { name: 'js', icon: 'javascript.svg' },
      { name: 'ts', icon: 'typescript.svg' },
      { name: 'bootstrap', icon: 'bootstrap.svg' },
      { name: 'react', icon: 'react.svg' },
      { name: 'angular', icon: 'angular.svg' },
    ],
    backend: [
      { name: 'node', icon: 'node.svg' },
      { name: 'express', icon: 'express.svg' },
      { name: 'java', icon: 'java.svg' },
      { name: 'springboot', icon: 'springboot.svg' },
      { name: 'python', icon: 'python.svg' },
      { name: 'mongo', icon: 'mongo.svg' },
      { name: 'mysql', icon: 'mysql.svg' },
    ],
    miscellaneous: [
      { name: 'git', icon: 'git.svg' },
      { name: 'github', icon: 'github.svg' },
      { name: 'linux', icon: 'linux.svg' },
      { name: 'redux', icon: 'redux.svg' },
      { name: 'jwt', icon: 'jwt.svg' },
    ],
  };
}
