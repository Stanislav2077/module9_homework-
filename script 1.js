/* Этап 1. Подготовка данных */
// XML, который мы будем парсить

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */

function parserXml(strXml) {
//экземпляр класса DOMParser
	const parser = new DOMParser();
//Парсинг XML
	const xmlDOM = parser.parseFromString(strXml, "text/xml");
//Получение данных
	const listNodes = xmlDOM.querySelector("list");
//Получение данных
	const studentsNodes = listNodes.querySelectorAll("student");
//Создание переменной объекта с массивом
	let result = {list: []};


	/* Этап 3. Запись данных в результирующий объект */

	studentsNodes.forEach((element) => {
		//Создаем объект
		let student = new Object();
		let studentFirstName = element.querySelector("first");
		let studentSecondName = element.querySelector("second");
		let studentAge = element.querySelector("age");
		let studentProf = element.querySelector("prof");
		//создаем, чтобы вытащить оттуда атрибут
		let nameNode = element.querySelector("name");
		let nameLang = nameNode.getAttribute("lang");

		student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
		student.age = studentAge.textContent;
		student.prof = studentProf.textContent;
		student.lang = nameLang;

		result.list.push(student);
	});

	console.log(result)
}

parserXml(xmlString)