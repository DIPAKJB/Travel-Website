import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'; 

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav style={styles.nav}>
      <Link to="/">
        <img
          src={logo}
          alt="TravelQuest Logo"
          style={{ ...styles.logo, ...(isHovered ? hoverStyles.logo : {}) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          
        />
      </Link>
      <ul style={styles.ul}>
      <li style={{ ...styles.name, ...(isHovered ? hoverStyles.name : {}) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}><span>TravelQuest</span></li>
        <li style={styles.li}><Link to="/" style={styles.link}>🏠 <span style={styles.linkText}>Home</span></Link></li>
        <li style={styles.li}><Link to="/destinations" style={styles.link}>🌍 <span style={styles.linkText}>Destinations</span></Link></li>
        <li style={styles.li}><Link to="/booking" style={styles.link}>📅 <span style={styles.linkText}>Booking</span></Link></li>
        <li style={styles.li}><Link to="/contact" style={styles.link}>✉️ <span style={styles.linkText}>Contact</span></Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: 'white',
    padding: '0.8em',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid black',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flex: 1,
    marginLeft: '2em',
  },
  li: {
    margin: '0.1em',
  },
  link: {
    textDecoration: 'none',
    color: '#54616C',
    fontSize: '1em',
    display: 'flex',
    alignItems: 'center',
  },
  linkText: {
    marginLeft: '0.5em',
    fontWeight: 'bold',
    fontSize: '1.1em', // Text size
    color: 'black', // Text color (gold)
  },
  logo: { 
    position:'absolute',
    left:'30px',
    top:'15px',
    width: '40px', 
    height: 'auto',
    opacity: 0.5,
    transition: 'opacity 0.3s linear, transform 0.3s linear',
  },
  name: {
    position:'absolute',
    left:'8px',
    top:'55px',
    width: '20px', 
    height: 'auto',
    opacity: 0.5,
    transition: 'opacity 0.3s linear, transform 0.3s linear',
  },
};

const hoverStyles = {
  logo: {
    opacity: 1,
    transform: 'scale(1)', 
  },
  name: {
    opacity: 1,
    transform: 'scale(1)', 
  },
};

export default Navbar;
