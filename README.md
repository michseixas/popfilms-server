<h1>
POPFILMS - BACK END
</h1> 

Popfilms is our fullstack final project, featuring a social web app focused on movies. This is the front-end repository.  [here](https://github.com/michseixas/popfilms-server).

## About us
We are three movie enthusiasts and Ironhack students who have collaborated to create Popfilms, a captivating social web app dedicated to exploring and sharing our love for films.

![Project Image](https://t4.ftcdn.net/jpg/01/45/03/99/360_F_145039942_TlScPbqEWiBMPpfSyJyhBBCPcr1l52dP.jpg "Project Image")

## Deployment
You can check the app fully deployed [here](https://popfilms.netlify.app/). 

## Installation guide
- Fork this repo
- Clone this repo 

```shell
$ cd popfilms
$ npm install
$ npm start
```

## Models
#### User.model.js
```js
const userSchema = new Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: {type: String, required: true, unique: true},
  image: String,
  likedmovies: [{ type: String,  }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  ratedMovies: [{idMovie: String, userRating: Number}]
});
```
#### Comment.model.js
```js
const commentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  idUser: { type: Schema.Types.ObjectId, required: true },
  idMovie: { type: String, required: true },
},
 { timestamps: true,});
```

#### Movie.model.js
```js
const movieSchema = new Schema({
  ratings: [{ type: Number}],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  idMovie: { type: String, required: true }
});
```


## API Routes
| Method | Endpoint                    | Require                                             | Response (200)                                                        | Action                                                                    |
| :----: | --------------------------- | --------------------------------------------------- |---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| POST   | /signup                     | const { username, email, password } = req.body      | json({user: user})                                                    | Registers the user in the database and returns the logged in user.        |
| POST   | /login                      | const { email, password } = req.body                | json({authToken: authToken})                                          | Logs in a user already registered.                                        |                                              | Retrieves all the top 250 movies.        |

## External API used

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ante id ligula pretium, a volutpat augue lobortis. Proin lacinia consequat nisl non feugiat. Integer a efficitur risus.

| Method | Endpoint                    | Require                                             | Response (200)                                                        | Action                                                                    |
| :----: | --------------------------- | --------------------------------------------------- |---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| POST   | /signup                     | const { username, email, password } = req.body      | json({user})                                                    | Registers the user in the database and returns the logged in user.        |
| POST   | /login                      | const { email, password } = req.body                | json({authToken})                                          | Logs in a user already registered.                                        |
| GET   | /movies                     | const [{ title, description, director, year, duration }] = req.body      | json({user})                                                    | Get an array of all the movies     |
| GET   | /:userId                     | const {userId}     | json({user})                                                    | Get the user by ID and send the info.     |
| POST   | /:userId/update                     | const { name, email, username, password, image } = req.body      | json({user})                                                    | Finds the user and updates it.     |
| POST   | /:userId/delete                     | const {userId}      | json({user})                                                    | Finds the user and deletes it.     |
| POST   | /:userId/updateImage                     | const { image } = req.body      | json({user})                                                    | Finds the user and updates image.     |
| POST   | /:userId/likeMovie                     | const { likedMovies } = req.body      | json({user})                                                    | Finds the user and updates likes array.     |
| POST   | /:userId/dislikeMovie                     | const { likedMovies } = req.body      | json({user})                                                    | Finds the user and updates likes array.     |
| GET   | /:movieId                     | const { movieId }     | json({movie})                                                    | Get the movie by ID and send the info.     |
| POST   | /addComment                     | const { title, description, idComment } = req.body      | message: "created"                                                   | Creates a comment in the database (movieDetail).        |
