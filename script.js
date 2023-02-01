fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a73c6d976944b3cb5444416eee8bd8d1').then((result) => result.json())
.then((result) => {
    const moviesContainer = document.querySelector('#main');
    const movies = result["results"]; // movies array which we got from that api
    // movies = [ { post_Img: "", name : ""}, {} ... 20th]
    console.log(movies);
    movies.forEach(movie => {
        // { poster_path: "dfdfdfdf", name : ""}
        //   duration(runtime), genre,  and a button
        const element = `
        <div data-movie-name="${movie["original_title"]}" data-movie-id="${movie["id"]}" class="movie">
            <img data-movie-id="${movie["id"]}" data-movie-name="${movie["original_title"]}" src="http://image.tmdb.org/t/p/w500${movie["poster_path"]}">
            <div data-movie-id="${movie["id"]}" class="movie-info" data-movie-name="${movie["original_title"]}">
                <h3 data-movie-id="${movie["id"]}" data-movie-name="${movie["original_title"]}">${movie["original_title"]}</h3>
                <span class="green" data-movie-id="${movie["id"]}" data-movie-name="${movie["original_title"]}">${movie["vote_average"]}</span>
            </div>
            <div data-movie-id="${movie["id"]}" data-movie-name="${movie["original_title"]}" class="overview" data-movie-name="${movie["original_title"]}">
                ${movie["overview"]}
            </div>
        </div>
        `
        moviesContainer.insertAdjacentHTML('afterBegin', element);
        // append each move in main container
    })
})

let movieTicketPrice =0;
// const moveDivs = document.querySelectorAll('.movie');
// console.log(moveDivs);
// [...moveDivs].forEach(movieDiv => {
//     movieDiv.addEventListener('click', (e) => {
//         console.log(e.target)
//     })
// })



// serach functionality
// step 1: select the searchform by using 
// step 2: add event listner to the serachform,
// the event name is submit function()
const searchform  = document.querySelector("form");
searchform.addEventListener("submit", function(event){
    event.preventDefault();
    const movieName = document.querySelector("#search").value.trim();
    console.log(movieName);
    // https://api.themoviedb.org/3/movie/{movie_id}

})


// when user click on any move card I have attached a envet listner form which i can get the id of the move 
// in the callback function of the addEventlistner I can write the functionality to show and hide a modal which will contian the 
// infomation about the move 
document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.dataset.movieId != undefined){
        console.log(e.target.dataset.movieId);
        console.log(e.target.dataset.movieName);
        // you have write he html for the popup
        // render that popup in 

        // you will get the id of the movie
        // fetch the move of that id on that endpoint of the api
        // and create the html elemnt using javascript enter that information 
        // and append in the body
        insertModal(e.target.dataset.movieId);
    }
    if(e.target.classList.contains("close-modal")){
        document.querySelector(".movieDetailsContainer").remove();
    }
})

async function insertModal(movieId) {
        const movieData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a73c6d976944b3cb5444416eee8bd8d1`).then(result => result.json())
        console.log(movieData);
        let genere = movieData.genres.map(item => item.name).join(" ");
        movieTicketPrice = Math.floor(Math.random() * 50) + 250
        
        const element = `
        <div class="movieDetailsContainer">
            <div class="movieDetails">  
                <i class="fa-solid fa-xmark close-modal"></i>
                <div class="movie-popup">
                    <img src="http://image.tmdb.org/t/p/w500${movieData["poster_path"]}" alt="">
                    <div class="movie-info">
                        <p class="movie-name">${movieData.title}</p>
                        <p class="movie-rating"><i class="fa-solid fa-star"></i> ${movieData.vote_average} / 10</p>
                        <p class="movie-lang">${movieData.original_language}</p>
                        <p class="movie-duration">${movieData.runtime} min</p>
                        <p class="movie-genere">${genere}</p>
                        <p class="movie-desc">${movieData.overview}</p>
                        <p class="movie-price">${movieTicketPrice} Rs</p>
                        <a href="/checkout.html" class="book-tickets-button">Book Tickests</a>
                    </div>
                </div>
            </div>
        </div>
        `
        document.querySelector("#main").insertAdjacentHTML('beforeEnd', element);
}