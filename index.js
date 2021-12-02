fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		crearTablaHTML(data);
	});

const crearTablaHTML = (data) => {
	const tabla = document.querySelector("#tabla");
	const html = data.reduce(
		(acc, curr) => {
			return (
				acc +
				`
    <tr>
      <td>${curr.fullname}</td>
      <td>${curr.email}</td>
      <td>${curr.address}</td>
      <td>${curr.phone}</td>
      <td><button id="${curr.id}">Editar usuario</button></td>
    </tr>
    `
			);
		},
		`
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th>Acciones</th>
    </tr>
    `
	);

	tabla.innerHTML = html;
};

//Nuestro formulario

const inputTexto = document.getElementById("input-texto-nombre");
const inputEmail = document.getElementById("input-email");
const inputDireccion = document.getElementById("input-text-direccion");
const inputTelefono = document.getElementById("input-numero");
const botonEnviar = document.getElementById("boton-enviar");

botonEnviar.onclick = (e) => {
	e.preventDefault();
	const nuevoUsuario = {
		fullname: inputTexto.value,
		email: inputEmail.value,
		address: inputDireccion.value,
		phone: inputTelefono.value,
	};
	crearNuevoUsuario(nuevoUsuario);
};

const crearNuevoUsuario = (usuario) => {
	fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
		method: "post",
		body: JSON.stringify(usuario),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => {
			crearTablaHTML(data);
		});
};
