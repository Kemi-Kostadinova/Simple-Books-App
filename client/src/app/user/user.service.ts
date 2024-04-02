import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map, tap } from 'rxjs';
import { Book } from 'src/types/book';
import { UserForAuth } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!document.cookie;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<UserForAuth>('/api/user/register', {
        username,
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/user/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .get('/api/user/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getUser() {
    return this.http
      .get<UserForAuth>('/api/user/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  isOwner(book: Book): boolean {
    return !!this.user && book.owner === this.user._id;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
