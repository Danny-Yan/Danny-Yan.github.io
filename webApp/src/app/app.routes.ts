import { Routes } from '@angular/router';
import { HomeComponent } from './web-pages/home/home.component';
import { PagenotfoundComponent } from './web-pages/pagenotfound/pagenotfound.component';
import { ProjectPageComponent } from './web-pages/project-pages/project-page/project-page.component';
import { AboutPageComponent } from './web-pages/about-page/about-page.component';
import { DiscordPageComponent } from './web-pages/discord-page/discord-page.component';
import { DesmosPageComponent } from './web-pages/desmos-page/desmos-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projects', component: ProjectPageComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'discord', component: DiscordPageComponent},
    { path: 'desmos', component: DesmosPageComponent},
    { path: '**', component: PagenotfoundComponent},
];
