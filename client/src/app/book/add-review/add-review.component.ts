import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  addReview(form: NgForm) {
    if (form.invalid) {
      return
    }

    const { title, author, image, review, genre, stars } = form.value;

    this.apiService.createReview(title, author, image, review, genre, stars).subscribe(() => {
      this.router.navigate(["/books"])
    });

  }
}
