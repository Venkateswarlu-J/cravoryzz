import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2> Contact Us</h2>
      <p>We’d love to hear from you! Get in touch with us for any queries.<br/>Feel free to ask Queries!!</p>

      <div className="contact-info">
        <h3>Our Address</h3>
        <p>Cravoryzz Food Delivery</p>
        <p>RTC, Manipuram, Guntur, India</p>

        <h3>📞 Customer Care</h3>
        <p> +91 98765 43210</p>
        <p> +91 87654 32109</p>
        <p> +91 76543 21098</p>

        <h3> Email Us</h3>
        <p>✉ support@cravoryzz.com</p>
      </div>

      <h3> Send Us a Message</h3>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
