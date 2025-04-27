const movies = [
    { name: "Die Hard", rating: 8.2, genre: "Action", duration: 132 },
    { name: "Forrest Gump", rating: 8.8, genre: "Drama", duration: 142 },
    { name: "Superbad", rating: 7.6, genre: "Comedy", duration: 113 },
    { name: "Mad Max: Fury Road", rating: 8.1, genre: "Action", duration: 120 },
    { name: "The Godfather", rating: 9.2, genre: "Drama", duration: 175 },
    { name: "The Hangover", rating: 7.7, genre: "Comedy", duration: 100 },
    { name: "Inception", rating: 8.8, genre: "Sci-Fi", duration: 148 },
    { name: "Pulp Fiction", rating: 8.9, genre: "Crime", duration: 154 },
    { name: "The Dark Knight", rating: 9.0, genre: "Action", duration: 152 },
    { name: "Fight Club", rating: 8.8, genre: "Drama", duration: 139 },
    { name: "The Shawshank Redemption", rating: 9.3, genre: "Drama", duration: 142 },
    { name: "Interstellar", rating: 8.6, genre: "Sci-Fi", duration: 169 },
    { name: "The Matrix", rating: 8.7, genre: "Sci-Fi", duration: 136 },
    { name: "Parasite", rating: 8.6, genre: "Thriller", duration: 132 },
    { name: "Whiplash", rating: 8.5, genre: "Drama", duration: 106 },
    { name: "John Wick", rating: 7.4, genre: "Action", duration: 101 },
    { name: "Toy Story", rating: 8.3, genre: "Animation", duration: 81 },
    { name: "Get Out", rating: 7.7, genre: "Horror", duration: 104 },
    { name: "The Social Network", rating: 7.7, genre: "Biography", duration: 120 },
    { name: "La La Land", rating: 8.0, genre: "Musical", duration: 128 },
    { name: "Avengers: Endgame", rating: 8.4, genre: "Action", duration: 181 },
    { name: "Joker", rating: 8.4, genre: "Crime", duration: 122 },
    { name: "The Grand Budapest Hotel", rating: 8.1, genre: "Comedy", duration: 99 },
    { name: "Gravity", rating: 7.7, genre: "Sci-Fi", duration: 91 },
    { name: "Black Panther", rating: 7.3, genre: "Action", duration: 134 },
    { name: "The Wolf of Wall Street", rating: 8.2, genre: "Biography", duration: 180 }
];

const movieList = document.getElementById('movieList');
const favoritesList = document.getElementById('favoritesList');
const genreButtons = document.getElementById('genreButtons');

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

function showGenres() {
    genreButtons.innerHTML = '';

    const uniqueGenres = [...new Set(movies.map(m => m.genre))];

    uniqueGenres.forEach(genre => {
        const btn = document.createElement('button');
        btn.innerText = genre;
        btn.onclick = () => {
            const filteredByGenre = movies.filter(m => m.genre === genre);
            displayMovies(filteredByGenre);
        };
        genreButtons.appendChild(btn);
    });
}

function addToFavorites(movieName) {
    const li = document.createElement('li');
    li.textContent = movieName;
    favoritesList.appendChild(li);
}

// Show all movies when page loads
displayMovies(movies);
