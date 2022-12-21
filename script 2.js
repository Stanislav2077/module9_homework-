	/* Этап 1. Подготовка данных */

	// JSON, который мы будем парсить
const jsonString = `
{
	"list": [
	 {
	  "name": "Petr",
	  "age": "20",
	  "prof": "mechanic"
	 },
	 {
	  "name": "Vova",
	  "age": "60",
	  "prof": "pilot"
	 }
	]
   }
   `;

	/* Этап 2. Запись данных в  объект */
function transformJson(strJson) {


	let data = JSON.parse(strJson);

	let list = data.list;

	let result = {list: []};
	let objList = new Object();

	/* Этап 3. Получение данных */

	list.forEach(function(elem) {
		objList = elem;

		result.list.push(objList);

	});
	console.log(result);
}
transformJson(jsonString);
