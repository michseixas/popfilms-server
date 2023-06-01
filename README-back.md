<h1>
POPFILMS - FRONT END
</h1> 

Popfilms is our fullstack final project, featuring a social web app focused on movies. This is the front-end repository.  [here](https://github.com/michseixas/popfilms-server).

## About us
We are three movie enthusiasts and Ironhack students who have collaborated to create Popfilms, a captivating social web app dedicated to exploring and sharing our love for films.

![Project Image](https://t4.ftcdn.net/jpg/01/45/03/99/360_F_145039942_TlScPbqEWiBMPpfSyJyhBBCPcr1l52dP.jpg "Project Image")

## Deployment
You can check the app fully deployed [here](https://www.cactuscoleccion.com/). If you wish to view the API deployment instead, check [here](https://www.cactuscoleccion.com/).

## Work structure
We used [Trello](https://trello.com/home) to organize our workflow.

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
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});
```
#### Comment.model.js
```js
const commentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  idComment: { type: Schema.Types.ObjectId, required: true }
});
```


## API Routes
| Method | Endpoint                    | Require                                             | Response (200)                                                        | Action                                                                    |
| :----: | --------------------------- | --------------------------------------------------- |---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| POST   | /signup                     | const { username, email, password } = req.body      | json({user: user})                                                    | Registers the user in the database and returns the logged in user.        |
| POST   | /login                      | const { email, password } = req.body                | json({authToken: authToken})                                          | Logs in a user already registered.                                        |

## External API used

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ante id ligula pretium, a volutpat augue lobortis. Proin lacinia consequat nisl non feugiat. Integer a efficitur risus.

| Method | Endpoint                    | Require                                             | Response (200)                                                        | Action                                                                    |
| :----: | --------------------------- | --------------------------------------------------- |---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| POST   | /signup                     | const { username, email, password } = req.body      | json({user: user})                                                    | Registers the user in the database and returns the logged in user.        |
| POST   | /login                      | const { email, password } = req.body                | json({authToken: authToken})                                          | Logs in a user already registered.                                        |
| POST   | /addcomment                     | const { title, description, idComment } = req.body      | json({user: user})                                                    | Posts a comment in the movieDetails page.       |
| GET   | /movies                     | const [{ title, description, director, year, duration }] = req.body      | json({user: user})                                                    | Get an array of all the movies     |
| GET   | /movieid                     | const { title, description, director, year, duration } = req.body      | json({user: user})                                                    | Get the movie by ID and display the info in a page.     |
