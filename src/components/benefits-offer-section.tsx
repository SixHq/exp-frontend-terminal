
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { MagicCard } from '@/components/magicui/magic-card';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { RippleButton } from '@/components/magicui/ripple-button';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { TextReveal } from '@/components/magicui/text-reveal';
import { GridPattern } from '@/components/magicui/grid-pattern';
import {
    PerformanceIcon,
    UserExperienceIcon,
    ScalableArchitectureIcon,
    FastDeliveryIcon,
}  from '@/components/icons/icons';

const benefits = [
  {
    Icon: PerformanceIcon,
    name: "Accelerated Performance",
    description: "Deliver blazing-fast, optimized applications that keep users engaged and boost conversions.",
    className: "col-span-1 md:col-span-1 text-primary-teal",
    background: (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <PerformanceIcon className="w-20 h-20 text-primary-teal opacity-30" />
        </motion.div>
    ),
  },
  {
    Icon: UserExperienceIcon,
    name: "Enhanced User Experience",
    description: "Craft intuitive, beautiful, and highly interactive interfaces that captivate and retain users.",
    className: "col-span-1 md:col-span-1 text-accent-purple",
     background: (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <UserExperienceIcon className="w-20 h-20 text-accent-purple opacity-30" />
        </motion.div>
    ),
  },
  {
    Icon: ScalableArchitectureIcon,
    name: "Future-Proof Scalability",
    description: "Build robust back-end systems designed for growth, ensuring your application handles increasing demand.",
    className: "col-span-1 md:col-span-1 text-accent-coral",
     background: (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <ScalableArchitectureIcon className="w-20 h-20 text-accent-coral opacity-30" />
        </motion.div>
    ),
  },
   {
    Icon: FastDeliveryIcon,
    name: "Rapid Time-to-Market",
    description: "Leverage efficient development practices to bring your vision to life quickly and effectively.",
    className: "col-span-1 md:col-span-1 text-primary-light-gray",
     background: (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <FastDeliveryIcon className="w-20 h-20 text-primary-light-gray opacity-30" />
        </motion.div>
    ),
  },
];


