/* eslint-disable react/prop-types */
function BusinessCard(props){
    return <div style={}>
        
        <h1>{props.name}</h1>
        <p>{props.info}</p>
        <h3>Interests</h3>
        <p>{props.int1}</p>
        <p>{props.int2}</p>
        <p>{props.int3}</p>
        <button>LinkedIn</button>
        <button>Twitter</button>
    </div>
}

export default BusinessCard