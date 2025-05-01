
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { Particles } from '@/components/magicui/particles';
import { ArrowRightIcon } from '@radix-ui/react-icons'; // Re-using from Hero

const ClosingArgumentSection: React.FC = () => {
   const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="closing-argument" className="relative bg-gradient-to-b from-background via-black to-primary-dark-blue text-primary-light-gray py-24 md:py-40 overflow-hidden">
       <Particles
        className="absolute inset-0 z-0"
        quantity={80} // Fewer particles for a subtler effect
        ease={70}
        size={0.25}
        staticity={40}
        color="hsl(var(--accent-purple))" // Use accent color
        vx={0.05}
        vy={0.05}
      />

      <motion.div
         className="container mx-auto px-4 text-center max-w-3xl relative z-10"
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.3 }}
         transition={{ staggerChildren: 0.25 }}
      >
         {/* Main Closing Statement */}
        <motion.div
             variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }, // easeOutCirc
            }}
        >
             <TextAnimate
                as="h2"
                animation="blurInUp" // Use a strong entrance animation
                by="line" // Animate line by line for impact
                 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
                variants={{ // Custom timing for more impact
                    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
                    show: (i) => ({
                        opacity: 1,
                        y: 0,
                         filter: 'blur(0px)',
                        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
                    }),
                }}
             >
                Transform Your Visio into 
                a Digital Masterpiece.
             </TextAnimate>
        </motion.div>

         {/* Placeholder Quote */}
         <motion.div
             className="my-10 md:my-12 italic text-lg md:text-xl text-primary-light-gray/70 border-l-4 border-accent-coral pl-6"
             variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 0.7, x: 0, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } },
            }}
        >
            <p>"Working with [Your Name/Alias] elevated our platform beyond expectations. The blend of technical skill and creative vision is truly rare."</p>
             <p className="text-sm mt-2 not-italic text-primary-light-gray/50">- Placeholder Client, CEO of Placeholder Company</p>
        </motion.div>

         {/* Final CTA Button */}
         <motion.div
             variants={{
                hidden: { opacity: 0, scale: 0.7 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.7, type: 'spring', stiffness: 120, damping: 15 } },
            }}
        >
            <ShimmerButton
                className="shadow-lg"
                shimmerColor="hsl(var(--primary-teal))"
                shimmerSize="0.1em"
                shimmerDuration="3.5s"
                background="hsl(var(--accent-purple))" // Strong CTA color
                borderRadius="0.5rem"
                onClick={() => scrollToSection('contact')}
            >
                <span className="whitespace-pre-wrap text-center text-lg font-semibold leading-none tracking-tight text-white flex items-center group px-8 py-4">
                    Start Your Project Today
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
                </span>
            </ShimmerButton>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ClosingArgumentSection;