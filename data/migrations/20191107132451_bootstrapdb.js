
exports.up = function(knex) {
    return knex.schema.createTable('species', tbl => {
        // The type of the Primary Key is: integer without negative values, also called unsigned 
        tbl.increments(); 

        tbl.string('name', 255).notNullable();
    })
    .createTable('animals', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
        
        // Define our Foreign Keys
        tbl
            .integer('species_id')
            .unsigned()
            .references('id')
            .inTable('species')
            .onDelete('RESTRICT') // This property is about deleting the record form the primary key table. Could be `RESTRICT`, `NO ACTION`, `SET NULL`, or `CASCADE`
            .onUpdate('CASCADE') // This property is about changing the value of the primary key

        // We Have bears and a few animals that are bears.
    })
    .createTable('zoos', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable()
        tbl.string('address', 255)
    })
    .createTable('animal_zoos', tbl => {
        tbl.increments();

        tbl.date('from')
        tbl.date('to')

        // Foreign Keys
        tbl
            .integer('zoo_id')
            .unsigned()
            .references('id')
            .inTable('zoos')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl
            .integer('animal_id')
            .unsigned()
            .references('id')
            .inTable('animals')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('animal_zoos')
        .dropTableIfExists('zoos')
        .dropTableIfExists('animals')
        .dropTableIfExists('species');
};
