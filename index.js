"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
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
var fs = require("fs");
var library = [];
try {
    var data = fs.readFileSync("./books.json", "utf8");
    var parsedData = JSON.parse(data);
    library = parsedData.map(function (item) { return item; });
}
catch (error) {
    var message = "Archivo Json no encontrado";
    fs.writeFileSync("./error", message, "utf8");
}
var Libros = /** @class */ (function () {
    function Libros(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    return Libros;
}());
exports["default"] = Libros;
var GestorLibros = /** @class */ (function () {
    function GestorLibros() {
    }
    GestorLibros.prototype.allBooks = function (array) {
        array.map(function (item) { return console.log(item); });
    };
    GestorLibros.prototype.insert = function (libro, array) {
        if (libro) {
            array.push(libro);
            console.log("El libro ".concat(array[array.length - 1].title, " ha sido agregado a la base de datos"));
        }
        else {
            console.log("El libro no ha podido ser agregado");
        }
    };
    GestorLibros.prototype.consult = function (libro, array) {
        var foundBook = array.filter(function (item) { return ((libro).toLowerCase() === (item.title).toLowerCase()); });
        if (foundBook.length) {
            console.log("El libro ".concat(libro, " fue encontrado"));
            console.log(foundBook);
            return foundBook;
        }
        else {
            console.log("El libro ".concat(libro, " NO fue encontrado"));
        }
    };
    GestorLibros.prototype.modifyName = function (libro, array, newData) {
        var bookToModify = array.findIndex(function (item) { return ((libro).toLowerCase() === (item.title).toLowerCase()); });
        if (bookToModify >= 0) {
            array[bookToModify].title = newData;
            console.log("El nombre del libro ".concat(libro, " ha sido modificado por ").concat(newData));
        }
        else {
            console.log("El libro no se encuentra en la libreria y no puede ser cambiado");
        }
    };
    GestorLibros.prototype["delete"] = function (libro, array) {
        var bookToDelete = array.findIndex(function (item) { return (libro).toLowerCase() === (item.title).toLowerCase(); });
        if (bookToDelete >= 0) {
            array.splice(bookToDelete, 1);
            console.log("El libro ".concat(libro, " ha sido eliminado de la base de datos."));
            return array;
        }
        else {
            console.log("Libro ".concat(libro, " no encontrado"));
        }
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
var libroNuevo = new Libros("Nombre del libro", "Cualquiera", 300);
var gestor = new GestorLibros;
