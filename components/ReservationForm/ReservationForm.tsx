// components/ReservationForm.tsx
'use client';

import { useState } from 'react';

export default function ReservationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  });

  const next = () => setStep((prev) => Math.min(prev + 1, 5));
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = () => {
    console.log('Submitted Data:', formData);
    alert('Reservation submitted successfully!');
  };

  const progressPercent = (step - 1) * 25;

  return (
    <section className="max-w-2xl mx-auto bg-[#f9f6f2] rounded-xl p-8 shadow border border-[#d4c6b5]">
      {/* Progress Bar */}
      <div className="w-full bg-[#e0d8ce] h-2 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-[#4f140e] transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step Content */}
      <form className="space-y-6">
        {step === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              className="w-full border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
              className="w-full border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
              required
            />
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="w-full border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
              required
            />
          </div>
        )}

        {step === 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              value={formData.date}
              onChange={(e) => updateField('date', e.target.value)}
              className="w-full border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
              required
            />
            <select
              value={formData.time}
              onChange={(e) => updateField('time', e.target.value)}
              className="w-full border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
              required
            >
              <option value="">Select Time</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>
        )}

        {step === 4 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={(e) => updateField('guests', e.target.value)}
              className="w-full border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
              required
            />
            <textarea
              placeholder="Special Requests"
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              rows={2}
              className="w-full sm:col-span-2 border border-[#ccc] rounded px-4 py-2 bg-white text-[#4f140e]"
            />
          </div>
        )}

        {step === 5 && (
          <div className="text-[#4f140e] space-y-3">
            <h3 className="text-xl font-bold">Summary</h3>
            <p>
              <strong>Name:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Date & Time:</strong> {formData.date} at {formData.time}
            </p>
            <p>
              <strong>Guests:</strong> {formData.guests}
            </p>
            <p>
              <strong>Notes:</strong> {formData.notes || 'None'}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="px-5 py-2 rounded-full border border-[#4f140e] text-[#4f140e] hover:bg-[#4f140e]/10 transition"
            >
              Back
            </button>
          )}
          {step < 5 && (
            <button
              type="button"
              onClick={next}
              className="ml-auto px-6 py-2 bg-[#4f140e] text-white rounded-full font-semibold hover:bg-[#3d0f0b] transition"
            >
              Next
            </button>
          )}
          {step === 5 && (
            <button
              type="submit"
              onClick={submitForm}
              className="ml-auto px-6 py-2 bg-[#4f140e] text-white rounded-full font-semibold hover:bg-[#3d0f0b] transition"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
