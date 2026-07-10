'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

type State = 'IDLE' | 'WALK_RIGHT' | 'WALK_LEFT' | 'WAVE' | 'HIDE'; // | 'SIT' | 'MATE' | 'BLESS';

export function RoamingChrist() {
  const [state, setState] = useState<State>('HIDE');
  const [isFlipped, setIsFlipped] = useState(false);
  const [frame, setFrame] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(-100);
  const isMounted = useRef(true);
  const loopVersion = useRef(0);
  const restartLoop = useRef<(() => void) | null>(null);

  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrame((prev) => prev + 1); 
    }, 100);
    return () => clearInterval(frameTimer);
  }, []);

  useEffect(() => {
    isMounted.current = true;
    
    if (typeof window === 'undefined') return;
    const spawnLeft = Math.random() > 0.5;
    const startX = spawnLeft ? -100 : window.innerWidth + 100;
    setIsFlipped(!spawnLeft);
    x.set(startX);
    controls.set({ x: startX });

    const performAction = async (version: number) => {
      if (!isMounted.current || version !== loopVersion.current) return;

      const rand = Math.random();
      let nextState: State;
      
      if (x.get() < -50 || x.get() > window.innerWidth + 50) {
        nextState = x.get() <= 0 ? 'WALK_RIGHT' : 'WALK_LEFT';
      } else {
        if (rand < 0.45) nextState = Math.random() > 0.5 ? 'WALK_RIGHT' : 'WALK_LEFT';
        else if (rand < 0.75) nextState = 'IDLE';
        else if (rand < 0.90) nextState = 'WAVE';
        else nextState = 'HIDE';
      }

      setState(nextState);

      const charWidth = 64; 
      const maxWidth = window.innerWidth - charWidth;

      try {
        if (nextState === 'WALK_RIGHT') {
          setIsFlipped(false);
          const distance = Math.random() * 200 + 150;
          let targetX = x.get() + distance;
          if (targetX > maxWidth) targetX = maxWidth; 
          
          const duration = Math.abs(targetX - x.get()) / 45;
          await controls.start({ x: targetX, transition: { duration, ease: 'linear' } });
        } 
        else if (nextState === 'WALK_LEFT') {
          setIsFlipped(true);
          const distance = Math.random() * 200 + 150;
          let targetX = x.get() - distance;
          if (targetX < 0) targetX = 0; 
          
          const duration = Math.abs(targetX - x.get()) / 45;
          await controls.start({ x: targetX, transition: { duration, ease: 'linear' } });
        } 
        else if (nextState === 'HIDE') {
          const goRight = x.get() > window.innerWidth / 2;
          setIsFlipped(!goRight);
          const targetX = goRight ? window.innerWidth + 100 : -100;
          const duration = Math.abs(targetX - x.get()) / 80;
          await controls.start({ x: targetX, transition: { duration, ease: 'linear' } });
          
          if (version !== loopVersion.current) return;
          await new Promise(res => setTimeout(res, Math.random() * 5000 + 5000));
          if (version !== loopVersion.current) return;

          const spawnLeft = Math.random() > 0.5;
          const newStartX = spawnLeft ? -100 : window.innerWidth + 100;
          setIsFlipped(!spawnLeft);
          x.set(newStartX);
          controls.set({ x: newStartX });
        } 
        else {
          controls.stop();
          
          if (['WAVE', 'IDLE'].includes(nextState)) { 
             if (x.get() > window.innerWidth - 100) {
               setIsFlipped(true);
             } else if (x.get() < 100) {
               setIsFlipped(false);
             }
          }
          await new Promise(res => setTimeout(res, Math.random() * 3000 + 2000));
        }
      } catch (error) {
        // Ignorar errores de framer motion
      }

      // Si la versión sigue siendo la misma, continuamos el bucle
      if (isMounted.current && version === loopVersion.current) {
        setTimeout(() => performAction(version), 200);
      }
    };

    // Función expuesta para reiniciar el ciclo de decisiones desde afuera (el click)
    restartLoop.current = () => {
      loopVersion.current++; // Invalida el bucle anterior, matándolo silenciosamente
      const newVersion = loopVersion.current;
      setTimeout(() => {
        if (isMounted.current) performAction(newVersion);
      }, 3000); // Retoma la toma de decisiones después de 3 segundos de saludar
    };

    const initTimer = setTimeout(() => performAction(loopVersion.current), 7000);

    return () => {
      isMounted.current = false;
      loopVersion.current++; 
      clearTimeout(initTimer);
    };
  }, [controls]);

  let bgPositionY = '0%';
  let bgPositionX = '0%';
  let spriteUrl = "url('/jesus-sprite.png')";

  if (state === 'WALK_RIGHT' || state === 'WALK_LEFT' || state === 'HIDE') {
    spriteUrl = "url('/jesus-sprite.png')";
    bgPositionY = '50%';
    bgPositionX = `${(frame % 6) * 20}%`;
  } else if (state === 'WAVE') {
    spriteUrl = "url('/jesus-sprite.png')";
    bgPositionY = '100%';
    bgPositionX = `${(Math.floor(frame / 3) % 2) * 20}%`;
  } else if (state === 'IDLE') {
    spriteUrl = "url('/jesus-sprite.png')";
    bgPositionY = '0%';
    bgPositionX = '0%';
  }
  /*
  else if (state === 'SIT') {
    spriteUrl = "url('/jesus-nuevo-sprite.png')";
    bgPositionY = '0%'; 
    bgPositionX = `${(Math.floor(frame / 4) % 6) * 20}%`; 
  } else if (state === 'BLESS') {
    spriteUrl = "url('/jesus-nuevo-sprite.png')";
    bgPositionY = '50%'; 
    bgPositionX = `${(Math.floor(frame / 6) % 6) * 20}%`;
  } else if (state === 'MATE') {
    spriteUrl = "url('/jesus-nuevo-sprite.png')";
    bgPositionY = '100%'; 
    bgPositionX = `${(Math.floor(frame / 4) % 6) * 20}%`;
  }
  */

  const handleTap = () => {
    if (state === 'WAVE') return;

    controls.stop();
    setState('WAVE');

    if (restartLoop.current) {
      restartLoop.current();
    }
  };

  return (
    <motion.div
      className="fixed bottom-0 z-50 drop-shadow-md pb-2 cursor-pointer"
      style={{ x }}
      animate={controls}
      onClick={handleTap}
    >
      <div 
        className="w-14 h-14 md:w-16 md:h-16 bg-[length:600%_300%]"
        style={{
          backgroundImage: spriteUrl,
          backgroundPosition: `${bgPositionX} ${bgPositionY}`,
          transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)',
          imageRendering: 'pixelated',
        }}
      />
    </motion.div>
  );
}
