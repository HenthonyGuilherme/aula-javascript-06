var texto = "1.tesoura corta papel.\n 2.papel cobre veneno.\n 3.pedra esmaga lagarto.\n 4.lagarto corta Spock.\n 5.Spock vaporiza tesoura.\n 6.tesoura decapita Spock.\n 7.lagarto come papel.\n 8.veneno refuta lagarto.\n 9.Spock vaporiza pedra.\n 10.veneno esmaga tesoura";

var troca1  = texto.replace(/lagarto/gi, 'tesoura');
var troca2  = troca1.replace(/Spock/gi, 'papel');
var troca3  = troca2.replace(/vaporiza/gi, 'embrulha');
var troca4  = troca3.replace(/cobre/gi, 'embrulha');
var troca5  = troca4.replace(/decapita/gi, 'corta');
var troca6  = troca5.replace(/come/gi, 'corta');
var troca7  = troca6.replace(/veneno/gi, 'pedra');
var troca8  = troca7.replace(/refuta/gi, 'quebra');

console.log(troca8);