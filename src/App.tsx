/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, MessageCircle, Gift, ArrowDown, Download, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export default function App() {
  const [isSurveyFinished, setIsSurveyFinished] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState(false);

  // CÓDIGO DE VERIFICACIÓN (Cámbialo aquí y en el mensaje de confirmación de tu Google Form)
  const VALID_CODE = "FEM2024";

  const trackEvent = (eventName: string) => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', eventName);
    }
  };

  const scrollToSurvey = () => {
    trackEvent('Lead');
    const element = document.getElementById("survey-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVerify = () => {
    if (inputCode.trim().toUpperCase() === VALID_CODE) {
      setIsSurveyFinished(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-lavender-soft selection:text-violet-deep">
      {/* Section 1: Hero Principal */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop" 
            alt="Mujer en paz conectando con su interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 md:bg-black/30" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white/75 backdrop-blur-md rounded-[12px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-white/20"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-deep-blue leading-tight mb-6 tracking-tight">
              La Raíz Emocional de Tu Síntoma
            </h1>
            
            <p className="text-lg md:text-xl text-[#444] font-sans mb-10 max-w-4xl mx-auto leading-relaxed">
              Queremos escucharte. Tu experiencia es única y valiosa. Esta encuesta es completamente Anónima y confidencial. No hay respuestas correctas o incorrectas. Solo queremos comprender mejor tu experiencia, tus síntomas, tus enfermedades, tus emociones y lo que realmente necesitas para avanzar en tu proceso de sanación desde tu raíz emocional.
            </p>

            <motion.button
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.08, boxShadow: "0 10px 25px -5px rgba(126, 217, 87, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSurvey}
              className="bg-cta-green text-white px-12 py-5 rounded-[30px] text-lg font-bold shadow-lg transition-all flex items-center gap-3 mx-auto group"
            >
              RESPONDER LA ENCUESTA
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Beneficios de responder */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-10 md:p-12 rounded-[40px] bg-warm-white/50 border border-lavender-soft/50 max-w-2xl shadow-sm"
            >
              <div className="w-20 h-20 bg-lavender-soft rounded-3xl flex items-center justify-center mb-8 text-violet-deep shadow-inner">
                <Gift className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-violet-deep mb-6">Regalo exclusivo</h3>
              <p className="text-elegant-gray/70 text-lg leading-relaxed">
                Recibirás al finalizarla un regalo muy especial: <span className="text-violet-deep font-bold italic">La Raíz Emocional de Tu Síntoma</span>.<br />
                Una guía <span className="text-violet-deep font-black">GRATIS</span> para comprender qué es y sanar desde el origen.<br />
                <span className="text-elegant-gray font-bold">Como agradecimiento por tu tiempo y dedicación.</span>
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <motion.button
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSurvey}
              className="bg-violet-deep text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl shadow-violet-deep/20 hover:bg-violet-deep/90 transition-all flex flex-col items-center leading-tight group"
            >
              <div className="flex items-center gap-3">
                <span>QUIERO RESPONDER LA ENCUESTA</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Encuesta Embebida */}
      <section id="survey-section" className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-violet-deep/60 mb-4">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-widest">Solo te tomará unos minutos y tus respuestas pueden marcar la diferencia.</span>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto bg-white p-4 md:p-8 rounded-[40px] shadow-2xl shadow-violet-deep/5 border border-lavender-soft/30 overflow-hidden">
          <div className="w-full relative bg-warm-white/30 rounded-2xl overflow-hidden h-[450px] md:h-[550px] overflow-y-auto border border-lavender-soft/20" id="iframe-container">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSccrpQVdyKSXXIxLosgnsmJx-fhpgD13-e7vjQlNVIjs-e9Ug/viewform?embedded=true" 
              width="100%" 
              height="5375" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
              style={{ clipPath: 'inset(0 0 100px 0)' }}
              title="Encuesta Biodescodificación Femenina"
            >
              Cargando…
            </iframe>
          </div>
          
          <div className="mt-4 text-center px-4">
            <p className="text-sm font-bold text-violet-deep/80">
              ¿Ya enviaste? Si la pantalla se ve blanca, <button onClick={() => document.getElementById('iframe-container')?.scrollTo({top: 0, behavior: 'smooth'})} className="underline">sube el scroll aquí</button> para ver tu código.
            </p>
          </div>
        </div>

        {/* Unlock Action with Verification Code */}
        <div className="max-w-xl mx-auto mt-8 text-center px-6">
          {!isSurveyFinished ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-violet-deep/5 p-6 md:p-8 rounded-[40px] border border-violet-deep/10 shadow-inner"
            >
              <div className="flex items-center justify-center gap-2 text-violet-deep mb-3">
                <Lock className="w-4 h-4" />
                <p className="font-bold uppercase tracking-wider text-xs">Paso de Verificación</p>
              </div>
              <p className="text-elegant-gray text-sm font-medium mb-4">
                Ingresa el código de verificación que aparece al finalizar la encuesta:
              </p>
              
              <div className="flex flex-col gap-3">
                <input 
                  type="text"
                  placeholder="ESCRIBE EL CÓDIGO AQUÍ"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className={`px-6 py-3 rounded-xl border-2 outline-none text-center font-bold text-violet-deep uppercase transition-all ${
                    error ? "border-red-400 bg-red-50" : "border-lavender-soft focus:border-violet-deep bg-white"
                  }`}
                />
                <motion.button
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  onClick={handleVerify}
                  className="bg-violet-deep text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-violet-deep/90 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  DESBLOQUEAR MI GUIA DE REGALO
                </motion.button>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs font-bold"
                  >
                    Código incorrecto. Asegúrate de escribirlo tal cual aparece.
                  </motion.p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-2 text-cta-green font-bold bg-cta-green/5 p-6 rounded-[40px] border border-cta-green/20"
            >
              <CheckCircle2 className="w-10 h-10" />
              <span className="text-lg">¡VERIFICACIÓN EXITOSA!</span>
              <p className="text-xs text-elegant-gray/70 font-normal">Tu regalo ha sido desbloqueado abajo.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 4: Instrucción final + CTA de descarga */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {isSurveyFinished ? (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-lavender-soft/40 p-10 md:p-16 rounded-[40px] text-center border border-lavender-soft relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-deep/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <p className="text-violet-deep font-semibold mb-4 tracking-wide uppercase text-sm">Tu regalo está listo para descargar</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-violet-deep mb-6">🎁 Descarga tu Guía</h2>
                  <p className="text-lg text-elegant-gray/80 mb-10 leading-relaxed">
                    Haz clic en el botón de abajo para acceder a tu guía descargable en PDF.
                  </p>
                  
                  <motion.a
                    href="https://drive.google.com/file/d/1caUIvUBF5uneOgM_Mx64ZZOL2Ord_Cst/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('CompleteRegistration')}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-cta-green text-white px-12 py-5 rounded-full text-xl font-bold shadow-lg shadow-cta-green/30 hover:bg-[#6ec74a] transition-all"
                  >
                    DESCARGAR MI GUÍA AHORA
                    <Download className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            ) : (
              <div className="text-center p-10 border-2 border-dashed border-lavender-soft rounded-[40px] opacity-50">
                <Lock className="w-12 h-12 text-lavender-soft mx-auto mb-4" />
                <p className="text-elegant-gray font-medium">La guía está bloqueada. Ingresa el código de verificación arriba para acceder.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Section 5: Footer Simple */}
      <footer className="py-12 px-6 bg-warm-white border-t border-lavender-soft/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-deep font-medium mb-4 leading-relaxed">
            Gracias por tomarte este tiempo. Tu voz puede ayudarnos a crear una formación más humana, profunda y útil para muchas mujeres.
          </p>
          <div className="h-px w-20 bg-lavender-soft mx-auto mb-6" />
          <p className="text-sm text-elegant-gray/50 max-w-2xl mx-auto">
            Tus respuestas son confidenciales y serán usadas únicamente con fines de investigación y mejora del programa.
          </p>
        </div>
      </footer>
    </div>
  );
}
