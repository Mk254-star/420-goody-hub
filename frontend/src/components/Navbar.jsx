// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>420 Goody Hub</h1>
            <ul style={styles.navLinks}>
                <li><a href="/" style={styles.link}>Home</a></li>
                <li><a href="/services" style={styles.link}>Services</a></li>
                <li><a href="/about" style={styles.link}>About</a></li>
                <li><a href="/contact" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    title: {
        margin: 0,
    },
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '15px',
        margin: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    }
};

export default Navbar;
