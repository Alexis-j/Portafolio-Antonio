import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../style/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envío del formulario a través de EmailJS
    emailjs.sendForm('service_4lsma1p', 'template_2oi2mu1', e.target, 'H_MPP4YHRHLJxdrix')
      .then((result) => {
        alert("Mensaje enviado correctamente");
      }, (error) => {
        alert("Error al enviar el mensaje");
      });
  };

  return (
    <section id="contact" className="contact">
      <div>
        <h2 className="saludo">Hi, there</h2>
      <div className="divider-stripe-small"></div>
      </div>
      <p className="saludos">Interest aroused? I look forward to hearing from you!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="left-fields">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto" />
        </div>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;
