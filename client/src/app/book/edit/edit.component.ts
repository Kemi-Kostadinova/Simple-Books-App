import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/types/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book = {} as Book;
  bookId: string = "";
  
  constructor(private apiService: ApiService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activeRoute.params.subscribe((data) => {
      const id = data['bookId'];
      this.bookId = id;

      this.apiService.getBook(id).subscribe((book) => {
        this.book = book;
      })
      
    });
  }

  editReview(form: NgForm) {
    if (form.invalid) {
      return
    }
    
    const { title, author, image, bookReview, genre, stars } = form.value;

    this.apiService.updateReview(this.bookId, title, author, image, bookReview, genre, stars).subscribe(() => {
      this.router.navigate([`/books/${this.bookId}`])
    });

  }
}
