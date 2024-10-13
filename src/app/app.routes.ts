import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompetenceComponent } from './competence/competence.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'competence', component: CompetenceComponent },
    
    // Rota coringa para páginas não encontradas (opcional)
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
