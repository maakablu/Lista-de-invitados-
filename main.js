Lista_de_invitados_array = [];
	                                                                              
function submit()
	{
    
        var nombre_1 = document.getElementById("Lista_de_invitados_1").value;
        var nombre_2 = document.getElementById("Lista_de_invitados_2").value;
        var nombre_3 = document.getElementById("Lista_de_invitados_3").value;
        var nombre_4 = document.getElementById("Lista_de_invitados_4").value;

        nombre_invitado_array.push(nombre_1);
        nombre_invitado_array.push(nombre_2);
        nombre_invitado_array.push(nombre_3);
        nombre_invitado_array.push(nombre_4);

		console.log(nombre_invitado_array);
		
        document.getElementById("ver_nombre").innerHTML = Lista_de_invitado_array;
        document.getElementById("botón_enviar").style.display = "none";
        document.getElementById("botón_ordenar").style.display = "inline-block";

	}

function sorting()
{
	Lista_de_invitados_array.sort();
    console.log(Lista_de_invitado_array);
	document.getElementById("ver_nombre").innerHTML = Lista_de_invitado_array;
}