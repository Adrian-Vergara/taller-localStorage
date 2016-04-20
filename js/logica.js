var Persona = (function(){
    var registrar = function () {
        var persona = {}; //declaramos la variable como objeto
        /*Tomamos el valor de las cajas de texto y lo asignamos al objeto*/
        persona.nombre = $("#nombre").val();
        persona.apellido = $("#apellido").val();
        persona.tipo_identificacion = $("#tipoIdentificacion").val();
        persona.identificacion = $("#identificacion").val();
        persona.regimen = $("#regimen").val();
        persona.tipo_persona = $("#tipoPersona").val();
        persona.estado_civil = $("#estadoCivil").val();
        persona.sexo = $("#sexo").val();
        persona.latitud = localStorage.latitud;
        persona.longitud = localStorage.longitud;
        ServicePersona.PostPersonas(persona);
    };
    


    var llenarTabla = function () {
        var cabeceras = {
            "id": "Id",
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
        ServicePersona.GetPersonas(cabeceras);
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