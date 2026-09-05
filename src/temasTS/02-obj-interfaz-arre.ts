
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}


const alumno:Alumno={
    nombre:"Sara",
    apellido:"Romano",
    edad:24,
    email:"sara@gmail.com",

}

console.table(alumno)


let mascotas=['perro', 'gato', 'perico']
mascotas[1]='Nuevo gato'
mascotas.push('leon')
console.log(mascotas)

/*ARREGLOS BIDIMENSIONALES, es una arreglo que permite tanto letras como numeros*/
let tem:(number|string)[]=[]
tem.push(11)
tem.push("once")
console.log(tem)


