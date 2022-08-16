import React from 'react';
import './QuoteBox.css';

const QuoteBox = (props) => {

    console.log(props)
    return (
        <div className='card quote-card' id='quote-box'>
            <figure className='card-header'>
                <i className="fa-solid fa-quote-left" id='left-quote'></i>
                <blockquote className='blockquote' id='text'>
                    <p>{props.quote.quote}</p>
                </blockquote>
                <figcaption className='blockquote-footer' id='author'>{props.quote.author}</figcaption>
                <i className="fa-solid fa-quote-right" id='right-quote'></i>
            </figure>
            <div className='card-body' id='buttons'>
                <a className='btn btn-info' target="_blank" href={`https://twitter.com/intent/tweet?text="${props.quote.quote}%20-%20${props.quote.author}`} id="tweet-quote">
                    <i className="fa-brands fa-twitter" id='tweet-icon'></i>
                </a>
                <button className='btn btn-primary' onClick={props.newQuoteHandler} id="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default QuoteBox;