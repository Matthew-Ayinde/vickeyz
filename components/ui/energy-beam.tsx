import React from 'react';

interface EnergyBeamProps {
    className?: string;
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({
    className = ""
}) => {
    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {/* Animated gradient beams */}
            <div className="absolute inset-0 opacity-30">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent animate-beam"
                        style={{
                            left: `${(i + 1) * 8.33}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + (i % 3)}s`,
                        }}
                    />
                ))}
            </div>
            
            {/* Radial glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-slow" />
            
            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-primary rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default EnergyBeam;
