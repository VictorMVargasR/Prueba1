function traerinfoMot() {

    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta),
                $("#resultado").empty();
            pintarRespuesta(respuesta.items)

        }

    });

}

function pintarRespuesta(items) {
    let myTable = "<table>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].model + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td><button onclick='BorrarElementoMot(" + items[i].id + ")'>Borrar</Button>";

        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function creaCli() {

    let id = $("#idc").val();
    let nc = $("#nc").val();
    let em = $("#em").val();
    let edad = $("#edad").val();

    let data = {
        id: id,
        name: nc,
        email: em,
        age: edad

    }
    let dataTosent = JSON.stringify(data);
    console.log(dataTosent)


    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        datatype: "JSON",
        data: dataTosent,
        contentType: "application/json",
        success: function (dataTosent) {
            console.log(dataTosent);
        },
        error: function (xhr, status) {
            alert("El ID ESTA SIENDO UTILIZADO POR OTRO CLIENTE O TIENE CAMPOS VACIOS");
        }

    });


}

function traerinfocli() {

    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta),
                $("#resultado").empty();
            pintarRespcli(respuesta.items)

        }

    });

}


function pintarRespcli(items) {
    let myTable = "<table>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td><button onclick='BorrarElementoCli(" + items[i].id + ")'>Borrar</Button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function BorrarElementoCli(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataTosent = JSON.stringify(myData);
    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        datatype: "JSON",
        data: dataTosent,
        contentType: "application/json",
        success: function (respta) {
            $("#resultado").empty();
            traerinfocli();
            alert("Cliente Borrado")

        }
    })

}

function BorrarElementoMot(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataTosent = JSON.stringify(myData);
    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "DELETE",
        datatype: "JSON",
        data: dataTosent,
        contentType: "application/json",
        success: function (respta) {
            $("#resultado").empty();
            traerinfoMot();
            alert("Moto Borrada")

        }
    })

}
function creaMot() {

    let id = $("#idm").val();
    let marca = $("#mm").val();
    let model = $("#model").val();
    let categ = $("#categ").val();
    let name = $("#name").val();

    let data = {
        id: id,
        brand: marca,
        model: model,
        category_id: categ,
        name: name,

    }
    let dataTosent = JSON.stringify(data);
    console.log(dataTosent)


    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "POST",
        datatype: "JSON",
        data: dataTosent,
        contentType: "application/json",
        success: function (dataTosent) {
            console.log(dataTosent);
        },
        error: function (xhr, status) {
            alert("El ID ESTA SIENDO UTILIZADO POR OTRO CLIENTE O TIENE CAMPOS VACIOS");
        }

    });


}



function creaMsg() {

    let idmsg = $("#idmsg").val();
    let msg = $("#msg").val();
  

    let data = {
        id: idmsg,
        messagetext: msg
        

    }
    let dataTosent = JSON.stringify(data);
    console.log(dataTosent)


    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        datatype: "JSON",
        data: dataTosent,
        contentType: "application/json",
        success: function (dataTosent) {
            console.log(dataTosent);
        },
        error: function (xhr, status) {
            alert("El ID ESTA SIENDO UTILIZADO POR OTRO CLIENTE O TIENE CAMPOS VACIOS");
        }

    });


}

function traerinfoMsg() {

    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta),
                $("#resultado").empty();
            pintarRespMsg(respuesta.items)

        }

    });

}

function pintarRespMsg(items) {
    let myTable = "<table>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td><button onclick='BorrarElementoMsg(" + items[i].id + ")'>Borrar</Button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function BorrarElementoMsg(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataTosent = JSON.stringify(myData);
    $.ajax({
        url: "https://g354fb2540e18d2-proyecto11prueba.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        datatype: "JSON",
        data: dataTosent,
        contentType: "application/json",
        success: function (respta) {
            $("#resultado").empty();
            traerinfoMsg();
            alert("Mensaje Borrado")

        }
    })

}