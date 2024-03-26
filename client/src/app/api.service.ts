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

  createReview(title: string, author: string, image: string, review: string, genre: string, stars: number) {
    const {apiUrl} = environment;

    return this.http.post<Book>(`${apiUrl}/book`, {title, author, image, review, genre, stars}, {withCredentials: true})

  }
}
