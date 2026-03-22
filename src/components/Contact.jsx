import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us ✉️</h1>
      <p style={styles.heading}>TravelQuest</p>
      <p style={styles.text}>We'd love to hear from you! Whether you have questions, need assistance, or want to share your travel experiences, reach out to us.</p>
      
      <p style={styles.contactInfo}>
        📍 Address: TravelQuest HQ, Pune, Maharashtra, India.
      </p>
      
      <p style={styles.contactInfo}>
        📞 Phone: 965797XXXX
      </p>
      
      <p style={styles.contactInfo}>
        📧 Email: contact@travelquest.com
      </p>

      <div style={styles.socialMedia}>
        <h2>Connect with us on Social Media</h2>
        <p>
          🌐 <a href="https://www.facebook.com/TravelQuest" target="_blank" style={styles.link}>Facebook</a> |
          📸 <a href="https://www.instagram.com/pravinw_7821?igsh=MWVobnBpNmQ1eGg5" target="_blank" style={styles.link}>Instagram</a> |
          🐦 <a href="https://www.twitter.com/TravelQuest" target="_blank" style={styles.link}>Twitter</a>
        </p>
      </div>
      
      <div style={styles.feedback}>
        <h2>Leave us your Feedback</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2em',
    backgroundColor: '#e6f7ff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '2em auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '1.8em',
    color: '#2e8b57',
  },
  text: {
    fontSize: '1.2em',
    color: '#333',
  },
  contactInfo: {
    fontSize: '1.1em',
    color: '#2e8b57',
    margin: '1em 0',
  },
  socialMedia: {
    margin: '2em 0',
  },
  link: {
    color: '#2e8b57',
    textDecoration: 'none',
    margin: '0 0.5em',
  },
  feedback: {
    margin: '2em 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: '0.5em',
    margin: '0.5em 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '80%',
    padding: '0.5em',
    margin: '0.5em 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.7em 2em',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#2e8b57',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default Contact;
