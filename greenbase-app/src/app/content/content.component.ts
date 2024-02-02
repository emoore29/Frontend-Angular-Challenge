import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeCardComponent } from '../knowledge-card/knowledge-card.component';
import { SecondaryKnowledgeCardComponent } from '../secondary-knowledge-card/secondary-knowledge-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

export interface KnowledgeCard {
  title: string;
  links: string[];
}

export interface SecondaryCard {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    KnowledgeCardComponent,
    SecondaryKnowledgeCardComponent,
    CommonModule,
    SearchBarComponent,
  ],
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
        'Setting up your profile',
        'Changing business name',
        'Changing email address',
      ],
    },
    {
      title: 'Billing',
      links: ['Payment declined', 'Get a refund', 'Subscriptions'],
    },
    {
      title: 'Commerce',
      links: ['Add products', 'Selling guide', 'Create categories'],
    },
  ];

  secondaryCards: SecondaryCard[] = [
    {
      title: 'Community Forum',
      description:
        'Get help from community members, ask any questions and get answers faster.',
      link: 'Join Community',
    },
    {
      title: 'Webinars',
      description:
        'Join our series of webinars where you can ask questions live and see a presentation.',
      link: 'Register',
    },
  ];
}
