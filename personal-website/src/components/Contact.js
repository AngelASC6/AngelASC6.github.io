import Title from "./Title";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your submission logic here
    setFormData({
      name: "",
      email: "",
      content: "",
    });
  };

  return (
    <div id="contact" className="h-auto z-20 relative bg-stone-100 pt-10 pb-20">
        <Title title="Contact Me"/>
        <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-5"
        >
        <div className="mb-4">
            <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
            >
            Name
            </label>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 border-2 h-10 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>
        <div className="mb-4">
            <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
            >
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 border-2 h-10 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"

            />
        </div>
        <div className="mb-6">
            <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
            >
            Message
            </label>
            <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            required
            className="border-gray-300 border-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
        </div>
        <button
            type="submit"
            className="w-full bg-[#14AE5C] text-white py-2 px-4 rounded-md hover:bg-stone-800 focus:outline-none transition duration-300 ease-in-out"
        >
            Send Message
        </button>
        </form>
    </div>
  );
};

export default ContactForm;
