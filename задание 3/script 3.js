//URL-путь к JSON-файлу
const reqUrl = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440";

//кнопка
const btnGet = document.querySelector('.getList');

//список с годами
const yearList = document.querySelector('.year');

//первая строка таблицы
const tableFirstLine = document.querySelector('.year_tr_first');

//вторая строка таблицы
const tableSecondLine = document.querySelector('.year_tr_second');

//таблица
function DrawTable(yearData) {
	let firstLine = '';
	let secondLine = '';

	for (var key in yearData.sales) {
		console.log(key);
		console.log(yearData.sales[key]);
		const yearCell = `<td>${key}</td>`;
		const yearDataCell = `<td>${yearData.sales[key]}</td>`;
		firstLine = firstLine + yearCell;
		secondLine = secondLine + yearDataCell;
	}

	tableFirstLine.innerHTML = firstLine;
	tableSecondLine.innerHTML = secondLine;
}

//получение данных по выбранному году
function GetYearData(year, yearJSON) {
	const years = JSON.parse(yearJSON);
	for (var i = 0; i < years.length; i++) {
		var currentYear = years[i];
		if (currentYear.year == year) {
			DrawTable(currentYear);
		}
	}
}

//получение данных
function GetData(year, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', reqUrl);
	xhr.send();
	xhr.onerror = function () {
		console.log('Ошибка запроса');
	};
	xhr.onload = function () {
		callback(year, xhr.response);
	};
}

//кнопка с обработчиком события
btnGet.addEventListener('click', () => {
	GetData(yearList.value, GetYearData);
});