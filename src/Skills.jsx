import { useState } from "react";
function Skills(){
    const[skills, setSkills] = useState([])
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item != event.target.value)])
        }
    }
    return(
        <>
            <h3>Select Your Skills</h3>
            <input onChange={handleSkills} type="checkbox" id="php" value="php" />
            <label htmlFor="php" >PHP</label>
            <br/>
            <br/>
            <input onChange={handleSkills} type="checkbox" id="c++" value="c++" />
            <label htmlFor="c++" >C++</label>
            <br/>
            <br/>
            <input onChange={handleSkills} type="checkbox" id="java" value="java" />
            <label htmlFor="java" >Java</label>
            <br/>
            <br/>
            <input onChange={handleSkills} type="checkbox" id="react" value="react" />
            <label htmlFor="react" >React</label>
            <br/>
            <br/>
            <br/>

            <h1>{skills.toString()}</h1>
        </>
    )
}

export default Skills;