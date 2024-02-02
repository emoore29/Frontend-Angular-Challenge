import { Component } from '@angular/core';
import { KnowledgeCardComponent } from '../knowledge-card/knowledge-card.component';
import { SecondaryKnowledgeCardComponent } from '../secondary-knowledge-card/secondary-knowledge-card.component';

interface KnowledgeCard {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [KnowledgeCardComponent, SecondaryKnowledgeCardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass',
})
export class ContentComponent {
  knowledgeCards: KnowledgeCard[] = [
    {
      title: 'Getting Started',
      links: [
        'Guide to get started faster',
        'Video tutorials for beginners',
        'Moving to Bolt system',
      ],
    },
    {
      title: 'Personal Settings',
      links: [
        'Guide to get started faster',
        'Video tutorials for beginners',
        'Moving to Bolt system',
      ],
    },
    {
      title: 'Billing',
      links: [
        'Guide to get started faster',
        'Video tutorials for beginners',
        'Moving to Bolt system',
      ],
    },
    {
      title: 'Commerce',
      links: [
        'Guide to get started faster',
        'Video tutorials for beginners',
        'Moving to Bolt system',
      ],
    },
  ];
}
