'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, X, Upload } from 'lucide-react';

interface FunctionsCareer {
  id: number;
  name: string | null;
  precedence: number | null;
  modification_time: Date | null;
  is_disabled: number;
}

interface RoleMaster {
  id: number;
  function_master_id: number | null;
  role: string | null;
  is_active: any;
}

interface CareersClientProps {
  functions: FunctionsCareer[];
  roles: RoleMaster[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function CareersClient({ functions, roles }: CareersClientProps) {
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    role: '',
    mobileNo: '',
    currentCTC: '',
    highestQualification: '',
    qualification: '',
    function: '',
    email: '',
    totalWorkExperience: '',
    currentOrganisation: '',
    message: ''
  });
  const [cvFile, setCvFile] = React.useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [recaptchaToken, setRecaptchaToken] = React.useState('');
  const [filteredRoles, setFilteredRoles] = React.useState<RoleMaster[]>([]);
  const [hasRolesForSelectedFunction, setHasRolesForSelectedFunction] = React.useState(false);

  // Filter roles based on selected function
  React.useEffect(() => {
    if (formData.function) {
      const functionId = parseInt(formData.function);
      const filtered = roles.filter(role => role.function_master_id === functionId);
      setFilteredRoles(filtered);
      setHasRolesForSelectedFunction(filtered.length > 0);
      
      // Clear role selection if no roles available for the selected function
      if (filtered.length === 0) {
        setFormData(prev => ({ ...prev, role: '' }));
      }
    } else {
      setFilteredRoles([]);
      setHasRolesForSelectedFunction(false);
    }
  }, [formData.function, roles]);

