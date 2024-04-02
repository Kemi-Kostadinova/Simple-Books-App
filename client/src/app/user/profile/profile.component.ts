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
  isProfileLoading: boolean = true;
  areReviewsLoading: boolean = true;

  constructor(private userService: UserService, private api: ApiService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      
      this.isProfileLoading = false;
    })
  }

  filterBooksByOwner(userId: string) {
    this.api.getBooks().subscribe(books => {
      this.books = books.filter((currentBook) => currentBook.owner === userId);

      this.areReviewsLoading = false;
    });
  }

  hasRewies(): boolean {
    return this.books.length === 0 ? false : true;
  }

  toggleReviewsVisibility() {
    this.showReviews = !this.showReviews;
    if (this.showReviews && this.user) {
      this.filterBooksByOwner(this.user._id);
    }
  }

}
