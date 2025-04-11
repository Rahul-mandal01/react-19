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

const UserInput = (props) => {
    return(
        <>
            <input type="text" ref={props.ref} />
        </>
    )
}

export default UserInput;