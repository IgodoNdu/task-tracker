//import React from 'react' (No more required for every react component)
//creating a header component (via arrow function)
import PropTypes from 'prop-types'


const Header = () => {
  return (
    <header>
      <h1>Task Tracker</h1>
    </header>
  );
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
