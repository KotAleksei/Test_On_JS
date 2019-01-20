'use strict'

let QUIZ = {
	'name' : 'Doctor QUIZ',
	'tittle quiz': 'Профессия врач чем-то подобна копилке, копилке опыта и знаний, так как специалисту любого медицинского направления необходимо постоянно пополнять свой теоретический багаж. Этот тест поможет проверить ваши знания.',
	'choise quiz': 'Выбирете за кого хотите пройти тест',
	'question for': ['Main doctor', 'Recular doctor']
},
// MD => Main Doctor
MD_Qustions = [ 
	{    
		'numberOfQuestion': 1,
		'name': 'question1',
		'title question': 'MD tittle question1',
		'question': 'body question2',
		'answer': [
			'answer question1_1',
			'answer question1_2',
			'answer question1_3',
			'answer question1_4'
		],
		'correct answer'() {
			return this.answer[0];
		}
	}, 
	{
		'numberOfQuestion': 2,
		'name': 'question2',
		'title question': 'MD tittle question2',
		'question': 'body question2',
		'answer': [
			'answer question2_1',
			'answer question2_2',
			'answer question2_3',
			'answer question2_4'
		],
		'correct answer'() {
			return this.answer[0];
		}
	}, 
	{
		'numberOfQuestion': 3,
		'name': 'question3',
		'title question': 'MD tittle question3',
		'question': 'body question3',
		'answer': [
			'answer question3_1',
			'answer question3_2',
			'answer question3_3',
			'answer question3_4'
		],
		'correct answer'() {
			return this.answer[0];
		}
	}],
	RD_Qustions = [ 
	{    
		'numberOfQuestion': 1,
		'name': 'question1',
		'title question': 'RD tittle question1',
		'question': 'body question2',
		'answer': [
			'answer question1_1',
			'answer question1_2',
			'answer question1_3',
			'answer question1_4'
		],
		'correct answer'() {
			return this.answer[0];
		}
	}, 
	{
		'numberOfQuestion': 2,
		'name': 'question2',
		'title question': 'RD tittle question2',
		'question': 'body question2',
		'answer': [
			'answer question2_1',
			'answer question2_2',
			'answer question2_3',
			'answer question2_4'
		],
		'correct answer'() {
			return this.answer[0];
		}
	}, 
	{
		'numberOfQuestion': 3,
		'name': 'question3',
		'title question': 'RD tittle question3',
		'question': 'body question3',
		'answer': [
			'answer question3_1',
			'answer question3_2',
			'answer question3_3',
			'answer question3_4'
		],
		'correct answer'() {
			return this.answer[0];
		}
	}];

let result = 0;
let num = 0;


function renderGreetingPage() {
	 let div = document.createElement('div'),
	 	tittle_Quiz = document.createElement('h1'),
	 	text_Quiz = document.createElement('p'),
	 	textChoise = document.createElement('p'),
	 	formGreeting = document.createElement('form'),
	 	button_Quiz = document.createElement('button'),
	 	question = QUIZ['question for'];

		for(let i = 0; i < question.length; i++){			
			let	labelInForm = document.createElement('label'),
				inputInForm = document.createElement('input');

			formGreeting.append(labelInForm);
			labelInForm.innerHTML = `${question[i]}`;
			labelInForm.prepend(inputInForm);

					// Устанавливаем атрибуты type и name
			inputInForm.type = 'radio';
			inputInForm.name = 'question';

			if(question[i] === 'Main doctor')
				inputInForm.className = 'choise_MD';
			else 
				inputInForm.className = 'choise_RD';
			inputInForm.classList.add('greeting_input');
		}


	 			// Добавляем в DOM дерево
	 	document.body.append(div);
	 	div.append(tittle_Quiz);
	 	div.append(text_Quiz);
	 	div.append(textChoise);
	 	div.append(formGreeting);
	 	div.append(button_Quiz);

	 	div.className = 'greeting';
	 	button_Quiz.innerHTML = 'Далее';
		tittle_Quiz.innerHTML = QUIZ.name;
		text_Quiz.innerHTML = QUIZ['tittle quiz'];
		textChoise.innerHTML = QUIZ['choise quiz'];


		let choise_MD = div.querySelector('.choise_MD'),
			choise_RD = div.querySelector('.choise_RD'),
			choise = div.querySelectorAll('input');
			
				// при клике на один элемент установить checked в тру, а для другого input  checked в false
		choise_MD.addEventListener('click', function(){
				choise[1].removeAttribute('checked');
				choise[0].setAttribute('checked', 'checked');

		});

		choise_RD.addEventListener('click', function(){
			choise[0].removeAttribute('checked');
			choise[1].setAttribute('checked', 'checked');
		});

		console.log(choise[0].hasAttribute('checked'));
			// При клике на кнопку запускаем ф-ю отрисовки вопроса
		button_Quiz.addEventListener('click',function (){
			div.remove();
			renderQuestions();
		});
}

function renderQuestions () {
	let divEl = document.createElement('div'),
		numOfQuestion = document.createElement('p'),
		tittleQuestion = document.createElement('p'),
		imgEl = document.createElement('img'),
		formEl = document.createElement('form'),
		buttonEl = document.createElement('button'),
		question = MD_Qustions[num].answer;


				// Добавление в DOM дерево
		document.body.append(divEl);
		divEl.append(numOfQuestion);
		divEl.append(tittleQuestion);
		divEl.append(imgEl);
		divEl.append(formEl);
		divEl.append(buttonEl);


		numOfQuestion.innerHTML = `${MD_Qustions[num].numberOfQuestion}/${Object.keys(MD_Qustions).length}`;
		tittleQuestion.innerHTML = `${MD_Qustions[num]['title question']}`;
		buttonEl.innerHTML = 'Далее';

		imgEl.setAttribute('src', 'https://ukranews.com/upload/news/2017/10/19/57f63e70074c7-med05_1200.jpg');
		imgEl.setAttribute('alt', 'medical_instruments');

				// Создание вопроса
		for(let i = 0; i < question.length; i++){
			let divInForm = document.createElement('div'),
				labelInForm = document.createElement('label'),
				inputInForm = document.createElement('input');

			formEl.append(divInForm);
			divInForm.append(labelInForm);
			labelInForm.innerHTML = `${question[i]}`;
			labelInForm.prepend(inputInForm);

					// Устанавливаем атрибуты type и name
			inputInForm.type = 'radio';
			inputInForm.name = 'question';
		}


		buttonEl.addEventListener('click', function() {
			divEl.remove();
			renderQuestions();
		});

		divEl.className = 'main_doctor';
		num++;
}


renderGreetingPage();
