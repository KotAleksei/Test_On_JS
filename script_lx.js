'use strict'

let QUIZ = {
	'name' : 'Тест доктора',
	'tittle quiz': 'Профессия врач чем-то подобна копилке, копилке опыта и знаний, так как специалисту любого медицинского направления необходимо постоянно пополнять свой теоретический багаж. Этот тест поможет проверить ваши знания.',
	'choise quiz': 'Выбирете за кого хотите пройти тест',
	'question for': ['Глав врач', 'Врач']
},
// MD => Main Doctor
MD_Questions = [ 
	{    
		'numberOfQuestion': 1,
		'name': 'question1',
		'title question': 'Что из этого не помогает при лечении простуды?',
		'question': 'body question2',
		'answer': {
			a: 'Питьё',
			b: 'Антибиотики',
			c: 'Постельный режим',
			d: 'Водка'
		},
		'correct answer': 'b'
	}, 
	{
		'numberOfQuestion': 2,
		'name': 'question2',
		'title question': 'Частота сердечных сокращений 60–80 ударов в минуту считается...',
		'question': 'body question2',
		'answer': {
			a: 'Пониженной',
			b: 'Повышенной',
			c: 'Нормальной',
			d: 'Водка'
		},
		'correct answer': 'd'
	}, 
	{
		'numberOfQuestion': 3,
		'name': 'question3',
		'title question': 'Сжигаем ли мы калории во время сна?',
		'question': 'body question3',
		'answer': {
			a: 'Да',
			b: 'Нет',
			c: 'Может быть',
			d: 'Зависит от веса'
		},
		'correct answer': 'a'
	}],
	RD_Questions = [ 
	{    
		'numberOfQuestion': 1,
		'name': 'question1',
		'title question': 'Что из этого не относится к основным физиологическим показателям?',
		'question': 'body question2',
		'answer': {
			a: 'Цвет волос',
			b: 'Температура тела',
			c: 'Пульс'
		},
		'correct answer': 'b'
	}, 
	{
		'numberOfQuestion': 2,
		'name': 'question2',
		'title question': 'Сколько всего существует групп крови?',
		'question': 'body question2',
		'answer': {
			a: '3 (0, А, В)',
			b: '4 (0, А, В, АВ)',
			c: '2 (0, А)',
			d: '5 (A, B, C, D)'
		},
		'correct answer': 'b'
	}, 
	{
		'numberOfQuestion': 3,
		'name': 'question3',
		'title question': 'Как называется прозрачная мембрана, которая проводит свет к сетчатке глаза?',
		'question': 'body question3',
		'answer': {
			a: 'Роговица',
			b: 'Ресница',
			c: 'Хрусталик',
			d: 'Не один из перечисленных не правильный'
		},
		'correct answer': 'a'
	},
	{
		'numberOfQuestion': 4,
		'name': 'question4',
		'title question': 'Где расположены близнецовые мышцы?',
		'question': 'body question3',
		'answer': {
			a: 'В груди',
			b: 'В тазу',
			c: 'В плечах',
			d: 'В пятке'
		},
		'correct answer': 'b'
	},
	{
		'numberOfQuestion': 5,
		'name': 'question5',
		'title question': 'Какой самый точный способ измерить внутреннюю температуру тела?',
		'question': 'body question3',
		'answer': {
			a: 'Под мышкой',
			b: 'Ректально',
			c: 'Под языком',
			d: 'Не один из перечисленных не правильный'
		},
		'correct answer': 'a'
	}
		];

let mainDiv = document.createElement('div');
document.body.append(mainDiv);
mainDiv.className = 'main_wrapper';
let num = 0,
	result = 0;
function renderGreetingPage() {
		let divEl = document.createElement('div'),
			tittleEl = document.createElement('h2'),
			textTittleEl = document.createElement('p'),
			imgEl = document.createElement('img'),
			choiseTextEl = document.createElement('p'),
			choiseEl = document.createElement('div'),
			choiseMD_El = document.createElement('div'),
			choiseRD_El = document.createElement('div'),
			btnBlockEl = document.createElement('div'),
			btnEl = document.createElement('button');


			mainDiv.append(divEl);
			divEl.append(tittleEl, textTittleEl, imgEl, choiseTextEl, choiseEl, btnBlockEl);
			choiseEl.append(choiseMD_El, choiseRD_El);
			btnBlockEl.append(btnEl);

			tittleEl.innerText = QUIZ.name;
			textTittleEl.innerText = QUIZ['tittle quiz'];
			choiseTextEl.innerText = QUIZ['choise quiz'];
			choiseMD_El.innerText = QUIZ['question for'][0];
			choiseRD_El.innerText = QUIZ['question for'][1];
			btnEl.innerText = 'Начать тест';
			imgEl.src = 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

			divEl.classList.add('main_tittle');
			choiseEl.classList.add('main_tittle--choises');
			choiseMD_El.className = 'choise';
			choiseRD_El.className = 'choise';


		if(!divEl.querySelector('.checked'))
			btnBlockEl.hidden = true;

		choiseMD_El.addEventListener('click', function() {
			btnBlockEl.hidden = false;
			choiseMD_El.className = 'checked MD';
			if(choiseRD_El)
				choiseRD_El.className = 'choise';
		});

		choiseRD_El.addEventListener('click', function() {
			btnBlockEl.hidden = false;
			choiseRD_El.className = 'checked RD';
			if(choiseMD_El)
				choiseMD_El.className = 'choise';
		});

		btnEl.addEventListener('click', function(){
			divEl.remove();
			
			if(divEl.querySelector('.RD')){
				renderQuestions(RD_Questions);
			}
			else
				renderQuestions(MD_Questions);
		});
}		

