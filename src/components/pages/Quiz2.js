import React, { useState } from 'react';


function Quiz2() {
	const questions = [
		{
			questionText: 'Which of these often contain hidden plastic?',
			answerOptions: [
				{ answerText: 'Cheese', isCorrect: true },
				{ answerText: 'Rice', isCorrect: false },
				{ answerText: 'Chewing Gum', isCorrect: false },
			],
		},
		{
			questionText: 'What Happens to plastic waste?',
			answerOptions: [
				{ answerText: 'It is a biodegradable material so it eventually disintegrates', isCorrect: false },
				{ answerText: 'It never fully goes away, it just breaks into little pieces.', isCorrect: true },
				{ answerText: 'There is no such thing as plastic waste, all plastic is recycled', isCorrect: false },
				{ answerText: 'It is dumped in the ocean for fish to eat.', isCorrect: false },
			],
		},
		{
			questionText: "Where does majority of plastic waste end up?",
			answerOptions: [
				{ answerText: 'In the Ocean', isCorrect: true },
				{ answerText: 'Bruned to make Energy', isCorrect: false },
				{ answerText: 'Landfills', isCorrect: false },
				{ answerText: 'Recycled', isCorrect: false },
			],
		},
		{
			questionText: 'How many million tons of plastic are dumped in our oceans every year?',
			answerOptions: [
				{ answerText: '1 Million tons', isCorrect: false },
				{ answerText: '8 Million tons', isCorrect: true },
				{ answerText: '20 Million tons', isCorrect: false },
				{ answerText: '50 Million tons', isCorrect: false },
			],
		},
		{
			questionText: 'How many marine species are harmed by plastic pollution?',
			answerOptions: [
				{ answerText: '52', isCorrect: false },
				{ answerText: '5489', isCorrect: true },
				{ answerText: '1326', isCorrect: false },
				{ answerText: '693', isCorrect: false },
			],
		},
		{
			questionText: 'Why is plastic dangerous for marine life? ',
			answerOptions: [
				{ answerText: 'They mistake it for food and cannot digest it', isCorrect: false },
				{ answerText: 'They can get tangled in it which hinders their ability to swim', isCorrect: false },
				{ answerText: 'Option 1 & Option 2', isCorrect: true },
				{ answerText: "It's not dangerous because they use plastic waste for habitats", isCorrect: false },
			],
		},
		{
			questionText: 'True or False: There are many alternatives to single use plastic products.',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'Approximately, The UK use about how many plastic drinking straws per day?',
			answerOptions: [
				{ answerText: '1.1M', isCorrect: false },
				{ answerText: '1.4M', isCorrect: false },
				{ answerText: '1.8M', isCorrect: true },
				{ answerText: '1.6M', isCorrect: false },
			],
		},
		{
			questionText: 'By what year do scientists predict plastic will outweigh fish in the ocean, pound for pound?',
			answerOptions: [
				{ answerText: '2020', isCorrect: false },
				{ answerText: '2050', isCorrect: true },
				{ answerText: '2250', isCorrect: false },
				{ answerText: '3000', isCorrect: false },
			],
		},
		{
			questionText: 'On average, how long is a plastic bag used by a person before being thrown away?',
			answerOptions: [
				{ answerText: '12 Minutes', isCorrect: true },
				{ answerText: '1 Hour', isCorrect: false },
				{ answerText: '1 Day', isCorrect: false },
				{ answerText: '1 Week', isCorrect: false },
			],
		},

		{
			questionText: 'What percentage of plastic items that go in the recycling bin ACTUALLY get recycled?',
			answerOptions: [
				{ answerText: '9%', isCorrect: true },
				{ answerText: '23%', isCorrect: false },
				{ answerText: '72%', isCorrect: false },
				{ answerText: '1%', isCorrect: false },
			],
		},
		{
			questionText: 'Which continent does most of the plastic go to?',
			answerOptions: [
				{ answerText: 'Asia', isCorrect: true },
				{ answerText: 'North America', isCorrect: false },
				{ answerText: 'South America', isCorrect: false },
				{ answerText: 'Europe', isCorrect: false },
			],
		},
		{
			questionText: "How many people in the world don't have access to proper waste disposal services",
			answerOptions: [
				{ answerText: '2 Billion', isCorrect: false },
				{ answerText: '800 Million', isCorrect: false },
				{ answerText: '3 Billion', isCorrect: true },
				{ answerText: '450 Million', isCorrect: false },
			],
		},
		{
			questionText: 'What industry sector is responsible for the greatest amount of plastic pollution globally?',
			answerOptions: [
				{ answerText: 'Fishing Industry', isCorrect: false },
				{ answerText: 'Oil Industry', isCorrect: false },
				{ answerText: 'Fashion Industry', isCorrect: false },
				{ answerText: 'Food Industry', isCorrect: true },
			],
		},
		{
			questionText: 'Which industry sector is affected the most for plastic',
			answerOptions: [
				{ answerText: 'Food Industry', isCorrect: false },
				{ answerText: 'Oil Industry', isCorrect: false },
				{ answerText: 'Fishing Industry', isCorrect: false },
				{ answerText: 'Fashion Industry', isCorrect: true },
			],
		},
		{
			questionText: 'Why is plastic used so extensively?',
			answerOptions: [
				{ answerText: 'Because it is Durable.', isCorrect: false },
				{ answerText: 'Because it is strong', isCorrect: false },
				{ answerText: 'Because it is cheap.', isCorrect: false },
				{ answerText: 'All of the options', isCorrect: true },
			],
		},
		{
			questionText: 'What do you get in return for recycling plastic in Haiti? (Choose two)',
			answerOptions: [
				{ answerText: 'Cash', isCorrect: false },
				{ answerText: 'Food Tokens', isCorrect: false },
				{ answerText: 'Mobile Phone Recharged', isCorrect: false },
				{ answerText: 'Medicine', isCorrect: true },
			],
		},
		{
			questionText: 'What industry sector is responsible for the greatest amount of plastic pollution globally?',
			answerOptions: [
				{ answerText: 'Fishing Industry', isCorrect: false },
				{ answerText: 'Oil Industry', isCorrect: false },
				{ answerText: 'Fashion Industry', isCorrect: false },
				{ answerText: 'Food Industry', isCorrect: true },
			],
		},
		{
			questionText: 'What industry sector is responsible for the greatest amount of plastic pollution globally?',
			answerOptions: [
				{ answerText: 'Fishing Industry', isCorrect: false },
				{ answerText: 'Oil Industry', isCorrect: false },
				{ answerText: 'Fashion Industry', isCorrect: false },
				{ answerText: 'Food Industry', isCorrect: true },
			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

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
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
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
export default Quiz2;