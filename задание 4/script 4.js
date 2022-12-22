function pageLoad() {
	resultNode = document.querySelector('.result');
	const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', () => {
	input1Node = Math.round(document.querySelector('.input1').value);
	input2Node = Math.round(document.querySelector('.input2').value);
	if (input1Node >= 100 && input1Node <= 500 
		&& input2Node >= 100 && input2Node <= 500) {
		let url = `https://picsum.photos/${input1Node}/${input2Node}`;
		useRequest(url);
	}
	else {
		const error = `<p>Oдно из чисел вне диапазона от 100 до 500</p>`;
		resultNode.innerHTML = error;
	}
});
}

function useRequest(url) {
	console.log(url);
	fetch(url)
	.then((response) => { 
	const result = response.url;
	console.log('result', result);
	return result;
	})
	.then((data) => { 
		console.log('data', data);
		let cardBlock = `<div class="card">
			<img
			src="${data}" Width="${input1Node}" Height="${input2Node}"
			class="card-image"/>
		</div>`;
	console.log('cardBlock', cardBlock);
	resultNode.innerHTML = cardBlock;
	})
	.catch(() => { console.log('Ошибка!') });  
};

let resultNode;
let input1Node;
let input2Node;
document.addEventListener("DOMContentLoaded", pageLoad);