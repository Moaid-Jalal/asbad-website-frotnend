'use client';

import { useState } from 'react';
import {
  ContactFormData,
  ContactFormResponse,
  submitContactForm,
  clearContactForm,
  validateContactForm
} from '@/lib/api';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    note: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState<ContactFormResponse | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError(null);
    }

    // Clear submit result when user makes changes
    if (submitResult) {
      setSubmitResult(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous results
    setSubmitResult(null);
    setValidationError(null);

    // Validate form data
    const validation = validateContactForm(formData);
    if (validation) {
      setValidationError(validation.message);
      return;
    }

    setIsLoading(true);

    try {
      const result = await submitContactForm(formData);
      setSubmitResult(result);

      if (result.success) {
        // Clear form on success
        setFormData(clearContactForm());
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-6 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          {/* Name Input */}
          <div className="w-full">
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full text-black h-12 px-4 border-2 border-black rounded-md focus:outline-none focus:border-red-500"
                  required
                  disabled={isLoading}
              />
          </div>

          {/* Email Input */}
          <div className="w-full">
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full text-black h-12 px-4 border-2 border-black rounded-md focus:outline-none focus:border-red-500"
                  required
                  disabled={isLoading}
              />
          </div>

          {/* Subject Input */}
          <div className="w-full">
              <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full text-black h-12 px-4 border-2 border-black rounded-md focus:outline-none focus:border-red-500"
                  required
                  disabled={isLoading}
              />
          </div>

          {/* Note Textarea */}
          <div className="w-full">
              <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Tell us something"
                  rows={5}
                  className="w-full text-black px-4 py-3 border-2 border-black rounded-md resize-none focus:outline-none focus:border-red-500"
                  required
                  disabled={isLoading}
              />
          </div>
        </div>

        {/* Validation Error */}
        {validationError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {validationError}
          </div>
        )}

        {/* Submit Result */}
        {submitResult && (
          <div className={`px-4 py-3 rounded-md ${
            submitResult.success
              ? 'bg-green-50 border border-green-200 text-green-700'
              : 'bg-red-50 border border-red-200 text-red-700'
          }`}>
            {submitResult.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
            <button
                type='submit'
                disabled={isLoading}
                className={`max-w-[650px] w-full cursor-pointer text-sm px-8 py-3 h-14 rounded-full text-lg font-semibold transition-all duration-300 transform shadow-lg hover:shadow-xl ${
                  isLoading
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 text-white hover:scale-105'
                }`}
            >
                {isLoading ? 'submitting...' : 'Send'}
            </button>
        </div>
      </form>
    </div>
  );
}