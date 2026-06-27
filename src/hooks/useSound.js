import { useEffect, useRef } from "react";

export default function useSound(filePath, { volume = 0.25, loop = false, autoplay = false, fadeIn = false, fadeOut = false } = {}) {
  const audioRef = useRef(null);
  let fadeInterval = null;

  useEffect(() => {
    const audio = new Audio(filePath);
    audio.volume = 0;
    audio.loop = loop;
    audioRef.current = audio;

    if (autoplay) {
      audio.play().catch(() => {});
      if (fadeIn) fadeVolume(audio, 0, volume, 2000);
      else audio.volume = volume;
    }

    return () => {
      if (fadeOut) fadeVolume(audio, audio.volume, 0, 1500);
      setTimeout(() => {
        audio.pause();
        audio.src = "";
      }, fadeOut ? 1500 : 0);
    };
  }, [filePath, volume, loop, autoplay, fadeIn, fadeOut]);

  function fadeVolume(audio, from, to, duration) {
    clearInterval(fadeInterval);
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;
    fadeInterval = setInterval(() => {
      currentStep++;
      const newVol = from + ((to - from) * currentStep) / steps;
      audio.volume = Math.min(Math.max(newVol, 0), 1);
      if (currentStep >= steps) clearInterval(fadeInterval);
    }, stepTime);
  }

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
      if (fadeIn) fadeVolume(audioRef.current, 0, volume, 800);
    }
  };

  const stop = () => {
    if (audioRef.current) fadeVolume(audioRef.current, audioRef.current.volume, 0, 1000);
  };

  return { play, stop };
}