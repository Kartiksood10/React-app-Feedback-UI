import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    // version is in css where primary is purple btn and secondary is pink
    // isDisabled is there so that we can disable button till a condition is fulfilled(min 10 characters input)
    // {children} is used to access the text that is on the button
    <div>
      <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {

    version:'primary',
    type:'button',
    isDisabled: false,
}

Button.propTypes = {

    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button
