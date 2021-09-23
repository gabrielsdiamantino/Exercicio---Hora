function Carregar(){
    var titulo = document.getElementById('titulo')
    var horario= document.getElementById('timer');
    var cumprimento = document.getElementById('cumprimento');
    var texto = document.getElementById('texto');
    var foto = document.getElementById('foto');
    var principal = document.getElementById('corpo')
    var bloco =document.getElementById('bloco')
    var container = document.getElementById('case')
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    horario.innerHTML=`${hora} horas e ${minuto} minutos.`;
    
    if(hora>= 0 && hora < 12){
        principal.style.backgroundColor= '#ac814c';
        bloco.style.backgroundColor='#dba988';
        container.style.backgroundColor='#a68f6f';
        horario.style.color='#9a3002';
        cumprimento.style.color='#9a3002';
        texto.style.color='#9a3002';
        titulo.style.color='#4b1a05';
        foto.src="image/manhã.png"
        cumprimento.innerHTML='Bom dia!'
        texto.innerHTML='Mais um dia dado por DEUS! Mais uma chance de fazer o melhor! Que DEUS abençoe esse novo dia, que seja de vitórias e conquistas! '
    } else if(hora>=12 && hora< 18 ){
        principal.style.backgroundColor='#fcaf91';
        bloco.style.backgroundColor='#38211b';
        container.style.backgroundColor='#201513';
        horario.style.color='#956a5a';
        cumprimento.style.color='#956a5a';
        texto.style.color='#956a5a';
        titulo.style.color='#38211b';
        foto.src="image/tarde.png";
        cumprimento.innerHTML='Boa tarde';
        texto.innerHTML='Dando um passo de cada vez, alcançaremos nossos objetivos. Não desista, tenha uma tarde cheia de luz.'
    } else{
        principal.style.backgroundColor='#19414e';
        bloco.style.backgroundColor='#95a8ac';
        container.style.backgroundColor='#0d1518';
        horario.style.color='#fff';
        cumprimento.style.color='#fff';
        texto.style.color='#fff';
        titulo.style.color='#fff';
        foto.src="image/noite.png";
        cumprimento.innerHTML='Boa noite';
        texto.innerHTML='A noite é uma boa oportunidade para descansar, perdoar, esquecer, sonhar e se preparar para as lutas do dia seguinte. Tenha uma boa noite!'
    }; 
}
