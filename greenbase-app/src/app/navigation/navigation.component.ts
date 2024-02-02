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
      icon: './assets/svg/dashboardIcon.svg',
    },
    {
      name: 'Orders',
      icon: './assets/svg/ordersIcon.svg',
    },
    {
      name: 'Products',
      icon: './assets/svg/productsIcon.svg',
    },
    {
      name: 'Categories',
      icon: './assets/svg/categoriesIcon.svg',
    },
    {
      name: 'Customers',
      icon: './assets/svg/customersIcon.svg',
    },
    {
      name: 'Reports',
      icon: './assets/svg/reportsIcon.svg',
    },
    {
      name: 'Coupons',
      icon: './assets/svg/couponsIcon.svg',
    },
    {
      name: 'Inbox',
      icon: './assets/svg/inboxIcon.svg',
    },
  ];

  otherInformation: NavItems[] = [
    {
      name: 'Knowledge Base',
      icon: './assets/svg/questionIcon.svg',
    },
    {
      name: 'Product Updates',
      icon: './assets/svg/ribbonIcon.svg',
    },
  ];

  settings: NavItems[] = [
    {
      name: 'Personal Settings',
      icon: './assets/svg/userIcon.svg',
    },
    {
      name: 'Global settings',
      icon: './assets/svg/settingsIcon.svg',
    },
  ];
}
