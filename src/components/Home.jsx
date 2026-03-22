import React from 'react';

const Home = () => {
  const styles = {
    div: {
      height: '200vh',
    },
    container: {
      backgroundColor:'black',
      textAlign: 'center',
      height:'300px',
      padding: '2em',
      color:'white',

    },
    images: {
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '1em',
      marginTop: '1em',
    },
    main: {
      height: '120px',
      width: '190px',
      backgroundColor: 'gray',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out',
      border: '2px solid white',
      borderRadius: '10px',
    },
    image: {
      width: '100%',
      bottom: '0',
      borderRadius: '2px',
      display:'flex',
    },
    video: {
      display: 'none',
      width: '100%',
      height: '60%',
      position: 'absolute',
      top: '0',
      left: '0',
      objectFit: 'cover',
      zIndex: '-1',
    },
    payment: {
      display: 'none',
      width: '40%',
      position: 'absolute',
      left: '58%',
      bottom: '45%',
      border: '1.3px solid white',
      borderRadius: '5px',
    },
    details: {
      display: 'none',
      position:'absolute',
      bottom: '0',
      width: '100%',
      height: '35%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: '-1',
      padding: '10px',
      fontSize: '10px',
      fontWeight: '400',
      color: 'white',
      
    },
    information:{
      position:'fixed',
      textAlign: 'left',
      left:'2%', 
      top: '85%',
    },
    mainHover: {
      height: '350px',
      width: '300px',
      border: '3px solid white',
      backgroundColor: '#202020',
      scale: '1',
      borderRadius: '10px',
    },
    imageHover: {
      width: '50%',
      position: 'absolute',
      bottom: '17%',
      left: '-1px',
      border: '1px solid white',
    },
    videoHover: {
      display: 'block',
    },
    paymentHover: {
      display: 'block',
    },
    detailsHover: {
      display: 'block',
    },
    about: {
      textAlign: 'center',
      padding: '2em',
      color: 'green',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '1em',
      color: '#0066cc',
    },
    subheading: {
      fontSize: '1.5em',
      marginBottom: '0.5em',
      color: '#cc6600',
    },
    section: {
      margin: '1.5em 0',
    },
    emoji: {
      fontSize: '1.5em',
      marginRight: '0.5em',
    },
    text: {
      fontSize: '1.2em',
      lineHeight: '1.6',
      color: '#555',
    },
    highlights: {
      fontWeight: 'bold',
      color: '#e60073',
    },
    testimonials: {
      fontStyle: 'italic',
      color: '#FFD700',
      border: '1px solid #FFD700',
      padding: '0.5em',
      borderRadius: '5px',
      backgroundColor: '#fff8dc',
      maxWidth: '80%',
      margin: '0.5em auto',
    },
    contact: {
      fontSize: '1.2em',
      color: '#008000',
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.div}>
    <div style={styles.container}>
      <h1>Welcome to TravelQuest 🌐</h1>
      <p>Explore the world with us! ⭐⭐⭐⭐⭐</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', listStyleType: 'none', padding: 0, gap: '1px' }}>
        <li>Cotopaxi Volcán Cotopaxi</li>
        <li>Santa Cruz Island</li>
        <li>Quito Ecuador</li>
      </div>

      <div style={styles.images}>
        <div
          style={styles.main}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, styles.mainHover);
            Object.assign(e.currentTarget.querySelector('.image').style, styles.imageHover);
            Object.assign(e.currentTarget.querySelector('.video').style, styles.videoHover);
            Object.assign(e.currentTarget.querySelector('.payment').style, styles.paymentHover);
            Object.assign(e.currentTarget.querySelector('.details').style, styles.detailsHover);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, styles.main);
            Object.assign(e.currentTarget.querySelector('.image').style, styles.image);
            Object.assign(e.currentTarget.querySelector('.video').style, styles.video);
            Object.assign(e.currentTarget.querySelector('.payment').style, styles.payment);
            Object.assign(e.currentTarget.querySelector('.details').style, styles.details);
          }}
        >
          <div style={{ position:'absolute', top: '50%', left: '50%', width:'100%', transform: 'translate(-50%, -270%)', overflow: 'hidden'}}>
          <h2>Cotopaxi Volcán Cotopaxi</h2>
          </div>
          <img 
            src="mountain.jpg"
            alt="Mountain"
            className="image"
            style={styles.image}
          />
          <video
            autoPlay
            loop
            muted
            className="video"
            style={styles.video}
          >
            <source src="Cotopaxi.mp4" type="video/mp4" />
          </video>
          <img
            className="payment"
            src="payment1.png"
            alt="Payment"
            style={styles.payment}
          />
          <div className="details" style={styles.details}>
            <div style={styles.information}>
            High-altitude (19,347-foot) active volcano, attracting hikers & climbers for its views & glacier.
              <br />
              ⭐⭐⭐⭐⭐ 4.7
              <br />
              <span style={{ color: 'green' }}>Extremely positive</span> 
              <span style={{ color: '#1591ea' }}> 25,342 User Reviews</span>
              <br />
            <a href="https://maps.app.goo.gl/YTXQSVSy4q38ngak8" 
                style={{ position:'fixed', right:'2%', bottom: '29%',padding: '10px', fontSize: '10px', border: '1px solid white', fontWeight: '400',color: 'black', borderRadius: '2px', backgroundColor: '#1591ea',  textDecoration: 'none', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                >Cotopaxi</a>
               <br />
               <button 
                style={{ position:'fixed', right:'2%', bottom: '17%',padding: '10px', fontSize: '10px', border: '1px solid white',fontWeight: '400',color: 'white', borderRadius: '2px', backgroundColor: '#1591ea',  textDecoration: 'none', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                ><a href="booking">📚 Book Your Trip Now</a>
            </button>
            </div>
          </div>
          </div>
        
        <div
          style={styles.main}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, styles.mainHover);
            Object.assign(e.currentTarget.querySelector('.image').style, styles.imageHover);
            Object.assign(e.currentTarget.querySelector('.video').style, styles.videoHover);
            Object.assign(e.currentTarget.querySelector('.payment').style, styles.paymentHover);
            Object.assign(e.currentTarget.querySelector('.details').style, styles.detailsHover);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, styles.main);
            Object.assign(e.currentTarget.querySelector('.image').style, styles.image);
            Object.assign(e.currentTarget.querySelector('.video').style, styles.video);
            Object.assign(e.currentTarget.querySelector('.payment').style, styles.payment);
            Object.assign(e.currentTarget.querySelector('.details').style, styles.details);
          }}
        >
        <div style={{ position:'absolute', top: '50%', left: '50%', width:'100%', transform: 'translate(-50%, -270%)', overflow: 'hidden'}}>
        <h2>Santa Cruz Island</h2>
        </div>
          <img
            src="beach.avif"
            alt="Beach"
            className="image"
            style={styles.image}
          />
          <video
            autoPlay
            loop
            muted
            className="video"
            style={styles.video}
          >
            <source src="island.mp4" type="video/mp4" />
          </video>
          <img
            className="payment"
            src="payment2.png"
            alt="Payment"
            style={styles.payment}
          />
          <div className="details" style={styles.details}>
          <div style={styles.information}>
          Lush volcanic island with 6 vegetation zones & teeming wildlife including famous turtles & iguanas.
              <br />
              ⭐⭐⭐⭐⭐ 4.6
              <br />
              <span style={{ color: 'green' }}>Very positive</span> 
              <span style={{ color: '#1591ea' }}> 20,867 User Reviews</span>
              <br />
            <a href="https://maps.app.goo.gl/9Ko7anUPRqHjjqP78" 
                style={{ position:'fixed', right:'2%', bottom: '29%',padding: '10px', fontSize: '10px', border: '1px solid white', fontWeight: '400',color: 'black', borderRadius: '2px', backgroundColor: '#1591ea',  textDecoration: 'none', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                >Santa Cruz Island</a>
               <br />
               <button 
                style={{ position:'fixed', right:'2%', bottom: '17%',padding: '10px', fontSize: '10px', border: '1px solid white',fontWeight: '400',color: 'black', borderRadius: '2px', backgroundColor: '#1591ea',  textDecoration: 'none', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                ><a href="booking">📚 Book Your Trip Now</a>
            </button>
            </div>
          </div>
        </div>
      

        <div
          style={styles.main}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, styles.mainHover);
            Object.assign(e.currentTarget.querySelector('.image').style, styles.imageHover);
            Object.assign(e.currentTarget.querySelector('.video').style, styles.videoHover);
            Object.assign(e.currentTarget.querySelector('.payment').style, styles.paymentHover);
            Object.assign(e.currentTarget.querySelector('.details').style, styles.detailsHover);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, styles.main);
            Object.assign(e.currentTarget.querySelector('.image').style, styles.image);
            Object.assign(e.currentTarget.querySelector('.video').style, styles.video);
            Object.assign(e.currentTarget.querySelector('.payment').style, styles.payment);
            Object.assign(e.currentTarget.querySelector('.details').style, styles.details);
          }}
        >
        <div style={{ position:'absolute', top: '50%', left: '50%', width:'100%', transform: 'translate(-50%, -270%)', overflow: 'hidden'}}>
          <h2>Quito Ecuador</h2>
          </div>
          <img
            src="city.avif"
            alt="City"
            className="image"
            style={styles.image}
          />
          <video
            autoPlay
            loop
            muted
            className="video"
            style={styles.video}
          >
            <source src="Quito.mp4" type="video/mp4" />
          </video>
          <img
            className="payment"
            src="payment3.png"
            alt="Payment"
            style={styles.payment}
          />
          <div className="details" style={styles.details}>
          <div style={styles.information}>
          Quito, Ecuador's capital, is 2,850m high in the Andes, known for <br />its 16th- and 17th-century churches.
              <br />
              ⭐⭐⭐⭐⭐ 4.4
              <br />
              <span style={{ color: 'green' }}>Highly positive</span> 
              <span style={{ color: '#1591ea' }}> 18,654 User Reviews</span>
              <br />
            <a href="https://maps.app.goo.gl/5jHH49d6prRgfRew8" 
                style={{ position:'fixed', right:'2%', bottom: '29%',padding: '10px', fontSize: '10px', border: '1px solid white', fontWeight: '400',color: 'white', borderRadius: '2px', backgroundColor: '#1591ea',  textDecoration: 'none', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                >Quito Ecuador</a>
               <br />
               <button 
                style={{  position:'fixed', right:'2%', bottom: '17%',padding: '10px', fontSize: '10px', border: '1px solid white',fontWeight: '400',color: 'white', borderRadius: '2px', backgroundColor: '#1591ea',  textDecoration: 'none', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                ><a href="booking">📚 Book Your Trip Now</a>
            </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div style={{backgroundColor:'#F5F5DC'}}>
    <div style={styles.about}>
      <h1 style={styles.heading}>🌍 TravelQuest: Journey Beyond Boundaries 🌍</h1>
      <p style={styles.subheading}>Welcome to TravelQuest! 🌟</p>

      <div style={styles.section}>
        <h2 style={styles.emoji}>✈️ Our Mission</h2>
        <p style={styles.text}>
          Our mission is to create unforgettable travel experiences that connect people to the world and each other.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.emoji}>🏞️ Destinations Galore</h2>
        <p style={styles.text}>
          From the pristine beaches of the Maldives 🏖️ to the bustling streets of Tokyo 🏙️, explore a wide array of destinations.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.emoji}>🏨 Handpicked Accommodations</h2>
        <p style={styles.text}>
          Enjoy comfort and authenticity in our luxurious hotels 🏩 and cozy homestays 🏡.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.emoji}>🌟 Exclusive Experiences</h2>
        <p style={styles.text}>
          Immerse yourself in unique and memorable experiences like a cooking class in Italy 🍝 or a safari adventure in Kenya 🦁.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.emoji}>🤝 Personalized Service</h2>
        <p style={styles.text}>
          You're part of our travel family! Our dedicated team ensures your journey is seamless and enjoyable.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.emoji}>💬 Customer Testimonials</h2>
        <p style={styles.testimonials}>
          “<span style={styles.highlights}>TravelQuest</span> made our trip unforgettable! The personalized service and attention to detail were top-notch.” - Sarah & John
        </p>
        <p style={styles.testimonials}>
          “Exploring the streets of Paris with <span style={styles.highlights}>TravelQuest</span> was a dream come true. Highly recommend!” - Maria
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.emoji}>📞 Get in Touch</h2>
        <p style={styles.contactInfo}>
        📍 Address: TravelQuest HQ, Pune, Maharashtra, India.
      </p>
      
      <p style={styles.contactInfo}>
        📞 Phone: 965797XXXX
      </p>
      
      <p style={styles.contactInfo}>
        📧 Email: contact@travelquest.com
      </p>
        <p style={styles.contact}>
          Ready to embark on your next adventure? Contact us today to start planning your dream journey! 📧 ✆
        </p>
      </div>

      <p style={styles.text}>Thank you for choosing TravelQuest. Let’s create unforgettable memories together! 🌍💫</p>
    </div>
    </div>
    </div>
  );
};


export default Home;


