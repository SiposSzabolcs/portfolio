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
      { name: 'html', icon: 'html.png' },
      { name: 'css', icon: 'css.png' },
      { name: 'js', icon: 'js.png' },
      { name: 'ts', icon: 'ts.png' },
      { name: 'bootstrap', icon: 'bootstrap.png' },
      { name: 'react', icon: 'react.png' },
      { name: 'angular', icon: 'angular.png' },
      { name: 'redux', icon: 'redux.png' },
    ],
    backend: [
      { name: 'node', icon: 'node.png' },
      { name: 'express', icon: 'express.png' },
      { name: 'java', icon: 'java.png' },
      { name: 'springboot', icon: 'springboot.png' },
      { name: 'jwt', icon: 'jwt.png' },
      { name: 'python', icon: 'python.png' },
      { name: 'mongo', icon: 'mongo.png' },
      { name: 'mysql', icon: 'mysql.png' },
    ],
    miscellaneous: [
      { name: 'git', icon: 'git.png' },
      { name: 'github', icon: 'github.png' },
      { name: 'postman', icon: 'postman.png' },
      { name: 'vscode', icon: 'vscode.png' },
    ],
  };
}
