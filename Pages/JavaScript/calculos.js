// Margem de erro (input)
/*
$(document).ready(function () {
    $('#options-group').change(function (ev) {
        var target = ev.target;
        if (target.id === 'option2') {
            $('#margemErro').removeClass('invisible')
        } else {
            $('#margemErro').addClass('invisible')
        }
    })
})
 */
function abrirTbDescritiva() {
    if(document.getElementById('descritivaEscolha').value == 'nominal'){
        let nomeVariavel = $('input[name="nomeVariavel"]').val();
        let populacao = $('input[name="dadosInp"]')[0];
        let populacaoArray = populacao.value.split(';');
        let agrupamentos = {};
        for(var i = 0;i < populacaoArray.length;i++) {
            let grupo = populacaoArray[i];
            if (typeof (agrupamentos[grupo]) === 'undefined') {
                agrupamentos[grupo] = 1;
            } else {
                agrupamentos[grupo]++;
            }
        }

        document.getElementById('nomeVariavel').innerHTML = nomeVariavel
        //Frequências tabela/cálculo
        let fRDescritivaN = []
        let fRDescritivaS = []
        let FacDescritiva = 0
        let FacDescritivaPercent = 0
        for ( var aux in agrupamentos) {
            if (typeof acm === 'undefined'){
                var acm = `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
                fRDescritivaN.push((agrupamentos[aux]*100)/populacaoArray.length)
                fRDescritivaS.push(aux)
            }else{
                var acm = acm + `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
                document.getElementById('frequencia-descritiva').innerHTML = acm
                fRDescritivaN.push((agrupamentos[aux]*100)/populacaoArray.length)
                fRDescritivaS.push(aux).toString()
            }
        }
        //Cálculo Moda
        var acmModa = 0
        var moda = 0
        for(var aux in agrupamentos){
            if(acmModa === agrupamentos[aux]){
                moda = "Não Existe"
            }
            if(agrupamentos[aux] > acmModa){
                acmModa = agrupamentos[aux]
                moda = aux
            }
        }
        document.getElementById('medidas-tendencia-central').innerHTML = `<tr><td>${moda}</td><td>Não existe</td><td>0</td></tr>`

        var ctx = document.getElementById('myChart');
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: fRDescritivaS,
                datasets: [{
                    label: nomeVariavel,
                    data: fRDescritivaN,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ]
                }]
            },
        });
        document.getElementById('tabela-descritiva').style.display='block'
        document.getElementById('medida-separatriz').style.display='block'
    }



    if (document.getElementById('descritivaEscolha').value == 'ordinal'){

        let nomeVariavel = $('input[name="nomeVariavel"]').val();
        let populacao = $('input[name="dadosInp"]')[0];
        let populacaoArray = populacao.value.split(';');
        let agrupamentos = {};
        for(var i = 0;i < populacaoArray.length;i++) {
            let grupo = populacaoArray[i];
            if (typeof (agrupamentos[grupo]) === 'undefined') {
                agrupamentos[grupo] = 1;
            } else {
                agrupamentos[grupo]++;
            }
        }
        //Ordenação
            for(var chave in agrupamentos) {
                if (chave.length > 0) {
                    let novaDiv = document.createElement('div');
                    novaDiv.setAttribute('class', 'form-group col-12');

                    let novoInput = document.createElement('input');
                    novoInput.setAttribute('class', 'form-control')
                    novoInput.setAttribute('placeholder', `Por favor digite a ordem do valor ${chave}`);
                    novoInput.setAttribute('max', Object.keys(agrupamentos).length);
                    novoInput.setAttribute('type', 'number');

                    novaDiv.appendChild(novoInput);

                    document.getElementById('ordernarInputs').appendChild(novaDiv);
                }
            }
        //Condição para que ordene antes de mostrar a tabela if(){
        document.getElementById('nomeVariavel').innerHTML = nomeVariavel
        //Frequências tabela/cálculo
        let fRDescritivaN = []
        let fRDescritivaS = []
        let FacDescritiva = 0
        let FacDescritivaPercent = 0
        for ( var aux in agrupamentos) {
            if (typeof acm === 'undefined'){
                var acm = `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
                fRDescritivaN.push((agrupamentos[aux]*100)/populacaoArray.length)
                fRDescritivaS.push(aux)
            }else{
                var acm = acm + `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
                document.getElementById('frequencia-descritiva').innerHTML = acm
                fRDescritivaN.push((agrupamentos[aux]*100)/populacaoArray.length)
                fRDescritivaS.push(aux).toString()
            }
        }
        //Cálculo Moda
        var acmModa = 0
        var moda = 0
        for(var aux in agrupamentos){
            if(acmModa === agrupamentos[aux]){
                moda = "Não Existe"
            }
            if(agrupamentos[aux] > acmModa){
                acmModa = agrupamentos[aux]
                moda = aux
            }
        }
        document.getElementById('medidas-tendencia-central').innerHTML = `<tr><td>${moda}</td><td>Não existe</td><td>0</td></tr>`

        document.getElementById('tabela-descritiva').style.display='block'
        document.getElementById('medida-separatriz').style.display='block'

        var ctx = document.getElementById('myChart');
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: fRDescritivaS,
                datasets: [{
                    label: nomeVariavel,
                    data: fRDescritivaN,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ]
                }]
            },
        });
        //Fim da condição }
    }



    if(document.getElementById('descritivaEscolha').value == 'discreta'){
        let nomeVariavel = $('input[name="nomeVariavel"]').val();
        let populacao = $('input[name="dadosInp"]')[0];
        let populacaoArray = populacao.value.split(';');
        let agrupamentos = {};
        for(var i = 0;i < populacaoArray.length;i++) {
            let grupo = populacaoArray[i];
            if (typeof (agrupamentos[grupo]) === 'undefined') {
                agrupamentos[grupo] = 1;
            } else {
                agrupamentos[grupo]++;
            }
        }

        document.getElementById('nomeVariavel').innerHTML = nomeVariavel
        //Frequências tabela/cálculo
        let fRDescritivaN = []
        let fRDescritivaS = []
        let FacDescritiva = 0
        let FacDescritivaPercent = 0
        for ( var aux in agrupamentos) {
            if (typeof acm === 'undefined'){
                var acm = `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
                fRDescritivaN.push((agrupamentos[aux]*100)/populacaoArray.length)
                fRDescritivaS.push(aux)
            }else{
                var acm = acm + `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
                document.getElementById('frequencia-descritiva').innerHTML = acm
                fRDescritivaN.push((agrupamentos[aux]*100)/populacaoArray.length)
                fRDescritivaS.push(aux).toString()
            }
        }
        //Cálculo Moda
        var acmModa = 0
        var moda = 0
        for(var aux in agrupamentos){
            if(acmModa === agrupamentos[aux]){
                moda = "Não Existe"
            }
            if(agrupamentos[aux] > acmModa){
                acmModa = agrupamentos[aux]
                moda = aux
            }
        }
        //Cálculo Média
        var acmMedia = 0
        var media = 0
        for(aux in agrupamentos) {
            acmMedia = acmMedia + (Number(aux) * agrupamentos[aux])
        }
        media = acmMedia/populacaoArray.length
        document.getElementById('medidas-tendencia-central').innerHTML = `<tr><td>${moda}</td><td>${media.toFixed(2)}</td><td>0</td></tr>`
        console.log(agrupamentos)

    //Margem de erro
    /*
        var ordemVariavel = $('input[name="ordemVariavel"]');
        var tipoVariavel = $('input[name="options"]:checked')[0];

        if (tipoVariavel.id === 'option2') {
            var margemErro = $('#margemErro');

            var n0 = 1/(margemErro * margemErro);
            var n = (populacaoArray.length * n0) / (populacaoArray + n0)
        }

     */
        document.getElementById('tabela-descritiva').style.display='block'
        document.getElementById('medida-separatriz').style.display='block'

        // Gráfico
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: fRDescritivaS,
                datasets: [{
                    label: nomeVariavel,
                    data: fRDescritivaN,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        // Fim Gráfico
    }



    //************* Continua *************

    if (document.getElementById('descritivaEscolha').value == 'continua') {
        let nomeVariavel = $('input[name="nomeVariavel"]').val();
        let populacao = $('input[name="dadosInp"]')[0];
        let populacaoArray = populacao.value.split(';');
        populacaoArray.sort() // ordenar em ordem alfabetica
        let nTotal = populacaoArray.length; // total de elementos
        let nMin = populacaoArray[0]; //para comparar menor valor
        let nMax = populacaoArray[nTotal - 1] // o maior valor do do vetor
        let agrupamentos = {};
        let acum = 0; //acumulador
        let raiz = Math.sqrt(nTotal)
        raiz = Math.floor(raiz) //raiz de total, arrendodamemto
        for (var i = 0; i < populacaoArray.length; i++) {
            let grupo = populacaoArray[i];
            if (typeof(agrupamentos[grupo]) === 'undefined') {
                agrupamentos[grupo] = 1;
                acum++
            } else {
                agrupamentos[grupo]++;
                acum++
            }
        }

        let intervalo = 0; //intervalo de numeros
        let amplitude = nMax - nMin; //amplitude
        intervalo = Math.floor(amplitude / raiz); //quantos elementos pular
        let valorInicial = Number(nMin);
        let valorVariavel = []; //iria pegar o valor da variavel
        let porcentagemFreContinua = []; // valor da porcentagem
        let factotalPorcentagem = 0;
        let acumFacContinua = 0;

        while (valorInicial <= nMax) {
            var valorFinal = 0;
            let cont = 0;
            let facContinua = 0;
            valorFinal = Number(valorInicial + intervalo)
            for (let i = 0; i < populacaoArray.length; i++) {
                if (populacaoArray[i] >= valorInicial & populacaoArray[i] <= valorFinal) {
                    cont++
                }
            }
            let facPorcentagem = Math.round((cont / acum) * 100)
            factotalPorcentagem = facPorcentagem + acumFacContinua
            facContinua += cont
            nomeVariavel = `<td>${valorInicial}---------${valorFinal}<td>${cont}<td>${Math.round((cont/acum)*100)}<td>${facContinua}<td>${factotalPorcentagem} <br>`
            acumFacContinua += facPorcentagem
            let indice = `${valorInicial} --- ${valorFinal}`
            //Adiciona o indice ao vetor
            valorVariavel.push(indice)
            //Adiciona a porcentagem ao vetor
            porcentagemFreContinua.push(Math.round((cont / acum) * 100))
            valorInicial = valorFinal
        }


        document.getElementById('nomeVariavel').innerHTML = nomeVariavel

        // //Frequências tabela/cálculo
        // let fRDescritivaN = []
        // let fRDescritivaS = []
        // let FacDescritiva = 0
        // let FacDescritivaPercent = 0
        // for (var aux in agrupamentos) {
        //     if (typeof acm === 'undefined') {
        //         var acm = `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
        //         fRDescritivaN.push((agrupamentos[aux] * 100) / populacaoArray.length)
        //         fRDescritivaS.push(aux)
        //     } else {
        //         var acm = acm + `<tr><td>${aux}</td><td>${agrupamentos[aux]}</td><td>${((agrupamentos[aux]*100)/populacaoArray.length).toFixed(2)}%</td><td>${FacDescritiva = FacDescritiva + agrupamentos[aux]}</td><td>${(FacDescritivaPercent = FacDescritivaPercent + ((agrupamentos[aux]*100)/populacaoArray.length)).toFixed(2)}%</td></tr>`
        //         document.getElementById('frequencia-descritiva').innerHTML = acm
        //         porcentagemFreContinua.push(Math.round((cont / acum) * 100))
        //         valorVariavel
        //     }
        // }

        //Cálculo Moda
        var acmModa = 0
        var moda = 0
        for (var aux in agrupamentos) {
            if (acmModa === agrupamentos[aux]) {
                moda = "Não Existe"
            }
            if (agrupamentos[aux] > acmModa) {
                acmModa = agrupamentos[aux]
                moda = aux
            }
        }
        //Cálculo Média
        var acmMedia = 0
        var media = 0
        for (aux in agrupamentos) {
            acmMedia = acmMedia + (Number(aux) * agrupamentos[aux])
        }
        media = acmMedia / populacaoArray.length

        document.getElementById('tabela-descritiva').style.display = 'block'
        document.getElementById('medida-separatriz').style.display = 'block'

        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: valorVariavel,
                datasets: [{
                    label: nomeVariavel,
                    data: porcentagemFreContinua,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }
}

//####################################### Fim continua #######################################

function separatrizSelect() {
    if(document.getElementById('selectSeparatriz').value =='0'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value =='4'){
        document.getElementById('rg4').style.display='block'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if(document.getElementById('selectSeparatriz').value =='5'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='block'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value =='10'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='block'
        document.getElementById('rg100').style.display='none'
    }
    if (document.getElementById('selectSeparatriz').value =='100'){
        document.getElementById('rg4').style.display='none'
        document.getElementById('rg5').style.display='none'
        document.getElementById('rg10').style.display='none'
        document.getElementById('rg100').style.display='block'
    }
}
