fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a73c6d976944b3cb5444416eee8bd8d1').then((result) => result.json())
.then((result) => {
    const moviesContainer = document.querySelector('#main');
    const movies = result["results"]; // movies array which we got from that api
    // movies = [ { post_Img: "", name : ""}, {} ... 20th]
    console.log(movies);
    movies.forEach(movie => {
        // { poster_path: "dfdfdfdf", name : ""}
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


// const moveDivs = document.querySelectorAll('.movie');
// console.log(moveDivs);
// [...moveDivs].forEach(movieDiv => {
//     movieDiv.addEventListener('click', (e) => {
//         console.log(e.target)
//     })
// })

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.dataset.movieId != undefined){
        console.log(e.target.dataset.movieId);
        console.log(e.target.dataset.movieName);
        // you have write he html for the popup
        // render that popup in 
    }
})
// fetch('google.com').then((result) => {})


// div => click 

// .5s


