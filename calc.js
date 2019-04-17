$('#opacity').hide();

$(document).ready(function(){

    $('#calcular').on('click', function(){
        $('#opacity').fadeIn(200);
        let value = parseInt(document.getElementById("valor").value);
        let people = parseInt(document.getElementById("pessoas").value);
        let percentage = document.getElementById("qualidade").value;
        
        let tipValue = value * percentage;
        let tipPerPerson = tipValue / people;

        let totalValue = value + tipValue;
        let totalValuePerPerson = totalValue / people;

        $('#result').html(" R$ " + tipValue);
        $('#individual').html(" R$ " + tipPerPerson);
        $('#totalResult').html(" R$ " + totalValue);
        $('#totalIndividual').html(" R$ " + totalValuePerPerson);
    })

    $('#opacity').on('click', function(){
        $('#opacity').fadeOut(200);
    })
});