  const handleOpenModal = () => setShowModal(true);
  
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      fullName: '',
      role: '',
      mobileNo: '',
      currentCTC: '',
      highestQualification: '',
      qualification: '',
      function: '',
      email: '',
      totalWorkExperience: '',
      currentOrganisation: '',
      message: ''
    });
    setCvFile(null);
    setRecaptchaToken('');
    setFilteredRoles([]);
    setHasRolesForSelectedFunction(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      // Check file type (PDF, DOC, DOCX)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload only PDF, DOC, or DOCX files');
        if (e.currentTarget) e.currentTarget.value = '';
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        if (e.currentTarget) e.currentTarget.value = '';
        return;
      }
      
      setCvFile(file);
    }
  };

  const onRecaptchaChange = (token: string) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    if (!cvFile) {
      alert('Please upload your CV');
      return;
    }

    // Only validate role if there are roles available for the selected function
    if (hasRolesForSelectedFunction && !formData.role) {
      alert('Please select a role');
      return;
    }

    setIsSubmitting(true);

    try {
      // Verify reCAPTCHA token with your backend
      const recaptchaResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaToken }),
      });

      const recaptchaResult = await recaptchaResponse.json();

      if (!recaptchaResult.success) {
        throw new Error('reCAPTCHA verification failed');
      }

      // Prepare form data for submission
      const submitData = new FormData();
      (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
        submitData.append(key, String(formData[key]));
      });
      submitData.append('cv', cvFile);
      submitData.append('recaptchaToken', recaptchaToken);

      // Submit form data to your backend
      const response = await fetch('/api/submit-cv', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        alert('Your CV has been submitted successfully!');
        handleCloseModal();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your CV. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/vacancies_new.jpg`}
          alt="Careers at TIL"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We are <span className="text-[#F1B434]">Hiring!</span>
              </motion.h1>
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Build India's tomorrow with today's heavy equipment pioneers
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="pb-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-12">
          {/* Introductory Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-12"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Image Left */}
              <motion.div
                className="lg:w-1/3 relative rounded-xl overflow-hidden shadow-lg self-stretch"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={`${basePath}/vacancies.jpg`}                 
                  alt="TIL team working together"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Your Future Starts Here</h3>
                  <p className="text-sm">Apply now for roles in engineering, manufacturing, and field operations</p>
                </div>
              </motion.div>

              {/* Content Right */}
              <div className="lg:w-2/3 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Openings</h2>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  You may submit your CV here and we will consider the same as and when suitable opportunities arise.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  For further queries you may contact:{" "}
                  <a
                    href="mailto:recruitment@tilindia.com"
                    className="font-bold hover:underline text-gray-800"
                  >
                    recruitment@tilindia.com
                  </a>
                </motion.p>

                <motion.button
                  onClick={handleOpenModal}
                  className="inline-flex items-center px-6 py-2.5 bg-[#F1B434] text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:bg-[#E8AC30]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit CV <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal for Submit CV */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-800">Submit Your CV</h3>
                    <button
                      onClick={handleCloseModal}
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    {/* Function */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Function *
                      </label>
                      <select
                        name="function"
                        value={formData.function}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        required
                      >
                        <option value="">--select--</option>
                        {functions.map((func) => (
                          <option key={func.id} value={func.id}>
                            {func.name || 'Unnamed Function'}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Role - Conditionally required */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Role {hasRolesForSelectedFunction && '*'}
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        disabled={!formData.function}
                      >
                        <option value="">--select--</option>
                        {filteredRoles.map((role) => (
                          <option key={role.id} value={role.role || ''}>
                            {role.role || 'Unnamed Role'}
                          </option>
                        ))}
                        {filteredRoles.length === 0 && formData.function && (
                          <option value="">No specific roles available</option>
                        )}
                      </select>
                      {!hasRolesForSelectedFunction && formData.function && (
                        <p className="text-sm text-gray-500 mt-1">
                          No specific roles required for this function
                        </p>
                      )}
                    </div>

                    {/* Mobile No */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Mobile No. *
                      </label>
                      <input
                        type="tel"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="Mobile No."
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="E-Mail"
                        required
                      />
                    </div>

                    {/* Current CTC */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Current CTC
                      </label>
                      <input
                        type="text"
                        name="currentCTC"
                        value={formData.currentCTC}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="CTC"
                      />
                    </div>

                    {/* Highest Qualification */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Highest Qualification *
                      </label>
                      <input
                        type="text"
                        name="highestQualification"
                        value={formData.highestQualification}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="Highest Qualification"
                        required
                      />
                    </div>

                    {/* Qualification */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Qualification *
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="Qualification"
                        required
                      />
                    </div>

                    {/* Total Work Experience */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Total Work Experience (in Years)
                      </label>
                      <input
                        type="number"
                        name="totalWorkExperience"
                        value={formData.totalWorkExperience}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="Total Work Experience"
                      />
                    </div>

                    {/* Current Organisation */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Current Organisation
                      </label>
                      <input
                        type="text"
                        name="currentOrganisation"
                        value={formData.currentOrganisation}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                        placeholder="Current Organisation"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors resize-vertical"
                        placeholder="Message"
                      />
                    </div>

                    {/* CV Upload */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        CV Upload *
                      </label>
                      <div className="flex items-center gap-4">
                        <label className="flex-1 cursor-pointer">
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            required
                          />
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F1B434] transition-colors">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-600 font-medium">
                              {cvFile ? cvFile.name : 'Choose File'}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {!cvFile && 'PDF, DOC, DOCX (Max 5MB)'}
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* reCAPTCHA */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        I'm not a robot *
                      </label>
                      <div className="bg-gray-100 rounded-lg p-4 min-h-[78px] flex items-center justify-center">
                        {/* reCAPTCHA v2 will be loaded here */}
                        <div 
                          className="g-recaptcha" 
                          data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
                          data-callback={onRecaptchaChange}
                        ></div>
                        <p className="text-sm text-gray-500 text-center">
                          reCAPTCHA integration required
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-3 bg-[#F1B434] text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:bg-[#E8AC30] disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit <ArrowRight size={16} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}