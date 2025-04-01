        
let boton = document.getElementById("btn_consultar");

boton.onclick = async function(){
 
            let query = document.getElementById("txtBuscar").value;
            let response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
            let data = await response.json();
            let resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";
            
            if (data.docs.length === 0) {
                resultsDiv.innerHTML = "<p>No se encontraron libros</p>";
                return;
            }
            
            data.docs.slice(0, 5).forEach(book => {
                let coverID = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150';
                resultsDiv.innerHTML += `
                    <div class="book">
                        <img src="${coverID}" alt="Portada del libro">
                        <h3>${book.title}</h3>
                        <p><strong>Autor:</strong> ${book.author_name ? book.author_name.join(", ") : "Desconocido"}</p>
                    </div>
                `;
            });
        }

        