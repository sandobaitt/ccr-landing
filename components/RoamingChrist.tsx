'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

type State = 'IDLE' | 'WALK_RIGHT' | 'WALK_LEFT' | 'WAVE' | 'HIDE';

export function RoamingChrist() {
  const [state, setState] = useState<State>('HIDE');
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();
  const currentX = useRef(-100);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    if (typeof window === 'undefined') return;
    const winWidth = window.innerWidth;
    currentX.current = -100; // Empieza escondido a la izquierda
    controls.set({ x: currentX.current });

    const performAction = async () => {
      if (!isMounted.current) return;

      const rand = Math.random();
      let nextState: State;
      
      // Si está fuera de la pantalla, que vuelva a entrar
      if (currentX.current < -50 || currentX.current > window.innerWidth + 50) {
        nextState = currentX.current <= 0 ? 'WALK_RIGHT' : 'WALK_LEFT';
      } else {
        // Probabilidades de comportamiento autónomo
        if (rand < 0.45) nextState = Math.random() > 0.5 ? 'WALK_RIGHT' : 'WALK_LEFT';
        else if (rand < 0.75) nextState = 'IDLE';
        else if (rand < 0.90) nextState = 'WAVE';
        else nextState = 'HIDE';
      }

      setState(nextState);

      const charWidth = 64; 
      const maxWidth = window.innerWidth - charWidth;

      if (nextState === 'WALK_RIGHT') {
        setIsFlipped(false);
        const distance = Math.random() * 200 + 100;
        let targetX = currentX.current + distance;
        if (targetX > maxWidth) targetX = maxWidth; 
        
        const duration = Math.abs(targetX - currentX.current) / 45; // Velocidad de caminata
        await controls.start({ x: targetX, transition: { duration, ease: 'linear' } });
        currentX.current = targetX;
      } 
      else if (nextState === 'WALK_LEFT') {
        setIsFlipped(true);
        const distance = Math.random() * 200 + 100;
        let targetX = currentX.current - distance;
        if (targetX < 0) targetX = 0; 
        
        const duration = Math.abs(targetX - currentX.current) / 45;
        await controls.start({ x: targetX, transition: { duration, ease: 'linear' } });
        currentX.current = targetX;
      } 
      else if (nextState === 'HIDE') {
        // Corre hacia el borde más cercano para salir de la pantalla
        const goRight = currentX.current > window.innerWidth / 2;
        setIsFlipped(!goRight);
        const targetX = goRight ? window.innerWidth + 100 : -100;
        const duration = Math.abs(targetX - currentX.current) / 80; // Corre más rápido cuando se esconde
        await controls.start({ x: targetX, transition: { duration, ease: 'linear' } });
        currentX.current = targetX;
        
        // Se queda escondido entre 5 y 10 segundos
        await new Promise(res => setTimeout(res, Math.random() * 5000 + 5000));
      } 
      else {
        // IDLE o WAVE: Se queda quieto
        // Si está muy cerca del borde derecho, se voltea para mirar hacia el centro
        if (nextState === 'WAVE' || nextState === 'IDLE') {
           if (currentX.current > window.innerWidth - 100) {
             setIsFlipped(true);
           } else if (currentX.current < 100) {
             setIsFlipped(false);
           }
        }
        await new Promise(res => setTimeout(res, Math.random() * 2500 + 1500));
      }

      // Bucle infinito: llamar la próxima acción tras una pequeñísima pausa
      if (isMounted.current) {
        setTimeout(performAction, 200);
      }
    };

    // Empieza recién a los 7 segundos (para darle tiempo a la pantalla de carga principal)
    const initTimer = setTimeout(performAction, 7000);

    return () => {
      isMounted.current = false;
      clearTimeout(initTimer);
    };
  }, [controls]);

  // Selección de la fila de animación del spritesheet según el estado actual
  let rowClass = 'sprite-row-idle';
  if (state === 'WALK_RIGHT' || state === 'WALK_LEFT' || state === 'HIDE') {
    rowClass = 'sprite-row-walk';
  } else if (state === 'WAVE') {
    rowClass = 'sprite-row-wave';
  }

  return (
    <motion.div
      className="fixed bottom-0 z-50 pointer-events-none drop-shadow-md pb-2"
      animate={controls}
      initial={{ x: -100 }}
    >
      <div 
        className={`w-14 h-14 md:w-16 md:h-16 bg-[url('/jesus-sprite.png')] bg-[length:600%_300%] ${rowClass} animate-sprite`}
        style={{
          transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)',
          transition: 'transform 0.2s',
          imageRendering: 'pixelated', // ¡Importante para que el Pixel Art no se vea borroso!
        }}
      />
    </motion.div>
  );
}
