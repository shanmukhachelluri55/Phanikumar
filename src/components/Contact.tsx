import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ismartphani309@gmail.com',
      href: 'mailto:ismartphani309@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9550108378',
      href: 'tel:+919550108378',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Mahakaliamma Temple Street, Near Sarvodaya Ashram, Old RR Peta, Vijayawada',
      href: null,
    },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 md:py-32 ${darkMode ? 'bg-zinc-900' : 'bg-stone-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? 'bg-amber-600' : 'bg-amber-700'
            }`}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className={`text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              Contact Information
            </h3>
            <p
              className={`text-lg mb-8 ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      darkMode ? 'bg-amber-700/20' : 'bg-amber-700/10'
                    }`}
                  >
                    <info.icon
                      size={24}
                      className={darkMode ? 'text-amber-600' : 'text-amber-700'}
                    />
                  </div>
                  <div>
                    <h4
                      className={`font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {info.label}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`hover:underline ${
                          darkMode ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={`${
                          darkMode ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-lg ${
                darkMode ? 'bg-zinc-800' : 'bg-white'
              } shadow-lg`}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-700 text-white focus:border-amber-600'
                      : 'bg-white border-zinc-300 text-zinc-900 focus:border-amber-700'
                  } focus:outline-none ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-700 text-white focus:border-amber-600'
                      : 'bg-white border-zinc-300 text-zinc-900 focus:border-amber-700'
                  } focus:outline-none ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-700 text-white focus:border-amber-600'
                      : 'bg-white border-zinc-300 text-zinc-900 focus:border-amber-700'
                  } focus:outline-none ${
                    errors.subject ? 'border-red-500' : ''
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-700 text-white focus:border-amber-600'
                      : 'bg-white border-zinc-300 text-zinc-900 focus:border-amber-700'
                  } focus:outline-none ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {submitted ? (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-500 text-center">
                  Message sent successfully!
                </div>
              ) : (
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg transition-all hover:scale-105 ${
                    darkMode
                      ? 'bg-amber-700 text-white hover:bg-amber-600'
                      : 'bg-amber-700 text-white hover:bg-amber-800'
                  }`}
                >
                  <span className="font-medium">Send Message</span>
                  <Send size={20} />
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
