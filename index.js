const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd856fd4a3mshb3f62c3cf2b2bbap1e82edjsnb26555d8c450',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

document.addEventListener("DOMContentLoaded", function() { 
    let movieContainer = document.querySelector(".movieContainer")
    function renderMovies(movieArray) {
       let movieHTML = movieArray.map((currentMovie)=>{
            return `<div class="col-4 results">
                        <div class="card">
                            <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${currentMovie.Title}</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="https://www.youtube.com/watch?v=mE35XQFxbeo" class="btn btn-primary">Watch Trailer</a>  
                            </div>
                        </div>
                                
                    </div>`

        }) 

    return movieHTML.join("")
    } 
    movieContainer.innerHTML = renderMovies(movieData)

 });



//  <div class="col-4 results">

// 				<!-- MOVIES SHOW UP HERE! -->
// 				<div class="card">
// 					<img src="" class="card-img-top" alt="...">
// 					<div class="card-body">
// 						<h5 class="card-title">Card title</h5>
// 						<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// 						<a href="https://www.youtube.com/watch?v=mE35XQFxbeo" class="btn btn-primary">Watch Trailer</a>  
// 					</div>
// 				</div>
						
// 			</div>


