SECTION TWO
-----------

To run the Folder Section Two code in this project, follow the steps below:

1.  Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from the official [Node.js website](https://nodejs.org/).

2.  Open your terminal or command prompt and navigate to the root directory of the project.

3.  Install the project dependencies by running the following command:

    `npm install`

    This will download and install all the required dependencies specified in the `package.json` file.

4.  Create a `.env` file in the root directory of this folder and add your enviromental variables as specified in the .env.example

5.  Once the dependencies are installed and the environment variables are set, you can start the application by running the following command:

    `npm run start:dev`

    This command will execute the `start` script defined in the `package.json` file, which will start create a mongodb locally using docker and start the dev server using nodemon.
    

API Endpoints
-------------

### Authors

-   **Create Author**

    `POST /authors
    {
      "name": "Author Name",
      "bio": "Author biography",
      "birthdate": "YYYY-MM-DD"
    }`

-   **Get All Authors**

    `GET /authors`

-   **Get Author by ID**

    `GET /authors/:id`

-   **Update Author**

    `PUT /authors/:id
    {
      "name": "Updated Name",
      "bio": "Updated biography",
      "birthdate": "YYYY-MM-DD"
    }`

-   **Delete Author**

    `DELETE /authors/:id`

### Books

-   **Create Book**
    `POST /books
    {
      "title": "Book Title",
      "authorId": "Author ObjectId",
      "publicationYear": 2021,
      "genre": "Genre",
      "summary": "Book summary"
    }`

-   **Get All Books**

    `GET /books`

-   **Get Book by ID**

    `GET /books/:id`

-   **Update Book**

    `PUT /books/:id
    {
      "title": "Updated Title",
      "authorId": "Updated Author ObjectId",
      "publicationYear": 2022,
      "genre": "Updated Genre",
      "summary": "Updated summary"
    }`

-   **Delete Book**

    `DELETE /books/:id`

### Pagination for Books

To list books with pagination, use query parameters `page` and `limit` in the API request.

#### Example Request

`GET /books? Page=1&limit=10`


Answers to Questions
-------------

### 1. How would you structure the database schema for this application?

For this library system, we have three main collections in our MongoDB database:

- **Users**: This collection stores information about users who can log in and interact with the API. It includes fields for `username`, `password` (hashed), and `email`.

- **Authors**: This holds details about authors, such as their `name`, `bio`, and `birthdate`.

- **Books**: This collection contains data about books, including the `title`, `authorId` (which links to the author), `publicationYear`, `genre`, and a `summary`.

### 2. Describe how you would handle relationships between books and authors.

In our setup, each book is associated with a single author, but one author can write multiple books. 

We handle this by storing an `authorId` in the `books` collection. This `authorId` is a reference to an author in the `authors` collection. When we need to get information about a book, we can use this reference to also pull in details about the author. It’s like linking a book to the author who wrote it.

### 3. How would you implement pagination for listing books?

Pagination helps to manage large lists of books by breaking them into smaller, more manageable pages. 

We use query parameters like `page` and `limit` to control this. For instance, if you want to see the first 10 books, you set `page=1` and `limit=10`. If you want to see the next set of books, you adjust the `page` parameter.

Here’s a quick overview of how it works:
- `page` tells us which page of results we want.
- `limit` tells us how many items to show per page.

In practice, this means when someone requests books, we calculate which books to skip based on the page number and only return the number of books specified by the limit.

### 4. Explain how you would secure the API endpoints.

To keep our API secure, we use JSON Web Tokens (JWT). Here’s a simple rundown of how it works:

1. **User Authentication**: When users log in, they receive a JWT. This token is like a digital key that grants access to the API.

2. **Using the Token**: For each request to a protected endpoint, users need to include this token in the `Authorization` header.

3. **Validating the Token**: On the server side, we check if the token is valid. If it is, we allow access; if not, we deny it. This ensures that only authenticated users can perform certain actions.

By implementing these measures, we make sure that our API is only accessible to users who are properly authenticated and authorized.