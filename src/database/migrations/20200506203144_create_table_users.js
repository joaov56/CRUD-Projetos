
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('username').unique().notNullLabel()


    tabel.timestamp('created_at'), defaulTo(knex.fn.now())
    tabel.timestamp('update_at'), defaulTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('users')

