import React, { useState, useRef } from "react";
import frmimg from '../assets/formimg.png';
import gsap from "gsap";

export default function FormModal({ show, onClose }) {
  if (!show) return null;

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [vaccinated, setVaccinated] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const snackbarRef = useRef(null);

  const today = new Date().toISOString().split('T')[0];
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);
  const minDateStr = minDate.toISOString().split('T')[0];

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    gsap.fromTo(
      snackbarRef.current,
      { y: -50, autoAlpha: 0 },
      { duration: 0.6, y: 0, autoAlpha: 1, ease: "power3.out" }
    );

    setTimeout(() => {
      if (snackbarRef.current) {
        gsap.to(snackbarRef.current, {
          duration: 0.4,
          y: -50,
          autoAlpha: 0,
          ease: "power3.in",
          onComplete: () => setSnackbarMessage(''),
        });
      }
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, gender, birthdate, vaccinated };

    try {
      const response = await fetch('http://localhost:3000/api/people', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      showSnackbar('Thanks for submitting your form!');

     
      setName('');
      setGender('');
      setBirthdate('');
      setVaccinated('');

      
      setTimeout(() => onClose(), 1500);

    } catch (error) {
      showSnackbar('Error submitting form: ' + error.message);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl flex flex-col md:flex-row bg-white"
          onClick={e => e.stopPropagation()}
          style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        >
          {/* Left Image Panel */}
          <div
            className="md:w-1/2 relative hidden md:block"
            style={{
              backgroundImage: `url(${frmimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8d9ba3bb] via-transparent to-transparent rounded-l-xl" />
          </div>

          {/* Right Form Panel */}
          <div className="w-full md:w-1/2 px-8 py-14 flex items-center">
            <form className="w-full" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6 text-[#22223b]">Register your account</h3>

              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full mb-5 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2463eb] text-sm"
                placeholder="Enter your name"
                required
              />

              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select
                value={gender}
                onChange={e => setGender(e.target.value)}
                className="w-full mb-5 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2463eb] text-sm"
                required
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label className="block text-sm font-medium text-gray-700 mb-2">Birthdate</label>
              <input
                type="date"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
                className="w-full mb-5 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2463eb] text-sm"
                min={minDateStr}
                max={today}
                required
              />

              <fieldset className="mb-6">
                <legend className="block text-sm font-medium text-gray-700 mb-2">Have you been vaccinated?</legend>
                <div className="flex items-center space-x-10">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="vaccinated"
                      value="Yes"
                      checked={vaccinated === 'Yes'}
                      onChange={e => setVaccinated(e.target.value)}
                      required
                      className="form-radio text-[#2463eb]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="vaccinated"
                      value="No"
                      checked={vaccinated === 'No'}
                      onChange={e => setVaccinated(e.target.value)}
                      className="form-radio text-[#2463eb]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white text-base font-semibold rounded-md shadow-md transition"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      {snackbarMessage && (
        <div
          ref={snackbarRef}
          className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-md px-6 py-3 shadow-lg z-60 flex items-center max-w-lg w-full cursor-pointer select-none"
          style={{ fontFamily: "'Montserrat', sans-serif", minWidth: '280px' }}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <span className="flex-grow text-center font-semibold text-sm md:text-base">
            {snackbarMessage}
          </span>
          <button
            onClick={() => {
              gsap.to(snackbarRef.current, {
                duration: 0.4,
                y: -50,
                autoAlpha: 0,
                ease: "power3.in",
                onComplete: () => setSnackbarMessage(''),
              });
            }}
            aria-label="Close notification"
            className="ml-4 text-white text-lg font-bold hover:text-gray-300 transition"
            type="button"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
