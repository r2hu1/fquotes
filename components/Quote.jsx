"use client";
import getQuote from "@/lib/getQuote";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Quotes() {
    const [quotes, setQuotes] = useState(null);
    const [author, setAuthor] = useState(null);
    axios.get('https://api.quotable.io/random')
        .then(function (response) {
            if (quotes == null ) setQuotes(response.data.content);
            if (author == null ) setAuthor(response.data.author);
        })
        .catch(function (error) {
            setQuotes(error);
        });

    return (
        <div className="h-screen grid items-center p-6">
            <div className="bg-secondary max-w-md mx-auto p-8 rounded-lg">
                <div>
                    <p className="text-lg">{quotes}</p>
                    <p className="text-right mt-3 text-md">- {author}</p>
                </div>
            </div>
        </div>
    );
};