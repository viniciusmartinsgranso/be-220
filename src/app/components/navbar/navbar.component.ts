import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(
      private readonly router: Router,
  ) { }

  public toggleUser: boolean = false;

  public closeUserModal(): void {
    this.toggleUser = false;
  }

  public async goToHome(): Promise<void> {
    await this.router.navigateByUrl('/home')
  }

}
