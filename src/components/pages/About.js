import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';
const About = () => {
  const centerText = {
    textAlign: 'center',
    marginTop: '100px',
  };
  return (
    <div>
      <Navbar />

      <h1 style={centerText}>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nulla ipsum. Etiam nec augue at mi aliquet lobortis. Sed nec elementum lorem. Maecenas
         in arcu quis magna finibus vehicula. Nulla eget leo a eros rutrum pretium. In hac habitasse platea dictumst.</p>
      <Footer />
    </div>
  )
}

export default About
