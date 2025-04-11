// PREVIOUS TO REACT 19 VERSION 

// import { forwardRef } from "react";

// const UserInput = (props, ref) => {
//     return(
//         <>
//             <input type="text" ref={ref} />
//         </>
//     )
// }

// export default forwardRef(UserInput);


// REACT 19 VERSION
import {forwardRef} from "react";

const UserInput = forwardRef( function UserInput (props, ref){
    return(
        <>
            <input type="text" ref={ref} />
        </>
    )
})

export default UserInput;