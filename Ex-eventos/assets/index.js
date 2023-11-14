
//1
const cuadradito = document.getElementById ('cuadrado1')
const button = document.getElementById ('button')
const div1 = document.getElementById ('ej1')


button.addEventListener ('click', (event) => {
    event.preventDefault()   
    
    if (cuadradito.classList.contains ("grisecito")){
        cuadradito.className = " azulito flex bg-blue-200 w-48 h-48 rounded-md"                   
    }    
    else if (cuadradito.classList.contains ("azulito")){
        cuadradito.className = " rojito flex bg-red-200 w-48 h-48 rounded-md"                         
    }     
    else if (cuadradito.classList.contains ("rojito")){
        cuadradito.className = " rojito flex bg-slate-300 w-48 h-48 rounded-md"        
    }     
    })

    
//2

const cuadradoTexto= document.getElementById ('cuadraditoTexto')
const texto2 = document.getElementById ('texto2')
const boton2= document.getElementById ('boton2')

texto2.addEventListener ('keyup', (event) => { 
    event.preventDefault() 
    const newText = texto2.value
    cuadradoTexto.textContent = newText     
})

boton2.addEventListener ('click', (event) =>{
    texto2.value = " "
    cuadradoTexto.textContent= " "
})


//3

let altura = document.getElementById ('altura')
let peso = document.getElementById('peso')
let resultado = document.getElementById ('resultado')
let boton3 = document.getElementById('boton3')

boton3.addEventListener ('click', (event) => {
    event.preventDefault() 
    const resultado2 = (peso.value / ((altura.value/100)*(altura.value/100)))
    resultado.textContent = resultado2.toFixed(2)       
})

//4

let monedaLocal= document.getElementById ('monedaLocal')
let dolar = document.getElementById ('dolarInput')
const botonConvertir = document.getElementById ('botonConvertir')
const botonBorrar = document.getElementById ('botonBorrar')

botonConvertir.addEventListener ('click', (event) =>{
    event.preventDefault ()
    dolar.value = monedaLocal.value/500    
})

botonBorrar.addEventListener ('click', (event) =>{
    dolar.value= " "
    monedaLocal.value = " "
})


let monedaLocal2= document.getElementById ('monedaLocal2')
let dolar2 = document.getElementById ('dolarInput2')
const botonConvertir2 = document.getElementById ('botonConvertir2')
const botonBorrar2 = document.getElementById ('botonBorrar2')

botonConvertir2.addEventListener ('click', (event) =>{
    event.preventDefault ()
    monedaLocal2.value=dolar2.value*500    
})

botonBorrar2.addEventListener ('click', (event) =>{
    dolar2.value= " "
    monedaLocal2.value = " "
})