function renderQuestions(array) {
			let currentQuestion = num,
			 	numberOfQuestions = array.length;


			let divEl = document.createElement('div'),
				numberOfQuestionEl = document.createElement('p'),
				questionEl = document.createElement('p'),
				imgEl = document.createElement('img'),
				answersEl = document.createElement('div'),
				btnContainerEl = document.createElement('div'),
				btnEl = document.createElement('button');
				

				mainDiv.append(divEl);
				divEl.append(numberOfQuestionEl,questionEl, imgEl, answersEl, btnContainerEl);
				btnContainerEl.append(btnEl);

				divEl.className = 'page_questions';	
				numberOfQuestionEl.className = 'number_of_question';
				imgEl.src = 'https://images.pexels.com/photos/721166/pexels-photo-721166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
				
				numberOfQuestionEl.innerText = `${currentQuestion+1} \\ ${numberOfQuestions}`;
				questionEl.innerText = array[currentQuestion]['title question'];
				btnEl.innerText = 'Дальше';			
					

				if(!divEl.querySelector('.error') || !divEl.querySelector('.succes'))
					btnContainerEl.hidden = true;

				// создание непостредственно вопросов
				for(let key in array[currentQuestion]['answer']) {
					let answer = document.createElement('div'),
						correctAnswer = array[currentQuestion]['correct answer'],
						nodeCorrectAnswer = document.getElementById(correctAnswer);

					answersEl.append(answer);
					answer.innerText = array[currentQuestion]['answer'][key];
					answer.className = 'choise';
					answer.id = key;


					// события при выборе одного из ответов
					answer.addEventListener('click', function(){
						btnContainerEl.hidden = false;
						answersEl.classList.add('disable');
						if( correctAnswer === key){
							answer.className = 'succes';
							++result;
						}
						else {
							answer.className = 'error';
							answer.innerText += `\n Ошибка ёпта`;
							nodeCorrectAnswer.className = 'succes';
						}
					});
				}


			btnEl.addEventListener('click', function(){
				divEl.remove();
				if (num < numberOfQuestions - 1) {
					renderQuestions(array,++num);
				}
				else {
					renderResults(array,result);
				}
			});
}
function renderResults(array,sumResult) {
	let divEl = document.createElement('div'),
		tittleEl = document.createElement('h2'),
		resultEl = document.createElement('h2'),
		imgEl = document.createElement('img'),
		choiseEl = document.createElement('div'),
		btnRetryContainerEl = document.createElement('div'),
		btnRetryEl = document.createElement('button'),
		btnEndTestContainerEl = document.createElement('div'),
		btnEndTestEl = document.createElement('button');

		mainDiv.append(divEl);
		divEl.append(tittleEl);
		divEl.append(resultEl);
		divEl.append(imgEl);
		divEl.append(choiseEl);

		choiseEl.append(btnRetryContainerEl);
		btnRetryContainerEl.append(btnRetryEl);

		choiseEl.append(btnEndTestContainerEl);
		btnEndTestContainerEl.append(btnEndTestEl);
		imgEl.src = 'https://images.pexels.com/photos/1089550/pexels-photo-1089550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
		divEl.className = 'page_result';
		resultEl.className = 'page_result--results';
		choiseEl.className = 'result_choise';
		tittleEl.innerText = 'Ваш результат';
		resultEl.innerText = `${sumResult} \\ ${array.length}`;
		btnRetryEl.innerText = 'Повторить тест';
		btnEndTestEl.innerText = 'Завершить тест';
		btnRetryEl.addEventListener('click',function (){
			divEl.remove();
			num = 0;
			result = 0;
			renderGreetingPage();
		});
		btnEndTestEl.addEventListener('click', function(){
			divEl.remove();
			haveANiceDay();
		});
}
function haveANiceDay () {
	let titleFinish = document.createElement('h2');

	mainDiv.append(titleFinish);
	titleFinish.innerText = 'Have a nice day';
	titleFinish.className = 'finish';
}
function sortRandom (a,b) {
	return Math.random() - 0.6;
}

renderGreetingPage();

