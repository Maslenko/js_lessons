		//Комментарий 
		/* Многострочный 
		комментарий */
		document.write("Привет от Мазилы Бабашкина - JavaScript");
		document.write("Ещё раз привет от JavaScript");
		console.log("Привет от JavaScrip для console"); 
		console.info("То же что и log");
		console.error("Привет от JS. Ошибка!");
		console.warn("Уведомление от JS.");

//Переменные 

/*var num; 
num = 5;*/

//var num = 5;
const num = 7; //константу переопределить нельзя
//num = 7; // переопределить значение
console.log("Переменная: " + num + "."); //Объединение строк

var number; 
number = 5; 
console.log("Другая переменая: " + number); 

var word;
word = "Дремучий лес";

var number;
number = true; //boolean 

var num_1 = 3; //число
var num_2 = "3"; //строка. Число + строка = строка 33 

//Математические действия

var number_1 = 5.4; 
var number_2 = 15; 

/* var res = number_1 - number_2; //Способ 1

console.log("Вычитание: " + res); */

/* console.log("Вычитание: " + (number_1 - number_2)); //Способ 2 */

console.log("Результат: " + (number_1 / number_2));

var number_3 = 5; 
//number_3 = number_3 + 7; 
//number_3 += 7;
//number_3 *= 7;
//number_3 -= 7;
//number_3 /= 7;
//number_3 +=1;
//number_3++; //Если нужно добавить единицу 
number_3--; //Если нужно отнять единицу      
console.log("Результат: " + number_3); 

var str_1 = "12"; //Это не числа, это строка
var str_2 = "2"; 
console.log("Результат: " + (str_1 + str_2)); 

var str_1 = Number("12"); //Теперь это число 
var str_2 = Number("2"); 
console.log("Результат: " + (str_1 + str_2)); 

console.log("Math: " + Math.PI); //Выводится число Пи. 
console.log("Math: " + Math.E); //Число Е.
console.log("Math: " + Math.min(4, 6, 8, 1, 12, 3, 2)); //Находит минимальное число.
console.log("Math: " + Math.max(4, 6, 8, 1, 12, 3, 2));   

//Условные операторы 

/* var zahl = 15; 
if(5 == 5) {
	console.log("Правильно") 
} */

var zahl = 15;
var isHasHouse = true; 

if(zahl == 15 && isHasHouse == true) { /* || - Эти две палки обозначают "ИЛИ". && - Обозначают "И". */ 
	console.log("OK");
} else if (zahl < 10) {
	console.log("Ok!"); 
} else if (zahl == 7) {
	console.log ("Равен 7")
} else if (zahl >= 15) {
	console.log("Zahl >= 15!"); 
} else {
	console.log("Error!"); 
}


var stroka = "word"; /* swich - удобен, когда нужно проверить переменную на совпадение. */

switch(stroka) {
	case "4": 
		console.log("Переменная со значением 4");
		break; 
	case "45": 
		console.log("Переменная со значением 45");
		break; 	
	case "word": 
		console.log("Переменная со значением -word-");
		break; 
	default:
		console.log("Default");
		break;  		
}

//Массивы данных. Одномерные и многомерные массивы

var arr = [5, true, "stroka", 5.7, 0, -100];
console.log(arr);
arr[3] = "word"; // было "stroka" - стало "word"
console.log(arr[3]); // 0 - номер элемента в массиве 
console.log(arr.length); // количество элементов 

//Многомерные массивы 

//var matrix = [[], [], []]; //Массив в котором еще три массива 

var matrix = [
	[4, 6, 8], ["stroka", 5.7], [0, -100]
]; 

matrix[1][0] = 90; 
console.log(matrix); 

//Циклы в JavaScript. Операторы циклов 

for(var a = 100; a > 5; a /= 2) { //Цикл будет длиться пока "a" будет больше "5". Переменная каждый цикл будет делится на 2. 
	console.log(a);
}


var j = 0; 
while(j < 10) {
	console.log(j)
	j++;
} 

var b = 1000;
while(b > 100) {
	console.log(b)
	b -= 100; 
}

var x = 0; 
do {
	console.log(x); 
	x++; 
}	while(x < 15);


//for(var d = 10; d <= 20; d += 2) {
//	if(d > 15)
//		break;  

//	console.log(d);
//} 

/* оператор break позволяет полностью выйти из цикла. 
оператор continue позволяет пропустить определенную итерацию. */


