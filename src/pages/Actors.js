import React from 'react';
import NavBar from '../components/NavBar';

const actors = [
  {
    name: 'Leonardo DiCaprio',
    movies: ['Inception', 'The Revenant', 'Titanic', 'The Wolf of Wall Street', 'Shutter Island'],
  },
  {
    name: 'Robert De Niro',
    movies: ['Taxi Driver', 'Raging Bull', 'Goodfellas', 'The Godfather Part II', 'The Irishman'],
  },
  {
    name: 'Tom Hanks',
    movies: ['Saving Private Ryan', 'Forrest Gump', 'Cast Away', 'The Green Mile', 'Apollo 13'],
  },
  {
    name: 'Morgan Freeman',
    movies: ['The Shawshank Redemption', 'Se7en', 'Bruce Almighty', 'Driving Miss Daisy', 'Million Dollar Baby'],
  },
  {
    name: 'Cate Blanchett',
    movies: ['The Lord of the Rings: The Fellowship of the Ring', 'The Aviator', 'Carol', 'Blue Jasmine', 'Thor: Ragnarok'],
  },
  {
    name: 'Samuel L. Jackson',
    movies: ['Pulp Fiction', 'Jurassic Park', 'The Avengers', 'Django Unchained', 'Unbreakable'],
  },
  {
    name: 'Johnny Depp',
    movies: ['Pirates of the Caribbean: The Curse of the Black Pearl', 'Edward Scissorhands', 'Alice in Wonderland', 'Charlie and the Chocolate Factory', 'Sweeney Todd'],
  },
  {
    name: 'Scarlett Johansson',
    movies: ['Lost in Translation', 'The Avengers', 'Lucy', 'Marriage Story', 'Jojo Rabbit'],
  },
  {
    name: 'Brad Pitt',
    movies: ['Fight Club', 'Inglourious Basterds', 'The Curious Case of Benjamin Button', 'Seven', 'Once Upon a Time in Hollywood'],
  },
];

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
