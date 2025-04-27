const movies = [
    { name: "Die Hard", rating: 8.2, genre: "Action", duration: 132 },
    { name: "Forrest Gump", rating: 8.8, genre: "Drama", duration: 142 },
    { name: "Superbad", rating: 7.6, genre: "Comedy", duration: 113 },
    { name: "Mad Max: Fury Road", rating: 8.1, genre: "Action", duration: 120 },
    { name: "The Godfather", rating: 9.2, genre: "Drama", duration: 175 },
    { name: "The Hangover", rating: 7.7, genre: "Comedy", duration: 100 }
];

const movieList = document.getElementById('movieList');
const favoritesList = document.getElementById('favoritesList');

function displayMovies(moviesToDisplay) {
    movieList.innerHTML = '';

    moviesToDisplay.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';

        card.innerHTML = `
            <h3>${movie.name}</h3>
            <p>Rating: ${movie.rating}</p>
            <p>Genre: ${movie.genre}</p>
            <p>Duration: ${movie.duration} min</p>
            <button onclick="addToFavorites('${movie.name}')">Add to Favorites</button>
        `;

        movieList.appendChild(card);
    });
}

function showRandomMovie() {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    displayMovies([randomMovie]);
}

function filterMovies(minRating) {
    const filtered = movies.filter(movie => movie.rating >= minRating);
    displayMovies(filtered);
}

function addToFavorites(movieName) {
    const li = document.createElement('li');
    li.textContent = movieName;
    favoritesList.appendChild(li);
}

// Show all movies when page loads
displayMovies(movies);
