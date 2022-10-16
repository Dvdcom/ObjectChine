/* Declarar una clase */
class Animales {
    constructor(dueña, nombre, raza, edad, actividades, comida, visitaAlVete, vacunas) {
        this.dueña = dueña;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.actividades = actividades;
        this.comida = comida;
        this.visitaAlVete = visitaAlVete;
        this.vacunas = vacunas;
    };

    /* Metodos geter and setters */

    get verInfoAnimal() {
        return `El animal es de raza ${this.raza}, su nombre es ${this.nombre}`;
    }

    set capup(edadCumplida) {
        this.vivo = edadCumplida;
    }
}

let gato = new Animales("LaProfe", "China", "pixie bob", 4, "En sus ratos libres rompe displays y funde discos.", "Salmon, sushi, y mucho pescado", 2, "Todas");

/* Por consola cumplo con la consigna solicitada */
console.log(gato);

/* Creo un objetoChina con el solo motivo : de evitar el uso de switch o similares, para poder darle ORDEN a los items de lista y mostrar una lista modificada a mi gusto*/
let ObjetoChina = [
    { Detalle: "Dueña: ", valor: gato['dueña'] },
    { Detalle: "Raza : ", valor: gato['raza'] },
    { Detalle: "Edad : ", valor: gato['edad'] + " años y 7 vidas" },
    { Detalle: "Vacunas : ", valor: gato['vacunas'] },
    { Detalle: "Comida : ", valor: gato['comida'] },
    { Detalle: "Visitas al Veterinario : ", valor: gato['visitaAlVete'] + " vez por semana" },
    { Detalle: "Actividades : ", valor: gato['actividades'] }
];

const carta1 = document.querySelector('.uno');
const carta2 = document.querySelector('.dos');

/* FUNCION AGREGADA :
muestra el card 2 y oculta el card 1 , cuando muestra el segundo card lo llena con el objeto china */
function MostrarChina(){
    carta1.classList.add('d-none')
    carta2.classList.remove('d-none');
    document.querySelector('.name').textContent = gato.nombre;

    for (let i = 0; i < 7; i++) {
        let item = document.createElement('li');
        item.innerHTML = ObjetoChina[i].Detalle + ObjetoChina[i].valor;
        document.querySelector('.descripcion').appendChild(item);
        
    };
}

/* FUNCION AGREGADA : 
Oculta el card 2 y muestra el card 1, cuando ocultar el car dos , elimina la informacion creada por la funcion MostrarChina */
function OcultarChina(){
    carta2.classList.add('d-none')
    carta1.classList.remove('d-none');
    document.querySelector('.name').textContent = '';
    let items = document.querySelectorAll('li');
    items.forEach(element => {
        element.parentNode.removeChild(element);
    });
}