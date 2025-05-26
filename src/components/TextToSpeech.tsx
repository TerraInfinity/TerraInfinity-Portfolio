"use client";

import { useState, useEffect } from "react";
import { Button } from "@/once-ui/components";

export function TextToSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window !== 'undefined') {
      setSupported('speechSynthesis' in window);
    }
  }, []);

  const speak = () => {
    if (!supported) return;
    
    const synth = window.speechSynthesis;
    
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    
    // Get all text from article content
    const articleContent = document.querySelector('article')?.textContent || '';
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(articleContent);
    
    // Set voice (optional)
    const voices = synth.getVoices();
    const englishVoice = voices.find(voice => voice.lang.includes('en'));
    if (englishVoice) utterance.voice = englishVoice;
    
    // Handle speech end
    utterance.onend = () => {
      setSpeaking(false);
    };
    
    // Speak
    synth.speak(utterance);
    setSpeaking(true);
  };

  if (!supported) return null;

  return (
    <Button 
      onClick={speak}
      variant="secondary"
      size="s"
      prefixIcon={speaking ? "pause" : "play"}
    >
      {speaking ? "Stop Reading" : "Read Aloud"}
    </Button>
  );
}
