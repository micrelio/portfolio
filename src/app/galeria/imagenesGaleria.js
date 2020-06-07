//import { hello } from './module.js';


class miImagenes extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
    <!--
     <img src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg" alt="">
     -->  
     <section id="repertorio" class="repertorio">
  </section>
  `;

        // var elementos = document.querySelector('#repertorio');
        // elementos.addEventListener('click', function(e) {

        //     console.log(e.target.value)
        //     if (e.target !== this) {
        //         // Código que se ejecuta al hacer click.
        //         console.log(e.target.value);
        //         var valor = e.target.value;
        //         cargar(valor);
        //     }
        // });

        // var elementos = document.querySelector('#repertorio');
        // elementos.addEventListener('click', function(e) {

        //     console.log(e.target.value)
        //     if (e.target !== this) {
        //         // Código que se ejecuta al hacer click.
        //         console.log(e.target.value);
        //         var valor = e.target.value;
        //         cargar(valor);
        //     }
        // });

    }
}
customElements.define('mi-imagenes', miImagenes);

function cargaTodo() {
    // //---Numero de valores que contiene cada objeto
    // console.log(Object.values(imagenes));
    // //---Claves del objeto
    // console.log(Object.keys(imagenes));
    // //---devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
    // console.log(Object.entries(imagenes));
    // //---Si es numerable devuelve true de lo contrario false
    // console.log(Object.prototype.propertyIsEnumerable(imagenes));
    // //---crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
    // console.log(Object.create(imagenes));
    // //---devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado.
    // console.log(Object.getOwnPropertyNames(imagenes));
    // //---
    // console.log(Object.entries(imagenes));
    // //--- A pelo
    // console.log(imagenes);
    // //---Entrar en un dato en concreto del objeto
    // console.log(imagenes.Logos);
    // //--------------------------------------------------------------------------------

    // //console.log('objeto vacio', onLine);

    //---imagenes en imagenes------------------------
    var llaves = Object.keys(Galeria);
    console.log(llaves)
        //---Leemos las claves
    for (let index = 0; index < llaves.length; index++) {
        const tipo = llaves[index];
        const dato = Galeria[tipo];
        var div = document.createElement('div');
        var hr = document.createElement('hr');
        var titulo = document.createElement('button');
        titulo.addEventListener("click", function() {
            cargar(tipo);
        });
        //---CREAMOS UN TEXTO---
        var t = document.createTextNode(tipo);
        titulo.setAttribute("class", "title");
        titulo.setAttribute("id", "i");
        titulo.setAttribute("value", tipo);
        div.setAttribute("id", tipo);

        div.setAttribute("class", "fila");
        hr.setAttribute("class", "raya");

        document.getElementById('repertorio').appendChild(titulo);
        titulo.appendChild(t);
        document.getElementById('repertorio').appendChild(hr);
        document.getElementById("repertorio").appendChild(div);
        //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
        for (let index2 = 0; index2 < dato.length; index2++) {
            var img = document.createElement('img');
            var path = dato[index2];
            img.addEventListener("click", function() {
                cargar2(tipo, index2);
            });
            img.setAttribute("src", path);
            img.setAttribute("height", "70rem");
            img.setAttribute("class", "imagenPresentacion");
            img.setAttribute("id", tipo);

            document.getElementById(tipo).appendChild(img);
        }
    }
}




function todasImagenes() {
    tipo = "Galeria";
    console.log(tipo)
    console.log(Object.values(Galeria));
    total = [];
    var llaves = Object.keys(Galeria);
    console.log(llaves);

    var titulo = document.createElement('button');
    titulo.addEventListener("click", function() { cargar3(total, 0); });
    var t = document.createTextNode(tipo);
    var hr = document.createElement('hr');
    titulo.setAttribute("class", "title");
    titulo.setAttribute("id", "i");
    titulo.setAttribute("value", tipo);
    hr.setAttribute("class", "raya");
    document.getElementById('repertorio').appendChild(titulo);
    titulo.appendChild(t);
    document.getElementById('repertorio').appendChild(hr);


    for (let index = 0; index < llaves.length; index++) {
        const todas = llaves[index];
        const dato = Galeria[todas];
        //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
        for (let index2 = 0; index2 < dato.length; index2++) {
            var path = dato[index2];
            // console.log(path);
            total.push(path);
            //   console.log(total)
        }
    }




    for (let index3 = 0; index3 < total.length; index3++) {

        //    console.log(total[index3])
        const all = total[index3];
        // const dato = index3[all];
        //  console.log(all)
        //   console.log(all)
        var div = document.createElement('div');

        div.setAttribute("id", tipo);

        div.setAttribute("class", "fila");

        document.getElementById("repertorio").appendChild(div);
        // //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
        //for (let index4 = 0; index4 < all.length; index4++) {
        var img = document.createElement('img');
        var path = all
        console.log(all)
        img.addEventListener("click", function() {
            cargar3(total, index3);
        });
        img.setAttribute("src", path);
        img.setAttribute("height", "70rem");
        img.setAttribute("class", "imagenPresentacion");
        img.setAttribute("id", tipo);


        document.getElementById(tipo).appendChild(img);

        //   }
    }














    // var llaves2 = Object.keys(Galeria);

    // for (let index3 = 0; index3 < llaves2.length; index3++) {
    //     const todas = llaves2[index3];
    //     const dato = Galeria[todas];
    //     //   console.log(todas)
    //     //   console.log(dato)
    //     var div = document.createElement('div');

    //     div.setAttribute("id", tipo);

    //     div.setAttribute("class", "fila");

    //     document.getElementById("repertorio").appendChild(div);
    //     //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
    //     for (let index3 = 0; index3 < dato.length; index3++) {
    //         var img = document.createElement('img');
    //         var path = dato[index3];
    //         img.addEventListener("click", function() {
    //             cargar2(tipo, index3);
    //         });
    //         img.setAttribute("src", path);
    //         img.setAttribute("height", "70rem");
    //         img.setAttribute("class", "imagenPresentacion");
    //         img.setAttribute("id", tipo);
    //         console.log(path);
    //         total.push(path);
    //         console.log(total)

    //         document.getElementById(tipo).appendChild(img);

    //     }
    // }









    //----funciona----

    // function todasImagenes() {
    //     tipo = "Galeria";
    //     console.log(tipo)
    //     console.log(Object.values(Galeria));
    //     var total = [];
    //     var llaves = Object.keys(Galeria);
    //     console.log(llaves);

    //     var titulo = document.createElement('button');
    //     titulo.addEventListener("click", function() { cargar(tipo); });
    //     var t = document.createTextNode(tipo);
    //     var hr = document.createElement('hr');
    //     titulo.setAttribute("class", "title");
    //     titulo.setAttribute("id", "i");
    //     titulo.setAttribute("value", tipo);
    //     hr.setAttribute("class", "raya");
    //     document.getElementById('repertorio').appendChild(titulo);
    //     titulo.appendChild(t);
    //     document.getElementById('repertorio').appendChild(hr);


    //     for (let index = 0; index < llaves.length; index++) {
    //         const todas = llaves[index];
    //         const dato = Galeria[todas];
    //         var div = document.createElement('div');

    //         div.setAttribute("id", tipo);

    //         div.setAttribute("class", "fila");

    //         document.getElementById("repertorio").appendChild(div);
    //         //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
    //         for (let index2 = 0; index2 < dato.length; index2++) {
    //             var img = document.createElement('img');
    //             var path = dato[index2];
    //             img.addEventListener("click", function() {
    //                 cargar2(tipo, index2);
    //             });
    //             img.setAttribute("src", path);
    //             img.setAttribute("height", "70rem");
    //             img.setAttribute("class", "imagenPresentacion");
    //             img.setAttribute("id", tipo);
    //             console.log(path);
    //             total.push(path);
    //             console.log(total)

    //             document.getElementById(tipo).appendChild(img);

    //         }
    //     }

}