const BenefitsOfferSection: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="benefits-offer" className="bg-background text-foreground py-20 md:py-32 relative">
      {/* Optional Background Pattern */}
        <GridPattern
            width={60}
            height={60}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            
        />

       <div className="container mx-auto px-4 relative z-10">

          {/* Benefits Section */}
          <motion.div
            className="mb-24 md:mb-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
                 variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                 }}
             >
                <BoxReveal boxColor="hsl(var(--primary-teal))" duration={0.6}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-center text-primary-teal">
                     Unlock Your Potential
                  </h2>
                </BoxReveal>
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <TextReveal>
                        Partnering with me means gaining more than just code. It means achieving tangible outcomes that drive your success forward. Experience the difference expertise makes.
                    </TextReveal>
                </div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
                }}
            >
                <BentoGrid className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, idx) => (
                        <MagicCard
                            key={idx}
                            className={cn(
                                "relative flex flex-col items-center justify-center p-6 text-center overflow-hidden rounded-lg h-64 md:h-72", // Adjusted height
                                "bg-primary-dark-blue/40 backdrop-blur-lg border border-primary-teal/15 shadow-lg"
                            )}
                            gradientSize={150}
                            gradientColor="hsl(var(--primary-teal))"
                             gradientFrom="hsl(var(--primary-teal))"
                            gradientTo="hsl(var(--accent-purple))"
                            gradientOpacity={0.15}
                        >
                            {/* Icon with subtle pop-in animation */}
                            <motion.div
                                className="mb-4"
                                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.4, type: "spring", stiffness: 200, damping: 12 }}
                            >
                                <benefit.Icon className={cn("w-10 h-10", benefit.className)} />
                            </motion.div>

                             <h3 className={cn("text-xl font-semibold mb-2", benefit.className)}>
                                {benefit.name}
                            </h3>
                            <p className="text-sm text-primary-light-gray/70">
                                {benefit.description}
                            </p>
                        </MagicCard>
                    ))}
                </BentoGrid>
            </motion.div>
          </motion.div>


           {/* Offer Section */}
            <motion.div
                className="text-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                 <motion.div
                     variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                 >
                    <BoxReveal boxColor="hsl(var(--accent-purple))" duration={0.6}>
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-accent-purple">
                            Ready to Elevate Your Project?
                        </h2>
                    </BoxReveal>
                     <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                        <TextReveal>
                            Choose the path that best suits your needs. Whether you're looking for a full project build, specific feature implementation, or a consultation, let's discuss how I can help you succeed.
                        </TextReveal>
                     </div>
                 </motion.div>

                {/* Offer Cards Placeholder */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
                    }}
                >
                    {/* Placeholder Offer Card 1 (e.g., Project Based) */}
                    <NeonGradientCard
                        className="bg-primary-dark-blue/50 backdrop-blur-md border border-primary-teal/20 p-6 rounded-lg shadow-xl min-h-[300px] flex flex-col justify-between items-center"
                        borderSize={2}
                        borderRadius={10}
                        neonColors={{ firstColor: "hsl(var(--primary-teal))", secondColor: "hsl(var(--accent-purple))" }}
                    >
                        <div className='text-center'>
                             <h3 className="text-2xl font-semibold mb-3 text-primary-teal">Project Collaboration</h3>
                             <p className="text-primary-light-gray/70 mb-6">
                                Have a specific project in mind? Let's build it together from concept to deployment.
                             </p>
                            {/* Placeholder List */}
                            <ul className="text-left text-sm text-primary-light-gray/60 list-disc list-inside space-y-1 mb-6">
                                <li>Full-Stack Development</li>
                                <li>Custom Web Applications</li>
                                <li>API Integration</li>
                                <li>Advanced Animations</li>
                            </ul>
                        </div>
                         <RippleButton
                             className="w-full mt-auto bg-primary-teal text-primary-dark-blue font-semibold hover:bg-opacity-90"
                             rippleColor="220, 65%, 11%" // primary-dark-blue rgb
                             onClick={() => scrollToSection('contact')}
                         >
                            Discuss Your Project
                        </RippleButton>
                    </NeonGradientCard>

                     {/* Placeholder Offer Card 2 (e.g., Consultation/Free Demo) */}
                    <NeonGradientCard
                        className="bg-primary-dark-blue/50 backdrop-blur-md border border-accent-coral/20 p-6 rounded-lg shadow-xl min-h-[300px] flex flex-col justify-between items-center"
                        borderSize={2}
                        borderRadius={10}
                        neonColors={{ firstColor: "hsl(var(--accent-coral))", secondColor: "hsl(var(--accent-purple))" }}
                     >
                       <div className='text-center'>
                         <h3 className="text-2xl font-semibold mb-3 text-accent-coral">Let's Connect</h3>
                         <p className="text-primary-light-gray/70 mb-6">
                            Not sure where to start? Let's schedule a free consultation to explore possibilities or see a demo of related work.
                         </p>
                         {/* Placeholder Text */}
                         <p className="text-sm text-primary-light-gray/60 mb-6">
                             Get insights, discuss requirements, and see how my skills can align with your goals. No obligation, just valuable conversation.
                         </p>
                       </div>
                         <ShimmerButton
                            className="w-full mt-auto shadow-md"
                            shimmerColor="hsl(var(--primary-teal))"
                            background="hsl(var(--accent-purple))"
                             onClick={() => scrollToSection('contact')}
                         >
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                                Book a Free Consultation
                             </span>
                         </ShimmerButton>
                    </NeonGradientCard>
                </motion.div>
            </motion.div>

        </div>
    </section>
  );
};

export default BenefitsOfferSection;