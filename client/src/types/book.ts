import { UserForAuth } from "./user";

export interface Book {
    "_id": string;
    "title": string;
    "author": string;
    "image": string;
    "bookReview": string;
    "genre": string;
    "stars": number;
    "owner": UserForAuth;
}