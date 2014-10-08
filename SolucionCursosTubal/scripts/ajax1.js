var url = "http://localhost:50039/api/cursos/";

var borrarTabla = function() {
    document.getElementById("contenido").removeChild(document.getElementById("tablaDatos"));


};

var pintarTabla = function(datos) {
    var tabla = document.createElement("table");
    tabla.setAttribute("id", "tablaDatos");
    for (var i = 0; i < datos.lenght; i++) {

        var fila = document.createElement("tr");
        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");

        var t1 = document.createTextNode(datos[i].nombre);
        var t2 = document.createTextNode(datos[i].duracion);
        var t3 = document.createTextNode(datos[i].profesor);

        c1.appenChild(t1);
        c2.appenChild(t2);
        c3.appenChild(t3);

        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appenChild(fila);

    }
    document.getElementById("contenido").appendChild(tabla);

}

var urlfinal = url + "/cursos";

var ajax = XMLHttpRequest();
ajax.open("GET", urlfinal);
ajax.onreadystatechange

