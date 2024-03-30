import { Component, OnInit } from '@angular/core';
import { UserForAuth } from 'src/types/user';
import { UserService } from '../user.service';
import { Book } from 'src/types/book';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserForAuth | undefined;
  books: Book[] = [];
  showReviews: boolean = false;

  constructor(private userService: UserService, private api: ApiService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      // if (user) {
      //   this.filterBooksByOwner(user._id);
      // }
    })
  }

  filterBooksByOwner(userId: string) {
    this.api.getBooks().subscribe(books => {
      this.books = books.filter((currentBook) => currentBook.owner === userId);
    });
  }

  hasRewies(): boolean {
    return this.books.length === 0 ? false : true;
  }

  toggleReviewsVisibility() {
    this.showReviews = !this.showReviews; // Toggle the visibility flag
    if (this.showReviews && this.user) {
      this.filterBooksByOwner(this.user._id); // Fetch books if reviews are visible
    }
  }

}
