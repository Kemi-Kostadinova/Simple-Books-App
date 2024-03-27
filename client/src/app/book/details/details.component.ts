import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Book } from 'src/types/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book = {} as Book;
  owner: string = "";

  constructor(private apiService: ApiService, private userService: UserService, private activeRoute: ActivatedRoute) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  get userId(): string {
    return this.userService.user?._id || "";
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['bookId'];

      this.apiService.getBook(id).subscribe((book) => {
        this.owner = book.owner;
        
        this.book = book;
      })
    })
  }

  isOwner() { 
    console.log(this.owner);
    
    return this.owner === this.userId

  }

}
