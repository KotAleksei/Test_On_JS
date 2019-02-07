'use strict'

let QUIZ = {
	'name' : 'WebDev QUIZ',
	'choise quiz': 'Выберете направление по которому хотите пройти тест',
	'question for': ['Back-end', 'Front-end']
},

BE_Questions = [ 
	{    
		'numberOfQuestion': 1,
		'title question': 'Каков результат выполнения у данного скрипта:',
		'code': '<?php \n $x = 5; \n echo "Переменная $x = 5"; \n ?>',
		'answer': {
			a: 'Переменная x = 5',
			b: 'Переменная 5 = 5',
			c: 'Переменная $x = 5',
			d: 'Ошибка, поскольку строки с переменными должны быть всегда в одинарных кавычках.'
		},
		'correct answer': 'b'
	}, 
	{
		'numberOfQuestion': 2,
		'title question': 'Как сделать редирект (например, на google.ru) на PHP?',
		'answer': {
			a: 'document.location = “http://google.ru”;',
			b: 'header(“Location: http://google.ru”);',
			c: 'location.href = “http://google.ru”;',
			d: 'header(“Redirect: http://google.ru”);'
		},
		'correct answer': 'b'
	}, 
	{
		'numberOfQuestion': 3,
		'title question': 'Какая разница между равенством и эквивалентностью?',
		'answer': {
			a: 'Никакой разницы нет.',
			b: 'Знак эквивалентности проверяет лишь значения операндов, а знак равенства значения и их типы.',
			c: 'Знак эквивалентности работает лишь для строк, а знак равенства применим к любым типам.',
			d: 'Знак равенства проверяет лишь значения операндов, а знак эквивалентности значения и их типы.'
		},
		'correct answer': 'd'
	},
	{
		'numberOfQuestion': 4,
		'title question': 'При попытке выполнить следующий код возникла ошибка. С чем она связана?',
		'code' : '<?php \n echo "Привет"; \n session_start(); \n ?>',
		'answer': {
			a: 'Функции session_start() не существует, правильная функция – start_session().',
			b: 'Нельзя выводить информацию до начала сессии.',
			c: 'После начала сессии необходимо её использовать, а в коде она никак не используется.',
			d: 'В этом коде нет ошибок.'
		},
		'correct answer': 'b'
	}, 
	{
		'numberOfQuestion': 5,
		'title question': 'Что выведет скрипт?',
		'code' : '<?php \n function myfunc(&$a) { \n $a++; \n } \n  $b = 5; \n  myfunc($b); \n  echo $b; \n ?>',
		'answer': {
			a: '5',
			b: 'Ошибку из-за лишнего символа “&” перед именем переменной в функции.',
			c: '56',
			d: '6'
		},
		'correct answer': 'd'
	}, 
	{
		'numberOfQuestion': 6,
		'title question': 'Какая функция в PHP позволяет найти вхождение подстроки?',
		'answer': {
			a: 'str_repeat()',
			b: 'strtok()',
			c: 'strpos()',
			d: 'substr()'
		},
		'correct answer': 'c'
	}, 
	],
	FE_Questions = [ 
	{    
		'numberOfQuestion': 1,
		'title question': 'Что выведет выражение ниже?',
		'code': 'let a = new Array(1,2), b = new Array(3); \n alert(a[0] + b[0]);',
		'answer': {
			a: '1',
			b: '4',
			c: 'undefined',
			d: 'NaN'
		},
		'correct answer': 'd'
	}, 
	{
		'numberOfQuestion': 2,
		'title question': 'Объявлена функция:',
		'code': 'function F() {}',
		'question': 'Верно ли, что F instanceof Function?',
		'answer': {
			a: 'Да',
			b: 'Нет'
		},
		'correct answer': 'a'
	}, 
	{
		'numberOfQuestion': 3,
		'title question': 'Сколько параметров можно передать функции ?',
		'answer': {
			a: 'Ровно столько, сколько указано в определении функции.',
			b: 'Сколько указано в определении функции или меньше.',
			c: 'Сколько указано в определении функции или больше.',
			d: 'Любое количество.'
		},
		'correct answer': 'd'
	},
	{
		'numberOfQuestion': 4,
		'title question': 'Чему равна сумма?',
		'code': '[] + 1 + 2',
		'answer': {
			a: '1',
			b: 'NaN',
			c: 'undefined',
			d: '12'
		},
		'correct answer': 'd'
	},
	{
		'numberOfQuestion': 5,
		'title question': 'Переменные apple и Apple (с большой буквы) – это одна и та же или разные?',
		'answer': {
			a: 'Одна и та же.',
			b: 'Разные',
			c: 'С большой буквы переменные называть нельзя.',
			d: 'Слово «apple» является зарезервированным, нельзя использовать.'
		},
		'correct answer': 'b'
	},
	{
		'numberOfQuestion': 6,
		'title question': 'Чему равно это выражение?',
		'code': '[].push(1,2).unshift(3).join()',
		'answer': {
			a: '3,1',
			b: '1,2,3',
			c: '3,1,2',
			d: 'В коде ошибка.'
		},
		'correct answer': 'd'
	},
	{
		'numberOfQuestion': 7,
		'title question': 'Что выведет этот код?',
		'code': 'alert( +"Infinity" );',
		'answer': {
			a: 'Infinity',
			b: 'NaN',
			c: '0',
			d: 'Будет ошибка.'
		},
		'correct answer': 'a'
	},
	{
		'numberOfQuestion': 8,
		'title question': 'Чему равен typeof null в режиме use strict?',
		'answer': {
			a: 'null',
			b: 'undefined',
			c: 'object',
			d: 'string'
		},
		'correct answer': 'c'
	},
	{
		'numberOfQuestion': 9,
		'title question': 'Сработает ли вызов функции до объявления в этом коде:',
		'code': 'sayHi(); \n function sayHi() { \n alert("Hello"); \n}',
		'answer': {
			a: 'Да, сработает.',
			b: 'Нет, вызов должен стоять после объявления.'
		},
		'correct answer': 'a'
	},
	{
		'numberOfQuestion': 10,
		'title question': 'Чему равно 2 && 1 && null && 0 && undefined ?',
		'answer': {
			a: '2',
			b: '1',
			c: 'null',
			d: 'false'
		},
		'correct answer': 'c'
	},	
		];
