

function leerClientes() {
    $.ajax({
        url: "https://g3c013c57fa7d92-alquilermotocicletas.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (Clientes) {
            let CS = Clientes.items;
            $("#ClienteContenido").empty();
            for (i = 0; i < CS.length; i++) {
                $("#ClienteContenido").append("<b>" + CS[i].name + "</b><br>")
            }
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        },
        complete: function (xhr, status) {
            alert('Peticion realizada');
        }
    });
}