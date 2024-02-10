import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NavItems {
  name: string;
  icon: string;
  link: string;
  orders?: number;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent {
  navItems: NavItems[] = [
    {
      name: 'Dashboard',
      icon: 'assets/svg/dashboardIcon.svg',
      link: '/',
    },
    {
      name: 'Orders',
      icon: 'assets/svg/ordersIcon.svg',
      link: '/',
      orders: 16,
    },
    {
      name: 'Products',
      icon: 'assets/svg/productsIcon.svg',
      link: '/',
    },
    {
      name: 'Categories',
      icon: 'assets/svg/categoriesIcon.svg',
      link: '/',
    },
    {
      name: 'Customers',
      icon: 'assets/svg/customersIcon.svg',
      link: '/',
    },
    {
      name: 'Reports',
      icon: 'assets/svg/reportsIcon.svg',
      link: '/',
    },
    {
      name: 'Coupons',
      icon: 'assets/svg/couponsIcon.svg',
      link: '/',
    },
    {
      name: 'Inbox',
      icon: 'assets/svg/inboxIcon.svg',
      link: '/',
    },
  ];

  otherInformation: NavItems[] = [
    {
      name: 'Knowledge Base',
      icon: 'assets/svg/questionIcon.svg',
      link: '/knowledge-base',
    },
    {
      name: 'Product Updates',
      icon: 'assets/svg/ribbonIcon.svg',
      link: '/',
    },
  ];

  settings: NavItems[] = [
    {
      name: 'Personal Settings',
      icon: 'assets/svg/userIcon.svg',
      link: '/',
    },
    {
      name: 'Global settings',
      icon: 'assets/svg/settingsIcon.svg',
      link: '/',
    },
  ];
}
