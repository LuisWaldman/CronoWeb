let Datos =
{
    ano: 2022,
    meses:
        [
            { nombre: 'Enero', semana: [] },
            { nombre: 'Febrero', semana: [] },
            { nombre: 'Marzo', semana: [] },
            { nombre: 'Abril', semana: [] },
            { nombre: 'Mayo', semana: [] },
            { nombre: 'Junio', semana: [] },
            { nombre: 'Julio', semana: [] },
            { nombre: 'Agosto', semana: [] },
            { nombre: 'Septiembre', semana: [] },
            { nombre: 'Octubre', semana: [] },
            { nombre: 'Noviembre', semana: [] },
            { nombre: 'Diciembre', semana: [] }
        ],
    sistemas: [
        {
            nombre: 'UVHI',
            partes:
                [
                    {
                        nombre: 'BAJADAS ADP',
                        tipo: 'dia_habil',
                        desde_diahabil: 5,
                        hasta_diahabil: 6,
                        color: '#385eb7'
                    },
                    {
                        nombre: 'PRELIQUIDACION',
                        tipo: 'dia_habil',
                        desde_diahabil: 7,
                        hasta_diahabil: 11,
                        color: '#25cb75'
                    },
                    {
                        nombre: 'CONTROL',
                        tipo: 'dia_habil',
                        desde_diahabil: 12,
                        hasta_diahabil: 17,
                        color: '#65c9e2'
                    },
                    {
                        nombre: 'LIQUIDACION / EMISION',
                        tipo: 'dia_habil',
                        desde_diahabil: 17,
                        hasta_diahabil: 18,
                        color: '#8f82f2'
                    },
                    {
                        nombre: 'ENVIO DE APERTURA DE CUENTAS',
                        tipo: 'dia_habil',
                        desde_diahabil: 18,
                        hasta_diahabil: 18,
                        color: '#83a735'
                    },
                    {
                        nombre: 'ENVIO EMISION A BANCOS/CORREOS',
                        tipo: 'dia_habil',
                        desde_diahabil: 19,
                        hasta_diahabil: 19,
                        color: '#928a2a'
                    },
                    {
                        nombre: 'PUESTA A PAGOS',
                        tipo: 'dia_habil',
                        desde_diahabil: 29,
                        hasta_diahabil: 29,
                        color: '#000000'
                    }
                ]

        }
    ],
    sistema_seleccionadoid: 0
}


let Controlador =
{

    CalcularMeses: function ()
    {
        mes = 0;
        for (var mescont = 1; mescont <= 12; mescont++)
        {

            var dateCont = new Date(mescont + "/1/" + Datos.ano);
            semana = 0;
            // INICIALIZA LOS DIAS HASTA EL PRIMERO DE MES;
            Datos.meses[mescont - 1].semana[0] = { dias: [] };
            for (var inicont = 0; inicont < dateCont.getDay(); inicont++)
            {
                Datos.meses[mescont - 1].semana[0].dias[inicont] = { mostrar_dia : false, tipo_dia: 'previo', eventos: [] };
            }
            while (dateCont.getMonth() == (mescont - 1))
            {

                var nuevaFecha =
                {
                    mostrar_dia: true,
                    tipo_dia: 'actual',
                    date: new Date(dateCont),
                    eventos: []
                };

                nuevaFecha.feriado = GetFeriado(nuevaFecha.date);
                if (nuevaFecha.feriado)
                    nuevaFecha.tipo_dia = 'feriado';
                if (dateCont.getDay() == 6)
                    nuevaFecha.tipo_dia = 'sabado';
                if (dateCont.getDay() == 0)
                    nuevaFecha.tipo_dia = 'domingo';

                Datos.meses[mescont - 1].semana[semana].dias[dateCont.getDay()] = nuevaFecha;
                


                if (dateCont.getDay() == 6)
                {
                    semana++;
                    Datos.meses[mescont - 1].semana[semana] = { dias: [] };
                }
                dateCont.setDate(dateCont.getDate() + 1);
            }

            if (dateCont.getDay() != 0)
            {
                for (var inicont = 0; dateCont.getDay() + inicont < 6; inicont++) {
                    Datos.meses[mescont - 1].semana[semana].dias[dateCont.getDay() + inicont] = { mostrar_dia: false, tipo_dia: 'posterior' };
                }

            }
            
        };
    },
    Iniciar: function () {
        InicializarFeriados(Datos.ano);
        Controlador.CalcularMeses();
        Controlador.AgregarSistema(0);
    },
    AgregarSistema: function (id_sistema)
    {
        // MESES
        for (var mi = 0; mi < Datos.meses.length; mi++)
        {
            var mes = Datos.meses[mi];
            var dia_habil = 0;
            // SEMANAS
            for (var si = 0; si < mes.semana.length; si++)
            {
                // DIAS
                var semana = mes.semana[si];
                for (var di = 0; di < semana.dias.length; di++)
                {
                    if (semana.dias[di].tipo_dia == 'actual')
                    {
                        dia_habil++;
                        var partes = Datos.sistemas[id_sistema].partes;
                        for (var i = 0; i < partes.length; i++)
                        {
                            if ((partes[i].desde_diahabil <= dia_habil) &&
                                (partes[i].hasta_diahabil >= dia_habil))
                            {
                                if (!(Datos.meses[mi].semana[si].dias[di].eventos))
                                {
                                    Datos.meses[mi].semana[si].dias[di].eventos = [];
                                }
                                Datos.meses[mi].semana[si].dias[di].eventos
                                [Datos.meses[mi].semana[si].dias[di].eventos.length]
                                    = { sistema: id_sistema, parte: i };
                            }
                        }
                    }
                }

            }

            

        }
    }
}


function nombre_mes(mes) {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[mes - 1];
}


Controlador.Iniciar();
let app = new Vue({
    el: '#miApp',
    data: Datos,
    methods:
    {
        estilo_dia: function (dia) {
            var retEstilo = {
            };
            if ((dia.date.getDay() == 0) || (dia.date.getDay() == 6)) {

                retEstilo.color = 'red';
            }

            if (dia.tipo_dia != 'actual') {
                retEstilo.color = 'red';
            }
            return retEstilo;
        },
        estilo_evento: function (evento) {
            var retEstilo = {
            };

            retEstilo.borderColor = Datos.sistemas[evento.sistema].partes[evento.parte].color;

            return retEstilo;
        },


        
        clickchek_cronograma: function (crono) {
            crono.viendo = !crono.viendo;
            this.$forceUpdate();
        },
        formatDate: function (value) {
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