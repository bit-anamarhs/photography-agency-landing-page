import { useState } from 'react';

const DropdownForm = () => {

  const bookcallurl = process.env.NEXT_PUBLIC_BOOKACALL

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
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
    if (!/\d{3}\d{3}\d{4}/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    const formattedData = {
      username: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      date: new Date(formData.date).toISOString(), // Convert to ISO string
      time: formData.time,
      comment: formData.comment,
    };

    fetch(bookcallurl!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => {
        console.error('Error:', error);
      });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      comment: ''
    });
  };

  return (
    <form
      className="absolute mt-2 left-0 md:left-auto md:right-0 bg-gray-100 p-6 rounded-md shadow-md w-[343px] btn_white"
      style={{ top: '100%' }}
      onSubmit={handleSubmit}
    >
      <div className="mb-6 flex space-x-6">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-white">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="First Name"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-white">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      <div className="mb-8 flex space-x-8">
        <div className="flex-1">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="nm@gmail.com"
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="block text-sm font-medium text-white">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="(000) 000-0000"
            required
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>
      </div>

      <div className="mb-6 flex space-x-6">
        <div className="flex-1">
          <label htmlFor="date" className="block text-sm font-medium text-white">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="time" className="block text-sm font-medium text-white">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="comments" className="block text-sm font-medium text-white">
          Comments
        </label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md text-black"
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
