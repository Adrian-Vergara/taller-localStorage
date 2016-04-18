var Persona = (function(){
    var registrar = function () {
        var personas = []; //declaramos la variable como array de objetos, donde se almacenaran todos los objetos
        var persona = {}; //declaramos la variable como objeto
        if(localStorage.personas != null) personas = JSON.parse(localStorage.personas); //si la variable localStorage tiene datos, se la asignamos a el array de objetos personas en formato JSON
        /*Tomamos el valor de las cajas de texto y lo asignamos al objeto*/
        persona.nombre = $("#nombre").val();
        persona.apellido = $("#apellido").val();
        persona.tipoIdentificacion = $("#tipoIdentificacion").val();
        persona.identificacion = $("#identificacion").val();
        persona.regimen = $("#regimen").val();
        persona.tipoPersona = $("#tipoPersona").val();
        persona.estadoCivil = $("#estadoCivil").val();
        persona.sexo = $("#sexo").val();
        persona.latitud = localStorage.latitud;
        persona.longitud = localStorage.longitud;
        personas.push(persona); //agregamos el objeto al array de objetos
        localStorage.personas = JSON.stringify(personas); //sobreescribimos lo que estaba en la variable localStorage con el fin de almacenar los registros antiguos y los recientes
        llenarTabla();
        bootbox.alert("Datos Almacenados Exitosamente!", function() {});
        dibujar_cercanos();
        limpiarCampos();
    };

    var llenarTabla = function () {
        var cabeceras = {
            "nombre": "Nombre",
            "apellido": "Apellido",
            "tipoIdentificacion": "Tipo Identificación",
            "identificacion": "Identificación",
            "regimen": "Régimen",
            "tipoPersona": "Tipo Persona",
            "estadoCivil": "Estado Civil",
            "sexo": "Sexo",
            "latitud": "Latitud",
            "longitud": "Longitud"
        };
        if(localStorage.personas != null)
        {
            var personas = JSON.parse(localStorage.personas); //le asignamos a personas los datos almacenados
            $("#tablaPersonas").cargarTabla(cabeceras, personas, "tablaPersonas");
            //$("#tablaPersonas").html(""); //limpiamos la tabla para cargar los datos
        }
    };

    var limpiarCampos = function () {
        /*Limpiamos los datos almacenados*/
        $(".caja").val("");
    };

    return {
        registrar: registrar,
        llenarTabla: llenarTabla
    };
})();

$(document).ready(function () {
    Persona.llenarTabla();
});