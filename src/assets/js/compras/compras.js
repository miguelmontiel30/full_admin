// INICIALIZAMOS LOS COMPONENTES A UTILIZAR    
$(document).ready(function () {
    $('.datepicker').pickadate();
    $('.mdb-select').materialSelect();

    //LLENAMOS EL SELECT CON LOS DATOS DE LOS PROVEEDORES
    llenarSelectAlmacenes();

    //LLENAMOS EL SELECT CON LOS DATOS DE LOS ALMACENES 
    setTimeout(() => {
        llenarSelectProveedores();
    }, 500);

    // CARGA LOS DATOS NECESARIOS PARA EL INPUT AUTOCOMPLETE
    cargarProductos();

    // CARGA LOS DATOS DE COMPRAS PENDIENTES
    cargarProductosCompra();

});

function insertarOrdenCompra() {

    let fecha_compra = $("#fecha_compra").val();
    let id_proveedor = $("#id_proveedor").val();
    let id_almacen = $("#id_almacen").val();

    // console.log(fecha_compra);
    // console.log(id_proveedor);
    // console.log(id_almacen);

    $.ajax({
        method: "POST",
        url: "./Controllers/Compras/Compras.php",
        data: {
            funcion: 'insertar_compra',
            fecha_compra: fecha_compra,
            id_proveedor: id_proveedor,
            id_almacen: id_almacen
        }
    }).done(function (respuesta_servidor) {

        console.log(respuesta_servidor);
        let respuesta_producto = JSON.parse(respuesta_servidor);

        if (respuesta_producto.respuesta == 'Insertado Correctamente') {

            //ACTUALIZAMOS LA TABLA DE LOS PRODUCTOS QUE YA SE HAN COMPRADO
            cargarProductosCompra();

            Swal.fire({
                icon: 'success',
                title: '¡Correcto!',
                text: 'Se ha registrado la orden de compra.'
            });

            setTimeout(() => {
                cambiarVentana('Views/Compras/Historial_Compras');
            }, 1500);

        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Vaya!',
                text: 'No se ha podido insertar correctamente, verifique que los datos sean correctos.'
            });
        }

    });
}

function llenarSelectProveedores() {

    // VACIAMOS EL SELECT DE CONTENIDO
    $("#id_proveedor").empty();

    $.ajax({
        method: "POST",
        url: "./Controllers/Administracion/Proveedores.php",
        data: {
            funcion: 'consultar_proveedores'
        }
    }).done(function (respuesta_servidor) {

        // console.log(respuesta_servidor);
        let datos_proveedores = JSON.parse(respuesta_servidor);
        // console.log(datos_categorias);

        if (datos_proveedores.estado == "Tiene proveedores") {

            $("#id_proveedor").append('<option value="" selected="">Seleccione un Proveedor</option>');

            //RECORREMOS EL ARRAY E INSERTAMOS UN NUEVO ELEMENTO POR CADA PROVEEDOR
            datos_proveedores.proveedores.forEach(proveedor => {

                $("#id_proveedor").append('<option value="' + proveedor.id_proveedor + '">' + proveedor.nombre_proveedor + '</option>');
            });

        } else {
            // console.log("dsa");
        }
    });

}

function llenarSelectAlmacenes() {

    // VACIAMOS EL SELECT DE CONTENIDO
    $("#id_almacen").empty();

    $.ajax({
        method: "POST",
        url: "./Controllers/Almacen/Almacen.php",
        data: {
            funcion: 'consultar_almacenes'
        }
    }).done(function (respuesta_servidor) {

        // console.log(respuesta_servidor);
        let datos_almacenes = JSON.parse(respuesta_servidor);
        // console.log(datos_almacenes);

        if (datos_almacenes.estado == "Tiene almacenes") {

            $("#id_almacen").append('<option value="" selected="">Seleccione un Almacen</option>');

            //RECORREMOS EL ARRAY E INSERTAMOS UN NUEVO ELEMENTO POR CADA ALMACEN
            datos_almacenes.almacenes.forEach(almacen => {
                // console.log(almacen.nombre_almacen);
                $("#id_almacen").append('<option value="' + almacen.id_almacen + '">' + almacen.nombre_almacen + '</option>');
            });

        } else {
            console.log("dsa");
        }
    });
}

