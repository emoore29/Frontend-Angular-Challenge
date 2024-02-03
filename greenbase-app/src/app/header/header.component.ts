import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

interface UserInfo {
  name: string;
  avatar: string;
  notifications: number;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  user = "X'eriya Ponald";

  userInfo: UserInfo = {
    name: "X'eriya Ponald",
    avatar: 'assets/images/avatar.png',
    notifications: 5,
  };
}
