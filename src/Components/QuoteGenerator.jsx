import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function QuoteGenerator() {

    const base_url = 'https://dummyjson.com/quotes'

    const [quote, setQuote] = useState([])
    const [dispquote, setDispquote] = useState({
        quote: '',
        author: '',
    })

    function getRandomInt() {
        return Math.floor(Math.random() * 30);
    }

    // API Fetching
    const fetchdata = async () => {
        const response = await fetch(base_url)
            .then(response => response.json())
            .then(quotes => setQuote(quotes.quotes));
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const generateQuote = (e) => {
        let outputQuote = quote[getRandomInt()];
        setDispquote({
            quote: (`" ${outputQuote.quote} "`),
            author: (`- ${outputQuote.author}`),
        });
    }

    return (
        <div className='m-5 p-5'>
            <div className='m-5 p-5'>
                <center>
                    <div className="m-3 p-3 border rounded-3 w-75" style={{ backgroundColor: 'lightblue', height: '163px' }}>
                        <MDBBtn onClick={e => generateQuote(e)}>Generate Quote</MDBBtn>
                        <br /><br />
                        <p>{dispquote.quote}</p>
                        <p>{dispquote.author}</p>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default QuoteGenerator