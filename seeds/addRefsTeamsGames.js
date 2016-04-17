
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('grounds').del(),

    // Inserts seed entries
    knex('grounds').insert({name: "Wakefield Park"}),

    // Deletes ALL existing entries
    knex('fields').del(),

    // Inserts seed entries
    knex('fields').insert({fName: "Field#1", gName: "Wakefield Park"}),
    knex('fields').insert({fName: "Field#2", gName: "Wakefield Park"}),

    // Deletes ALL existing entries
    knex('teams').del(),

    // Inserts seed entries
    knex('teams').insert({name: "INFAMOUS"}),
    knex('teams').insert({name: "Lowkey"}),
    knex('teams').insert({name: "Kickback"}),
    knex('teams').insert({name: "Wizards"}),
    knex('teams').insert({name: "Warriors"}),
    knex('teams').insert({name: "Lakers"}),
    knex('teams').insert({name: "Broncos"}),
    knex('teams').insert({name: "Lions"}),
    knex('teams').insert({name: "Tigers"}),
    knex('teams').insert({name: "Force"}),
    knex('teams').insert({name: "Crusaders"}),
    knex('teams').insert({name: "Hurricanes"}),

    // Deletes ALL existing entries
    knex('games').del(),

    // Inserts seed entries
    knex('games').insert({team1: "Hurricanes", team2: "Crusaders", div: "Mens"}),
    knex('games').insert({team1: "Force", team2: "Tigers", div: "Mens"}),
    knex('games').insert({team1: "INFAMOUS", team2: "Kickback", div: "Mens"}),
    knex('games').insert({team1: "Lions", team2: "Lakers", div: "Mens"}),
    knex('games').insert({team1: "Lowkey", team2: "Wizards", div: "Mens"}),
    knex('games').insert({team1: "Hurricanes", team2: "Tigers", div: "Mixed"}),
    knex('games').insert({team1: "INFAMOUS", team2: "Lakers", div: "Mixed"}),
    knex('games').insert({team1: "Crusaders", team2: "Wizards", div: "Mixed"}),
    knex('games').insert({team1: "Lowkey", team2: "Force", div: "Mixed"}),

    // Deletes ALL existing entries
    knex('refs').del(),

    // Inserts seed entries
    knex('refs').insert({name: "Jo", level: 3}),
    knex('refs').insert({name: "Scully", level: 0}),
    knex('refs').insert({name: "Jimmy", level: 2}),
    knex('refs').insert({name: "Sam", level: 3}),
    knex('refs').insert({name: "Gee", level: 0}),
    knex('refs').insert({name: "Phil", level: 2}),
    knex('refs').insert({name: "Des", level: 3})
  );
};
