import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer" style={{ backgroundColor: '#2FA4E7' }}>
          <div className="container py-3">
            <span>Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
