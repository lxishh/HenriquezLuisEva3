console.log("Test")

window.addEventListener("load", ()=>{
    document.getElementById("btnContraste").addEventListener("click", contraste);
    // document.getElementById("btnFuente").addEventListener("click", fuente);
})

const contraste = ()=>{
    let eContraste = document.body.className
    console.log(eContraste)
}



