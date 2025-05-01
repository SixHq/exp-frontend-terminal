
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { IconCloud } from '@/components/magicui/icon-cloud';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedList } from '@/components/magicui/animated-list'; // For potential use in Bento
import { TextReveal } from '@/components/magicui/text-reveal'; // For descriptions

// Icons for Problem Cloud and Solution Bento
const BugIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 16.5C12 16.5 14 17.5 17 17.5M12 16.5C12 16.5 10 17.5 7 17.5M12 16.5V14M18 11.5C18 11.5 19.5 13 19.5 15.5C19.5 19.0899 16.0899 22 12 22C7.91015 22 4.5 19.0899 4.5 15.5C4.5 13 6 11.5 6 11.5M6 11.5C6 11.5 6 8 6 7.5C6 5 7 2 12 2C17 2 18 5 18 7.5C18 8 18 11.5 18 11.5M6 11.5H18M11.75 11.5L11 8.5M12.25 11.5L13 8.5M8.5 6H7.5M15.5 6H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const SlowLoadingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 6V12L16.5 14.5M12 6V12L7.5 14.5M12 6V12L12 18M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ResponsiveDesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
   <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 19H21C21.5523 19 22 18.5523 22 18V8C22 7.44771 21.5523 7 21 7H18V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H18V5H14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 5L11 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 19V16H7V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
 const PerformanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
   <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.485 6.939l-2.121-2.121c-0.781-0.781-2.047-0.781-2.828 0l-2.121 2.121c-0.781 0.781-0.781 2.047 0 2.828l2.121 2.121c0.781 0.781 2.047 0.781 2.828 0l2.121-2.121c0.781-0.781 0.781-2.047 0-2.828zM16 20c-6.617 0-12 5.383-12 12h24c0-6.617-5.383-12-12-12zM16 24c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/></svg>
);
 const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
   <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
   <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

// Icons for the cloud
const problemIcons = [
  <BugIcon key="bug" className="text-accent-coral" />,
  <SlowLoadingIcon key="slow" className="text-accent-coral" />,
  <ResponsiveDesignIcon key="resp" className="text-accent-coral" />,
  // Add more relevant icons if needed
  <CodeIcon key="code-err" className="text-accent-coral opacity-70" />,
  <svg key="ux" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/><path d="M15 15.5C14.8388 15.7343 14.6206 15.9264 14.3626 16.0581C14.1045 16.1898 13.8156 16.2574 13.5221 16.2549C12.8746 16.2499 12.278 15.9948 11.854 15.552C11.4173 15.0954 11.1931 14.4845 11.228 13.869C11.251 13.451 11.367 13.049 11.566 12.701C11.765 12.353 12.04 12.072 12.369 11.887C12.698 11.702 13.071 11.618 13.449 11.645C13.827 11.672 14.195 11.809 14.52 12.044C14.845 12.279 15.117 12.604 15.314 12.988" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9C9.53043 9 10.0391 8.78929 10.4142 8.41421C10.7893 8.03914 11 7.53043 11 7C11 6.46957 10.7893 5.96086 10.4142 5.58579C10.0391 5.21071 9.53043 5 9 5C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7C7 7.53043 7.21071 8.03914 7.58579 8.41421C7.96086 8.78929 8.46957 9 9 9Z" fill="currentColor"/></svg>,
  <svg key="security" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C12 21 4 16 4 10V5L12 2L20 5V10C20 16 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

// Features for the Bento Grid
const features = [
  {
    Icon: PerformanceIcon,
    name: "Blazing Fast Performance",
    description: "Optimized code and modern tech for lightning-fast load times and smooth interactions.",
    className: "col-span-3 lg:col-span-1 text-primary-teal",
    background: (
        // Placeholder for a performance-related visual, maybe animated graph?
        // Using simple dot pattern for now
         <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ", "absolute inset-0 opacity-30"
            )}
        />
    ),
  },
  {
    Icon: DesignIcon,
    name: "Pixel-Perfect UI/UX",
    description: "Crafting intuitive and visually stunning interfaces that users love.",
    href: "#", // Link to relevant project?
    cta: "See Projects",
    className: "col-span-3 lg:col-span-2 text-accent-purple",
    background: (
      <img
        src="https://assets-global.website-files.com/6446da0164f57b3588944847/6490645d197951351e374802_6481348053b11e3b43a81547_UI-p-1600.png"
        alt="Modern UI Design"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-20 group-hover:opacity-40 transition-opacity duration-300 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        />
    ),
  },
  {
    Icon: CodeIcon,
    name: "Robust & Scalable Code",
    description: "Building maintainable and scalable full-stack solutions ready for growth.",
    href: "#",
    cta: "View Skills",
    className: "col-span-3 lg:col-span-2 text-accent-coral",
     background: (
         // Could use AnimatedList showing code snippets or Terminal effect later
         <img
            src="https://themewagon.com/wp-content/uploads/2021/11/Material-Dash.png"
            alt="Admin Dashboard UI"
             className="absolute inset-0 w-full h-full object-cover object-center opacity-20 group-hover:opacity-40 transition-opacity duration-300 [mask-image:linear-gradient(to_top,white,transparent)]"
         />
     ),
  },
  {
    Icon: ResponsiveDesignIcon, // Reusing responsive icon
    name: "Cross-Device Compatibility",
    description: "Ensuring seamless experiences across desktops, tablets, and mobile devices.",
    className: "col-span-3 lg:col-span-1 text-primary-teal",
    background: (
       <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*A696V36a1a6n_g_0Iu0NqQ.png"
            alt="Mobile App UI"
             className="absolute inset-0 w-full h-full object-contain object-center p-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
         />
    ),
  },
];


