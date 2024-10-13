import { Component } from '@angular/core';

import { SkillListComponent } from './skill-list/skill-list.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent, SkillListComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
