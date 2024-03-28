import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
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
  userId: string = "";
  isOwnerFlag: boolean = false;

  constructor(private apiService: ApiService, private userService: UserService, private activeRoute: ActivatedRoute, private route: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['bookId'];

      forkJoin([
        this.userService.getUser(),
        this.apiService.getBook(id)
      ]).subscribe(([userData, book]) => {
        this.book = book;

        this.userId = userData?._id || "";
        this.owner = book.owner;
        this.isOwnerFlag = this.owner === this.userId;
      });
    });
  }

  delete(bookId: string) {
    this.apiService.deleteBook(bookId).subscribe(() => {
      this.route.navigate(["/books"])
    });
  }

}
