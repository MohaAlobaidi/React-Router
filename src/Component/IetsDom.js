import React from 'react'
//ik zoek hier de props via path : درس سبعة وعشرين حمزه
function IetsDom(props) {
    console.log(props.match.path)
    return (
        <div>
            <p>Ites Dom </p>
        </div>
    )
}

export default IetsDom
