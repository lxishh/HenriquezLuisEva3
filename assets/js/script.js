console.log("Test")

// Se agregar un LISTENER el cual espera a que CARGUE la pagina para posteriormente ejecutar lo que encuentre dentro de las llaves de la funcion flecha ( ()=> )
    //se SELECIONA el BOTON de CONTRASTE a traves de su ID y se le asigna un listener el cual al hacer click se ejecuta la funcion "contraste"
window.addEventListener("load", ()=>{
    document.getElementById("btnContraste").addEventListener("click", contraste);
    document.getElementById("btnFuente").addEventListener("click", fuente);
})

// se crea la FUNCION "contraste"
// se declara la variable "CUERPO" en la cual se obtiene el body a traves de su ID.
//va alterando la clase del BODY entre "modo-claro" y "modo-oscuro".
function contraste(){
    var cuerpo = document.getElementById("idBody");
    cuerpo.classList.toggle("modo-claro")
    cuerpo.classList.toggle("modo-oscuro")
}


function fuente(){
    document.body.classList.toggle("fontsize");
}