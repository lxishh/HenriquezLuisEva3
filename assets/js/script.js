console.log("Test")

// Se agregar un LISTENER el cual espera a que CARGUE la pagina para posteriormente ejecutar lo que encuentre dentro de las llaves de la funcion flecha ( ()=> )
    //se SELECIONA el BOTON de CONTRASTE a traves de su ID y se le asigna un listener el cual al hacer click se ejecuta la funcion "contraste"
window.addEventListener("load", ()=>{
    document.getElementById("btnContraste").addEventListener("click", contraste);
    document.getElementById("btnFuente").addEventListener("click", fuente);
    document.getElementById("btnRegistrar").addEventListener("click", validar);
})


// A continuacion se aplica la inclusividad:

// se crea la FUNCION "contraste"
// se declara la variable "CUERPO" en la cual se obtiene el body a traves de su ID.
//va alterando la clase del BODY entre "modo-claro" y "modo-oscuro".
function contraste(){
    var cuerpo = document.getElementById("idBody");
    cuerpo.classList.toggle("modo-claro")
    cuerpo.classList.toggle("modo-oscuro")
}

//simplemente se le agrega "fontsize" a la clase del BODY.
function fuente(){
    document.body.classList.toggle("fontsize");
}


//validacion de errores y alerta de errores

//esta funcion sirve para juntar las distintas funciones de validacion que se creen
function validar(){
    validarVacio('nombre')
    validarVacio('correo')
    validarVacio('contraseña')
    validarLongitud('telefono', 9)
    validarTerminos('terminos')

}

//se guarda el elemento/campo en la variable eNombre
//se guarda el valor (lo que haya escrito) de ese campo, en la variable vNombre
// se comprueba si el campo esta vacio, comparandolo con un string vacio. 
//  ".trim()" elimina los espacios en blanco.
// en caso de que este vacio:
// se le cambia la propiedad del display a la clase 'NoDsiplay" y pasa a ser block,
// por lo tanto nos muestra un parrafo especificandonos el error.
function validarVacio(Campo){
    let eNombre = document.getElementById(Campo);
    let vNombre = eNombre.value;

    if(vNombre.trim()==""){
        eNombre.style.borderColor = "red";
        let pNombre = document.getElementById("p"+Campo);
        pNombre.style.display = "block";
    }else{
        eNombre.style.borderColor = "green";
        let pNombre = document.getElementById("p"+Campo);
        pNombre.style.display = "none";
    }
}


//esta funcion guarda el valor(input) del campo seleccionado
// luego con length obtenemos la longitud o el numero de caracteres que tiene ese valor
// ese ese valor se compara, si es distinto al largo que le especificamos, se ejecutara lo que esta dentro del if
// el if lo que hace es poner los bordes de color y mostrar/quitar el parrafo que indica el error. 
function validarLongitud(Campo, largo){
    let elemento = document.getElementById(Campo);
    let valor = elemento.value

    if (valor.length != largo){
        elemento.style.borderColor="red";
        let pNombre = document.getElementById("p"+Campo);
        pNombre.style.display = "block";
    }else{
        elemento.style.borderColor = "green";
        let pNombre = document.getElementById("p"+Campo);
        pNombre.style.display = "none";
    }
}

//se verifica que el checkbox de los terminos y condicionesse encuentre marcado
// de no ser asi, muestra una alerta por pantalla diciendo que debe aceptarlos.
function validarTerminos(Campo){
    let eNombre = document.getElementById(Campo);

    if(!eNombre.checked){
        alert('Debe aceptar los terminos y condiciones.')
    }
}