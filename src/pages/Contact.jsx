import React from "react";
import PageHead from "../components/common/PageHead";
import SecHeading from "../components/common/SecHeading";
export default function Contact() {
  return (
    <div>
      <section className="about">
        <PageHead
          bg={
            "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742332569/subheader3_f6sip3.jpg')]"
          }
          pageTitile={"Contact Us"}
        />
        <form className="bg-white shadow-xl rounded-lg p-6 md:p-8">
          <div className="mb-8">
            <h3 className="text-xl font-serif text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Case Information
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="caseType"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Legal Matter <span className="text-red-600">*</span>
                </label>
                <select
                  id="caseType"
                  name="caseType"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                  <option value="" disabled selected>
                    Select a case type
                  </option>
                  <option value="family">Family Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="personal-injury">Personal Injury</option>
                  <option value="business">Business Law</option>
                  <option value="estate">Estate Planning</option>
                  <option value="immigration">Immigration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="urgency"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Urgency
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                  <option value="low">Not Urgent</option>
                  <option value="medium">Somewhat Urgent</option>
                  <option value="high">Very Urgent</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="caseDetails"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Description of Your Case{" "}
                  <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="caseDetails"
                  name="caseDetails"
                  rows="5"
                  required
                  placeholder="Please provide details about your legal matter. Do not include confidential information at this stage."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"></textarea>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Additional Information
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="referralSource"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="referralSource"
                  name="referralSource"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral from Friend/Family</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="consent"
                    className="font-medium text-gray-700">
                    Legal Consent <span className="text-red-600">*</span>
                  </label>
                  <p className="text-gray-500">
                    I understand that submitting this form does not create an
                    attorney-client relationship and that the information
                    provided will be kept confidential. I consent to being
                    contacted by your firm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
              Submit Request for Consultation
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Our team typically responds within 1-2 business days. For urgent
            matters, please call our office directly.
          </p>
        </form>
      </section>
    </div>
  );
}
