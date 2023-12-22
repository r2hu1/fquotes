"use client";
import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

export default function ShareBtn() {
    return (
        <Button size="icon" onClick={() => { navigator.share({ url: location.href, title: document.title, text: document.title }) }}><Share2 className="w-5 h-5" /></Button>
    );
};