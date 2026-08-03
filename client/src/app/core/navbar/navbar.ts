import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {

    // console.log(`current user:`);
    // this.acntService.currentUser$.subscribe({
    //   next:(res) =>{
    //     this.isUserAuthenticated = res;
    //     console.log(this.isUserAuthenticated);
    //   },error:(err) =>{
    //     console.log(`An error occurred while setting isUserAuthenticated flag.`)
    //   }
  //  })
  }
  public isUserAuthenticated: boolean = false;
  // getBasketCount(items: IBasketItem[]){
  //   return items.reduce((sum, item)=>sum + item.quantity, 0);
  // }
  public login = () => {
    //this.acntService.login();
  }
  public logout = () => {
    //this.acntService.signout();
  }
}