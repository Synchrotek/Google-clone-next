"use client"
import { FaSearch } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Functional Component ---------------------------
export default function Homeearch() {
  // Required variables -------
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  // util funtions -------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/serach/web?searchTerm=${input}`);
  }
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/serach/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (<>
    <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-xl focus-within:shadow-lg transition-shadow sm:max-w-xl lg:max-w-2xl"
      onSubmit={handleSubmit}
    ><FaSearch className="text-xl text-gray-500 mr-3" />
      <input className="flex-grow focus:outline-none"
        type="text"
        onChange={(e) => setInput(e.target.value)} />
      <BsFillMicFill className="text-lg" />
    </form>

    <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4">
      <button className="btn"
        onClick={handleSubmit}
      >Google Search</button>
      <button className="btn flex items-center justify-center disabled:opacity-80"
        onClick={randomSearch}
        disabled={randomSearchLoading}>
        {randomSearchLoading ? (
          <img className="h-6 text-center"
            src="spinner.svg" alt="loading..." />
        ) : (
          "I am Felling Lucky"
        )}
      </button>
    </div>
  </>
  )
}
