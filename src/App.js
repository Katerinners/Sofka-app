import React, { useState } from 'react';

export default function App() {
	const questions = [

	//Ronda 1
		{
			questionText: 'RONDA 1: Dentro de una computadora es la parte fisica que la compone',
			answerOptions: [
				{ answerText: 'Perifericos', isCorrect: false },
				{ answerText: 'Software', isCorrect: false },
				{ answerText: 'Hardware', isCorrect: true },
				{ answerText: 'Dispositivos', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 1: Siglas de CPU',
			answerOptions: [
				{ answerText: 'Computadora Personal Universitaria', isCorrect: false },
				{ answerText: 'Unidad Central de Procesamiento', isCorrect: true },
				{ answerText: 'Unidad de Computadora', isCorrect: false },
				{ answerText: 'Unidad capaz de procesar datos', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 1: ¿Que significa HTML?',
			answerOptions: [
				{ answerText: 'Lenguaje de marcas de hipertextos', isCorrect: true },
				{ answerText: 'Comandos de hipertexto', isCorrect: false },
				{ answerText: 'Hipertexto multimedia', isCorrect: false },
				{ answerText: 'Texto interactivo para web', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 1: ¿Cuál es la extención de archivos hechos en Microsoft Word ??',
			answerOptions: [
				{ answerText: '.pdf', isCorrect: false },
				{ answerText: '.do', isCorrect: false },
				{ answerText: '.txt', isCorrect: false },
				{ answerText: '.docx', isCorrect: true },
			],
		},

		{
			questionText: 'RONDA 1: ¿Cuál de estos no es un navegador de Internet ?',
			answerOptions: [
				{ answerText: 'Chrome', isCorrect: false },
				{ answerText: 'Zafari', isCorrect: false },
				{ answerText: 'Yahoo', isCorrect: true },
				{ answerText: 'Mozilla', isCorrect: false },
			],
		},

		//Ronda 2
		{
			questionText: 'RONDA 2: ¿Qué sistema operativo utilizan los dispositivos creados por Steve Jobs?',
			answerOptions: [
				{ answerText: 'Microsoft', isCorrect: false },
				{ answerText: 'ios', isCorrect: true },
				{ answerText: 'Android', isCorrect: false },
				{ answerText: 'Linux', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 2: ¿Cuantas teclas tiene un teclado estándar de una Pc?',
			answerOptions: [
				{ answerText: '101', isCorrect: true },
				{ answerText: '130', isCorrect: false },
				{ answerText: '105', isCorrect: false },
				{ answerText: '99', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 2: ¿Qué pieza es un periférico de entrada? ',
			answerOptions: [
				{ answerText: 'Memoria', isCorrect: false },
				{ answerText: 'Monitor', isCorrect: false },
				{ answerText: 'Impresora', isCorrect: false },
				{ answerText: 'Microfono', isCorrect: true },
			],
		},

		{
			questionText: 'RONDA 2: Para tener acceso a Internet se tiene que contar con protocolos',
			answerOptions: [
				{ answerText: 'Ichat', isCorrect: false },
				{ answerText: 'WWW', isCorrect: false },
				{ answerText: 'TCP/IP', isCorrect: true },
				{ answerText: 'Redes', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 2: ¿Qué significa las iniciales W.W.W.?',
			answerOptions: [
				{ answerText: 'World Web Wide', isCorrect: false },
				{ answerText: 'Wold Wide Web', isCorrect: true },
				{ answerText: 'Wide Web Worl', isCorrect: false },
				{ answerText: 'Web Wide World', isCorrect: false },
			],
		},

		//Ronda 3
		{
			questionText: 'RONDA 3: ¿Qué porcentaje de adultos en EEUU tenía un teléfono inteligente a principios del 2021?',
			answerOptions: [
				{ answerText: '85%', isCorrect: true },
				{ answerText: '92%', isCorrect: false },
				{ answerText: '67%', isCorrect: false },
				{ answerText: '80%', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 3: Cual es el nombre del tercer fundador de Apple?',
			answerOptions: [
				{ answerText: 'Mark Zuckeberg', isCorrect: false },
				{ answerText: 'Linus Torvalds', isCorrect: false },
				{ answerText: 'Chris Knight', isCorrect: false },
				{ answerText: 'Ronald Wayne', isCorrect: true },
			],
		},

		{
			questionText: 'RONDA 3: En este año se envió el primer mensaje de texto SMS',
			answerOptions: [
				{ answerText: '1995', isCorrect: false },
				{ answerText: '2001', isCorrect: false },
				{ answerText: '1992', isCorrect: true },
				{ answerText: '1997', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 3: Qué sistema operativo de teléfonos inteligentes se usa más?',
			answerOptions: [
				{ answerText: 'iOS', isCorrect: false },
				{ answerText: 'Android', isCorrect: true },
				{ answerText: 'Ambos en igual porcentaje', isCorrect: false },
				{ answerText: 'Ninguna es correcta', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 3: Qué significan las siglas RV o VR en inglés?',
			answerOptions: [
				{ answerText: 'Realidad Virtual', isCorrect: true },
				{ answerText: 'Reproduccion Virtual', isCorrect: false },
				{ answerText: 'Video Realidad', isCorrect: false },
				{ answerText: 'Realidad Vista', isCorrect: false },
			],
		},

		//Ronda 4
		{
			questionText: 'RONDA 4: Qué es Java?',
			answerOptions: [
				{ answerText: 'Un programa', isCorrect: false },
				{ answerText: 'Un algoritmo', isCorrect: false },
				{ answerText: 'Codigo dinamico', isCorrect: false },
				{ answerText: 'Lenguaje de programacion', isCorrect: true },
			],
		},

		{
			questionText: 'RONDA 4: Qué es el PROLOG?',
			answerOptions: [
				{ answerText: 'Pseudocódigo', isCorrect: false },
				{ answerText: 'Una extension', isCorrect: false },
				{ answerText: 'Lenguaje de programación', isCorrect: true },
				{ answerText: 'Codigo', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 4: En que año fue diseñado C++',
			answerOptions: [
				{ answerText: '1975', isCorrect: false },
				{ answerText: '1983', isCorrect: true },
				{ answerText: '1990', isCorrect: false },
				{ answerText: '1980', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 4: Un medio de codificación de texto en el que cada símbolo está representado por 16 bits es...',
			answerOptions: [
				{ answerText: 'Unicode', isCorrect: true },
				{ answerText: 'LZW', isCorrect: false },
				{ answerText: 'ASCII', isCorrect: false },
				{ answerText: 'ZIP', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 4: Qué significa Mhz?',
			answerOptions: [
				{ answerText: 'Megahertz', isCorrect: false },
				{ answerText: 'Milihercios', isCorrect: false },
				{ answerText: 'Macrohercios', isCorrect: false },
				{ answerText: 'Megahercios', isCorrect: true },
			],
		},

		//Ronda 5
		{
			questionText: 'RONDA 5: Cuál de estos sistemas operativos nunca vio la luz?',
			answerOptions: [
				{ answerText: 'Peppermint 10', isCorrect: false },
				{ answerText: 'Q4OS 3', isCorrect: false },
				{ answerText: 'Windows 9', isCorrect: true },
				{ answerText: 'Big Sur', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 5: Cuál es el comando Linux para ver la dirección IP actual?',
			answerOptions: [
				{ answerText: 'ipconfig', isCorrect: false },
				{ answerText: 'ifconfig', isCorrect: true },
				{ answerText: 'ipretrieve', isCorrect: false },
				{ answerText: 'ipconfig /all', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 5: En qué variable se almacena la dirección IP de los usuarios?',
			answerOptions: [
				{ answerText: '$_SESSION', isCorrect: true },
				{ answerText: '$_GLOBALS', isCorrect: false },
				{ answerText: '$_SERVER', isCorrect: false },
				{ answerText: '$_GET', isCorrect: false },
			],
		},
		{
			questionText: 'RONDA 5: Qué tipo de malware es capaz de permitir acceso con privilegios de administrador y de forma oculta y remota a un sistema?',
			answerOptions: [
				{ answerText: 'Gusano', isCorrect: false },
				{ answerText: 'Troyano', isCorrect: false },
				{ answerText: 'Spyware', isCorrect: false },
				{ answerText: 'Rootkit', isCorrect: true },
			],
		},

		{
		questionText: 'RONDA 5: Qué puerto utiliza DNS para intentos de conexión?',
			answerOptions: [
				{ answerText: '21', isCorrect: false },
				{ answerText: '68', isCorrect: false },
				{ answerText: '80', isCorrect: false },
				{ answerText: '53', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore,] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			
		} else (alert ('Respuesta equivocada, por favor vuelve a cargar')); 	
; 
	const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);

			
		}
	
		
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Felicidades! Tu puntaje es {score} de {questions.length}
				
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pregunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