/**
 * FUNCION QUE SE ENCARGAR DE LLAMAR LAS FUNCIONES QUE CARFAN 
 * LOS DATOS DEL MODAL PARA REALIZAR LA COMPRA 
*/
function obtenerDatosProducto() {
    let id_producto = $('#producto_buscado').val().slice(-11,);
    cargarDatosProducto(id_producto);
}


/**
* FUNCION QUE SE ENCARGA DE INSERTAR LOS DATOS TEMPORALES DE LA COMPRA 
* DEL PRODUCTO QUE SE CARGO EN EL MODAL
*/
function insertarCompraTemporal() {

    //OBTENEMOS LOS DATOS DEL MODAL
    let id_producto = $("#id_producto").val();
    let cantidad_compra = $("#cantidad_compra").val();
    let precio_compra = $("#precio_compra").val();
    let precio_venta = $("#precio_venta").val();
    let precio_mayoreo = $("#precio_mayoreo").val();

    $.ajax({
        method: "POST",
        url: "./Controllers/Compras/Compras.php",
        data: {
            funcion: 'insertar_compra_temporal',
            id_producto: id_producto,
            cantidad_compra: cantidad_compra,
            precio_compra: precio_compra,
            precio_venta: precio_venta,
            precio_mayoreo: precio_mayoreo
        }
    }).done(function (respuesta_servidor) {

        console.log(respuesta_servidor);
        let respuesta_producto = JSON.parse(respuesta_servidor);

        if (respuesta_producto.respuesta == 'Insertado Correctamente') {

            // OCULTAMOS EL MODAL 
            $('#modal_producto').modal('hide');

            //VACIAMOS LOS DATOS DE LOS INPUTS
            $("#id_producto").val('');
            $("#nombre_producto").val('');
            $("#modelo_producto").val('');
            $("#cantidad_compra").val('');
            $("#precio_compra").val('');
            $("#precio_venta").val('');
            $("#precio_mayoreo").val('');

            //CARGAMOS LOS DATOS DE LA COMPRA EN LA TABLA DE PRODUCTOS AGREGADOS
            cargarProductosCompra();

        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Vaya!',
                text: 'No se ha podido insertar correctamente, verifique que los datos sean correctos.'
            });
        }

    });
}

/**
* FUNCION QUE SE ENCARGA DE LLENAR LOS DATOS TEMPORALES DE LA COMPRA 
* DEL PRODUCTO EN LA TABLA DE PRODUCTOS AGREGADOS
*/
function cargarProductosCompra() {

    // VACIAMOS LA TABLA DE CONTENIDO
    $("#table_productos_agregados").empty();

    //VACIAMOS LOS DATOS DE LAS ETIQUETAS
    $("#subtotal").empty();
    $("#iva").empty();
    $("#total").empty();

    $.ajax({
        method: "POST",
        url: "./Controllers/Compras/Compras.php",
        data: {
            funcion: 'consultar_compra_temporal'
        }
    }).done(function (respuesta_servidor) {
        // console.log(respuesta_servidor);
        let datos_productos = JSON.parse(respuesta_servidor);
        // console.log(datos_usuarios);

        if (datos_productos.estado == "Tiene productos") {

            let subtotal_productos = 0;

            datos_productos.productos.forEach(producto => {

                subtotal_productos += parseFloat(producto.cantidad_compra) * parseFloat(producto.precio_compra);

                $('#table_productos_agregados').append(
                    '<tr  class="text-center" style="vertical-align: middle;">' +
                    '<td><strong>' + producto.nombre_producto + '</strong><br>(' + producto.modelo_producto + ')</td>' +
                    '<td>' + producto.cantidad_compra + '</td>' +
                    '<td>$' + producto.precio_compra + '</td>' +
                    '<td><strong>$' + producto.precio_venta + ' / $' + producto.precio_mayoreo + '</strong></td>' +
                    '<td>' + (parseFloat(producto.cantidad_compra) * parseFloat(producto.precio_compra)) + '</td>' +
                    '<td>' +
                    '<button class="btn btn-primary btn-sm text-center" onclick="editarCompraTemporal(\'Views/Productos/Producto_Nuevo_Editar.php?id_producto=' + producto.id_detalle_orden_compra_temp + '\'); return false;"> ' +
                    '<i class="fas fa-pencil"></i> Editar' +
                    '</button>' +
                    '</td>' +
                    '<td>' +
                    '<button class="btn btn-danger btn-sm text-center" onclick="eliminarCompraTemporal(\'' + producto.id_detalle_orden_compra_temp + '\'); return false;">' +
                    '<i class="fas fa-trash"></i> Eliminar ' +
                    '</button >' +
                    '</td>' +
                    '<tr>');

            });

            // AGREGAMOS LOS DATOS CORRESPONDIENTES A LOS TOTALES DEL PRODUCTO
            $("#subtotal").append('$ ' + subtotal_productos + ' MXN');

            // CALCULAMOS EL IVA Y O SUMAMOS AL SUBTOTAL
            let iva = (subtotal_productos * .13);
            $("#iva").append('$ ' + iva + ' MXN');

            //AGREGAMOS LOS DATOS DEL TOTAL YA SUMANDO LOS PRODUCTOS Y EL IVA
            $("#total").append('$ ' + (subtotal_productos + iva) + ' MXN');

        } else {

            //AÑADIMOS EN LA TABLA EL MENSAJE QUE NO HAY DATOS DE COMPRAS DISPONIBLES
            $("#table_productos_agregados").append('<th colspan="7" class="text-center table-warning">No hay productos agregados</th>');

            // AGREGAMOS LOS DATOS CORRESPONDIENTES A LOS TOTALES DEL PRODUCTO
            $("#subtotal").append('$0.00 MXN');
            $("#iva").append('$0.00 MXN');
            $("#total").append('$0.00 MXN');
        }
    });
}


