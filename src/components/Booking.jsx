import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({ 
    name: '', 
    phoneNumber: '', 
    gender: 'Male', 
    pickupPoint: '', 
    destination: '', 
    date: '', 
    travelers: 1,
    travelClass: 'Economy',
    insurance: false,
    category: 'National'
  });
  const [message, setMessage] = useState('');
  const [opacity, setOpacity] = useState(1);
  const [errors, setErrors] = useState({});

  // Fetch existing bookings
  useEffect(() => {
    async function fetchBookings() {
      const response = await fetch('https://6795c0c4bedc5d43a6c36343.mockapi.io/Travel/Travel');
      const data = await response.json();
      setBookings(data);
    }

    fetchBookings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phoneNumber) newErrors.phoneNumber = 'MobileNumber is required';
    if (!form.gender) newErrors.gender = 'Gender is required';
    if (!form.pickupPoint) newErrors.pickupPoint = 'Pickup Point is required';
    if (!form.destination) newErrors.destination = 'Destination is required';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.travelers) newErrors.travelers = 'Number of Travelers is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setMessage('Information not filled properly. Try again.');
      setTimeout(() => {
        setMessage('');
        setOpacity(1);
      }, 2000);
      return;
    }

    async function addBooking() {
      const response = await fetch('https://6795c0c4bedc5d43a6c36343.mockapi.io/Travel/Travel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const newBooking = await response.json();
      setBookings([...bookings, newBooking]);
    }

    addBooking();
    setForm({ 
      name: '', 
      phoneNumber: '',
      gender: 'Male', 
      pickupPoint: '', 
      destination: '', 
      date: '', 
      travelers: 1, 
      travelClass: 'Economy', 
      insurance: false, 
      category: 'National' 
    });
    setMessage('Your trip is booked! 🌟✈️');

    // Hide the message and reset opacity after 2 seconds
    setTimeout(() => {
      setMessage('');
      setOpacity(1);
    }, 2000);
  };

  return (
    <div style={{ ...styles.container, opacity }}>
      <h1 style={styles.header}>Book Your Trip 📅</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="category" style={styles.label}>Trip Category</label>
          <select name="category" value={form.category} onChange={handleChange} style={styles.input} id="category">
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>
  
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Your Name *</label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your Name *" 
            style={{ ...styles.input, borderColor: errors.name ? 'red' : '#ddd' }} 
            id="name"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber" style={styles.label}>Phone Number *</label>
          <input 
            type="text" 
            name="phoneNumber" 
            value={form.phoneNumber} 
            onChange={handleChange} 
            placeholder="Your Phone Number *" 
            style={{ ...styles.input, borderColor: errors.phoneNumber ? 'red' : '#ddd' }} 
            id="phoneNumber"
          />
        </div>
  
        <div style={styles.formGroup}>
          <label htmlFor="gender" style={styles.label}>Gender *</label>
          <select 
            name="gender" 
            value={form.gender} 
            onChange={handleChange} 
            style={{ ...styles.input, borderColor: errors.gender ? 'red' : '#ddd' }} 
            id="gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
  
        <div style={styles.formGroup}>
          <label htmlFor="pickupPoint" style={styles.label}>Pickup Point *</label>
          <input 
            type="text" 
            name="pickupPoint" 
            value={form.pickupPoint} 
            onChange={handleChange} 
            placeholder="Pickup Point *" 
            style={{ ...styles.input, borderColor: errors.pickupPoint ? 'red' : '#ddd' }} 
            id="pickupPoint"
          />
        </div>
  
        <div style={styles.formGroup}>
          <label htmlFor="destination" style={styles.label}>Destination *</label>
          <input 
            type="text" 
            name="destination" 
            value={form.destination} 
            onChange={handleChange} 
            placeholder="Destination *" 
            style={{ ...styles.input, borderColor: errors.destination ? 'red' : '#ddd' }} 
            id="destination"
          />
        </div>
  
        <div style={styles.formGroup}>
          <label htmlFor="date" style={styles.label}>Travel Date *</label>
          <input 
            type="date" 
            name="date" 
            value={form.date} 
            onChange={handleChange} 
            style={{ ...styles.input, borderColor: errors.date ? 'red' : '#ddd' }} 
            id="date"
          />
        </div>
  
        <div style={styles.formGroup}>
          <label htmlFor="travelers" style={styles.label}>Number of Travelers *</label>
          <input 
            type="number" 
            name="travelers" 
            value={form.travelers} 
            onChange={handleChange} 
            placeholder="Number of Travelers *" 
            style={{ ...styles.input, borderColor: errors.travelers ? 'red' : '#ddd' }} 
            min="1" 
            id="travelers"
          />
        </div>
  
        <div style={styles.formGroup}>
          <label htmlFor="travelClass" style={styles.label}>Travel Class</label>
          <select 
            name="travelClass" 
            value={form.travelClass} 
            onChange={handleChange} 
            style={styles.input} 
            id="travelClass"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
  
        <div style={styles.insuranceContainer}>
          <label htmlFor="insurance" style={styles.checkboxLabel}>
            <input 
              type="checkbox" 
              name="insurance" 
              checked={form.insurance} 
              onChange={handleChange} 
            />
            <span>Add Travel Insurance</span>
          </label>
        </div>
  
        <button type="submit" style={styles.button}>Book Now</button>
      </form>
  
      {message && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            {message}
          </div>
        </div>
      )}
    </div>
  );
}  

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
  header: {
    color: '#333',
    marginBottom: '1em',
    fontSize: '1.8em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '1em',
  },
  label: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    width: '40%',
    textAlign: 'left',
  },
  input: {
    padding: '0.2em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%', 
    fontSize: '1em',
  },
  button: {
    padding: '0.7em',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '1em',
    width: '80%',
    maxWidth: '400px',
    transition: 'background-color 0.3s',
  },
  insuranceContainer: {
    marginTop: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  checkboxLabel: {
    marginRight: '1em',
    fontSize: '1em',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  popup: {
    backgroundColor: 'red',
    padding: '1em',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontSize: '1.5em',
    color: 'white',
  },
};


// Add the glowing effect on focus for form elements
document.querySelectorAll('input, select, button').forEach(el => {
  el.addEventListener('focus', () => {
    el.style.boxShadow = '0 0 10px rgba(0, 123, 255, 0.8)';
  });
  el.addEventListener('blur', () => {
    el.style.boxShadow = '';
  });
});

export default Booking;
