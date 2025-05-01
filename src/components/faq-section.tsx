
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Shadcn Accordion
import { BoxReveal } from '@/components/magicui/box-reveal';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { ChevronDownIcon } from '@/components/icons/icons';

const faqItems = [
  {
    value: "item-1",
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js for front-end and full-stack applications. I'm proficient in TypeScript, Tailwind CSS for styling, and various animation libraries like Framer Motion (motion/react). I also have experience with databases like PostgreSQL and cloud platforms like AWS and Vercel.",
  },
  {
    value: "item-2",
    question: "What is your development process like?",
    answer:
      "My process typically involves understanding your requirements, planning the architecture, designing the UI/UX (often collaborating with designers), developing the application iteratively, rigorous testing, and finally deploying the solution. I emphasize clear communication and regular updates throughout the project lifecycle.",
  },
  {
    value: "item-3",
    question: "How do you handle project pricing?",
    answer:
      "Pricing depends on the project's scope, complexity, and timeline. I offer flexible engagement models, including fixed-price for well-defined projects and hourly rates for ongoing work or consultations. Let's discuss your specific needs for a detailed quote.",
  },
  {
    value: "item-4",
    question: "What makes your approach unique?",
    answer:
      "I combine deep technical expertise with a strong focus on user experience and cutting-edge animations. My goal isn't just to build functional software, but to create engaging, high-performance digital experiences that achieve your business objectives. I prioritize clean code, scalability, and performance optimization.",
  },
   {
    value: "item-5",
    question: "What is your availability for new projects?",
    answer:
      "My availability varies. Please reach out via the contact form with details about your project, and I'll get back to you regarding my current schedule and potential start dates.",
  },
];

const FaqSection: React.FC = () => {
   const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="faq" className="bg-background text-foreground py-20 md:py-32 relative overflow-hidden">
       <DotPattern
            className={cn(
                "[mask-image:radial-gradient(circle_at_center,white,transparent_60%)]",
                "absolute inset-0 h-full w-full stroke-primary-teal/10 opacity-50 z-0"
            )}
         />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
         <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
             variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
             }}
         >
             <BoxReveal boxColor="hsl(var(--primary-teal))" duration={0.6}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 md:mb-12 text-center text-primary-teal">
                    Frequently Asked Questions
                </h2>
             </BoxReveal>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                 <motion.div
                     key={item.value}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                 >
                    <AccordionItem
                        value={item.value}
                         className="bg-primary-dark-blue/30 backdrop-blur-sm border border-primary-light-gray/15 rounded-lg px-6 transition-colors hover:border-primary-teal/30 data-[state=open]:border-primary-teal/50"
                     >
                       <AccordionTrigger className="text-left text-base md:text-lg font-medium text-primary-light-gray hover:text-primary-teal transition-colors py-4 group">
                            {item.question}
                            <ChevronDownIcon className="h-5 w-5 shrink-0 text-primary-light-gray/70 transition-transform duration-200 group-hover:text-primary-teal group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary-teal" />
                       </AccordionTrigger>
                       <AccordionContent className="text-sm md:text-base text-primary-light-gray/70 pb-5 pt-1">
                            {item.answer}
                       </AccordionContent>
                    </AccordionItem>
                 </motion.div>
              ))}
            </Accordion>

             <motion.div
                 className="mt-12 text-center text-primary-light-gray/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5 + faqItems.length * 0.1, duration: 0.6 }}
              >
                 <p>
                     Have more questions? Feel free to{' '}
                     <a
                         href="#contact"
                          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                          className="text-primary-teal hover:text-accent-purple underline underline-offset-4 transition-colors font-medium"
                      >
                         get in touch
                     </a>
                     .
                 </p>
             </motion.div>

         </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;