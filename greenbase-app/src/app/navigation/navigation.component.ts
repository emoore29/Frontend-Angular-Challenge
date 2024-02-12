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
      link: '/placeholder',
    },
    {
      name: 'Orders',
      icon: 'assets/svg/ordersIcon.svg',
      link: '/placeholder',
      orders: 16,
    },
    {
      name: 'Products',
      icon: 'assets/svg/productsIcon.svg',
      link: '/placeholder',
    },
    {
      name: 'Categories',
      icon: 'assets/svg/categoriesIcon.svg',
      link: '/placeholder',
    },
    {
      name: 'Customers',
      icon: 'assets/svg/customersIcon.svg',
      link: '/placeholder',
    },
    {
      name: 'Reports',
      icon: 'assets/svg/reportsIcon.svg',
      link: '/placeholder',
    },
    {
      name: 'Coupons',
      icon: 'assets/svg/couponsIcon.svg',
      link: '/placeholder',
    },
    {
      name: 'Inbox',
      icon: 'assets/svg/inboxIcon.svg',
      link: '/placeholder',
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
      link: '/placeholder',
    },
  ];

  settings: NavItems[] = [
    {
      name: 'Personal Settings',
      icon: 'assets/svg/userIcon.svg',
      link: '/placeholder',
    },
    {
      name: 'Global settings',
      icon: 'assets/svg/settingsIcon.svg',
      link: '/placeholder',
    },
  ];
}
