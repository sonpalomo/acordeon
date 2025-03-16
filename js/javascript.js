
const bloques = document.querySelectorAll(".bloque");
const h2     = document.querySelectorAll(".h2");

//Cuando CLICK en h2,
  //QUITAR la clase activo de todos los bloques
  //Vamos a añadir la clase activo al bloque con la posición del h2

h2.forEach( ( cadaH2 , i )=>{
    cadaH2.addEventListener("click", ()=> {

        bloques.forEach( (cadaBloque , i ) => {
            cadaBloque.classList.remove("activo");
        });
            bloques[i].classList.add("activo");
    });
});





