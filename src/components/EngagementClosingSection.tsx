
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

// Shadcn UI Components
import { Button } from "@/components/ui/button"; // Using Shadcn Button *inside* the form, but Magic UI buttons for CTAs
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Magic UI Components
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { TextReveal } from "@/components/magicui/text-reveal";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";

// Fetched SVG Icons
const QuestionMarkIcon = () => (
    <svg width="24px" height="24px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="16">
        {/* SVG path data from observation */}
        <path d="M142 125.853C155.049 97.8883 180.62 82.7645 200.381 78.4757C227.189 72.6575 249.859 84.0511 257.624 112.528C260.302 122.352 259.217 138.128 253.081 148.517C247.426 158.092 239.904 165.942 227.555 176.481C225.251 178.447 217.389 185.018 216.649 185.643C199.849 199.818 191.567 209.152 186.81 220.972C182.053 232.792 182.305 269.489 216.649 266.35" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M198.744 315.68C198.744 317.274 198.744 319.614 198.744 322.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CheckmarkIcon = () => (
    <svg fill="currentColor" width="20px" height="20px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path data from observation */}
        <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 24.7655 40.0234 C 23.9687 40.0234 23.3593 39.6719 22.6796 38.8750 L 15.9296 30.5312 C 15.5780 30.0859 15.3671 29.5234 15.3671 29.0078 C 15.3671 27.9063 16.2343 27.0625 17.2655 27.0625 C 17.9452 27.0625 18.5077 27.3203 19.0702 28.0469 L 24.6718 35.2890 L 35.5702 17.8281 C 36.0155 17.1016 36.6249 16.75 37.2343 16.75 C 38.2655 16.75 39.2733 17.4297 39.2733 18.5547 C 39.2733 19.0703 38.9687 19.6328 38.6640 20.1016 L 26.7577 38.8750 C 26.2421 39.6484 25.5858 40.0234 24.7655 40.0234 Z"/>
    </svg>
);

// Zod Schema for the form
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional().or(z.literal('')), // Allow empty string
  inquiryType: z.enum(["Repair Quote", "Sell Inquiry", "Buy Question", "General"]),
  message: z.string().min(10, { message: "Please provide some details (min 10 characters)." }).max(500),
});

// FAQ Data
const faqData = [
  {
    id: "faq-1",
    question: "How long do repairs usually take?",
    answer: "Most common repairs like screen or battery replacements are completed within 1-2 hours. More complex issues might take longer, but we always provide an estimated timeframe upfront.",
  },
  {
    id: "faq-2",
    question: "What kind of warranty do you offer on repairs?",
    answer: "We offer a 90-day warranty on all parts and labor for our repairs. If you experience any issues related to the repair within this period, bring it back, and we'll fix it free of charge.",
  },
  {
    id: "faq-3",
    question: "What types of phones do you buy, sell, and repair?",
    answer: "We handle a wide range of devices, primarily focusing on Apple iPhones and Samsung Galaxy phones (both new and older models). We also service other brands like Google Pixel. Contact us if you have a specific device inquiry.",
  },
   {
    id: "faq-4",
    question: "How does the selling process work?",
    answer: "You can get an instant quote online or in-store. If you accept, simply bring or mail your device to us. After a quick inspection, we'll issue your payment via your preferred method (cash, bank transfer, store credit).",
  },
   {
    id: "faq-5",
    question: "Do I need an appointment for repairs?",
    answer: "Appointments are recommended to ensure the fastest service, especially for common repairs. However, walk-ins are always welcome, and we'll do our best to accommodate you.",
  },
];


