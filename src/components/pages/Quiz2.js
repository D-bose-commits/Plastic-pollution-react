import React, { useState } from 'react';
import Quiz3 from './Quiz3';

function Quiz2() {
	const questions = [
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