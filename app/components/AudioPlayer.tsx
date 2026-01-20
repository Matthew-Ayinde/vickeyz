'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface AudioPlayerProps {
  title: string
  artist?: string
  src: string
}

export default function AudioPlayer({ title, artist = 'VickeyZ', src }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
    setProgress(progress)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return
    const seekTime = (parseFloat(e.target.value) / 100) * audioRef.current.duration
    audioRef.current.currentTime = seekTime
    setProgress(parseFloat(e.target.value))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-6 border border-border shadow-lg"
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex items-center space-x-4 mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          )}
        </motion.button>

        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{artist}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Volume2 className="w-5 h-5 text-muted-foreground" />
          )}
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
          style={{
            background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${progress}%, var(--muted) ${progress}%, var(--muted) 100%)`,
          }}
        />
      </div>
    </motion.div>
  )
}
