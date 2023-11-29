"use client"
import { useEffect, useState } from "react"

export default function CountryLookup() {
    const [country, setCountry] = useState("Italy");

    useEffect(() => {
        fetch(`https://https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => setCountry(data.country));
        console.log(process.env.IP_API_KEY);
    }, [])

    return (<div>{country}</div>)
}
