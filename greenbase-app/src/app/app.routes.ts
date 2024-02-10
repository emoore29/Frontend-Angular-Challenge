import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

export const routes: Routes = [
  { path: 'knowledge-base', component: ContentComponent },
  { path: 'placeholder', component: PlaceholderComponent },
];
