import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    // In a real app, form data would be sent to a server.
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            className="border p-2 w-full"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            className="border p-2 w-full"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block">Message:</label>
          <textarea
            name="message"
            className="border p-2 w-full"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

