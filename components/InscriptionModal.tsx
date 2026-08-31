"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ClipboardList } from "lucide-react";
import { Button } from "./Button";
import { useEffect } from "react";

interface InscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InscriptionModal({ isOpen, onClose }: InscriptionModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const whatsappNumber = "5493624687809";
  const message = encodeURIComponent(
    "¡Hola Mili! Quiero inscribirme al Retiro Crecer. Te paso mis datos:\n\n" +
    "- Nombre y apellido:\n" +
    "- Edad:\n" +
    "- Fecha de nacimiento:\n" +
    "- Domicilio:\n" +
    "- Mi número de celular:\n" +
    "- Celular de un familiar (y parentesco):\n" +
    "- Mi Instagram o Facebook:\n" +
    "- Nombre y celular de mi padrino/madrina (quien me invitó y ya hizo el retiro):"
  );
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto max-h-[90vh]"
            >
              {/* Header */}
              <div className="relative p-6 sm:p-8 pb-4 sm:pb-6 border-b border-zinc-100 dark:border-zinc-800/50">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 text-ccr-accent flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                    ¡Datos de Inscripción!
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 pt-4 sm:pt-6 overflow-y-auto">
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed">
                  Para anotarte, necesitamos que le envíes un mensaje de WhatsApp a Mili con los siguientes datos. ¡Podés copiarlos o usar el botón de abajo que ya te los deja listos para rellenar!
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Nombre y apellido",
                    "Edad y Fecha de nacimiento",
                    "Domicilio",
                    "Tu número de celular",
                    "Celular de un familiar (y de quién es)",
                    "Instagram o Facebook",
                    "Nombre y celular del padrino/madrina (alguien que haya hecho el crecer y te invitó)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-ccr-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button size="lg" className="w-full text-base bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white border-transparent">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar datos por WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
