function getAll() {
    // Mensaje por la consola
    //console.log("Hola mundo desde la consola");
    // Mensaje por la ventana
    //alert("Hola mundo desde la ventana");

    // Creamos una nueva request
    var request = new XMLHttpRequest();

    // Pasamos los parámetros necesarios para la solicitud
    request.open('GET','http://127.0.0.1:8000/contactos')

    // Enviamos la solicitud
    request.send()

    // Obtenemos la respouesta
    request.onload = (e) => {
        // Guardamos los resultados
        const response = request.responseText;

        // Hacemosun parseo
        const json = JSON.parse(response);

        // Imprimimos la respuesta
        console.log("response: " + response);
        // Imprimimos el objeto
        console.log("json" + json);
        // Imprimimos el código de estado
        console.log("status_code: " + request.status);

        // Imprimimos los elementos del JSON
        console.log("Email: " + json[0]["email"]);
        console.log("Nombre: " + json[0]["nombre"]);
        console.log("Telefono: " + json[0]["telefono"]);

        // Obtenemos el elemento del HTML a ocupar mediante el ID
        const tbody_contactos = document.getElementById("tbody_contactos")

        // Creamos un elemento
        var tr = document.createElement("tr")

        // Creamos elementos con la etiqueta td
        var td_email = document.createElement("td");
        var td_nombre = document.createElement("td");
        var td_telefono = document.createElement("td");

        td_email.innerHTML = json[0]["email"];
        td_nombre.innerHTML = json[0]["nombre"];
        td_telefono.innerHTML = json[0]["telefono"];

        // Agregamos los elementos correspondientes al elemento HTML
        tr.appendChild(td_email)
        tr.appendChild(td_nombre)
        tr.appendChild(td_telefono)

        // Mandamos los valores al HTML
        tbody_contactos.appendChild(tr);

    };
}