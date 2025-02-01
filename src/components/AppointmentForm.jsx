import React from 'react';
import useForm from '../hooks/useForm';
import { fetchWithAuth } from '../api/api';

const AppointmentForm = ({ onSubmit }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      patientName: '',
      doctorId: '',
      date: '',
      time: '',
      phone: '',
    },
    async (formData) => {
      const newAppointment = {
        patientName: formData.patientName,
        doctor: `Dr. ${formData.doctorId}`, // Simulate doctor name
        date: formData.date,
        time: formData.time,
        phone: formData.phone,
      };

      try {
        const response = await fetchWithAuth('http://localhost:3000/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newAppointment),
        });

        if (response.id) {
          onSubmit(response); // Notify parent component of successful submission
        }
      } catch (err) {
        console.error('Appointment submission error:', err);
        alert('Failed to schedule appointment. Please try again.');
      }
    }
  );

  return (
    <div className="w-full h-200 bg-green-100 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-8">Schedule an Appointment</h2>
      <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto bg-white text-green-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="patientName" className="block text-green-900 font-bold p-2 mb-4">Full Name</label>
          <input
            type="text"
            name="patientName"
            value={values.patientName}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          {errors.patientName && <p className="text-red-500">{errors.patientName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="doctorId" className="block text-green-900 font-bold p-2 mb-4">Doctor</label>
          <select
            name="doctorId"
            value={values.doctorId}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="">Select a Doctor</option>
            <option value="John Doe">Dr. John Doe</option>
            <option value="Jane Smith">Dr. Jane Smith</option>
          </select>
          {errors.doctorId && <p className="text-red-500">{errors.doctorId}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-green-900 font-bold p-2 mb-4">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-green-900 font-bold p-2 mb-4">Date</label>
            <input
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="time" className="block text-green-900 font-bold p-2 mb-4">Time</label>
            <input
              type="time"
              name="time"
              value={values.time}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-green-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            {errors.time && <p className="text-red-500">{errors.time}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-300 text-green-900 py-2 px-4 font-bold rounded-lg hover:bg-green-400 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;