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





