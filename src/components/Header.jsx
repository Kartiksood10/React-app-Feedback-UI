import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        // giving value to new props made
        backgroundColor: bgColor,
        color:textColor,
    }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// these are the default prop values that will be used unless props are given a value manually
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',

}

// validates type of prop rendered on webpage
Header.propTypes = {

    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header

