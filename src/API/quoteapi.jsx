import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/quoteapi.css'

export default function QuoteAPI() {
    const [quote, setQuote] = useState({
        category: "",
        quote: "",
        author: ""
    });
    const getQoute = async () => {
        try {
            const res = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=money`, {headers:{'X-Api-Key': 'dcDeBk+hJ6hixgVDaf+uAg==QGLU4BF3n1bY3lsr'}});
            const result = res.data;
            setQuote(prevState => {
                return { ...prevState, category: result[0].category, quote: result[0].quote, author: result[0].author }
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
    console.log(quote);
    return (
        <div>
            <blockquote>
                <p>{quote.quote}</p>
                <footer>{quote.author}</footer>
            </blockquote>
        </div>
    )

}