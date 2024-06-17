import React from 'react';
import NavBar from '../components/NavBar';

const directors = [
  {
    name: 'Steven Spielberg',
    movies: ['Jaws', 'E.T. the Extra-Terrestrial', 'Jurassic Park', 'Schindler\'s List', 'Saving Private Ryan'],
  },
  {
    name: 'Christopher Nolan',
    movies: ['Memento', 'The Dark Knight', 'Inception', 'Interstellar', 'Dunkirk'],
  },
  {
    name: 'Martin Scorsese',
    movies: ['Taxi Driver', 'Raging Bull', 'Goodfellas', 'The Departed', 'The Irishman'],
  },
  {
    name: 'Quentin Tarantino',
    movies: ['Reservoir Dogs', 'Pulp Fiction', 'Kill Bill: Vol. 1', 'Inglourious Basterds', 'Django Unchained'],
  },
  {
    name: 'Alfred Hitchcock',
    movies: ['Psycho', 'Vertigo', 'Rear Window', 'North by Northwest', 'The Birds'],
  },
  {
    name: 'James Cameron',
    movies: ['The Terminator', 'Aliens', 'Titanic', 'Avatar', 'Terminator 2: Judgment Day'],
  },
  {
    name: 'Stanley Kubrick',
    movies: ['2001: A Space Odyssey', 'A Clockwork Orange', 'The Shining', 'Full Metal Jacket', 'Dr. Strangelove'],
  },
  {
    name: 'Ridley Scott',
    movies: ['Alien', 'Blade Runner', 'Gladiator', 'The Martian', 'Black Hawk Down'],
  },
  {
    name: 'Peter Jackson',
    movies: ['The Lord of the Rings: The Fellowship of the Ring', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'King Kong', 'The Hobbit: An Unexpected Journey'],
  },
  {
    name: 'Francis Ford Coppola',
    movies: ['The Godfather', 'The Godfather Part II', 'Apocalypse Now', 'The Conversation', 'The Outsiders'],
  },
];


function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
