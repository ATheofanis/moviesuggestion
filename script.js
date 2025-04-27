const movies = [
    // Top Rated (9.0+)
    { name: "The Shawshank Redemption", rating: 9.3, genre: "Drama", duration: 142 },
    { name: "The Godfather", rating: 9.2, genre: "Crime", duration: 175 },
    { name: "The Dark Knight", rating: 9.0, genre: "Action", duration: 152 },
    
    // 8.0-8.9
    { name: "Pulp Fiction", rating: 8.9, genre: "Crime", duration: 154 },
    { name: "Fight Club", rating: 8.8, genre: "Drama", duration: 139 },
    { name: "Forrest Gump", rating: 8.8, genre: "Drama", duration: 142 },
    { name: "Inception", rating: 8.8, genre: "Sci-Fi", duration: 148 },
    { name: "The Matrix", rating: 8.7, genre: "Sci-Fi", duration: 136 },
    { name: "Parasite", rating: 8.6, genre: "Thriller", duration: 132 },
    { name: "Interstellar", rating: 8.6, genre: "Sci-Fi", duration: 169 },
    { name: "Whiplash", rating: 8.5, genre: "Drama", duration: 106 },
    { name: "Avengers: Endgame", rating: 8.4, genre: "Action", duration: 181 },
    { name: "Joker", rating: 8.4, genre: "Crime", duration: 122 },
    { name: "Die Hard", rating: 8.2, genre: "Action", duration: 132 },
    { name: "The Wolf of Wall Street", rating: 8.2, genre: "Biography", duration: 180 },
    { name: "Mad Max: Fury Road", rating: 8.1, genre: "Action", duration: 120 },
    { name: "The Grand Budapest Hotel", rating: 8.1, genre: "Comedy", duration: 99 },
    { name: "Toy Story", rating: 8.3, genre: "Animation", duration: 81 },
    { name: "La La Land", rating: 8.0, genre: "Musical", duration: 128 },
    
    // 7.0-7.9
    { name: "The Hangover", rating: 7.7, genre: "Comedy", duration: 100 },
    { name: "Get Out", rating: 7.7, genre: "Horror", duration: 104 },
    { name: "The Social Network", rating: 7.7, genre: "Biography", duration: 120 },
    { name: "Superbad", rating: 7.6, genre: "Comedy", duration: 113 },
    { name: "John Wick", rating: 7.4, genre: "Action", duration: 101 },
    { name: "Black Panther", rating: 7.3, genre: "Action", duration: 134 },
    { name: "Gravity", rating: 7.7, genre: "Sci-Fi", duration: 91 },
    { name: "Jurassic Park", rating: 7.9, genre: "Adventure", duration: 127 },
    { name: "The Conjuring", rating: 7.5, genre: "Horror", duration: 112 },
    { name: "Mission: Impossible - Fallout", rating: 7.7, genre: "Action", duration: 147 },
    
    // 6.0-6.9
    { name: "Venom", rating: 6.6, genre: "Action", duration: 112 },
    { name: "Transformers", rating: 6.7, genre: "Action", duration: 144 },
    { name: "Fast & Furious 6", rating: 6.5, genre: "Action", duration: 130 },
    { name: "The Meg", rating: 6.1, genre: "Action", duration: 113 },
    { name: "Jumanji: Welcome to the Jungle", rating: 6.9, genre: "Adventure", duration: 119 },
    { name: "Aquaman", rating: 6.8, genre: "Action", duration: 143 },
    { name: "The Nun", rating: 6.3, genre: "Horror", duration: 96 },
    { name: "Baywatch", rating: 6.1, genre: "Comedy", duration: 116 },
    { name: "Fantastic Beasts", rating: 6.5, genre: "Adventure", duration: 133 },
    
    // 5.0-5.9
    { name: "The Room", rating: 5.3, genre: "Drama", duration: 99 }, // Cult classic "so bad it's good"
    { name: "Catwoman", rating: 5.4, genre: "Action", duration: 104 },
    { name: "Jack and Jill", rating: 5.3, genre: "Comedy", duration: 91 },
    { name: "Fifty Shades of Grey", rating: 5.2, genre: "Romance", duration: 125 },
    { name: "The Emoji Movie", rating: 5.2, genre: "Animation", duration: 86 },
    { name: "Battlefield Earth", rating: 5.0, genre: "Sci-Fi", duration: 118 },
    { name: "Movie 43", rating: 5.3, genre: "Comedy", duration: 94 },
    { name: "Gigli", rating: 5.0, genre: "Romance", duration: 121 },
    { name: "Dragonball Evolution", rating: 5.0, genre: "Action", duration: 85 },
    { name: "Twilight: Breaking Dawn Part 2", rating: 5.5, genre: "Fantasy", duration: 115 }
];

const movieList = document.getElementById('movieList');
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
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!favorites.includes(movieName)) {
        favorites.push(movieName);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${movieName} added to favorites!`);
    } else {
        alert(`${movieName} is already in favorites!`);
    }
}

function searchMovies() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(query));
    displayMovies(filteredMovies);
}

function goToFavoritesPage() {
    window.location.href = "favorites.html";
}

// Show all movies initially
displayMovies(movies);
