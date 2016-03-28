function registrar(){
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
    personas.push(persona); //agregamos el objeto al array de objetos
    localStorage.personas = JSON.stringify(personas); //sobreescribimos lo que estaba en la variable localStorage con el fin de almacenar los registros antiguos y los recientes
    llenarTabla();
    alert("datos almacenados con exito");
    limpiarCampos();
}

function llenarTabla()
{
    var personas = JSON.parse(localStorage.personas); //le asignamos a personas los datos almacenados
    $("#tablaPersonas").html(""); //limpiamos la tabla para cargar los datos
    for(i in personas) //recorremos el array de objetos personas
    {
        /*asignamos en variables los datos a mostrar para mayor facilidad*/
        var id = parseInt(i) + 1;
        var nombre = personas[i].nombre;
        var apellido = personas[i].apellido;
        var tipoIdentificacion = personas[i].tipoIdentificacion;
        var identificacion = personas[i].identificacion;
        var regimen  = personas[i].regimen;
        var tipoPersona = personas[i].tipoPersona;
        var estadoCivil = personas[i].estadoCivil;
        var sexo = personas[i].sexo;
        /*Agregamos los datos de la tabla*/
        $("#tablaPersonas").append("<tr><td class='text-right'>"+id+"</td><td>"+nombre+"</td><td>"+apellido+"</td><td>"+tipoIdentificacion+"</td><td class='text-right' style='width: 10%;'>"+identificacion+"</td><td>"+regimen+"</td><td>"+tipoPersona+"</td><td>"+estadoCivil+"</td><td>"+sexo+"</td></tr>");
    }
}

function limpiarCampos()
{
    /*Limpiamos los datos almacenados*/
    $("#nombre").val("");
    $("#apellido").val("");
    $("#tipoIdentificacion").val("");
    $("#identificacion").val("");
    $("#regimen").val("");
    $("#tipoPersona").val("");
    $("#estadoCivil").val("");
    $("#sexo").val("");
}