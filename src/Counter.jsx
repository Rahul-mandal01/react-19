import { useEffect } from "react";

const Counter = ({count, data}) => {
    const handleCounter = () => {
        console.log("handleCounter called");
    }

    const handledata = () => {
        console.log("handledata called");
    }

    useEffect(() => {
        handleCounter();
    }, [])

    useEffect(() => {
        handledata();
    }, [data, count])

    

    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter;