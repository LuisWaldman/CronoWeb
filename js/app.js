let Datos =
{
    meses: [],
    sistemas: [],
    sistema_seleccionadoid: 0
    
}


let Controlador =
{
    Iniciar: function ()
    {

    }
}


function nombre_mes(mes) {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[mes - 1];
}

let app = new Vue({
    el: '#miApp',
    data: Datos,
    methods: {

        clickchek_cronograma: function (crono)
        {
            crono.viendo = !crono.viendo;
            this.$forceUpdate();
        },
        formatDate: function (value)
        {
            let date = new Date(value);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (year == 1)
                return "-";
            return day + '/' + month + '/' + year;
        },
        formatDateDDMM: function (value) {
            let date = new Date(value);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (year == 1)
                return "-";
            return day + ' ' + nombre_mes(month);
        },
        cambio_sisstema: function () {
            Datos.meses = Datos.sistemas[Datos.sistema_seleccionadoid].meses;

        }

    }
})




function TransformarVector(vector) {
    var ret = [];

    for (var i = 0; i < vector.length; i++) {

        desde = new Date(vector[i].desde);
        hasta = new Date(vector[i].hasta);

        ret[ret.length] = {
            desde: desde.getDate(),
            hasta: hasta.getDate(),
            nombre: vector[i].nombre
        }

    }
    return ret;
}