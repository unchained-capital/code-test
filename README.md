
#PART 1 - Setup

Use Node 12 and npm 6.12
Install Docker to use the local database

To setup the backend:

```
npm install
npm run restart:db
npm run db:migrate
npm start
```

To setup the frontend:

```
npm install
npm start
```

#Part 2 - Requirements for Todo List Application

In this project, there is a Typescript backend and a React Javascript frontend.

There are a couple of routes available for listing all Todos in the database, as well as saving Todos to the database.

Write a React frontend for creating and listing Todos.

Features:
- Add a todo
- Show a list of todos
- Remove a todo
- Update an existing todo
- Frontend unit tests of components
- Some backend integration test

In particular, we're testing for your ability to jump into a greenfield project and create a coherent system, as well as
jumping into project/framework you may not know anything about, and make some progress.

We're looking for strong patterns around separation of concerns, code clarity and readability, as well as the ability to learn and apply new concepts.

Show off! 
If you're particularly good at creating usuable frontends, make an interesting experience.
If you have backend patterns or technologies you'd rather use on top of the existing technology, apply them, and tell us about it in the second part of the interview.

Consider this your time to show us your coding philosophies and code quality / organization.
