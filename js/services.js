/**
 * Created by Adrian on 20/04/2016.
 */

var ServicePersona = (function () {
    var url = "http://localhost:8080/geolocalizacion/public/api/persona";

    var PostPersonas = function (persona) {
        $.post(url, {nombre:persona.nombre, apellido: persona.apellido, tipo_identificacion:persona.tipo_identificacion, identificacion:persona.identificacion, regimen:persona.regimen, tipo_persona:persona.tipo_persona, estado_civil:persona.estado_civil, sexo:persona.sexo, latitud:persona.latitud, longitud:persona.longitud},
            function(respuesta){
                if(respuesta.error == false) {
                    bootbox.alert(respuesta.mensaje, function() {});
                    Persona.llenarTabla();
                    Persona.limpiarCampos();
                }
                else {
                    bootbox.alert(respuesta.mensaje, function() {});
                }
            },"json"
        )
    };

    var GetPersonas = function (cabeceras) {
        $.getJSON(url,
            function(respuesta){
                $("#tablaPersonas").cargarTabla(cabeceras, respuesta.personas, "tablaPersonas");
            }
        );
    };

    return {
        PostPersonas: PostPersonas,
        GetPersonas: GetPersonas
    };
})();
