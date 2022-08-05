let Datos =
{
    ano: 2022,
    meses:
        [
        ],
    fecha_final_seleccionada: '2022-12-06',
    sistemas: [
        {
            nombre: 'UVHI',
            fecha_final: false,
            partes:
                [
                    {
                        nombre: 'PREVIA BAJADAS ADP',
                        tipo: 'dia_habil',
                        desde_diahabil: -6,
                        hasta_diahabil: 4,
                        color: '#385eb7',
                        detalle:
                            [{ "desde": -3, "hasta": -3, "nombre": "BAJADA DE ADP para generación de información para SINTYS   27/07/2022 a las 20hs" }, { "desde": 3, "hasta": 3, "nombre": "Recepción de Archivo de MINISTERIO DE SALUD para registración automática de solicitudes de Embarazos hasta 03/08/2022" }, { "desde": 4, "hasta": 4, "nombre": "ACTUALIZACION de Solicitudes de Embarazos con archivo recibido del Ministerio de Salud " }, { "desde": 3, "hasta": 3, "nombre": "Recepción de Archivo de Libretas Cargadas en UDAI  para liq.complemento 20% de HIJO  03/08/2022 a las 20hs. " }, { "desde": 4, "hasta": 4, "nombre": "VALIDACION de información de libretas y CARGA de tabla para liquidación complemento 20%" }, { "desde": 3, "hasta": 3, "nombre": "Recepción de Archivo de novedades de Maternidades para liquidación por excepción hasta 03/08/2022" }, { "desde": 4, "hasta": 4, "nombre": "VALIDACION y registración de liquidación de Maternidades por excepción " }, { "desde": 4, "hasta": 4, "nombre": "Recepción de Archivos de SINTYS para Incompatiblidad hasta 04/08/2022" }, { "desde": 4, "hasta": 4, "nombre": "Recepción de Archivos con información de ACTIVOS y PASIVOS provinciales, AFIP, IOMA, CABA, etc. Incompatibles  hasta 04/08/2022" }, { "desde": 4, "hasta": 4, "nombre": "Recepción de Archivos de CSR Puro (Compañías de Seguro de Retiro) para Incompatibilidad hasta 04/08/2022" }, { "desde": 4, "hasta": 4, "nombre": "Recepción de Archivos de casos SIN LIBRETA PRESENTADA para Incompatibilidad hasta 04/08/2022" }, { "desde": 5, "hasta": 8, "nombre": "ACTUALIZACION de tabla de INCOMPATIBILIDAD GENERAL c/archivos recibidos de Activos y Pasivos Provinciales, de SINTYS, de CSR, etc." }, { "desde": 3, "hasta": 3, "nombre": "Recepción de archivo de DDJJ < SMVM p/carga de reclamos p/ajustes de casos suspendidos por presunto ingreso > SMVM hasta 03/08/2022" }, { "desde": 3, "hasta": 3, "nombre": "Recepción de archivos para registración de Reclamos automáticos hasta 03/08/2022" }, { "desde": 4, "hasta": 4, "nombre": "ACTUALIZACION de tabla de Reclamos c/archivos recibidos/generados para reclamos automáticos " }, { "desde": 4, "hasta": 4, "nombre": "Recepción de archivo de DDJJ Incompatibles de LIBRETAS para suspensión de liquidaciones hasta 04/08/2022" }]

                    },
                    {
                        nombre: 'BAJADAS ADP',
                        tipo: 'dia_habil',
                        desde_diahabil: 5,
                        hasta_diahabil: 6,
                        color: '#385eb7',
                        detalle:
                            [{ "desde": 5, "hasta": 16, "nombre": "POSIBILIDAD DE INTERFERENCIA en OPERATORIA ONLINE UVHI en UDAI entre 05/08/2022 y 16/08/2022" }, { "desde": 5, "hasta": 5, "nombre": "CIERRE DE NOVEDADES DE ADP para liquidación normal HIJO de período 08-2022 ------- 05/08/2022a las 19 hs." }, { "desde": 5, "hasta": 8, "nombre": "BAJADA DE DATOS DE ADP DE RELACIONES DE HIJO VIGENTES AL 08-2021 para liq. HIJOS período 08-2022" }, { "desde": 5, "hasta": 16, "nombre": "Generación del archivo de ADP para Gerencia de Control para cruzar posteriormente con archivo de Preliquidación" }, { "desde": 5, "hasta": 5, "nombre": "CIERRE DE NOVEDADES DE UVHI para liquidación período 08-2022 - DESACTIVACION ONLINE DE UVHI -------05/08/2022a las 19hs." }, { "desde": 5, "hasta": 5, "nombre": "CIERRE DE NOVEDADES DE EMBARAZO para liquidación normal EMBARAZO de período 08-2022" }, { "desde": 5, "hasta": 5, "nombre": "BAJADA DE DATOS DE UVHI de Solicitudes de EMBARAZO" }, { "desde": 5, "hasta": 8, "nombre": "Generación archivo de CUIL para bajada de datos de ADP para EMBARAZO" }, { "desde": 5, "hasta": 8, "nombre": "Bajada de datos de ADP para liq. EMBARAZO período 08-2022" }, { "desde": 5, "hasta": 5, "nombre": "CIERRE DE NOVEDADES DE RECLAMOS para liquidación ajustes por reclamos de HIJO y EMBARAZO de períodos anteriores y P/reliq.IMPAGOS" }, { "desde": 5, "hasta": 5, "nombre": "BAJADA DE DATOS DE UVHI de RECLAMOS PARA AJUSTES DE HIJOS y de EMBARAZO y de RETROACTIVOS de MATERNIDAD SERVICIO DOMESTICO" }, { "desde": 5, "hasta": 8, "nombre": "Generación archivo de CUIL-períodos reclamados para bajada de datos de ADP para Ajustes de HIJOS " }, { "desde": 5, "hasta": 8, "nombre": "Generación archivo de CUIL-períodos reclamados para bajada de datos de ADP para Ajustes de EMBARAZO" }, { "desde": 5, "hasta": 8, "nombre": "Generación archivo de CUIL con períodos retroactivos de Maternidad de Servicio Doméstico" }, { "desde": 5, "hasta": 8, "nombre": "Bajada de datos de ADP para liq. Ajustes de HIJOS de períodos anteriores a 06-2019" }, { "desde": 5, "hasta": 8, "nombre": "Bajada de datos de ADP para Ajustes de EMBARAZO de períodos anteriores a 08-2022" }, { "desde": 5, "hasta": 5, "nombre": "CIERRE DE NOVEDADES DE MATERNIDAD DE SERVICIO DOMESTICO para liquidación normal de período 08-2022 y ajustes períodos anteriores" }, { "desde": 5, "hasta": 5, "nombre": "BAJADA DE DATOS DE UVHI de Solicitudes de MATERNIDAD y de Reclamos para ajustes" }]
                    },
                    {
                        nombre: 'CONTROL',
                        tipo: 'dia_habil',
                        desde_diahabil: 7,
                        hasta_diahabil: 11,
                        color: '#25cb75',
                        detalle:
                            [{ "desde": 9, "hasta": 10, "nombre": "CONTROL DE DERECHO Y VALORIZACION DE ASIG.POR EMBARAZO/PRENATAL PERIODO 08-2022                                                                                                                                                     PREREQUISITOS: Bajada de datos de ADP a partir de certificados médicos cargados" }, { "desde": 9, "hasta": 10, "nombre": "CONTROL DE DERECHO Y VALORIZACION DE ASIG.POR MATERNIDAD DE SERVICIO DOMESTICO PERIODO 08-2022                                                                                                                                                     PREREQUISITOS: Bajada de datos de UVHI de Solicitudes de Maternidad" }, { "desde": 9, "hasta": 10, "nombre": "CONTROL DE DERECHO Y VALORIZACION de AJUSTES HIJO de períodos anteriores al 06-2019 por RECLAMOS                                                                                                                 PREREQUISITOS: Bajada de datos de ADP a partir de reclamos finalizada" }, { "desde": 9, "hasta": 10, "nombre": "CONTROL DE DERECHO Y VALORIZACION DE AJUSTES EMBARAZO/ PRENATAL de períodos anteriores al 08-2022                                                                                                                                                        PREREQUISITOS: Bajada de datos de ADP de reclamos para ajustes de prenatal y de retroactivos de prenatal" }, { "desde": 9, "hasta": 10, "nombre": "CONTROL DE DERECHO Y VALORIZACION DE AJUSTES MATERNIDAD SERVICIO DOMESTICO de períodos anteriores al 08-2022                                                                                                                                                        PREREQUISITOS: Bajada de datos de UVHI de reclamos de Maternidad de Servicio Doméstico" }, { "desde": 9, "hasta": 10, "nombre": "CONTROL DE DERECHO Y VALORIZACION DEL COMPLEMENTO DEL 20% DE EMBARAZO/PRENATAL POR BAJA DE SOLICITUD                                                                                                          " }, { "desde": 9, "hasta": 11, "nombre": "CONTROL DE DERECHO Y VALORIZACION DEL COMPLEMENTO DEL 20% DE HIJO POR LIBRETAS                                                                                                                                                                       PREREQUISITOS: Recepción, validación y registración en mainframe de archivo de Libretas cargadas en UDAI" }, { "desde": 9, "hasta": 11, "nombre": "CONTROL DE DERECHO Y VALORIZACION DE ASIG.POR AYUDA ESCOLAR EXTRAORDINARIA AÑO LECTIVO 2018 y  años anteriores PREREQUISITOS: Control de derecho y valorización  de Ajustes de hijo de períodos anteriores al 06-2019" }]

                    },
                    {
                        nombre: 'LIQUIDACION',
                        tipo: 'dia_habil',
                        desde_diahabil: 12,
                        hasta_diahabil: 17,
                        color: '#65c9e2',
                        detalle:
                            [{ "desde": 12, "hasta": 12, "nombre": "PRELIQUIDACION  Aplicación de Embargos, Reliquidación de Impagos, Aplicación de Descuentos, Generación de archivo de preliquidación                                                                                                                                                                                                               PREREQUISITOS: Todos los procesos anteriores finalizados  " }, { "desde": 16, "hasta": 16, "nombre": "PROCESOS COMPLEMENTARIOS para generación de información sobre preliquidación" }, { "desde": 17, "hasta": 17, "nombre": "ENVIO DE INFORMACION a GERENCIA DE CONTROL  -------17/08/2022 a las 8hs. " }]
                    },
                    {
                        nombre: 'LIQUIDACION / EMISION',
                        tipo: 'dia_habil',
                        desde_diahabil: 17,
                        hasta_diahabil: 18,
                        color: '#8f82f2',
                        detalle:
                            [{ "desde": 24, "hasta": 24, "nombre": "CIERRE DE SUSPENSIONES CARGADAS POR ONLINE Y RECEPCIÓN ARCHIVO DE SUSPENSIONES de la Gcia. de Control -------24/08/2022 a las 15hs" }, { "desde": 24, "hasta": 24, "nombre": "PROCESOS DE APLICACIÓN DE SUSPENSIONES  y DE LIQUIDACIÓN -------24/08/2022a las 15hs." }, { "desde": 24, "hasta": 24, "nombre": "APERTURA DE CUENTAS" },

                                { "desde": 25, "hasta": 25, "nombre": "ENVIO DE INFORMACION DE APERTURA DE CUENTAS A LOS BANCOS -------25/08/2022 a las 8hs." }, { "desde": 25, "hasta": 26, "nombre": "PROCESOS COMPLEMENTARIOS para generación de información de Liquidación" }, { "desde": 29, "hasta": 30, "nombre": "Actualización base de datos de CUBOS en entorno abierto" }, { "desde": 24, "hasta": 25, "nombre": "EMISION para inicio de pago 9 de Septiembre 2022" }



                            ]
                    },
                    {
                        nombre: 'ENVIO DE APERTURA DE CUENTAS',
                        tipo: 'dia_habil',
                        desde_diahabil: 18,
                        hasta_diahabil: 18,
                        color: '#83a735',
                        detalle: [
                    
                        ]
                        
                    },
                    {
                        nombre: 'ENVIO EMISION A BANCOS/CORREOS',
                        tipo: 'dia_habil',
                        desde_diahabil: 19,
                        hasta_diahabil: 19,
                        color: '#928a2a',
                        detalle:
                            [
                                { "desde": 26, "hasta": 26, "nombre": "ENVIO DE INFORMACION PARA LA PUESTA AL PAGO A BANCOS Y CORREO --------%dd/mm/yyyy% a las 8hs." }

                            ]
                    },
                    {
                        nombre: 'PUESTA A PAGOS',
                        tipo: 'dia_habil',
                        desde_diahabil: 29,
                        hasta_diahabil: 29,
                        color: '#000000',
                        detalle:
                            [
                                { "desde": 29, "hasta": 29, "nombre": "    INICIO DE PAGO                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      " }

                            ]
                    }
                ]
        },{
            nombre: 'SUAF',
            fecha_final: true,
            partes:
                [
                    {
                        nombre: 'PRELIQUIDACION',
                        tipo: 'dia_habil',
                        desde_diahabil: 21,
                        hasta_diahabil: 19,
                        color: '#25cb75'
                    },
                    {
                        nombre: 'CONTROL',
                        tipo: 'dia_habil',
                        desde_diahabil: 19,
                        hasta_diahabil: 14,
                        color: '#65c9e2'
                    },
                    {
                        nombre: 'LIQUIDACION / EMISION',
                        tipo: 'dia_habil',
                        desde_diahabil: 14,
                        hasta_diahabil: 11,
                        color: '#8f82f2'
                    },
                    {
                        nombre: 'ENVIO DE APERTURA DE CUENTAS',
                        tipo: 'dia_habil',
                        desde_diahabil: 11,
                        hasta_diahabil: 11,
                        color: '#83a735'
                    },
                    {
                        nombre: 'ENVIO EMISION A BANCOS/CORREOS',
                        tipo: 'dia_habil',
                        desde_diahabil: 10,
                        hasta_diahabil: 10,
                        color: '#928a2a'
                    },
                    {
                        nombre: 'PUESTA A PAGOS',
                        tipo: 'dia_habil',
                        desde_diahabil: 0,
                        hasta_diahabil: 0,
                        color: '#000000'
                    }
                ]
        }
    ],
    sistema_seleccionadoid: 0,
    messeleccionado: 1
}


