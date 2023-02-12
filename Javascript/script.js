let formulario = document.querySelector('#formulario');

let btnguardar = document.querySelector('#btnguardar');

function redirrecionar()
{
    location.href="index_seed.html";
}

btnguardar.addEventListener("click",(event)=>
{
    if(formulario[0].value =="" && formulario[1].value =="")
    {
        const error=document.getElementById("mensaje");
        error.classList.remove("mensaje-oculto");
        event.preventDefault();
        // console.log("Cochinero"); 
    }
    else
    {
        let error=document.getElementById("mensaje");
        error.classList.add("mensaje-oculto");
        redirrecionar();
    }
});