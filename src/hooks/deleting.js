import { useEffect, useRef, useState } from "react";

export function DeleteEffect(phrase, delay){
    const [position, setPosition] = useState(phrase.length)
    const positionRef = useRef(phrase.length)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosition((value) => value - 1)
            positionRef.current -= 1
            if(positionRef.current === 0){
                clearInterval(intervalId)
            }
        }, delay)
        
        return () => {
            clearInterval(intervalId)
        }
    }, [delay, phrase])

    return phrase.substring(0, position)
}