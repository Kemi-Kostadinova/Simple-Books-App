import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/types/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  books: Book[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getBooks().subscribe(books => {
      console.log(books);
      this.books = books;
    })
  }
}
