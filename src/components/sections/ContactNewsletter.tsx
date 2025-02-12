'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  Snackbar,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactNewsletter = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.name_required');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.email_required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.email_invalid');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.message_required');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSnackbar({
        open: true,
        message: t('contact.success_message'),
        severity: 'success',
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('contact.error_message'),
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#2D3250',
        backgroundImage: 'linear-gradient(180deg, #2D3250 0%, #1E2238 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Contact Form Section */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'white',
                }}
              >
                {t('contact.title')}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 4,
                }}
              >
                {t('contact.subtitle')}
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  '& .MuiTextField-root': {
                    mb: 3,
                  },
                  '& .MuiInputBase-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2) !important',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: `${COLORS.secondary.main} !important`,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: COLORS.secondary.main,
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              >
                <TextField
                  fullWidth
                  name="name"
                  label={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: COLORS.secondary.main }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: COLORS.secondary.main }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  name="message"
                  label={t('contact.form.message')}
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon sx={{ color: COLORS.secondary.main }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    bgcolor: COLORS.secondary.main,
                    color: 'white',
                    '&:hover': {
                      bgcolor: COLORS.secondary.main,
                      filter: 'brightness(0.9)',
                    },
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    t('contact.form.submit')
                  )}
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                  {t('newsletter.title')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3,
                  }}
                >
                  {t('newsletter.description')}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  {['1', '2', '3'].map(num => (
                    <Box
                      key={num}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          bgcolor: COLORS.secondary.main,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          color: 'white',
                          fontSize: '0.875rem',
                        }}
                      >
                        {num}
                      </Box>
                      <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        {t(`newsletter.benefits.${num}`)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
