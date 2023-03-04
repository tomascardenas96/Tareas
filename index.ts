// Usar los conceptos y recomendaciones vistas 
// durante esta semana y la anterior
// • Armar una base de datos de libros
// • Hacer el planteo de las clases necesarias
// • Implementar la clase Libro
// • Implementar la clase GestorLibros → debe 
// soportar insertar/consultar/modificar/eliminar 
// libros (la entrada de información por teclado)
// • Luego incorporar en donde se crea necesario un 
// mecanismo para leer libros desde un archivo de 
// texto
// • Subir las cosas a GitHub y avisar por Slack

import * as fs from "fs";
let library = [];
try {
    const data = fs.readFileSync("./books.json", "utf8");
    let parsedData = JSON.parse(data);
    library = parsedData.map((item:object[]) => item);
} catch (error) {
    let message:string = "Archivo Json no encontrado";
    fs.writeFileSync("./error", message, "utf8");
}

export default class Libros {
    title:string;
    author:string;
    pages:number;

    constructor (title:string, author:string, pages:number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

export class GestorLibros {
    allBooks(array:Libros[]) {
        array.map((item:Libros) => console.log(item));
    }

    insert(libro:Libros, array:Libros[]) {
        if(libro) {
            array.push(libro);
            console.log(`El libro ${array[array.length - 1].title} ha sido agregado a la base de datos`);
        } else {
            console.log(`El libro no ha podido ser agregado`);
        }
    }

    consult(libro:string, array:Libros[]) {
        let foundBook = array.filter((item) => ((libro).toLowerCase() === (item.title).toLowerCase()));
        if(foundBook.length) {
            console.log(`El libro ${libro} fue encontrado`);
            console.log(foundBook);
            return foundBook;
        } else {
            console.log(`El libro ${libro} NO fue encontrado`);
        }
    }

    modifyName(libro:string, array:Libros[], newData:string) {
        let bookToModify:number = array.findIndex((item) => ((libro).toLowerCase() === (item.title).toLowerCase()));
        if (bookToModify >= 0) {
            array[bookToModify].title = newData;
            console.log(`El nombre del libro ${libro} ha sido modificado por ${newData}`);
        } else {
            console.log(`El libro no se encuentra en la libreria y no puede ser cambiado`);
        }
    }

    delete(libro:string, array:Libros[]) {
        let bookToDelete = array.findIndex((item) => (libro).toLowerCase() === (item.title).toLowerCase())
        if(bookToDelete >= 0) {
            array.splice(bookToDelete, 1);
            console.log(`El libro ${libro} ha sido eliminado de la base de datos.`);
            return array;
        } else {
            console.log(`Libro ${libro} no encontrado`);
            
        }
    }
}
let libroNuevo:Libros = new Libros ("Nombre del libro", "Cualquiera", 300);
let gestor:GestorLibros = new GestorLibros;







