import {Outlet} from "react-router-dom";
import CollapsibleExample from "./Navbar";
import ClipLoader from "react-spinners/BarLoader";
import React, {useState, useEffect} from 'react';

export default function Layout() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            {loading ? (
                <div className='loader--section'>
                    <ClipLoader width={200} color={"white"} loading = {loading} />
                </div>
            ) 
            : 
            (   <main>
                    <CollapsibleExample />
                    <Outlet />
                </main>
            )}
        </>
    )
}