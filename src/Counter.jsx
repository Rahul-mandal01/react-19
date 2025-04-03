import { useEffect } from "react";

const Counter = ({count, data}) => {

    useEffect(() => {
        console.log("Mounting phase only")
    }, [])

    useEffect(() => {
       console.log("Updating phase only")
    }, [count])

    useEffect(() => {
        return () => {
            console.log("Unmounting phase only")
        }
    }, [])

    

    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter;