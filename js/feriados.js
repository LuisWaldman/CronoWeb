// JavaScript source code
Feriados = [];
function InicializarFeriados(ano)
{
    Feriados =
        [
            
            { "motivo": "A�o Nuevo", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo", "dia": 1, "mes": 1, "id": "a�o-nuevo" },
            { "motivo": "Carnaval", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Carnaval", "dia": 28, "mes": 2, "id": "carnaval" },
            { "motivo": "Carnaval", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Carnaval", "dia": 1, "mes": 3, "id": "carnaval" },
            { "motivo": "D�a Nacional de la Memoria por la Verdad y la Justicia", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/D%C3%ADa_Nacional_de_la_Memoria_por_la_Verdad_y_la_Justicia", "dia": 24, "mes": 3, "id": "memoria-verdad-justicia" },
            { "motivo": "D�a del Veterano y de los Ca�dos en la Guerra de Malvinas", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/D%C3%ADa_del_Veterano_y_de_los_Ca%C3%ADdos_en_la_Guerra_de_Malvinas", "dia": 2, "mes": 4, "id": "veteranos-malvinas" },
            { "motivo": "Juees Santo Festividad Cristiana", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Viernes_Santo", "dia": 14, "mes": 4, "id": "viernes-santo" },
            { "motivo": "Viernes Santo Festividad Cristiana", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Viernes_Santo", "dia": 15, "mes": 4, "id": "viernes-santo" },
            { "motivo": "D�a del Trabajador", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/D%C3%ADa_Internacional_de_los_Trabajadores", "dia": 1, "mes": 5, "id": "trabajador" },
            { "motivo": "D�a de la Revoluci�n de Mayo", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_de_Mayo", "dia": 25, "mes": 5, "id": "revolucion-mayo" },
       //   { "motivo": "Paso a la Inmortalidad del Gral. Don Mart�n G�emes", "tipo": "trasladable", "original": "17-06", "info": "https://es.wikipedia.org/wiki/Mart%C3%ADn_Miguel_de_G%C3%BCemes", "dia": 17, "mes": 6, "id": "martin-guemes" },
            { "motivo": "Paso a la Inmortalidad del General Manuel Belgrano", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Bandera_(Argentina)", "dia": 20, "mes": 6, "id": "belgrano" },
            { "motivo": "D�a de la Independencia", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_independencia_de_la_Argentina", "dia": 9, "mes": 7, "id": "independencia" },
            { "motivo": "Paso a la Inmortalidad del General Jos� de San Mart�n", "tipo": "trasladable", "original": "17-08", "info": "https://es.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn", "dia": 15, "mes": 8, "id": "san-martin" },
        //  { "motivo": "Feriado Puente Tur�stico", "tipo": "puente", "info": "https://es.wikipedia.org/wiki/Puente_festivo", "dia": 7, "mes": 10, "id": "puente-turistico" },
            { "motivo": "D�a del Respeto a la Diversidad Cultural", "tipo": "trasladable", "original": "12-10", "info": "https://es.wikipedia.org/wiki/D%C3%ADa_del_Respeto_a_la_Diversidad_Cultural_(Argentina)", "dia": 10, "mes": 10, "id": "diversidad" },
            { "motivo": "D�a de la Soberan�a Nacional", "tipo": "trasladable", "original": "20-11", "info": "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Soberan%C3%ADa_Nacional", "dia": 20, "mes": 11, "id": "soberania-nacional" },
            { "motivo": "Feriado Puente Tur�stico", "tipo": "puente", "info": "https://es.wikipedia.org/wiki/Puente_festivo", "dia": 28, "mes": 11, "id": "puente-turistico" },
            { "motivo": "Inmaculada Concepci�n de Mar�a", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Inmaculada_Concepci%C3%B3n", "dia": 8, "mes": 12, "id": "inmaculada-maria" },
        //  { "motivo": "Feriado Puente Tur�stico", "tipo": "puente", "info": "https://es.wikipedia.org/wiki/Puente_festivo", "dia": 9, "mes": 12, "id": "puente-turistico" },
            { "motivo": "Navidad", "tipo": "inamovible", "info": "https://es.wikipedia.org/wiki/Navidad", "dia": 25, "mes": 12, "id": "navidad" },
            


        ];
}

function GetFeriado(dia)
{
    for (var i = 0; i < Feriados.length; i++)
    {
        if (Feriados[i].mes == (dia.getMonth() + 1))
           if (Feriados[i].dia == dia.getDate())
               return Feriados[i];
    }
    return undefined;
}

function EsFeriado(dia) {
    for (var i = 0; i < Feriados.length; i++) {
        if (Feriados[i].mes == (dia.getMonth() + 1))
            if (Feriados[i].dia == dia.getDate())
                return true;
    } 
    return ((dia.getDay() == 0) || (dia.getDay() == 6));
}

function TransformarVector(vector) {

    var ret = [];
    for (var i = 0; i < vector.length; i++) {
        desde = new Date(vector[i].desde);
        hasta = new Date(vector[i].hasta);

        ret[ret.length] = {
            desde: 0,
            hasta: 0,
            nombre: vector[i].nombre
        }

    }
    return ret;
}