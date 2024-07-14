"use client";
import getQuote from "@/lib/getQuote";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Balancer from "react-wrap-balancer";

export default function Quotes() {
    const [quotes, setQuotes] = useState(null);
    const [author, setAuthor] = useState(null);
    axios.get('https://api.quotable.io/random')
        .then(function (response) {
            if (quotes == null) setQuotes(response.data.content);
            if (author == null) setAuthor(response.data.author);
        })
        .catch(function (error) {
            setQuotes(error);
        });

    return (
        <div className="absolute w-full h-full flex items-center justify-center">
            {!quotes ? (
                <div className="px-6 max-w-2xl grid gap-2">
                    <Skeleton className="md:w-[450px] w-60 h-4" />
                    <Skeleton className="md:w-[450px] w-60 h-4" />
                    <Skeleton className="md:w-[450px] w-60 h-4" />
                    <div className="flex justify-end mt-3">
                        <Skeleton className="w-20 h-4" />
                    </div>
                </div>
            ) : (
                <div className="px-6 max-w-2xl">
                    <div>
                        <Balancer ratio={0.00} preferNative={true}>
                            <h2 class="sm:text-3xl text-xl font-medium"><span class="inline-flex bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400">{quotes}</span></h2>
                        </Balancer>
                        <div className="flex justify-end mt-3">
                            <p className="text-gray-400 text-sm">~ {author}</p>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};