function createQUIZ () {
	let mainDiv = document.createElement('div');
	document.body.append(mainDiv);
	mainDiv.className = 'main_wrapper';
	let num = 0,
		result = 0;
	function renderGreetingPage() {
			let divEl = document.createElement('div'),
				tittleEl = document.createElement('h2'),
				imgEl = document.createElement('img'),
				choiseTextEl = document.createElement('p'),
				choiseEl = document.createElement('div'),
				choiseBE_El = document.createElement('div'),
				choiseFE_El = document.createElement('div'),
				btnBlockEl = document.createElement('div'),
				btnEl = document.createElement('button');


				mainDiv.append(divEl);
				divEl.append(tittleEl, imgEl, choiseTextEl, choiseEl, btnBlockEl);
				choiseEl.append(choiseBE_El, choiseFE_El);
				btnBlockEl.append(btnEl);

				tittleEl.innerText = QUIZ.name;
				choiseTextEl.innerText = QUIZ['choise quiz'];
				choiseBE_El.innerText = QUIZ['question for'][0];
				choiseFE_El.innerText = QUIZ['question for'][1];
				btnEl.innerText = 'Начать тест';
				imgEl.src = 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

				divEl.classList.add('main_tittle');
				choiseEl.classList.add('main_tittle--choises');
				choiseBE_El.className = 'choise';
				choiseFE_El.className = 'choise';


			if(!divEl.querySelector('.checked'))
				btnBlockEl.className = 'disable';

			choiseBE_El.addEventListener('click', function() {
				btnBlockEl.removeAttribute('class');
				choiseBE_El.className = 'checked BE';
				if(choiseFE_El)
					choiseFE_El.className = 'choise';
			});

			choiseFE_El.addEventListener('click', function() {
				btnBlockEl.removeAttribute('class');
				choiseFE_El.className = 'checked FE';
				if(choiseBE_El)
					choiseBE_El.className = 'choise';
			});

			btnEl.addEventListener('click', function(){
				divEl.remove();
				
				if(divEl.querySelector('.FE')){
					renderQuestions(FE_Questions);
				}
				else
					renderQuestions(BE_Questions);
			});
	}		

	function renderQuestions(array) {
				let currentQuestion = num,
				 	numberOfQuestions = array.length,
				 	correctAnswer = array[currentQuestion]['correct answer'],
				 	textAfterFails = array[currentQuestion].answer[correctAnswer],
				 	code = array[currentQuestion].code,
				 	question = array[currentQuestion].question;
				 	

				let divEl = document.createElement('div'),
					numberOfQuestionEl = document.createElement('p'),
					questionEl = document.createElement('p'),
					answersEl = document.createElement('div'),
					btnContainerEl = document.createElement('div'),
					btnEl = document.createElement('button');
					
					


					mainDiv.append(divEl);
					divEl.append(numberOfQuestionEl,questionEl, answersEl, btnContainerEl);
					btnContainerEl.append(btnEl);

					divEl.className = 'page_questions';	
					numberOfQuestionEl.className = 'number_of_question';
					
					
					numberOfQuestionEl.innerText = `${currentQuestion+1} \\ ${numberOfQuestions}`;
					questionEl.innerText = array[currentQuestion]['title question'];
					btnEl.innerText = 'Дальше';			
					
					// если в обьекте есть свойство code тогда создаем ноду и добавляем его в DOM
					if(code) {
						let codeEl = document.createElement('code');
						questionEl.after(codeEl);
						codeEl.className = 'code';
						codeEl.innerText = code;
						if(question) {
							let questionEl = document.createElement('p');
							codeEl.after(questionEl);
							questionEl.innerText = question;
						}
					}
					else {
						let hrEl = document.createElement('hr');
						questionEl.after(hrEl);
					}

					if(!divEl.querySelector('.error') || !divEl.querySelector('.succes'))
						btnContainerEl.className = 'disable';

					// создание непостредственно вопросов
					for(let key in array[currentQuestion]['answer']) {
						let answer = document.createElement('div');
							
						answersEl.append(answer);
						answer.innerText = array[currentQuestion]['answer'][key];
						answer.className = 'choise';
						answer.id = key;

						// события при выборе одного из ответов
						answer.addEventListener('click', function(){
							btnContainerEl.removeAttribute('class');
							answersEl.classList.add('disable');

							if( correctAnswer === key){
								answer.className = 'succes';
								++result;
							}
							else {
								answer.className = 'error';
								nodeCorrectAnswer.className = 'succes';
								// answer.innerText += `\n Правильный ответ ${textAfterFails}`;
								
							}
						});
					}

					let nodeCorrectAnswer = document.getElementById(correctAnswer);


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
	renderGreetingPage();
}
createQUIZ();