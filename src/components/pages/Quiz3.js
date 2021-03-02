import React, { useState } from 'react';

function Quiz3 () {
	const questions = [
		{
			questionText: 'How many plastics types are considered the main or most popular types?',
			answerOptions: [
				{ answerText: '7', isCorrect: true },
				{ answerText: '12', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '100', isCorrect: false },
			],
		},
		{
			questionText: 'What do these plastic type abbreviations stand for? 1. PET 2. HDPE 3. PP',
			answerOptions: [
				{ answerText: '1. Polyethylene Terephthalate 2. High-Definition Plastic Elasticity 3. Periplasmic Plastic', isCorrect: false },
				{ answerText: '1. Polyethylene Terephthalate 2. High Density Polyethylene 3. Polypropylene', isCorrect: true },
				{ answerText: '1. Polyethylene Terephthalate 2. High Density Polyurethane 3. Polypipe', isCorrect: false },
			],
		},
		{
			//find code for short-answer text answers
			questionText: "State another popular type of plastic in its abbreviated form.",
			answerOptions: [
				//insert answer options
				 { answerText: '2 Billion', isCorrect: false },
				{ answerText: '800 Million', isCorrect: false },
				{ answerText: '3 Billion', isCorrect: true },
				 { answerText: '450 Million', isCorrect: false },
			],
			
		},	
		{
			//Take a close look at the image below. Use it to answer question a, b and c.
			//Insert code that shows image
			questionText: 'a. What is the number in the centre of the three looped arrows called?',
			answerOptions: [
				{ answerText: 'It is known as the degree of recyclability', isCorrect: false },
				{ answerText: 'It is known as the plastic rank', isCorrect: false },
				{ answerText: 'It is known as the degree of elasticity', isCorrect: false },
				{ answerText: 'It is known as a plastic resin code', isCorrect: true },
			],
		},
		{
			questionText: 'b. What is the purpose of this number in the centre of three looped arrows?',
			answerOptions: [
				{ answerText: 'To let you know if a plastic can be recycled or not', isCorrect: false },
				{ answerText: 'To quickly identify the type of plastic you are dealing with', isCorrect: true },
				{ answerText: 'To inform you on the position of the plastic on the list of main plastic types', isCorrect: false },
				{ answerText: 'To tell you how stretchy a plastic is', isCorrect: false },
			],
		},
		{
			questionText: 'c. What does this specific number represent?',
			answerOptions: [
				{ answerText: 'Rank 4', isCorrect: false },
				{ answerText: 'The plastic cannot be recycled', isCorrect: false },
				{ answerText: 'Low Density Polyethylene (LDPE)', isCorrect: true },
				{ answerText: 'The plastic can be recycled', isCorrect: false },
				{ answerText: 'The plastic has the ability to stretch', isCorrect: false },
			],
		},
		//Insert code for questions that use the multiple-choice grid
		//QUESTIONS:
		//Match the plastic type with what it is used for.
		//What are the difficulty levels of recycling these plastic types?
		//Match these household items to their plastic type.
		{
			questionText: 'What are PET plastics recycled into?',
			answerOptions: [
				{ answerText: 'Garden furniture', isCorrect: false },
				{ answerText: 'Bin liners', isCorrect: false },
				{ answerText: 'Food containers', isCorrect: false },
				{ answerText: 'More PET products', isCorrect: true },
				{ answerText: 'Floor tiles', isCorrect: false },
			],
		},
		{
			questionText: 'What are PP plastics recycled into?',
			answerOptions: [
				{ answerText: 'Garden furniture', isCorrect: false },
				{ answerText: 'Food containers', isCorrect: true },
				{ answerText: 'Bin liners', isCorrect: false },
				{ answerText: 'Floor tiles', isCorrect: false },
				{ answerText: 'More PET products', isCorrect: false },
			],
		},
		{
			//Insert pic for Q
			questionText: 'What does this packaging symbol represent?',
			answerOptions: [
				{ answerText: 'WIDELY RECYCLED', isCorrect: true },
				{ answerText: 'CHECK LOCALLY', isCorrect: false },
				{ answerText: 'MOBIUS LOOP', isCorrect: false },
				{ answerText: 'ALUMINIUM', isCorrect: false },
			],
		},
		{
			//Insert pic for Q
			questionText: 'What does this packaging symbol represent?',
			answerOptions: [
				{ answerText: 'The product is compostable but cannot be be recycled', isCorrect: true },
				{ answerText: 'This product is compostable and can be recycled', isCorrect: false },
				{ answerText: 'This product is not compostable and cannot be recycled', isCorrect: false },
				{ answerText: 'This product is not compostable but can be recycled', isCorrect: false },
			],
		},
		{
			//Insert pic for Q
			questionText: 'What does this packaging symbol represent?',
			answerOptions: [
				{ answerText: 'That the product must be placed in the rubbish bin', isCorrect: false },
				{ answerText: 'That the product is able to be recycled by 20-75% of UK local authorities and you must check with your local council', isCorrect: true },
				{ answerText: 'That the product is able to be recycled by more than 75% of UK local authorities and you must check with your local council', isCorrect: false },
				{ answerText: 'That the product is able to be recycled by less than 20% of UK local authorities and you must check with your local council', isCorrect: false },
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
		<div className='app2'>
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
export default Quiz3;