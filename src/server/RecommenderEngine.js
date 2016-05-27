'use strict'
const sql = require('sqlite3').verbose();

let dbFile = './songs.db';
let testFile = './test.sqlite';

// Connect the sqllite module to the DB file
let db = new sql.Database(dbFile);

// DB Queries
const selectAll = "select name from sqlite_master where type='table'";
const selectSongs = "select * from songs"
const artists = "select * from songs where artist_name='The Prodigy'"

const genreList = [
  'jazz',
  'house',
  'metal',
  'rap',
  'rock',
  'country',
  'rnb',
  'classic',
  'latin'
];

const artistNames = [

];

class RecommendationEngine {
  constructor() {

  }

  find_songs_from_same_artist(artist, number_of_recommendations) {

    let artists_query = `select * from songs where artist_name='${artist}'`

    db.serialize(() => {
      db.all(artists_query, (err, row) => {
        if(err) {
          console.log(err);
        } else {
          let number_of_results = row.length;

          console.log(row);

          console.log(row.length);
        }
      })
    })

  }

  // Returns just song title and artist name
  display_data_for_music_player(data) {

  }
}

let re = new RecommendationEngine();
re.find_songs_from_same_artist("Michael Jackson")
