import  { useState } from 'react';

const DropdownForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    // firstName: '',
    // lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    comment: ''
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({
    email: '',
    phoneNumber: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {
      email: '',
      phoneNumber: ''
    };
    let hasErrors = false;

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      hasErrors = true;
    }

    // Phone validation
    if (!/\(\d{3}\) \d{3}-\d{4}/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Process the form data (e.g., send it to an API or log it)
    console.log('Form Data:', formData);

    // Clear form
    setFormData({
      // firstName: '',
      // lastName: '',
      username: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      comment: ''
    });
  };

  return (
    <form 
      className="absolute mt-4 bg-gray-100 p-6 rounded-md shadow-md left-0 w-[343px] btn_white"
      style={{ top: '100%' }}
      onSubmit={handleSubmit}
    >
      <div className="mb-6 flex space-x-6">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="First Name"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      <div className="mb-8 flex space-x-8">
        <div className="flex-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="nm@gmail.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="(000) 000-0000"
            required
            pattern="\(\d{3}\) \d{3}-\d{4}"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>
      </div>

      <div className="mb-6 flex space-x-6">
        <div className="flex-1">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-gray-400"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-gray-400"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
          Comments
        </label>
        <textarea
          id="comments"
          value={formData.comment}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter any comments"
        />
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-4 py-2 bg-[#374151] text-white rounded-md transition-all duration-300 ease-in-out transform hover:bg-[#4a4a4a] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#374151]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DropdownForm;
