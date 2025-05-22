import React, { useEffect, useState } from "react"

function Clock() {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
    const interval = setInterval(() => {
        setDateTime(new Date())
        }, 1000)

    return () => clearInterval(interval)
    }, [])

    const day = dateTime.getDate().toString().padStart(2, '0')
    const mouth = (dateTime.getMonth() + 1).toString().padStart(2, '0')
    const year = dateTime.getFullYear()

    const hours = dateTime.getHours().toString().padStart(2, '0')
    const minutes = dateTime.getMinutes().toString().padStart(2, '0')
    const seconds = dateTime.getSeconds().toString().padStart(2, '0')

    return (
    <div>
        <p>{mouth}/{day}/{year} - {hours}:{minutes}:{seconds}</p>
    </div>
    )
}

export default Clock
