# Object-Relational Mapping

### Quickstart
```sh
$ npm install
$ createdb catbook # set up your development database
```

### Database setup
1. Connect to your catbook database from your command line using `psql catbook`.
In the `db/migrations` directory update your database by running each SQL statement one at a time.
2. Update your `.env` file.

### Dependencies
This project uses `pg` `pg-hstore` `dotenv` `sequelize`

### Instructions
- Setup your project to connect to your development database
- Write an INSERT query using `sequelize` to insert data into your table
- run `node app.js` to run your program
- Check your table data using your postgres command line client: `SELECT * FROM cats;`!
- Write SELECT, UDPATE, DELETE queries using `sequelize` and visibly verify the results using your terminal logs from your `nodejs` program and your postgres CLI.
- Draw/diagram/visualise how the different parts of this program work.

### Further
- Create a new table `owners` and a `sequelize` model `Owner` and make sure you can interact with it in the same way as you did with `Cat`
- Associate the tables in a 1:many relationship. 1 owner has many cats. A cat belongs to an owner (this might not be representative given cats think owners belong to them, but this is just an exercise..)

### Resources

- [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
- [Sequelize](https://sequelize.org/)
- [Sequelize docs](https://sequelize.org/master/)
- [Sequelize Getting Started](https://sequelize.org/master/manual/getting-started.html#installing)
- [Sequelize Basic Queries](https://sequelize.org/master/manual/model-querying-basics.html)
