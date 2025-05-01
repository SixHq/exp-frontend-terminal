
import React from 'react';
import { motion } from 'motion/react';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { Particles } from '@/components/magicui/particles';
import { Globe } from '@/components/magicui/globe';
import { BorderBeam } from '@/components/magicui/border-beam';
import { TextAnimate } from '@/components/magicui/text-animate';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Using Shadcn Avatar for personalized touch

const HeroSection: React.FC = () => {
 
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-primary-dark-blue via-black to-primary-dark-blue/80 text-primary-light-gray"
    >
      {/* Background Layers */}
      <RetroGrid className="absolute inset-0 opacity-30 z-0" />
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={60}
        size={0.3}
        staticity={30}
        color="hsl(var(--primary-teal))"
        vx={0.1}
        vy={0.1}
      />

      {/* Content Layer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Column: Text Content & CTA */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
             className="mb-4"
           >
               <Avatar className="w-24 h-24 border-4 border-accent-purple shadow-lg">
                   {/* Use the scraped image URL */}
                   <AvatarImage src="https://images.pexels.com/photos/3861952/pexels-photo-3861952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Developer Avatar" />
                   <AvatarFallback className="bg-primary-teal text-primary-dark-blue text-3xl">FS</AvatarFallback>
               </Avatar>
           </motion.div>

          {/* Headline with Text Mask Reveal */}
          <BoxReveal boxColor="hsl(var(--accent-purple))" duration={0.7}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tighter">
              <span className="text-primary-teal">Full Stack</span> Developer
            </h1>
          </BoxReveal>

          {/* Subheadline with Staggered Character Animation */}
          <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.03, delayChildren: 0.8 }} // Stagger effect after BoxReveal
              className="mb-8"
          >
              <TextAnimate
                  as="p"
                  by="character" // Animate character by character
                  animation="fadeIn" // Simple fade-in for characters
                  className="text-lg md:text-xl text-primary-light-gray/80 max-w-lg"
                   variants={{ // Customize timing for subtlety
                      hidden: { opacity: 0, y: 10 },
                      show: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.02, duration: 0.3, ease: 'easeOut' },
                      }),
                    }}
              >
                  Crafting pixel-perfect interfaces & robust back-end solutions with cutting-edge animations and modern tech stacks. Let's build something amazing together.
              </TextAnimate>
          </motion.div>

          {/* Primary CTA Button */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 150, damping: 15 }}
           >
              <ShimmerButton
                  className="shadow-lg"
                  shimmerColor="hsl(var(--accent-coral))"
                  shimmerSize="0.1em"
                  shimmerDuration="4s"
                  background="hsl(var(--accent-purple))"
                  borderRadius="0.5rem" // Match --radius
                  onClick={() => scrollToSection('contact')}
              >
                  <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white flex items-center group px-6 py-3">
                      Get In Touch
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </span>
              </ShimmerButton>
           </motion.div>
        </div>

        {/* Right Column: Globe Visual */}
        <motion.div
          className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 80, damping: 20 }}
        >
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                    <Globe  />
                    <BorderBeam
                        size={150}
                        duration={6}
                        delay={1}
                        colorFrom="hsl(var(--accent-purple))"
                        colorTo="hsl(var(--primary-teal))"
                     />
                 </div>
             </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator (Optional) */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-light-gray/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;