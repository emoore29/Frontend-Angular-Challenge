import { Component, Input } from '@angular/core';
import { SecondaryCard } from '../content/content.component';

@Component({
  selector: 'app-secondary-knowledge-card',
  standalone: true,
  imports: [],
  templateUrl: './secondary-knowledge-card.component.html',
  styleUrl: './secondary-knowledge-card.component.sass',
})
export class SecondaryKnowledgeCardComponent {
  @Input() cardData?: SecondaryCard;
}
