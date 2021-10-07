// A
var txt = 'abcdfghijklm';
console.log('A posição da letra h na string txt: ' + txt.search('h'));

// B
var txt2 = 'Posso comer bananas o dia todo';
console.log(txt2.slice(12, 20));

// C
var txt3 = 'Olá, mundo';
console.log(txt3.replace('Olá', 'Bem vindo'));

// D
var txt4 = 'Olá, mundo';
console.log(txt4.toUpperCase());

// E
var txt5 = 'Olá, mundo';
console.log(txt5.toLowerCase());

// F
var txt6 = 'Posso comer bananas o dia todo';
console.log('Tamanho da string txt6: ' + txt6.length);

// G
var str1 = 'Hello ';
var str2 = 'World!';
console.log(str1.concat(str2));

// H
var frutas = ['Banana', 'Orange', 'Apple', 'Kiwi'];
frutas.sort();
console.log(frutas);

// I
var frutas2 = ['Banana', 'Orange', 'Apple', 'Kiwi'];
frutas2.pop();
frutas2.shift();
console.log(frutas2);

// J
var frutas3 = ['Banana', 'Orange', 'Apple'];
frutas3.unshift('Uva', 'Caju', 'Kiwi');
console.log(frutas3);

// K
var frutas4 = ['Banana', 'Orange', 'Apple'];
frutas4.push('Pera', 'Manga');
console.log(frutas4);