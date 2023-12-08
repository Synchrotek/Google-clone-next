import Link from 'next/link';
import React from 'react'
import WebSearchResults from '@/components/WebSearchResults';

export default async function WebSearchPage({ searchParams }) {

    await new Promise((resolve) => setTimeout(resolve, 10000));
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLESEARCH_API_KEY}&cx=${process.env.GOOGLESEARCH_CONTEXT_KEY}&q=${searchParams.searchTerm}`
    );

    if (!response.ok) {
        throw new Error("Something went wrong !")
    }

    const data = await response.json();
    console.log("Fetched the Google-API Again For Web");

    const results = data.items;

    if (!results) {
        return (<div className='flex flex-col justify-center items-center pt-10'>
            <h1 className='text-3xl mb-4'>No results found</h1>
            <p>Try searching for somethign else or go back to the homepage</p>
            <Link href={"/"} className='text-blue-500'>Home</Link>
            <Link href={"/"} className='text-blue-500'>Home</Link>
        </div>
        )
    }

    return (<>
        {results && <WebSearchResults results={data} />}
    </>
    )
}
