import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/quoteapi.css'

export default function QuoteAPI() {
    const [quote, setQuote] = useState({
        id: "",
        quote: "",
        person: ""
    });

    const getQoute = async () => {
        try {
            const res = await axios.get(`https://motivational-quote-api.herokuapp.com/quotes/random`);
            const result = res.data;
            setQuote(prevState => {
                return { ...prevState, id: result.id, quote: result.quote, person: result.person }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getQoute();
    },[])
    useEffect(() => {
        setTimeout(() => {
            getQoute();
        }, 60000)
    })
    return (
        <div>
            {/* <div>{quote.quote}</div> */}
            <blockquote>
                <p>{quote.quote}</p>
                <footer>{quote.person}</footer>
            </blockquote>
            {/* <div>{quote.person}</div> */}
        </div>
    )

}