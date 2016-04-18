/**
 * Created by Adrian on 17/04/2016.
 */
function crearMarcador(e){

    map.removeMarkers();
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    localStorage.latitud = lat;
    localStorage.longitud = lng;

    map.addMarker({ lat: lat, lng: lng});  // pone marcador en mapa
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
    if(localStorage.personas != null)
    {
        R = 6372.795477598;
        var personas = JSON.parse(localStorage.personas);
        var distancia = 50;
        for(i in personas)
        {
            var LATB = personas[i].latitud;
            var LonA = personas[i].longitud;
            var LATA = parseFloat(localStorage.latitud);
            var LonB = parseFloat(localStorage.longitud);
            dist= R * Math.acos(Math.sin(LATA) * Math.sin(LATB) + Math.cos (LATA) * Math.cos (LATB) * Math.cos (LonA-LonB));
            alert(dist)
        }
    }
}
geolocalizar();
dibujar_cercanos();