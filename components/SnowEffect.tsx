'use client';

import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const SnowEffect = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            <Particles
                canvasClassName={isLoaded ? "z-10 visible" : "z-10 hidden"}
                className="z-10"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: { color: "" },
                    fpsLimit: 120,
                    particles: {
                        number: { value: 80 },
                        color: { value: "#fff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.8 },
                        size: { value: { min: 2, max: 4 }, random: true },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "bottom",
                            straight: false,
                        },
                        shadow: {
                            enable: true,
                            color: "#999",
                            blur: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default SnowEffect;