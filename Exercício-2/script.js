function clicar(){
    var refeicoes = document.getElementById('refeicoes').value
    switch (refeicoes){
        case 'cafe':
            console.log('Cardápio café');
            break;
        case 'almoco':
            console.log('Cardápio Almoço');
            break;
        case 'jantar':
            console.log('Cardápio Jantar');
            break;
        default:
            console.log('Item inválido');
            break;
    }
}