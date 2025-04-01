        
let boton = document.getElementById("btn_consultar");


const genres = [
    "fiction", "mystery", "fantasy", "horror", "romance",
    "science_fiction", "history", "biography", "philosophy",
    "psychology", "self_help", "science", "technology", 
    "art", "music", "poetry", "drama", "business", "health"
];



boton.onclick = function(){
 
    let busqueda = document.getElementById("txtBuscar").value;
    fetch(`https://openlibrary.org/search.json?q=${busqueda}`)
    .then(response => response.json())
    .then(data => {
        let resultsDiv = document.getElementById("results");

        resultsDiv.innerHTML = ""; // Limpiar resultados previos
        data.docs.slice(0, 5).forEach(book => {

            let coverID = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : './imagenNoDisponible.jpg';

            let title = book.title || "Título desconocido";
            let author = book.author_name ? book.author_name.join(", ") : "Desconocido";
            let publishYear = book.first_publish_year || "Desconocido";

            resultsDiv.innerHTML += `
                <div class="book">
                    <img src="${coverID}" alt="Portada del libro">
                    <div class="book-info">
                        <h3>${title}</h3>
                        <p><strong>Autor:</strong> ${author}</p>
                        <p><strong>Año de publicación:</strong> ${publishYear}</p>

                    </div>
                </div>
            `;
        });
    })

} 


function randomBooks(){

    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const url = `https://openlibrary.org/subjects/${randomGenre}.json?limit=50`;
    console.log(randomGenre);

    

    fetch(url).then(response => response.json())
                .then(data =>{
                    
            data.works.slice(0, 1).forEach((book, index) => {
                console.log(index);
            let coverID = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : './imagenNoDisponible.jpg';


            let title = book.title || "Título desconocido";
      let autorr = book.author_name && book.author_name.length > 0 ? book.author_name.join(", ") : "Desconocido";
      console.log(autorr);
            let publishYear = book.first_publish_year || "Desconocido";

            let titulo1 = document.getElementById(`titulo${index + 1}`);
            let aut = document.getElementById("autor1");
            let año1 = document.getElementById(`año${index + 1}`);
            let imagen1 = document.getElementById(`imagen${index + 1}`);
            
            console.log(title);


            titulo1.innerHTML =  title ;
            aut.innerHTML = "Autor: " + autorr;
            año1.innerHTML = "Año : " + publishYear;
            imagen1.src = coverID;


        });


        })
}

randomBooks();