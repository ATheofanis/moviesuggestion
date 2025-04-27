// Movies array (like your struct array)
let movies = [
  { name: "Die Hard", rating: 8.2, genre: "Action", duration: 132 },
  { name: "Forrest Gump", rating: 8.8, genre: "Drama", duration: 142 },
  { name: "Superbad", rating: 7.6, genre: "Comedy", duration: 113 },
  { name: "Mad Max: Fury Road", rating: 8.1, genre: "Action", duration: 120 },
  { name: "The Godfather", rating: 9.2, genre: "Drama", duration: 175 },
  { name: "The Hangover", rating: 7.7, genre: "Comedy", duration: 100 }
];

let saved = []; // To save favorite movies

// Show movies
function displayMovies(list) {
  let movieList = document.getElementById("movieList");
  movieList.innerHTML = "";
  list.forEach((movie, index) => {
    movieList.innerHTML += `
      <li>
        ${movie.name} (${movie.rating}) - ${movie.genre}, ${movie.duration} min
        <button onclick="saveMovie(${index})">Save ⭐</button>
        <button onclick="removeMovie(${index})">Remove ❌</button>
      </li>
    `;
  });
}

// Filter by rating and duration
function filterMovies() {
  let minRating = parseFloat(document.getElementById("minRating").value) || 0;
  let maxDuration = parseInt(document.getElementById("maxDuration").value) || Infinity;

  let filtered = movies.filter(m => m.rating >= minRating && m.duration <= maxDuration);
  displayMovies(filtered);
}

// Search by name
function searchMovies() {
  let search = document.getElementById("searchInput").value.toLowerCase();
  let filtered = movies.filter(m => m.name.toLowerCase().includes(search));
  displayMovies(filtered);
}

// Save movie to favorites
function saveMovie(index) {
  saved.push(movies[index]);
  updateSaved();
}

// Remove movie from available list
function removeMovie(index) {
  movies.splice(index, 1);
  displayMovies(movies);
}

// Update saved list
function updateSaved() {
  let savedList = document.getElementById("savedMovies");
  savedList.innerHTML = "";
  saved.forEach(movie => {
    savedList.innerHTML += `
      <li>${movie.name} (${movie.rating})</li>
    `;
  });
}

// Initial display
displayMovies(movies);
