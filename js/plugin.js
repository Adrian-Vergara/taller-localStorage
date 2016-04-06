var tablas = (function () {
	var cargarCabeceras = function (tabla, cabeceras) {
		var thead = document.createElement("thead"); //creamos elemento thead para los titulos
		var tr = document.createElement("tr"); //creamos una nueva fila para los titulos
		for(i in cabeceras) //recorremos las cabeceras
		{
			var th = document.createElement("th"); //creamos las columnas donde van a ir los titulos
			th.textContent = cabeceras[i]; //añadimos el texto correspondiente a cada titulo
			tr.appendChild(th); //añadimos la columna a la fila previamente creada
		}
		thead.appendChild(tr); //añadimos la fila a la cabecera
		tabla.appendChild(thead); //añadimos la cabecera a la tabla
	}

	var cagarContenido = function(tabla, contenido){
		var tbody = document.createElement("tbody"); //creamos elemento tbody para el contenido
		for(i in contenido) //al tener un array de objetos, su comportamiento es similar al de una matriz, este for es para recorrer filas
		{
			var tr = document.createElement("tr"); //creamos la fila
			for(j in contenido[i]) //este for es para recorrer las columnas de las filas
			{
				var td = document.createElement("td"); //creamos las columnas donde va el contenido
				td.textContent = contenido[i][j]; //añadimos el texto correspondiente a la columna
				tr.appendChild(td); //añadimos la columna a la fila
			}
			tbody.appendChild(tr); //añadimos la fila al cuerpo de la tabla
			tabla.appendChild(tbody); //añadimos el cuerpo de la tabla a la tabla
		}
	};

	var limpiarTabla = function (table) {
		$("#"+table+"").html(""); //limpiamos los datos de la tabla
	}

	return {
		cargarCabeceras: cargarCabeceras,
		cagarContenido: cagarContenido,
		limpiarTabla: limpiarTabla
	};

})();

jQuery.fn.extend({
	cargarTabla: function (cabeceras, contenido, table) {
		var tabla = document.getElementById(table); //obtenemos el html dom object porque creamos los nodos con javascript
		tablas.limpiarTabla(table);
		tablas.cargarCabeceras(tabla, cabeceras); //cargamos las cabeceras
		tablas.cagarContenido(tabla, contenido); //cargamos el contenido
	}
});