import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from 'src/types/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBooks () {
    const {apiUrl} = environment;

    return this.http.get<Book[]>(`${apiUrl}/book`);
  };

  createReview(title: string, author: string, image: string, bookReview: string, genre: string, stars: number) {

    return this.http.post<Book>(`/api/book`, {title, author, image, bookReview, genre, stars})

  }
}
