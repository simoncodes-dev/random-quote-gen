import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import QuoteBox from './QuoteBox';
import Spinner from './Spinner';

const App = () => {
	const [quotes, setQuotes] = useState([])
	const [loading, setLoading] = useState(true)
	const [quoteReady, setQuoteReady] = useState(false)

	const chosenQuote = useRef({ quote: '', author: '' })
	const getQuotes = () => {
		axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
			.then((response) => {
				const allQuotes = response.data.quotes;
				setQuotes(allQuotes)
				setLoading(false)
			}).catch(error => console.error(`Error: ${error}`))
	}

	const pickQuote = () => {
		const randomQuoteIndex = Math.floor(Math.random() * quotes.length)
		return randomQuoteIndex;
	}

	useEffect(() => {
		if (loading) {
			getQuotes();
		} else {
			chosenQuote.current = quotes[pickQuote()];
			console.log(chosenQuote)
			setQuoteReady(true)
		}
	}, [loading, quoteReady])

	const getNewQuote = () => {
		console.log("testing")
		setQuoteReady(false)
	}

	return (
		<div className='container-fluid' id='app-container'>
			{!quoteReady ? <Spinner /> : <QuoteBox newQuoteHandler={getNewQuote} quote={chosenQuote.current} />}
		</div>
	)
}

export default App;
