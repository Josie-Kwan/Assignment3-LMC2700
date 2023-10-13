let allMovies = [];

class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

function addMovie(movie) {
    allMovies.push(movie);
    addMovieToPage(movie);
}

function printMovies() {
    let output = document.getElementById("output");
    let moviesHeader = document.createElement("div");
    moviesHeader.innerHTML = "Printing all movies....";
    output.appendChild(moviesHeader);
    for (let movie of allMovies) {
        displayMovieInfo(movie);
    }
    let totalMovies = document.createElement("div");
    totalMovies.innerHTML = "<br>You have " + allMovies.length + " movies in total<br><b>----------------";
    output.appendChild(totalMovies);
}

function highRatings(rating) {
    let highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    printHighRatedMoviesToPage(rating, highRatedMovies);
}

function changeWatched(title) {
    for (let movie of allMovies) {
        if (movie.title === title) {
            movie.haveWatched = !movie.haveWatched;
            changeWatchedStatusToPage(title, movie.haveWatched);
        }
    }
}

function displayMovieInfo(movie) {
    let output = document.getElementById("output");
    let movieInfo = document.createElement("div");
    // Customize the CSS class based on the movie title
    let titleClass = getTitleClass(movie.title);
    movieInfo.innerHTML = `<span class="${titleClass}">${movie.title}</span>, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`;
    output.appendChild(movieInfo);
}

// Function to determine the CSS class for a given title
function getTitleClass(title) {
    switch (title) {
        case "Spiderman":
            return "spiderman-title";
        case "Citizen Kane":
            return "kane-title";
        case "Zootopia":
            return "zootopia-title";
        case "Parasite":
            return "parasite-title";
        default:
            return "default-title";
    }
}

function addMovieToPage(movie) {
    let output = document.getElementById("output");
    let newMovie = document.createElement("div");
    newMovie.innerHTML = "A new movie is added<br><b>----------------";
    output.appendChild(newMovie);
}

function changeWatchedStatusToPage(title, watched) {
    let output = document.getElementById("output");
    let statusChange = document.createElement("div");
    statusChange.innerHTML = "changing the status of the movie...<br><b>----------------";
    output.appendChild(statusChange);
}

function printHighRatedMoviesToPage(rating, highRatedMovies) {
    let output = document.getElementById("output");
    let ratingInfo = document.createElement("div");
    ratingInfo.innerHTML = "Printing movies with a rating higher than " + rating;
    output.appendChild(ratingInfo);
    for (let movie of highRatedMovies) {
        displayMovieInfo(movie);
    }
    let totalMatches = document.createElement("div");
    totalMatches.innerHTML = "<br>In total, there are " + highRatedMovies.length + " matches";
    output.appendChild(totalMatches);
}

let start = () => {
    let runningProgram = document.createElement("div");
    runningProgram.innerHTML = "<b>----------------</b><br>running program......<br><b>----------------";
    output.appendChild(runningProgram);
}

// Test code
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

// Initialize the webpage
window.onload = function () {
    console.log("Page loaded."); // Check if the page is loaded
    start(); //this displays to the user that the program is running
    printMovies();

    let movie1 = new Movie("Parasite", 2, false);
    addMovie(movie1);
    changeWatched("Spiderman");
    printMovies();

    changeWatched("Spiderman");
    printMovies();

    highRatings(3.5);
};
