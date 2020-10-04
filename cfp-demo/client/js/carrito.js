let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", function () {
    let inputProducto = document.querySelector("#producto");
    let inputPrecio = document.querySelector("#precio");
    if (inputProducto.value === "" && inputPrecio.value === "") {
        load();
    } else {
        agregar();
    }
});
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);

let compras = [];

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio =
        parseInt(document.querySelector('#precio').value);
    let renglon = {
        "producto": producto,
        "precio": precio
    }
    compras.push(renglon);

    mostrarTablaCompras(compras);
}

function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
        "<p>Total: $" + total + "</p>" +
        "<p>Maximo: $" + max + "</p>"
}

async function mostrarTablaCompras(array) {
    html = "";
    await array.forEach(item => {
        html += `
            <tr>
            <td>${item.producto}</td>
            <td>${item.precio}</td>
            </tr>
            `;
    })
    document.querySelector("#tblCompras").innerHTML = html;
}

async function load() {
    let container = document.querySelector("#tblCompras");
    container.innerHTML = "<h1>Loading...</h1>";
    try {
        let response = await fetch("/productos");
        if (response.ok) {
            let t = await response.json()
            container.innerHTML = mostrarTablaCompras(t);
        }
        else
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    };
}