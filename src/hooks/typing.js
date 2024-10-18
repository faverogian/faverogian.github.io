import { useEffect, useRef, useState } from "react";

export function TypingEffect(phrase, delay, initiationDelay){
    const [position, setPosition] = useState(0)
    const positionRef = useRef(0)

    useEffect(() => {
        setTimeout(() => {
            const intervalId = setInterval(() => {
                setPosition((value) => value + 1)
                positionRef.current += 1
                if(positionRef.current === phrase.length){
                    clearInterval(intervalId)
                }
            }, delay)
            
            return () => {
                clearInterval(intervalId)
            }
        }, initiationDelay)
    },[phrase, delay, initiationDelay])

    return phrase.substring(0, position)
}