class Film {
	constructor() { // ['Drama', 'Romantic']
		this.id = 0;
		this.title = '';
		this.director = '';
		this.releaseYear = 0;
		this.genres = [];
	}
	
	addGenre(genre) {
		// this.genres isArray ? 
		//this.genres.push(genre)
		this.genres = [...this.genres, genre];
	}
	
	getFilmTitle() {
		return `Film: ${this.title}`
	}
}

const myFavouriteFilm = new Film(1, "Rear Window", "Afred Hitchcock", "1954");
console.log(myFavouriteFilm.director)
myFavouriteFilm.addGenre("Thriller");
console.log(myFavouriteFilm.genres)
console.log(myFavouriteFilm.getFilmTitle());
