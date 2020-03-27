export function seed(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {id: 1, username: 'Drew', password: "test123"},
          {id: 2, username: 'Vanessa', password: "test123"},
          {id: 3, username: 'Andy', password: "test123"}
        ]);
      });
  }