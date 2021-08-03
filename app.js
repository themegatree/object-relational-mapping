require('dotenv').config()

const { models, sequelize } = require('./models');

sequelize.sync().then(async () => {
  // // Write your Model queries here

  // // Create a record
  // await models.Cat.create(
  //   {
  //     name: 'tabatha',
  //     breed: 'Bombay',
  //     owner: 'Ed'
  //   }
  // )

  await models.Owners.create(
    {
      name: 'Ed',
      dogOwner: false,
      DofB: '1900-12-21'
    }
  )

  //   // Create a new record
  //   await models.Cat.create(
  //     {
  //       name: 'lulu',
  //       breed: 'cat',
  //       owner: 'shiv'
  //     }
  //   );

  //   await models.Cat.create(
  //     {
  //       name: 'smudge',
  //       breed: 'british shorthair',
  //       owner: 'james'
  //     }
  //   )

  // // Find a record
  // const cats = await models.Cat.findAll({
  //   where: {
  //     owner: 'Ed'
  //   }
  // })
  // // Log results
  // console.log(cats)
  // const cat = cats[0]
  // // Log the object properties that represent fields
  // console.log(cat.name)


  // // ----
  // // TO DO
  // // ----
  // // Update a record

  // await models.Cat.update(
  //   {
  //     name: 'garfield',
  //     breed: 'orange persian',
  //     owner: 'john'
  //   },
  //   {
  //     where: {
  //       id: 2
  //     }
  //   }
  // )

  // // Delete a record

  await models.Cat.destroy(
    {where: {
      id: 1
      }
    }
  )
});