const ProblemSolutionSection: React.FC = () => {
  return (
     <section id="problem-solution" className="relative bg-gradient-to-b from-background via-primary-dark-blue/10 to-primary-dark-blue text-foreground py-20 md:py-32">

       {/* Problem Section */}
       <motion.div
         className="container mx-auto px-4 mb-24 md:mb-32 relative z-10"
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.2 }}
         transition={{ staggerChildren: 0.2 }}
       >
          <DotPattern
            
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
             {/* Left: Problem Description */}
            <motion.div
                 variants={{
                     hidden: { opacity: 0, x: -50 },
                     show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
                }}
             >
                 <BoxReveal boxColor="hsl(var(--accent-coral))" duration={0.6}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-accent-coral">
                        The Digital Challenge
                     </h2>
                 </BoxReveal>
                 <div className="space-y-4 text-primary-light-gray/80 md:text-lg text-muted-foreground text-center"> {/* Added text-center */}
                     <TextReveal>
                        In today's fast-paced digital world, slow, buggy, or unresponsive websites lead to lost opportunities. Users expect seamless experiences, and businesses need reliable, scalable solutions that adapt and grow.
                      </TextReveal>
                      <TextReveal>
                        Navigating the complexities of front-end design, back-end logic, database management, and deployment requires expertise across the full stack. Finding a developer who bridges this gap effectively is crucial.
                    </TextReveal>
                 </div>
             </motion.div>

             {/* Right: Problem Visualization */}
             <motion.div
                className="relative flex justify-center items-center min-h-[300px] md:min-h-[400px]"
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
                }}
             >
                <IconCloud icons={problemIcons} />
             </motion.div>
          </div>
       </motion.div>


       {/* Solution Section */}
       <motion.div
         className="container mx-auto px-4 relative z-10"
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.1 }} // Start animation slightly earlier
         transition={{ staggerChildren: 0.2 }}
        >
             <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.15}
                duration={3}
                repeatDelay={1}
                className={cn(
                  "[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]",
                  "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-0",
                )}
             />
           <BoxReveal boxColor="hsl(var(--primary-teal))" duration={0.6}>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center text-primary-teal relative z-10">
                 My Full-Stack Solutions
             </h2>
           </BoxReveal>

           <motion.div
              variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
              }}
            >
                <BentoGrid className="mx-auto md:auto-rows-[20rem] relative z-10">
                    {features.map((feature, idx) => (
                     <BentoCard
                         key={idx}
                         {...feature}
                         href={feature.href ?? ''} // Provide default empty string if undefined
                         className={cn(
                             feature.className,
                             "bg-primary-dark-blue/50 backdrop-blur-md border-primary-teal/10 hover:border-primary-teal/30 transition-colors duration-300 group"
                         )} // Apply base styling and group for hover effects
                         name={
                                feature.name
                            
                         }
                         description={
                            
                                feature.description
                             
                          }
                          Icon = {() => <feature.Icon className={cn("h-6 w-6 mb-2", feature.className)} />} // Pass icon component correctly
                          cta={
                                 feature.cta ?? '' // Provide default empty string if undefined
                          }
                     >
                         {/* Add ShineBorder overlay */}
                         <ShineBorder
                            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            shineColor={["hsl(var(--primary-teal))", "hsl(var(--accent-purple))", "hsl(var(--accent-coral))"]}
                            borderWidth={1}
                        />
                        {/* Render the background element */}
                         <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100">
                            {feature.background}
                         </div>
                     </BentoCard>
                    ))}
                </BentoGrid>
            </motion.div>

       </motion.div>
     </section>
  );
};

export default ProblemSolutionSection;
