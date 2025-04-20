
import { useState, useRef } from "react";
import { Headphones, Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
}

export function AudioPlayer({ audioSrc, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player my-3 flex items-center">
      <button 
        onClick={togglePlayPause}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-lab-green flex items-center justify-center text-dark-navy mr-4 shadow-lg button-glow"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      <div className="flex-1">
        <p className="text-white text-sm mb-1">{title}</p>
        <div className="waveform relative">
          <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-gradient-to-r from-neon-blue to-lab-green opacity-30"></div>
          {/* Fake waveform bars */}
          <div className="flex items-end h-full gap-[2px] pt-2 pb-2 px-2">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i}
                className="w-1 bg-white opacity-50 rounded-sm"
                style={{ 
                  height: `${Math.max(15, Math.sin(i * 0.4) * 30 + Math.random() * 20)}%`,
                  opacity: isPlaying ? '0.8' : '0.5' 
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <Headphones size={24} className="ml-4 text-white opacity-60" />
      
      <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}