/**
 * FUNCTION QUE SE ENCARGA DE CARGAR LOS DATOS DEL PRODUCTO SELECCIONADO 
 * PARA REALIZAR LA COMPRA
*/
function cargarDatosProducto(id_producto) {
    $.ajax({
        method: "POST",
        url: "./Controllers/Productos/Producto.php",
        data: {
            funcion: 'consultar_producto',
            id_producto: id_producto
        }
    }).done(function (respuesta_servidor) {

        // console.log(respuesta_servidor);
        let datos_producto = JSON.parse(respuesta_servidor);
        // console.log(datos_producto);

        if (datos_producto.estado = "Producto Encontrado") {

            //AGREGAMOS EL TITULO EN EL MODAL 
            $("#titulo_modal").empty();
            $("#titulo_modal").append('Comprar Stock de Producto: <strong>' + datos_producto.producto[0].nombre_producto + '</strong>');

            // AGREGAMOS LOS VALORES EN LOS INPUTS DEL MODAL
            $("#id_producto").val(datos_producto.producto[0].id_producto);
            $("#nombre_producto").val(datos_producto.producto[0].nombre_producto);
            $("#modelo_producto").val(datos_producto.producto[0].modelo_producto);


            $('#modal_producto').modal('show');

        } else {
            console.log('No tiene productos');
        }

    });
}

/**
 * FUNCION QUE SE ENCARGA DE CARGAR LOS DATOS DE LOS PRODUCTOS
 * Y LLENAR EL CAMPO DE AUTOCOMPLETE
*/
function cargarProductos() {

    // VACIAMOS LA TABLA DE CONTENIDO
    $("#datos_table_productos").empty();

    $.ajax({
        method: "POST",
        url: "./Controllers/Productos/Producto.php",
        data: {
            funcion: 'consultar_productos'
        }
    }).done(function (respuesta_servidor) {
        // console.log(respuesta_servidor);
        let datos_productos = JSON.parse(respuesta_servidor);
        // console.log(datos_usuarios);

        let productos_autocomplete = [];

        if (datos_productos.estado = "Tiene productos") {

            datos_productos.productos.forEach(producto => {

                // console.log(producto);
                let producto_array = '<strong>' + producto.nombre_producto + '</strong> - ' + producto.modelo_producto + ' - ' + producto.id_producto;
                // console.log(producto_array);
                productos_autocomplete.push(producto_array);

            });

            $('#producto_buscado').mdbAutocomplete({
                data: productos_autocomplete
            });

        } else {
            console.log('No tiene productos');
        }
    });
}

