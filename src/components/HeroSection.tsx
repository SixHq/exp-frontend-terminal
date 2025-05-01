
import React from 'react';
import { motion } from 'motion/react';
import { Globe } from "@/components/magicui/globe";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";

// Right Arrow Icon for the button
const ArrowRightIcon = () => (
    <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M10 3V6H4L4 10H10L10 13L11 13L16 8L11 3L10 3Z" />
         <path d="M0 2L1.38281e-06 14H2L2 2L0 2Z" />
    </svg>
);


export function HeroSection() {
    

    const textRevealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } // Ease-out quint
        }
    };

    return (
        <section id="home" className="relative flex h-[90vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-background pt-20 md:h-screen">
             {/* Subtle Dot Pattern Background */}
             <DotPattern
                
                width={30}
                height={30}
                cr={1} // Circle radius
            />

            {/* Interactive Globe Background */}
             <div className="absolute inset-0 z-10 opacity-30 md:opacity-40">
                <Globe  />
            </div>


            {/* Content Overlay */}
            <div className="relative z-20 flex flex-col items-center text-center px-4">
                 {/* Headline with Text Mask Reveal */}
                <TextAnimate
                    as="h1"
                    animation="blurInUp" // Uses the Text Mask Reveal style
                    by="word" // Animate word by word
                    className="mb-4 text-5xl font-black leading-tight tracking-tighter text-foreground md:text-7xl lg:text-8xl"
                    delay={0.2} // Slight delay after header animation
                    duration={0.5}
                >
                    Your Station for All Things Mobile
                </TextAnimate>

                 {/* Subheadline with Scroll-Triggered Fade/Slide Up */}
                <motion.p
                    className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl"
                    initial="hidden"
                    animate="visible" // Animate immediately on load for hero
                    variants={textRevealVariants}
                    transition={{ delay: 0.6 }} // Delay after headline
                >
                    Buy, sell, or repair your new and old phones from Apple, Samsung, and more. Fast, reliable service guaranteed.
                </motion.p>

                 {/* Primary CTA Button with Shimmer & Scroll-Triggered Animation */}
                <motion.div
                    initial="hidden"
                    animate="visible" // Animate immediately on load for hero
                    variants={textRevealVariants}
                    transition={{ delay: 0.9 }} // Delay after subheadline
                >
                    <ShimmerButton
                        className="shadow-lg group" // Added group for icon animation
                        background="hsl(var(--brand-blue))" // Use brand blue for button bg
                        shimmerColor="hsl(var(--brand-blue-foreground) / 0.6)" // Lighter shimmer
                        borderRadius="0.5rem" // Match general radius
                        shimmerSize="0.1em"
                        shimmerDuration="4s"
                    >
                        <a href="#services" className="flex items-center justify-center whitespace-pre-wrap px-6 py-3 text-base font-semibold leading-none tracking-tight text-brandBlue-foreground transition-transform duration-300 ease-in-out group-hover:scale-105 lg:text-lg">
                           <span>Explore Services</span>
                           <ArrowRightIcon />
                        </a>
                    </ShimmerButton>
                </motion.div>
            </div>
        </section>
    );
}