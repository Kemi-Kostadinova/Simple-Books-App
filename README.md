My first Angular project, serving as the final assignment for the course at SoftUni.


# BookBuzz

BookBuzz is a Single Page Application (SPA) created using Angular for the Frontend and a custom backend server for the Backend.


## ✏️ Application Overview

This is a simple Angular application designed to provide a platform for book enthusiasts to share their thoughts, insights, and reviews on their favorite books. This application fosters a vibrant community where users can discover new reads, connect, and contribute their own perspectives on various literary works.

### App Permissions

| **Permissions** | Guest  | Logged in User |
| --------------- | -----  | -------------- |
| Login / Register | ✔️      | ❌             |
| Home page       | ✔️      | ✔️              |
| Details         | ✔️      | ✔️              |
| Edit / Delete      | ❌      | ✔️              |
| Profile         | ❌     | ✔️              |
| My Reviews       | ❌     | ✔️              |
| Create Review  | ❌     | ✔️             |


## 💻 Built with

### Front-end
- Angular
- Rxjs
- TypeScript
- HTML & CSS
- Font Awesome
### Back-end
- Express
- Mongoose
- JsonWebToken
- Bcrypt
- Cookie Parser
- Nodemon


## Installation

Clone respository:

```bash
  https://github.com/Kemi-Kostadinova/Simple-Books-App

```

Run application:

```bash
  cd client 
  npm install
  ng serve

```

* Access the application by opening the following URL in a web browser: http://localhost:4200/

Run server:

```bash
  cd client 
  npm install
  ng serve
```
* Once the server is started, it will listen for requests on: http://localhost:5000
## Screenshots

### Home
![App Screenshot](/client/public/home.png)

### Login
![App Screenshot](/client/public/login.png)

### Register
![App Screenshot](/client/public/register.png)

### Catalog
![App Screenshot](/client/public/catalog.png)

### Add review
![App Screenshot](/client/public/add_review.png)

### Details
![App Screenshot](/client/public/deatils.png)

### Edit
![App Screenshot](/client/public/edit.png)

### Profile
![App Screenshot](/client/public/profile.png)