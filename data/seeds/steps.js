exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('steps').del()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
          { id: 1, step: 'use cooking pan', instructions_id: 1 },
          { id: 2, step: 'mix ingredients', instructions_id: 1 },
          { id: 3, step: 'bake in oven', instructions_id: 1 },
          { id: 4, step: 'eat.', instructions_id: 1 }
        ]);
      });
  };