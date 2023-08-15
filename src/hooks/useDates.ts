import { useEffect, useState } from "react"

interface State {
    day: string 
    dayComleted: string
    month: string
    year: string
}

const INITIAL_STATE: State = {
    day: "",
    dayComleted: "",
    month: "",
    year: ""
}

enum Days {
    Mon = "Monday",
    Tue = "Tuesday",
    Wed = "Wednesday",
    Thu = "Thursday",
    Fri = "Friday",
    Sat = "Saturday",
    Sun = "Sunday"
}


export function useDates() {
    const [dates, setDates] = useState<State>(INITIAL_STATE)
    
    const getDayComplete = (value: keyDays): string => Days[value]
    
    const handleDate = () => {
        const todaysDate = new Date().toDateString().split(" ")
        const [dayInLetters, month, day, year] = todaysDate
        const dayComleted = getDayComplete(dayInLetters as keyDays)
        setDates({day, dayComleted, month, year})
    }

    useEffect(() => {
        handleDate()
    },[])

    return { dates }
}