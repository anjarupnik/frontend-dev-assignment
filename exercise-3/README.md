## Exercise 3 - Render data

For this exercise a dummy backend API has been prepared for you returning JSON using [canned](https://github.com/sideshowcoder/canned). You can run the backend by executing the following command in your terminal:

```
npm run api
```

You can query API's search endpoint. For example a user searching for `trui`:
```
http://localhost:5000/search?q=trui
```

Create a service that retrieves the data from the above mentioned API. This data should be used to render the search suggestions. Search suggestions should be rendered according to the designs in excercise3.png. Pay attention to the following:

- Search suggestions are shown `onkeyup`
- Data is retrieved from the API when the search query is longer than 2 characters
- Data is retrieved asynchronously
- UI transitions for user interaction (not defined)
- Unit tests including mocking the HTTP requests