for(var d = 10; d <= 20; d++) {
	if(d % 2 == 0)
		continue; 

	console.log(d);
} 

//работа с массивами 

/*var array = [5, 7, 3, 8, 9, "stroka"]; 

for(var f = 0; f < array.length; f++) {
	console.log("Элемент " + f + ": " + array[f]);
}*/

var array = [5, 7, 3, 8, 9, 91]; 

for(var f = 0; f < array.length; f++) {
	console.log("Элемент " + (f + 1) + ": " + array[f]);
}


var array = [5, 7, 3, 8, 9, 91]; 

for(var f = 0; f < array.length; f++) {
	
	array[f] *= 2;
	console.log("Элемент " + (f + 1) + ": " + array[f]);
}

// Всплывающие окна (alert, prompt, confirm)

/* alert ("Задолбали всплывающие окна..");
alert ("Они могут вылазить бесконечно...");
alert ("Та закрой уже!");

//var data = confirm ("Хочешь 1000 евро?");
//console.log(data); 

var data = confirm ("Хочешь 1000 евро?");
if(data) {
	alert("И я хочу."); 
} else {
	alert("А зря..");
}

var weight = prompt("Скажите сколько Вы весите", 0);
console.log(weight); 

var person = null; 
if(confirm("Хотите на Марс?")) {
	person = prompt("Введите Ваше имя");
	alert("Отлично, " + person + "! Летим!");
} else {
	alert("Ну и сидите дома!"); 
} */

//Функции в языке JavaScript

/*function info() {
	console.log("Привет!");
	console.log("Это функция.");
}

info(); //Вызываем функцию. 
info(); //Можно выводить много раз. 
info();*/

/*function info(word) {
	console.log(word + "!"); 
}

function summa(a, b) {
	var res = a + b;
	//console.log(res);
	info(res); //внутри функции можно вызвать другую функцию  
}

info("Можно вставить любое значение"); 
summa(5, 10);*/

/*function summa(mass) {
	var sum = 0; 
	for(var i = 0; i < mass.length; i++) 
		sum += mass[i];
	console.log(sum);  	
}

var massiv = [6, 8, 1];
var massiv_2 = [6, 8, 1, 7, 1, 5, 4];
var massiv_3 = [22, 3, 1983]; 

summa(massiv); 
summa(massiv_2);
summa(massiv_3); */ 

function summa(mass) {
	var sum = 0; 
	for(var i = 0; i < mass.length; i++) 
		sum += mass[i];
	return sum;  	
}

var massiv = [6, 8, 1];
var massiv_2 = [6, 8, 1, 7, 1, 5, 4];
var massiv_3 = [22, 3, 1983]; 

var res = summa(massiv_2); 
console.log("Результат: " + res);  

//Локальные и глобальные переменные (локальная П. видна только внутри функции)

var peremennaya = 10;  

function info() {
	var peremennaya = 20; 
	console.log(peremennaya + " Локальная переменная. Видна только в пределах самой функции."); 
}

info(peremennaya);  

console.log(peremennaya + " Глобальная переменная");

//События и обработчик событий в JavaScript 
var counter = 0; 

function onClickButton(element) {
	alert('Запуск произведён!');
	counter++; 
	console.log(element.name);
	console.log(counter); 
	console.log(element.onclick); 
	element.innerHTML = "Нажал: " + counter; 
	element.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
	element.style.background = "red";
	element.style.color = "blue";   
}

function onInput(element) {
		if(element.value == 'Hello')
			alert("И тебе привет!");
	console.log(element.value); 
}

//Управление HTML и обработка форм при помощи JS

var text = document.getElementById('text');
text.title = "New Text";
console.log(text.title);
text.style.color = "lightgreen";
text.style.backgroundColor = "grey";

//text.innerHTML = "Новые<br>стринги"; //Изменился текст на этот текст. 
//document.getElementById('text').style.color = "blue";  

//var spans = document.getElementsByTagName('span'); 
var spans = document.getElementsByClassName('simple-text'); 

//Формы

for(var e = 0; e < spans.length; e++) {
	console.log(spans[e].innerHTML); 
}

/*function checkForm(el) {
var name = document.getElementById('name').value; 
	console.log(name); 
	return false; //Страница не перезагрузится, пока не будет возвращено true.
}*/

function checkForm(el) {
	var name = el.name.value; 
	console.log(name); 

	return false; 
}










