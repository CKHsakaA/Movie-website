const apiKey='b8bd7543a81fae478ca163296e016d40';
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const apiurl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8bd7543a81fae478ca163296e016d40'
const searchapi = 'https://api.themoviedb.org/3/search/movie?&api_key=b8bd7543a81fae478ca163296e016d40&query='

document.addEventListener('DOMContentLoaded', function () { 
    const movieBox = document.querySelector('#movie-box');
    const getMovies = async(api) => {
        const response = await fetch(api);
        const data = await response.json();
        showMovies(data.results);
    };

    const showMovies = async(data) => {
        movieBox.innerHTML="";
        console.log(data);
        data.forEach(
            (item) => {
            console.log(item)
            const box = document.createElement('a');
            box.href='#';
            box.classList.add('box')
            box.innerHTML = `
            <div class="container">
                <div id="overlay">
                    <div id='infocontainer'>
                        <h2 id="movie-title" class="txt">${item.original_title}</h2>
                        <h1 id="rating" class="txt">rating:${item.vote_average}</h1>
                        <h1 id="language" class="txt">lang:${item.original_language}</h1>
                        <p id="overview">${item.overview}</p> 
                    </div>   
                </div>
                <img src="${IMGPATH + item.poster_path}">
            <div>
            
            `;
            movieBox.appendChild(box)

        }); 
    }
    document.querySelector('#search').addEventListener('keyup', function(event){
        console.log(event);
        console.log(event.target.value);
        if(event.target.value != ""){
            getMovies(searchapi + event.target.value);
        } else {
            getMovies(apiurl)
        }
    });
    getMovies(apiurl)

});


   

