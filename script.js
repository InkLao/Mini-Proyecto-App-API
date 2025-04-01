        
let boton = document.getElementById("btn_consultar");

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