import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeCardComponent } from '../knowledge-card/knowledge-card.component';
import { SecondaryKnowledgeCardComponent } from '../secondary-knowledge-card/secondary-knowledge-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

export interface KnowledgeCard {
  title: string;
  icon: string;
  links: Link[];
}

export interface SecondaryCard {
  title: string;
  description: string;
  link: Link;
}

interface Link {
  name: string;
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
      icon: 'assets/svg/pagesIcon.svg',
      links: [
        { name: 'Guide to get started faster', link: '/' },
        { name: 'Video tutorials for beginners', link: '/' },
        { name: 'Moving to Bolt system', link: '/' },
      ],
    },
    {
      title: 'Personal Settings',
      icon: 'assets/svg/usersIcon.svg',

      links: [
        { name: 'Setting up your profile', link: '/' },
        { name: 'Changing business name', link: '/' },
        { name: 'Changing email address', link: '/' },
      ],
    },
    {
      title: 'Billing',
      icon: 'assets/svg/cardsIcon.svg',

      links: [
        { name: 'Payment declined', link: '/' },
        { name: 'Get a refund', link: '/' },
        { name: 'Subscriptions', link: '/' },
      ],
    },
    {
      title: 'Commerce',
      icon: 'assets/svg/graphsIcon.svg',

      links: [
        { name: 'Add products', link: '/' },
        { name: 'Selling guide', link: '/' },
        { name: 'Create categories', link: '/' },
      ],
    },
  ];

  secondaryCards: SecondaryCard[] = [
    {
      title: 'Community Forum',
      description:
        'Get help from community members, ask any questions and get answers faster.',
      link: { name: 'Join Community', link: '/' },
    },
    {
      title: 'Webinars',
      description:
        'Join our series of webinars where you can ask questions live and see a presentation.',
      link: { name: 'Register', link: '/' },
    },
  ];
}
