import { useEffect, useRef, useState } from "react";

export function TypeDelete(phrase, typingDelay, deletingDelay, initiationDelay){
    const [position, setPosition] = useState(0)
    const positionRef = useRef(0)
    
    initiationDelay= phrase.initiationDelay
    deletingDelay = phrase.deletingDelay
    typingDelay = phrase.typingDelay
    phrase = phrase.phrase

    useEffect(() => {

        setTimeout(() => {

            var reachedEnd = false

            const intervalId = setInterval(() => {
                setPosition((value) => value + 1)
                positionRef.current += 1
    
                if(positionRef.current === phrase.length){
                    clearInterval(intervalId)
                    reachedEnd = true
                }
    
                if(reachedEnd){
                    setTimeout(() => {const intervalIdDec = setInterval(() => {
                        setPosition((value) => value - 1)
                        positionRef.current -= 1

                        if(positionRef.current === 0){
                            clearInterval(intervalIdDec)
                        }
                    }, deletingDelay)}, 500)
                }
    
            }, typingDelay)

            return () => {
                clearInterval(intervalId)
            }
        }, initiationDelay)

    }, [phrase, typingDelay, deletingDelay, initiationDelay])

    return phrase.substring(0, position)
}