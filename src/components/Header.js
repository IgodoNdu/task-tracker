//import React from 'react' (No more required for every react component)
//creating a header component (via arrow function)
import PropTypes from 'prop-types'
//Bring in the button component for use here
import Button from './Button';

const Header = ({ title, onAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onAdd} />
    </header>
  );
}

Header.defaultProps = {
    title: 'React Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
