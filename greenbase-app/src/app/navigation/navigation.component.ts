import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItems {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent {
  navItems: NavItems[] = [
    {
      name: 'Dashboard',
      icon: 'svg',
    },
    {
      name: 'Orders',
      icon: 'svg',
    },
    {
      name: 'Products',
      icon: 'svg',
    },
    {
      name: 'Categories',
      icon: 'svg',
    },
    {
      name: 'Customers',
      icon: 'svg',
    },
    {
      name: 'Reports',
      icon: 'svg',
    },
    {
      name: 'Coupons',
      icon: 'svg',
    },
    {
      name: 'Inbox',
      icon: 'svg',
    },
  ];

  otherInformation: NavItems[] = [
    {
      name: 'Knowledge Base',
      icon: 'svg',
    },
    {
      name: 'Product Updates',
      icon: 'svg',
    },
  ];

  settings: NavItems[] = [
    {
      name: 'Personal Settings',
      icon: 'svg',
    },
    {
      name: 'Global settings',
      icon: 'svg',
    },
  ];
}