export function EngagementClosingSection() {
  const formRef = useRef(null);
  const faqRef = useRef(null);
  const closingRef = useRef(null);

  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.1 });
  const isClosingInView = useInView(closingRef, { once: true, amount: 0.3 });

  // Form Hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "Repair Quote",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // --- Mock Form Submission ---
    // Replace this with your actual API call or form handling logic
    console.log("Form Submitted:", values);
    // Simulate network delay
    return new Promise(resolve => setTimeout(() => {
        alert("Inquiry submitted successfully! We'll be in touch soon.");
        form.reset(); // Reset form after submission
        resolve(true);
    }, 1000));
    // --- End Mock Form Submission ---
  }

    // Animation variants for staggered children (FAQ)
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15, // Stagger delay between items
          delayChildren: 0.3, // Delay before first child animates
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };


  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-brandBlue/5 ">
      <div className="container mx-auto px-4 space-y-24 md:space-y-36">

        {/* --- Lead Capture Section --- */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="max-w-3xl mx-auto"
        >
           <NeonGradientCard
               className="relative p-6 md:p-10 rounded-2xl"
               borderSize={2}
               borderRadius={16}
               neonColors={{ firstColor: "hsl(var(--brand-blue))", secondColor: "#ffffff" }} // Brand blue and white neon
            >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-3">Get in Touch</h2>
                <p className="text-muted-foreground text-center mb-8">Have questions or need a quote? Fill out the form below.</p>

                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} className="bg-background/50 border-border/30 focus:ring-brandBlue" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             {/* Email Field */}
                             <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/50 border-border/30 focus:ring-brandBlue" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                         </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Phone Field (Optional) */}
                             <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone (Optional)</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="Your Phone Number" {...field} className="bg-background/50 border-border/30 focus:ring-brandBlue" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Inquiry Type Select */}
                            <FormField
                                control={form.control}
                                name="inquiryType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Inquiry Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-background/50 border-border/30 focus:ring-brandBlue">
                                                    <SelectValue placeholder="Select inquiry type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-background border-border">
                                                <SelectItem value="Repair Quote">Repair Quote</SelectItem>
                                                <SelectItem value="Sell Inquiry">Sell Inquiry</SelectItem>
                                                <SelectItem value="Buy Question">Buy Question</SelectItem>
                                                <SelectItem value="General">General Question</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                             />
                        </div>

                        {/* Message Textarea */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Message / Inquiry Details</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us more about your phone or question..."
                                            className="resize-none bg-background/50 border-border/30 focus:ring-brandBlue"
                                            rows={4}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                         />

                         {/* Privacy Assurance */}
                        <p className="text-xs text-muted-foreground text-center pt-2">
                            We respect your privacy. Your information will only be used to respond to your inquiry.
                        </p>

                        {/* Submit Button */}
                         <div className="flex justify-center pt-4">
                             <ShimmerButton
                                type="submit"
                                className="w-full md:w-auto shadow-lg group"
                                background="hsl(var(--brand-blue))"
                                shimmerColor="hsl(var(--brand-blue-foreground) / 0.6)"
                                borderRadius="0.5rem"
                                disabled={form.formState.isSubmitting} // Disable button while submitting
                            >
                                <span className="whitespace-pre-wrap px-8 py-3 text-center text-base font-semibold leading-none tracking-tight text-brandBlue-foreground transition-transform duration-300 ease-in-out group-hover:scale-105">
                                     {form.formState.isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </span>
                            </ShimmerButton>
                         </div>
                    </form>
                </Form>
           </NeonGradientCard>
        </motion.div>

        {/* --- FAQ Section --- */}
        <motion.div
            ref={faqRef}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
            variants={containerVariants} // Use container variants for staggering
            className="max-w-3xl mx-auto"
        >
            <motion.h2
                 variants={itemVariants} // Animate heading first
                className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10"
             >
                Frequently Asked Questions
            </motion.h2>
             <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((item, index) => (
                    <motion.div key={item.id} variants={itemVariants}> {/* Animate each accordion item */}
                        <AccordionItem
                            value={item.id}
                            className="border border-border/20 rounded-lg bg-background/30 backdrop-blur-sm shadow-sm px-4 transition-all hover:border-brandBlue/50"
                        >
                            <AccordionTrigger className="text-left text-md font-medium text-foreground hover:no-underline hover:text-brandBlue data-[state=open]:text-brandBlue"> {/* Highlight trigger when open */}
                                <span className="flex items-center gap-3">
                                    <QuestionMarkIcon />
                                    {item.question}
                                </span>
                             </AccordionTrigger>
                             <AccordionContent className="pt-2 pb-4 text-sm text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                         </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </motion.div>

         {/* --- Closing Argument & Final CTA Section --- */}
        <motion.div
            ref={closingRef}
            initial={{ opacity: 0 }}
            animate={isClosingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto relative pt-10"
        >
             {/* Optional Border Beam effect for emphasis */}
             <BorderBeam size={150} duration={8} delay={1} colorFrom="hsl(var(--brand-blue))" colorTo="#ffffff" />

             <TextAnimate
                animation="blurInUp"
                by="line"
                as="h2"
                className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight"
                startOnView={true} once={true} delay={0.1}
             >
                Ready to Upgrade Your Mobile Experience?
             </TextAnimate>

             <div className="max-w-2xl mx-auto mb-10">
                <TextReveal className="text-lg text-muted-foreground">
                     Don't wait! Whether you need a fast repair, want to sell your old device, or find your next perfect phone, Mobile World Station is here to help. Experience top-tier service and unbeatable value today.
                </TextReveal>
            </div>

            {/* Make the button a link to the contact section (or relevant page) */}
             <a href="#contact" aria-label="Get Started Now">
                 <PulsatingButton
                     pulseColor="hsla(200, 53%, 22%, 0.5)" // Using HSL with alpha approximation for brandBlue
                     duration="1.5s"
                     className="group inline-flex items-center justify-center gap-3 rounded-full bg-brandBlue px-8 py-4 text-lg font-bold text-brandBlue-foreground shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brandBlue focus:ring-offset-2 focus:ring-offset-background"
                 >
                     <CheckmarkIcon />
                    <span>Get Started Now</span>
                 </PulsatingButton>
             </a>

        </motion.div>

      </div>
    </section>
  );
}