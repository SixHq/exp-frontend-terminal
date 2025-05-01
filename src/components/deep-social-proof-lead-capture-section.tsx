
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { MagicCard } from '@/components/magicui/magic-card';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { TextReveal } from '@/components/magicui/text-reveal';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea" // Using Shadcn Textarea for message
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { Meteors } from '@/components/magicui/meteors';
import {
    UsersGroupIcon,
    FolderCheckIcon,
    CalendarClockIcon
} from '@/components/icons/icons';

const DeepSocialProofLeadCaptureSection: React.FC = () => {
    // Sample data (replace with actual data)
    const videoTestimonials = [
        { videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnailSrc: "https://images.pexels.com/photos/13826490/pexels-photo-13826490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Client A Success Story" },
        { videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnailSrc: "https://images.pexels.com/photos/5922461/pexels-photo-5922461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Client B Transformation" },
        // Add more as needed
    ];

    const caseStudies = [
        {
            title: "E-commerce Performance Overhaul",
            problem: "Client faced slow load times and high bounce rates on their online store, impacting sales.",
            solution: "Rebuilt the front-end with Next.js, optimized images, and implemented server-side rendering.",
            result: "50% faster page loads, 30% increase in conversions.",
            bgColor: "bg-primary-dark-blue/50",
            borderColor: "border-primary-teal/20",
            gradientFrom: "hsl(var(--primary-teal))",
            gradientTo: "hsl(var(--accent-purple))",
        },
        {
            title: "Interactive SaaS Dashboard",
            problem: "An outdated and unintuitive dashboard frustrated users and hindered productivity.",
            solution: "Designed and developed a modern, responsive dashboard with real-time data updates and custom animations.",
            result: "User satisfaction increased by 40%, task completion time reduced by 25%.",
            bgColor: "bg-primary-dark-blue/50",
            borderColor: "border-accent-purple/20",
            gradientFrom: "hsl(var(--accent-purple))",
            gradientTo: "hsl(var(--accent-coral))",
        },
        {
            title: "Scalable API for Mobile App",
            problem: "Mobile app struggled with performance due to an inefficient backend API.",
            solution: "Developed a new RESTful API using Node.js and Express, optimized database queries, and implemented caching.",
            result: "API response time improved by 70%, supporting 3x more concurrent users.",
            bgColor: "bg-primary-dark-blue/50",
            borderColor: "border-accent-coral/20",
            gradientFrom: "hsl(var(--accent-coral))",
            gradientTo: "hsl(var(--primary-teal))",
        },
    ];

    const milestones = [
        { value: 50, text: "Happy Clients", Icon: UsersGroupIcon, color: "text-primary-teal" },
        { value: 75, text: "Projects Completed", Icon: FolderCheckIcon, color: "text-accent-purple" },
        { value: 8, text: "Years of Experience", Icon: CalendarClockIcon, color: "text-accent-coral" },
    ];

    // Scroll-triggered animation variants
    const scrollFadeSlideUp = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } // Custom ease-out expo
        },
    };

     // Handle form submission (replace with actual logic)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Form submitted!");
        // Add form submission logic (e.g., send data to API)
        alert("Thank you for your message! I'll be in touch soon.");
         // Optionally reset form fields here
    };


    return (
        <section id="deep-social-proof" className="bg-gradient-to-b from-primary-dark-blue via-black to-background text-primary-light-gray py-20 md:py-32 relative">
             {/* Optional: Add subtle background effects */}
             <Meteors number={15} className="absolute inset-0 z-0 opacity-70" />

            <div className="container mx-auto px-4 relative z-10">

                {/* --- Video Testimonials --- */}
                <motion.div
                    className="mb-24 md:mb-32 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={scrollFadeSlideUp}
                >
                     <BoxReveal boxColor="hsl(var(--primary-teal))" duration={0.6}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-primary-teal">
                            Real Results, Real Voices
                        </h2>
                     </BoxReveal>
                      <div className="max-w-2xl mx-auto mb-12">
                        <TextReveal>
                            Hear directly from clients about their experiences and the impact we've achieved together.
                        </TextReveal>
                      </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {videoTestimonials.map((testimonial, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.1 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                            >
                                <HeroVideoDialog
                                    className="w-full h-auto rounded-lg overflow-hidden shadow-lg border border-primary-teal/20 hover:shadow-primary-teal/20 transition-shadow duration-300"
                                    animationStyle="fade"
                                    videoSrc={testimonial.videoSrc}
                                    thumbnailSrc={testimonial.thumbnailSrc}
                                    thumbnailAlt={testimonial.title}
                                />
                                <p className="mt-3 text-sm text-primary-light-gray/80">{testimonial.title}</p>
                             </motion.div>
                        ))}
                         {/* Placeholder if fewer than 3 videos */}
                        {videoTestimonials.length < 3 && Array(3 - videoTestimonials.length).fill(0).map((_, i) => (
                             <div key={`placeholder-${i}`} className="aspect-video rounded-lg bg-primary-dark-blue/30 border border-dashed border-primary-light-gray/30 flex items-center justify-center text-primary-light-gray/50">
                                More coming soon...
                            </div>
                         ))}
                    </div>
                </motion.div>

                {/* --- Case Study Highlights --- */}
                <motion.div
                    className="mb-24 md:mb-32"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={scrollFadeSlideUp}
                >
                    <BoxReveal boxColor="hsl(var(--accent-purple))" duration={0.6}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center text-accent-purple">
                            From Challenge to Success
                        </h2>
                    </BoxReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.1 + index * 0.15, duration: 0.6, ease: "easeOut" }}
                            >
                                <MagicCard
                                    className={cn(
                                        "relative flex flex-col p-6 rounded-xl overflow-hidden h-full shadow-lg",
                                        study.bgColor,
                                        study.borderColor
                                    )}
                                    gradientSize={180}
                                    gradientColor={study.gradientFrom}
                                    gradientFrom={study.gradientFrom}
                                    gradientTo={study.gradientTo}
                                    gradientOpacity={0.1}
                                >
                                     <h3 className="text-xl font-semibold mb-3 text-primary-light-gray">{study.title}</h3>
                                    <div className="space-y-4 text-sm flex-grow">
                                        <div>
                                            <p className="font-semibold text-primary-light-gray/80 mb-1">Problem:</p>
                                            <p className="text-primary-light-gray/60">{study.problem}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary-light-gray/80 mb-1">Solution:</p>
                                             <p className="text-primary-light-gray/60">{study.solution}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary-teal mb-1">Result:</p>
                                            <p className="text-primary-light-gray/70 font-medium">{study.result}</p>
                                        </div>
                                    </div>
                                </MagicCard>
                             </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- Milestones --- */}
                 <motion.div
                    className="mb-24 md:mb-32 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                 >
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                             variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 } },
                            }}
                            className="flex flex-col items-center p-6 bg-primary-dark-blue/30 backdrop-blur-sm rounded-lg border border-primary-light-gray/10 shadow-md"
                        >
                             <milestone.Icon className={cn("w-10 h-10 mb-3", milestone.color)} />
                            <NumberTicker
                                value={milestone.value}
                                delay={0.5 + index * 0.2}
                                className={cn("text-4xl md:text-5xl font-bold tracking-tighter mb-1", milestone.color)}
                            />
                            <p className="text-sm text-primary-light-gray/70">{milestone.text}</p>
                        </motion.div>
                    ))}
                </motion.div>


                {/* --- Lead Capture Form --- */}
                <motion.div
                    className="max-w-2xl mx-auto p-8 md:p-10 bg-gradient-to-br from-primary-dark-blue/60 to-black/70 backdrop-blur-lg rounded-xl border border-accent-purple/20 shadow-2xl"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scrollFadeSlideUp}
                 >
                     <BoxReveal boxColor="hsl(var(--accent-coral))" duration={0.6}>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-center text-accent-coral">
                             Let's Build Something Great
                        </h2>
                     </BoxReveal>
                     <p className="text-center text-primary-light-gray/70 mb-8 text-sm md:text-base">
                         Have an idea or need help with a project? Drop me a line!
                     </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             {/* Name Input */}
                             <div className="space-y-2 group">
                                <Label htmlFor="name" className="text-sm font-medium text-primary-light-gray/80 group-hover:text-primary-teal transition-colors">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="bg-primary-dark-blue/50 border-primary-light-gray/20 focus:border-primary-teal focus:ring-primary-teal text-primary-light-gray placeholder:text-primary-light-gray/40 transition-colors duration-300 group-hover:border-primary-teal/50"
                                 />
                            </div>
                             {/* Email Input */}
                             <div className="space-y-2 group">
                                <Label htmlFor="email" className="text-sm font-medium text-primary-light-gray/80 group-hover:text-primary-teal transition-colors">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    required
                                    className="bg-primary-dark-blue/50 border-primary-light-gray/20 focus:border-primary-teal focus:ring-primary-teal text-primary-light-gray placeholder:text-primary-light-gray/40 transition-colors duration-300 group-hover:border-primary-teal/50"
                                />
                            </div>
                        </div>
                         {/* Message Textarea (Optional, but good practice) */}
                         <div className="space-y-2 group">
                             <Label htmlFor="message" className="text-sm font-medium text-primary-light-gray/80 group-hover:text-primary-teal transition-colors">Message (Optional)</Label>
                             <Textarea
                                 id="message"
                                 placeholder="Tell me about your project..."
                                 rows={4}
                                 className="bg-primary-dark-blue/50 border-primary-light-gray/20 focus:border-primary-teal focus:ring-primary-teal text-primary-light-gray placeholder:text-primary-light-gray/40 transition-colors duration-300 group-hover:border-primary-teal/50 min-h-[100px]"
                            />
                         </div>

                        {/* Submit Button */}
                        <div className="text-center pt-4">
                            <ShimmerButton
                                type="submit"
                                className="w-full md:w-auto shadow-lg"
                                shimmerColor="hsl(var(--accent-purple))"
                                shimmerSize="0.1em"
                                shimmerDuration="4s"
                                background="hsl(var(--accent-coral))" // CTA background
                                borderRadius="0.5rem"
                            >
                                <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white px-8 py-3">
                                    Send Message
                                </span>
                             </ShimmerButton>
                        </div>

                         {/* Privacy Assurance */}
                         <p className="text-xs text-center text-primary-light-gray/50 pt-4">
                            Your information is confidential and will only be used to respond to your inquiry. No spam, guaranteed.
                        </p>
                    </form>
                 </motion.div>

            </div>
        </section>
    );
};

export default DeepSocialProofLeadCaptureSection;