let Controlador =
{

    HacerCalendario: function (mes, relmes)
    {
        mes_inicio = parseInt(mes.mes) + parseInt(relmes);
        ano_inicio = mes.ano;
        if (mes_inicio == 0)
        {
            ano_inicio = ano_inicio - 1;
            mes_inicio = 12;
        }
        if (mes_inicio == 13)
        {
            ano_inicio = ano_inicio + 1;
            mes_inicio = 1;
        }
        var fecha_incicio = mes_inicio + "/1/" + ano_inicio;
        mes_ret = { mes: mes_inicio, ano: ano_inicio, semana: [] }
        var dateCont = new Date(fecha_incicio);
            semana = 0;
            // INICIALIZA LOS DIAS HASTA EL PRIMERO DE MES;
            mes_ret.semana[0] = { dias: [] };

           for (var inicont = 0; inicont < dateCont.getDay(); inicont++) {
            mes_ret.semana[0].dias[inicont] = { mostrar_dia: false, tipo_dia: 'previo', eventos: [] };
            }
            while (dateCont.getMonth() == (mes_inicio - 1)) {

                var nuevaFecha = {
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

                if (nuevaFecha.tipo_dia == 'actual')
                {


                    var partes = mes.partes;
                    for (var i = 0; i < partes.length; i++)
                    {
                        if ((nuevaFecha.date >= partes[i].desde) &&
                            (nuevaFecha.date <= partes[i].hasta))
                        {
                            
                            nuevaFecha.eventos[nuevaFecha.eventos.length]
                                = { sistema: mes.sistema, parte: i };
                        }

                    }
                

                }

                mes_ret.semana[semana].dias[dateCont.getDay()] = nuevaFecha;



                if (dateCont.getDay() == 6) {
                    semana++;
                    mes_ret.semana[semana] = { dias: [] };
                }
                dateCont.setDate(dateCont.getDate() + 1);
            }

            if (dateCont.getDay() != 0) {
                for (var inicont = 0; dateCont.getDay() + inicont < 6; inicont++) {
                    mes_ret.semana[semana].dias[dateCont.getDay() + inicont] = { mostrar_dia: false, tipo_dia: 'posterior' };
                }

        }
        return mes_ret;


    },
    CalcularCrono: function (nuevaCrono)
    {
        diashabiles = [];
        nuevaCrono.partes = [];

        if (Datos.sistemas[nuevaCrono.sistema].fecha_final)
        {
            for (var i = 0; i < nuevaCrono.modelo_partes.length; i++)
            {
                var dateCont = new Date(nuevaCrono.fecha_final.replace('-','/'));
                var dia_habil = 0;
                var nuevaParte = { desde: undefined, hasta: undefined, sistema: nuevaCrono.sistema, parte: i, detalle: [] };
                nuevaParte.detalle = nuevaCrono.modelo_partes[i].detalle;
                while (((nuevaParte.desde == undefined) || (nuevaParte.hasta == undefined)) && (dia_habil < 200))
                {

                    if (!EsFeriado(dateCont))
                    {
                        nuevaCrono.diashabiles[dia_habil] = new Date(dateCont);
                
                        if (dia_habil == nuevaCrono.modelo_partes[i].desde_diahabil)
                            nuevaParte.desde = new Date(dateCont);
                        if (dia_habil == nuevaCrono.modelo_partes[i].hasta_diahabil)
                            nuevaParte.hasta = new Date(dateCont);
                        dia_habil++

                    }

                    dateCont.setDate(dateCont.getDate() - 1);

                }
                nuevaCrono.partes[nuevaCrono.partes.length] = nuevaParte;

            }
        }
        else
        {
            for (var i = 0; i < nuevaCrono.modelo_partes.length; i++)
            {
                var dateCont = new Date(nuevaCrono.mes + "/1/" + nuevaCrono.ano);
                var dia_habil = 0;
                var nuevaParte = { desde: undefined, hasta: undefined, sistema: nuevaCrono.sistema, parte: i }
                nuevaParte.detalle = nuevaCrono.modelo_partes[i].detalle;

                while (dia_habil >= nuevaCrono.modelo_partes[i].desde_diahabil)
                {

                    dateCont.setDate(dateCont.getDate() - 1);
                    if (!EsFeriado(dateCont))
                        dia_habil--;
                }

                while ((nuevaParte.hasta == undefined) && (dia_habil < 200)) {

                    if (!EsFeriado(dateCont))
                    {
                        dia_habil++
                        nuevaCrono.diashabiles[dia_habil] = new Date(dateCont);
                        if (dia_habil == nuevaCrono.modelo_partes[i].desde_diahabil)
                            nuevaParte.desde = new Date(dateCont);
                        if (dia_habil == nuevaCrono.modelo_partes[i].hasta_diahabil)
                            nuevaParte.hasta = new Date(dateCont);
                    }

                    dateCont.setDate(dateCont.getDate() + 1);

                }
                nuevaCrono.partes[nuevaCrono.partes.length] = nuevaParte;

            }
        }



    },
    CalcularMes: function (mes, ano, sistema)
        {



            nuevaCrono = {
                mes: mes, ano: ano, sistema: sistema, partes: [],
                modelo_partes:  [],
                editando: false,
                viendoalmanaque: false,
                viendodetalle: false,
                viendodetalle_parte: 0,
                diashabiles: []
            };

            nuevaCrono.fecha_final = Datos.fecha_final_seleccionada;
            for (var cont = 0; cont < Datos.sistemas[sistema].partes.length; cont++)
            {
                nuevaCrono.modelo_partes[cont] = Object.assign({}, Datos.sistemas[sistema].partes[cont]);
            }

            Controlador.CalcularCrono(nuevaCrono);


        if (!Datos.sistemas[Datos.sistema_seleccionadoid].meses)
            Datos.sistemas[Datos.sistema_seleccionadoid].meses = [];
        Datos.sistemas[Datos.sistema_seleccionadoid].meses[Datos.sistemas[Datos.sistema_seleccionadoid].meses.length] = nuevaCrono
        Datos.meses = Datos.sistemas[Datos.sistema_seleccionadoid].meses;
    },
    CalcularMeses: function () {
        
        for (var mescont = 1; mescont <= 12; mescont++)
        {
            Controlador.CalcularMes(mescont, 2022, 0);
        };
    },
    Iniciar: function () {
        InicializarFeriados(Datos.ano);
        Controlador.CalcularMeses();
        //Controlador.AgregarSistema(0);
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
    },
  
}





Controlador.Iniciar();
// Datos.meses[0].viendoalmanaque = true;
let app = new Vue({
    el: '#miApp',
    data: Datos,
    methods:
    {
        GetCalendarios: function (mes) {
            var ret = [];
            ret[0] = Controlador.HacerCalendario(mes, -1);
            ret[1] = Controlador.HacerCalendario(mes, 0);
            ret[2] = Controlador.HacerCalendario(mes, 1);
            return ret;

        },

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
        estilo_evento: function (mes, evento) {
            var retEstilo = {
            };

            retEstilo.borderColor = Datos.sistemas[evento.sistema].partes[evento.parte].color;

            if (mes.editando)
               retEstilo.cursor =  'move';
            return retEstilo;
        },
        sininimo_sistema: function (evento)
        {
            var nombre = Datos.sistemas[evento.sistema].partes[evento.parte].nombre
            
            if (nombre.includes("PREVIA"))
                return "PREVIA";

            if (nombre.includes("ADP"))
                return "ADP";
            if (nombre.includes("PRELI"))
                return "PRELI";
            if (nombre.includes("CONTROL"))
                return "CTRL";
            if (nombre.includes("EMISION"))
                return "EMI";
            if (nombre.includes("APE"))
                return "APE";
            if (nombre.includes("PAGO"))
                return "PAG";
            return nombre;
        },
        nombre_mes: function(mes) {
            var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            return meses[(mes - 1) % 12];
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
        formatDateShort: function (value) {
            let date = new Date(value);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (year == 1)
                return "-";
            return day + '/' + month;
        },
        formatDateDDMM: function (value) {
            let date = new Date(value);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (year == 1)
                return "-";
            return day + ' ' + this.nombre_mes(month);
        },
        cambio_sisstema: function () {
            Datos.meses = Datos.sistemas[Datos.sistema_seleccionadoid].meses;
            this.$forceUpdate();
        },
        Click_EditarCrono: function (crono)
        {
            crono.ultimacrono = Object.assign({}, crono);
            crono.editando = true;
            this.$forceUpdate();
        },
        Click_Cancelar: function (cronoid)
        {
            Datos.meses[cronoid] = Object.assign({}, Datos.meses[cronoid].ultimacrono);
            Datos.meses[cronoid].editando = false;
            this.$forceUpdate();
        },
        Click_VerAlmanaque: function (mes) {
            if (!mes.viendoalmanaque)
                mes.viendoalmanaque = true;
            else
                mes.viendoalmanaque = false;

            this.$forceUpdate();
        },
        Click_VerDetalle: function (mes) {
            mes.viendodetalle = !mes.viendodetalle;
            this.$forceUpdate();

        },
        Click_ConfirmarCrono: function (crono) {

            crono.ultimacrono = undefined;
            crono.editando = false;
            this.$forceUpdate();
        },
        Click_VerDetalleId: function (mes, parteid)
        {
            mes.viendodetalle_parte = parteid;
            this.$forceUpdate();

        },

        Modifico_Crono: function (crono) {
            Controlador.CalcularCrono(crono);
            this.$forceUpdate();

        },

        CrearCrono: function () {
            Controlador.CalcularMes(Datos.messeleccionado, Datos.ano, Datos.sistema_seleccionadoid)
            this.$forceUpdate();
        },

        estilo_range: function (parte) {
        },
        esdrageable: function (mes, evento) {
            return true;
        },
        
        esdropeable: function (mes, evento) {
            return true;
        }

    }
})



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}