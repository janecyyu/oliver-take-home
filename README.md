## Oliver Space Take-Home Instructions

Your mission, if you choose to accept it, is to build out a mock of a product reviews flow.
This includes a page for users to submit their reviews as well as a page to read reviews.

REQUIREMENTS:

- Create a page where a user can review a given product with the following information:
  - Their name (the author)
  - A star rating
  - Headline text (a title for their review)
  - The body of the review (a longer paragraph)
- Create a page where a user can view all of the reviews for a given product

Please spend 90 minutes completing this task to whatever extent you can finish, but don't
go over time. The expectation is not that you will get through all of the requirements, so please add notes on anything else you would have done with more time. Feel free to use any third-party libraries that you find helpful. Please spend some of your time on styling - since we are a consumer-facing company, we care about UI quality. It's ok to sacrifice some functionality for looks.

## Running the app

Start the mock JSON server on port 3004 using `json-server --watch db.json`
Start the React app on port 3000 using `npm start`
You can then make requests to http://localhost:3004/products, http://localhost:3004/reviews or http://localhost:3004/products/:id/reviews using axios, or any of your preferred methods

More info on json-server [here](https://www.npmjs.com/package/json-server)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- App
  - Home (/)
    - ProductGrid
      - ProductCard
  - Write_Review (/write_review/:id)
    - ReviewForm
  - Reviews (/reviews/:id)
    - ReviewGrid
      - ReviewCard
