import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import RippleButton from '../components/RippleButton';

const InputField = ({ label, type = 'text', name, isTextArea = false }) => (
  <div className="float-label mb-6">
    {isTextArea ? (
      <textarea name={name} placeholder=" " rows="4" required />
    ) : (
      <input type={type} name={name} placeholder=" " required />
    )}
    <label>{label}</label>
  </div>
);

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_0cd2jmv', 
      'template_si94n9a', 
      form.current, 
      'VazZo_KnlrWkm3Rl4'
    )
      .then((result) => {
          setIsSending(false);
          setIsSent(true);
          form.current.reset();
          // Reset success message after 5 seconds to allow new messages
          setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
          setIsSending(false);
          alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050a0e]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl text-white mb-2">CONTACTO</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#0a1628]/40 backdrop-blur-md p-8 rounded-2xl border border-cyan-400/20 mb-12 min-h-[400px] flex items-center justify-center relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.form 
                key="form"
                ref={form} 
                onSubmit={sendEmail}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full"
              >
                <div className="grid md:grid-cols-2 gap-x-6">
                  <InputField label="Nombre" name="name" />
                  <InputField label="Email" name="email" type="email" />
                </div>
                <InputField label="Mensaje" name="message" isTextArea />
                <div className="flex justify-center">
                  <RippleButton
                    type="submit"
                    disabled={isSending}
                    className={`btn-neon flex items-center gap-3 px-12 py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-all duration-300 ${isSending ? 'opacity-50 cursor-not-allowed bg-gray-600 text-white' : 'bg-cyan-400 text-[#050a0e]'}`}
                  >
                    {isSending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Enviar Mensaje
                      </>
                    )}
                  </RippleButton>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <FaCheckCircle className="text-6xl md:text-8xl text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-orbitron">¡MENSAJE ENVIADO!</h3>
                <p className="text-gray-400 text-lg">Gracias por contactarme, te responderé lo antes posible. ✅</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            ¡TRABAJEMOS JUNTOS!
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <a href="mailto:marcosfranco031@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <FaEnvelope className="text-cyan-400" /> marcosfranco031@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/marcos-franco-909618247/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <FaLinkedin className="text-cyan-400" /> LinkedIn
            </a>
            <a href="https://github.com/Marcosfranco09" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <FaGithub className="text-cyan-400" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
