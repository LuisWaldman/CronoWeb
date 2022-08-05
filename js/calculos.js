var ListaCronos = [];


function CalculaDesdeHasta()
{
    for (var cont = 0; cont < ListaCronos.length; cont++)
    {

        ListaCronos[cont].desde = undefined;
        ListaCronos[cont].hasta = undefined;

        for (var i = 0; i < ListaCronos[cont].items.length; i++)
        {
            var dateDesde = new Date(ListaCronos[cont].items[i].desde);
            var dateHasta= new Date(ListaCronos[cont].items[i].hasta);

            if (!ListaCronos[cont].desde)
                ListaCronos[cont].desde = dateDesde;
            if (!ListaCronos[cont].hasta)
                ListaCronos[cont].hasta = dateHasta;

            if (ListaCronos[cont].desde > dateDesde)
                ListaCronos[cont].desde = dateDesde;
            if (!ListaCronos[cont].hasta < dateHasta)
                ListaCronos[cont].hasta = dateHasta;
        }

    }

}

function GeneraListaCronos()
{
    //

    var NuevaCrono;

    for (var i = 0; i < detalle2.length; i++)
    {
        detalle[detalle.length] = detalle2[i];
    }
    for (var i = 0; i < detalle.length; i++)
    {
        for (var j = 0; j < detalle[i].detalle.length; j++)
        {
            if ((detalle[i].detalle[j].Desde == '') && (detalle[i].detalle[j].Hasta == '')) {
                if (NuevaCrono) {
                    var valido = true;

                    if (NuevaCrono.nombre.startsWith("FERIAD"))
                        valido = false;

                    if (NuevaCrono.nombre.startsWith("(*)"))
                        valido = false;

                    if (NuevaCrono.nombre.startsWith("UVHI-PERIODO"))
                        valido = false;

                    NuevaCrono.nombre = NuevaCrono.nombre.replace("UVHI-", "");
                    NuevaCrono.nombre = NuevaCrono.nombre.replace("UVHI", "");

                    if (NuevaCrono.nombre.startsWith("PROCESOS PREVIOS"))
                        NuevaCrono.nombre = "PREVIOS";

                    if (NuevaCrono.nombre.includes("BAJADA"))
                        NuevaCrono.nombre = "BAJADA ADP";

                    if (NuevaCrono.nombre.startsWith("CONTROL DE DERECHO"))
                        NuevaCrono.nombre = "CONTROL DERECHO";


                    if (NuevaCrono.nombre.startsWith("CONTROL DE DERECHO"))
                        NuevaCrono.nombre = "CONTROL DERECHO";


                    if (valido)
                        ListaCronos[ListaCronos.length] = NuevaCrono;

                    
                }
                
                NuevaCrono = {
                    nombre: detalle[i].detalle[j].Descripcion,
                    mes: detalle[i].mes,
                    ano: detalle[i].anio,
                    desde: '11-SATURNO',
                    items: []
                }
            }
            else
            {
                NuevaCrono.items[NuevaCrono.items.length] = {
                    nombre: detalle[i].detalle[j].Descripcion,
                    desde: detalle[i].detalle[j].Desde,
                    hasta: detalle[i].detalle[j].Hasta,
                };
            }

        }

        
    }



}
function nombre_mes(mes)
{
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[mes - 1];
}
function GenerarMeses() {

    Datos.meses = [];
    for (ano = 2022; ano > 2011; ano--)
    {
        for (mes = 12; mes > 0; mes--)
        {
            if (!((ano == 2022) && (mes > 8)))
            {
                var resumendelmes;
                for (var i = 0; i < resumen.length; i++) {
                    if ((resumen[i].mes == mes) && (resumen[i].ano == ano))
                        resumendelmes = resumen[i];

                }
                var nuevomes = { mes: mes, ano: ano, nombre: nombre_mes(mes) + " " + ano, cronogramas: [] }

                CronoIncicial = {
                    nombre: 'FECHA DESDE',
                    mes: mes,
                    ano: ano,
                    desde: new Date(),
                    hasta: new Date()
                }
                if (resumendelmes) {
                    CronoIncicial.desde = resumendelmes.liqudiaciondesde;
                    CronoIncicial.hasta = resumendelmes.liqudiaciondesde;

                }


                nuevomes.cronogramas[0] = CronoIncicial;

                for (var cont = 0; cont < ListaCronos.length; cont++) {
                    if ((ListaCronos[cont].mes == mes) && (ListaCronos[cont].ano == ano))
                    {
                        nuevomes.cronogramas[nuevomes.cronogramas.length] = ListaCronos[cont];
                    }
                }


                CronoFinal = {
                    nombre: 'INICIO PAGO',
                    mes: mes,
                    ano: ano,
                    desde: new Date(),
                    hasta: new Date()
                }


                if (resumendelmes) {
                    CronoFinal.desde = resumendelmes.iniciopago;
                    CronoFinal.hasta = resumendelmes.iniciopago;

                }
                nuevomes.cronogramas[nuevomes.cronogramas.length] = CronoFinal;



                Datos.meses[Datos.meses.length] = nuevomes;

            }
        }

    }
}

function GenerarTodo()
{
    GeneraListaCronos();
    CalculaDesdeHasta();

    GenerarMeses();
    Datos.meses[1].cronogramas = Datos.meses[2].cronogramas;
    Datos.meses = Datos.meses.slice(0, 15);
    var sistemasDATA = [];
    sistemasDATA[0] = {
        nombre: 'UVHI', meses: Datos.meses,
        columnas: ['FECHA DESDE', 'PREVIOS', 'BAJADA ADP', 'CONTROL DERECHO', 'PRELIQUIDACION', 'LIQUIDACION Y EMISION', 'INICIO PAGO']

    }

    sistemasDATA[1] = {
        nombre: 'SUAF', 
        columnas: []
    }

    sistemasDATA[2] = {
        nombre: 'PROGRESAR', meses: Datos.meses,
        columnas: ['FECHA DESDE', 'PREVIOS', 'BAJADA ADP', 'CONTROL DERECHO', 'PRELIQUIDACION', 'LIQUIDACION Y EMISION', 'INICIO PAGO']
    }



    sistemasDATA[3] = {
        nombre: 'DESEMPLEO',
        columnas: []
    }

    Datos.sistemas = sistemasDATA;

}
GenerarTodo();