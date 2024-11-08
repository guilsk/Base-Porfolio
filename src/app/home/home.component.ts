import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkComponent } from '../shared/link/link.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, LinkComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
