import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeCard } from '../content/content.component';
@Component({
  selector: 'app-knowledge-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge-card.component.html',
  styleUrl: './knowledge-card.component.sass',
})
export class KnowledgeCardComponent {
  @Input() cardData?: KnowledgeCard;
}
