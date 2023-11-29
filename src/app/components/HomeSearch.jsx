"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {

    const router = useRouter()
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }
    const randomSearch = async () => {
        setRandomSearchLoading(true);
        // https://random-word-api.herokuapp.com/word
        const response = await fetch("https://random-word-api.herokuapp.com/word")
            .then(res => res.json())
            .then(data => data[0]);
        if (!response) return;
        router.push(`/search/web?searchTerm=${response}`)
        setRandomSearchLoading(false);
    }

    return (<>
        <form onSubmit={handleSubmit}
            onChange={(e) => setInput(e.target.value)}
            className="flex w-full m5-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        >
            <FaSearch className="text-xl text-gray-500 mr-3" />
            <input className="flex-grow focus:outline-none"
                type="text" />
            <BsFillMicFill className="text-lg" />
        </form>
        <div className="flex flex-col mt-4 space-y-2 sm:flex-row sm:space-y-0 justify-center">
            <button onClick={handleSubmit} className="btn">Google search</button>
            <button onClick={randomSearch} disabled={randomSearchLoading}
                className="btn flex items-center justify-center disabled:opacity-60"
            >{randomSearchLoading ? (
                <img src="/spinner.svg" alt="loading..."
                    className="h-6 text-center "
                />
            ) : ("I Am Feeling Lucky")}
            </button>
        </div>
    </>
    )
}
