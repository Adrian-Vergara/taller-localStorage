/**
 * Created by Adrian on 17/04/2016.
 */

var personas = [];
function crearMarcador(e){

    map.removeMarkers();
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    localStorage.latitud = lat;
    localStorage.longitud = lng;

    map.addMarker({ lat: lat, lng: lng, title: "Epicentro"});  // pone marcador en mapa
    dibujar_cercanos();
};

function geolocalizar(){
    GMaps.geolocate({
        success: function(position){
            lat = position.coords.latitude;  // guarda coords en lat y lng
            lng = position.coords.longitude;
            localStorage.latitud = lat;
            localStorage.longitud = lng;

            map = new GMaps({  // muestra mapa centrado en coords [lat, lng]
                el: '#map',
                lat: lat,
                lng: lng,
                click: crearMarcador,
                tap: crearMarcador
            });
            map.addMarker({ lat: lat, lng: lng});  // marcador en [lat, lng]
        },
        error: function(error) { alert('Geolocalización falla: '+error.message); },
        not_supported: function(){ alert("Su navegador no soporta geolocalización"); },
    });
};

function dibujar_cercanos()
{
    var url = "http://localhost:8080/geolocalizacion/public/api/persona";
    $.getJSON(url,
        function(respuesta){
            personas = respuesta.personas;
        }
    );
    console.log(personas);
    if(personas != null)
    {
        var radio = parseFloat(2.0);
        for(i in personas)
        {
            var latitudA = personas[i].latitud;
            var longitudA = personas[i].longitud;
            var latitudB = parseFloat(localStorage.latitud);
            var longitudB = parseFloat(localStorage.longitud);
            var distancia = parseFloat(getDistancia(latitudA, longitudA, latitudB, longitudB));
            if(distancia <= radio)
            {
                map.addMarker({
                    lat: latitudA,
                    lng: longitudA,
                    title: personas[i].nombre + " " + personas[i].apellido
                });
            }
        }
    }
};

function rad(x) {
    return x * Math.PI / 180;
};

function getDistancia(latA,longA,latB,longB){
    var R = 6378137; //radio de la tierra en metros
    var d =R * Math.acos( Math.sin(rad(latA)) * Math.sin(rad(latB)) + Math.cos(rad(latA)) * Math.cos(rad(latB)) * Math.cos(rad(longA-longB)));
    return d/1000;
};

$(document).ready(function () {
    geolocalizar();
    dibujar_cercanos();
});