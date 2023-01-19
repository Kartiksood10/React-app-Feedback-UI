import PropTypes from "prop-types"

// children is a special prop that can be used to render the content between <Card></Card>
function Card({ children, reverse}) {

    // conditional class example
    // reverse is a prop that makes card color dark and text white
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>
//       {children}
//     </div>
//   )

// conditional style that does same function as above

return(
<div className="card" style={{
    backgroundColor : reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color : reverse ? '#fff' : '#000',
}}>
    {children}
</div>
)
}


Card.defaultProps ={

    reverse: false,
}

Card.propTypes = {

    // node is anything that can be rendered on the webpage 
    children: PropTypes.node.isRequired,
    reverse : PropTypes.bool,
}

export default Card
