

import React from 'react';

const Listing = ({ title, description, image, price, location, country }) => (
  <div className="listing" style={styles.listing}>
    <h2 style={styles.title}>{title}</h2>
    <img src={image.url} alt={image.filename} style={styles.image} />
    <p style={styles.description}>{description}</p>
    <p><strong>Price:</strong> ₹{price}</p>
    <p><strong>Location:</strong> {location}</p>
    <p><strong>Country:</strong> {country}</p>
  </div>
);

const Listings = ({ listings }) => (
  <div className="listings" style={styles.listingsContainer}>
    {listings.map((listing, index) => (
      <Listing key={index} {...listing} />
    ))}
  </div>
);
 
const sampleListings = [
  {
    title: "Andaman Islands",
    description: "A tropical paradise offering pristine beaches, coral reefs, and crystal-clear waters. Ideal for water sports like snorkeling, scuba diving, and relaxing by the ocean.",
    image: { filename: "listingimage", url: "https://static.wanderon.in/wp-content/uploads/2023/07/top-min.jpg" },
    price: 110000,
    location: "Andaman Islands",
    country: "India",
  },
  {
    title: "Goa",
    description: "Famous for its golden beaches, vibrant nightlife, and Portuguese-influenced architecture. Perfect for beach lovers, party enthusiasts, and those seeking relaxation.",
    image: { filename: "listingimage", url: "https://www.parkregisgoa.in/wp-content/uploads/2020/12/location-baga-beach-530x410.jpg" },
    price: 66000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Kerala (Alleppey)",
    description: "Known for its tranquil backwaters, lush landscapes, and houseboat cruises. A serene getaway to unwind amidst nature.",
    image: { filename: "listingimage", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=800&h=800&s=1" },
    price: 88000,
    location: "Alleppey, Kerala, India",
    country: "India",
  },
  {
    title: "Rishikesh",
    description: "A spiritual hub, famous for yoga, meditation, and adventure sports. It sits on the banks of the Ganges, with opportunities for white-water rafting and trekking.",
    image: { filename: "listingimage", url: "https://s7ap1.scene7.com/is/image/incredibleindia/lakshman-jhula-bridge-rishikesh-uttrakhand-city-1-hero?qlt=82&ts=1726646259495" },
    price: 74000,
    location: "Rishikesh, Uttarakhand, India",
    country: "India",
  },
  {
    title: "Udaipur",
    description: "Known as the city of Lakes Udaipur offers scenic lake views, royal palaces, and rich cultural heritage. It’s a perfect blend of nature and history.",
    image: { filename: "listingimage", url: "https://s7ap1.scene7.com/is/image/incredibleindia/jag-mandir-palace-udaipur-rajasthan-2-new-attr-hero?qlt=82&ts=1727353022397" },
    price: 66000,
    location: "Udaipur, Rajasthan, India",
    country: "India",
  },
  {
    title: "Jaisalmer",
    description: "The Golden City of India, famous for its golden sandstone architecture, including the Jaisalmer Fort and Patwon Ki Haveli. Ideal for desert safaris and cultural exploration.",
    image: { filename: "listingimage", url: "https://wmf.imgix.net/images/15_IND_20Jaisalmer_JPEG_Hero_IND_20Jaisalmer.jpg?auto=format,compress&fit=max&w=4040" },
    price: 110000,
    location: "Jaisalmer, Rajasthan, India",
    country: "India",
  },
  {
    title: "Leh-Ladakh",
    description: "A breathtaking, high-altitude destination with stunning landscapes, monasteries, and clear blue lakes. Perfect for adventure enthusiasts, bikers, and nature lovers.",
    image: { filename: "listingimage", url: "https://static.toiimg.com/photo/msid-64764650,width-96,height-65.cms" },
    price: 110000,
    location: "Leh, Ladakh, India",
    country: "India",
  },
  {
    title: "Manali",
    description: "A charming hill station with snow-capped mountains, lush forests, and adventure activities like paragliding, skiing, and trekking. A perfect retreat for nature lovers.",
    image: { filename: "listingimage", url: "https://www.naturetravelagency.com/uploads/1703234831best%20time%20to%20visit%20Manali%20for%20snowfall.jpg" },
    price: 44000,
    location: "Manali, Himachal Pradesh, India",
    country: "India",
  },
  {
    title: "Shimla",
    description: "Known for its colonial architecture and pleasant climate, Shimla is a favorite hill station for families, honeymooners, and anyone seeking a peaceful mountain retreat.",
    image: { filename: "listingimage", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/KSR_Steam_special_at_Taradevi_05-02-13_56.jpeg/1200px-KSR_Steam_special_at_Taradevi_05-02-13_56.jpeg" },
    price: 37000,
    location: "Shimla, Himachal Pradesh, India",
    country: "India",
  },
  {
    title: "Darjeeling",
    description: "Famous for its tea gardens, panoramic views of the Himalayas, and the Darjeeling Himalayan Railway. A lovely destination for a relaxed getaway surrounded by misty mountains.",
    image: { filename: "listingimage", url: "https://assets.zeezest.com/blogs/PROD_darjeeling_travel_Zee_Zest_1644238122682_thumb_1200.jpeg" },
    price: 51000,
    location: "Darjeeling, West Bengal, India",
    country: "India",
  },
  {
    title: "Jaipur",
    description: "The Pink City known for its royal palaces, forts, and vibrant culture. A rich history blends with vibrant markets, making it a must-visit in Rajasthan.",
    image: { filename: "listingimage", url: "https://assets.cntraveller.in/photos/621489890fb9c3937ea2ebcb/3:2/w_1620,h_1080,c_limit/jaipur%20lead.jpg" },
    price: 66000,
    location: "Jaipur, Rajasthan, India",
    country: "India",
  },
];

const Destinations = () => {
  return (
    <div style={styles.container}>
      <h1>Explore Our Destinations 🌴</h1>
      <p>Discover new places and experiences!</p>
      <div style={styles.carousel}>
        <img src="forest.jpg" alt="Forest" style={styles.image} />
        <img src="desert.jpg" alt="Desert" style={styles.image} />
        <img src="ocean.webp" alt="Ocean" style={styles.image} />
      </div>
      <Listings listings={sampleListings} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2em',
  },
  carousel: {
    display: 'flex',
    overflowX: 'scroll',
    gap: '1em',
    marginTop: '1em',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px',
  },
  listingsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
    justifyContent: 'center',
  },
  listing: {
    width: '100%',
    maxWidth: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1em',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '1.5em',
    color: '#333',
  },
  description: {
    fontSize: '1em',
    color: 'green',
  },
  cardImgTop: {
    borderRadius: '1rem !important',
    width: '100% !important',
    objectFit: 'cover !important',
  },
  cardBody: {
    padding: '0 !important',
  },
  cardText: {
    fontWeight: '400 !important',
  },
  listingLink: {
    textDecoration: 'none',
  },
  listingLinkHover: {
    textDecoration: 'underline',
  },
  cardImgOverlayHover: {
    opacity: 0.2,
    backgroundColor: 'paleturquoise',
  },
};

export default Destinations;
