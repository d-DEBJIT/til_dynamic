'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    category: '',
    product: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      setIsSubmitting(false);
      return;
    }
    try {
      console.log('Form submitted:', { ...formData, recaptchaToken });
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: '',
        organization: '',
        phone: '',
        email: '',
        category: '',
        product: '',
      });
      setRecaptchaToken(null);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Overlay */}
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal - Responsive layout */}
          <motion.div
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
            style={{ height: isMobile ? '90vh' : 'auto', maxHeight: isMobile ? '90vh' : 'none' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 20, 
              stiffness: 300,
              delay: 0.1
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section - Hidden on mobile */}
            {!isMobile && (
              <div className="w-full md:w-2/5 bg-gray-100 relative">
                <img 
                  src={`${basePath}/free.jpeg`}
                  alt="Brochure"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Form Section */}
            <div className="w-full md:w-3/5 overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full p-1 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className={`h-full ${isMobile ? 'p-4' : 'p-8'}`}>
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                        DOWNLOAD BROCHURE
                      </h2>
                      <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                        Fill out the form below to receive our product brochure
                      </p>
                    </div>
                  </div>
                  <div className="h-1 w-12 mb-4 md:mb-6" style={{ backgroundColor: '#F1B434' }}></div>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <TextField
                      label="Full Name"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      size={isMobile ? "small" : "medium"}
                      InputLabelProps={{
                        style: { 
                          fontWeight: 500,
                          fontFamily: 'Arial, sans-serif'
                        }
                      }}
                      InputProps={{
                        style: {
                          fontFamily: 'Arial, sans-serif'
                        },
                        className: 'focus:outline-none'
                      }}
                    />
                  </motion.div>

                  {/* Organization and Phone - Stacked on mobile */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: 2
                    }}
                  >
                    <TextField
                      label="Organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      size={isMobile ? "small" : "medium"}
                      InputLabelProps={{
                        style: { 
                          fontWeight: 500,
                          fontFamily: 'Arial, sans-serif'
                        }
                      }}
                      InputProps={{
                        style: {
                          fontFamily: 'Arial, sans-serif'
                        },
                        className: 'focus:outline-none'
                      }}
                    />
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      size={isMobile ? "small" : "medium"}
                      InputLabelProps={{
                        style: { 
                          fontWeight: 500,
                          fontFamily: 'Arial, sans-serif'
                        }
                      }}
                      InputProps={{
                        style: {
                          fontFamily: 'Arial, sans-serif'
                        },
                        className: 'focus:outline-none'
                      }}
                    />
                  </Box>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      size={isMobile ? "small" : "medium"}
                      InputLabelProps={{
                        style: { 
                          fontWeight: 500,
                          fontFamily: 'Arial, sans-serif'
                        }
                      }}
                      InputProps={{
                        style: {
                          fontFamily: 'Arial, sans-serif'
                        },
                        className: 'focus:outline-none'
                      }}
                    />
                  </motion.div>

                  {/* Category and Product - Stacked on mobile */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: 2
                    }}
                  >
                    <TextField
                      select
                      label="Select Category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      size={isMobile ? "small" : "medium"}
                      InputLabelProps={{
                        style: { 
                          fontWeight: 500,
                          fontFamily: 'Arial, sans-serif'
                        }
                      }}
                      SelectProps={{
                        style: {
                          fontFamily: 'Arial, sans-serif'
                        },
                        className: 'focus:outline-none'
                      }}
                    >
                      <MenuItem value="rough-terrain" style={{ fontFamily: 'Arial, sans-serif' }}>Rough Terrain Cranes</MenuItem>
                      <MenuItem value="boom-lifts" style={{ fontFamily: 'Arial, sans-serif' }}>Boom Lifts</MenuItem>
                      <MenuItem value="scissor-lifts" style={{ fontFamily: 'Arial, sans-serif' }}>Scissor Lifts</MenuItem>
                    </TextField>
                    <TextField
                      select
                      label="Select Product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      size={isMobile ? "small" : "medium"}
                      InputLabelProps={{
                        style: { 
                          fontWeight: 500,
                          fontFamily: 'Arial, sans-serif'
                        }
                      }}
                      SelectProps={{
                        style: {
                          fontFamily: 'Arial, sans-serif'
                        },
                        className: 'focus:outline-none'
                      }}
                    >
                      <MenuItem value="" style={{ fontFamily: 'Arial, sans-serif' }}>Select one...</MenuItem>
                      <MenuItem value="model-x" style={{ fontFamily: 'Arial, sans-serif' }}>Model X</MenuItem>
                      <MenuItem value="model-y" style={{ fontFamily: 'Arial, sans-serif' }}>Model Y</MenuItem>
                      <MenuItem value="model-z" style={{ fontFamily: 'Arial, sans-serif' }}>Model Z</MenuItem>
                    </TextField>
                  </Box>

                  {/* Divider */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                  >
                    <div className="border-t border-gray-200 my-3 md:my-4"></div>
                  </motion.div>

                  {/* Recaptcha - Adjusted for mobile */}
                  <motion.div
                    className="py-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="scale-90 md:scale-100 origin-left focus:outline-none">
                      <ReCAPTCHA
                        sitekey="YOUR_RECAPTCHA_SITE_KEY"
                       onChange={(token: string | null) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                      />
                    </div>
                  </motion.div>

                  {/* Submit button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{
                        bgcolor: '#F1B434',
                        '&:hover': { bgcolor: '#FFE352' },
                        color: '#000',
                        textTransform: 'none',
                        fontWeight: 600,
                        padding: isMobile ? '8px' : '10px',
                        borderRadius: '4px',
                        marginTop: '8px',
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        fontFamily: 'Arial, sans-serif',
                        '&:focus': {
                          outline: 'none'
                        }
                      }}
                    >
                      {isSubmitting ? 'Processing...' : 'DOWNLOAD BROCHURE'}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureDownloadModal;