
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import { MagicCard } from '@/components/magicui/magic-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TextAnimate } from '@/components/magicui/text-animate'; // For layered title

// Sample reviews data (replace with real data later)
const reviews = [
  {
    name: "Alex Johnson",
    username: "@alex_dev",
    body: "Working with them was a game-changer. The performance boost on our app was incredible!",
    img: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=",
  },
  {
    name: "Samantha Lee",
    username: "@samlee_ux",
    body: "The attention to detail in the UI/UX design phase was exceptional. Our users love the new interface.",
    img: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-arabian-muslim-business-woman-in-hijab-wearing-wireless.jpg?s=612x612&w=0&k=20&c=XM9qx-9332vQAbK0473gIuvY7Y7MhQn7Lcmv88qJj74=",
  },
   {
    name: "David Chen",
    username: "@david_cto",
    body: "Reliable, fast, and delivered exactly what we needed. The animations are top-notch.",
    img: "https://media.istockphoto.com/id/1460124878/photo/portrait-of-a-smiling-mature-businessman-on-a-dark-background.jpg?s=612x612&w=0&k=20&c=RQQ2N6uPqfkvT6dqV6rLwXo5h0YIt_4pQ79Q8R68i_I=",
  },
   {
    name: "Maria Garcia",
    username: "@maria_pm",
    body: "The project was managed professionally, and communication was excellent throughout.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder - Use scraped image
  },
   {
    name: "Kenji Tanaka",
    username: "@kenji_eng",
    body: "Complex backend challenges were handled flawlessly. Highly recommend for full-stack work.",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder - Use scraped image
  },
   {
    name: "Fatima Ahmed",
    username: "@fatima_startup",
    body: "From concept to launch, the process was smooth and the final product exceeded expectations.",
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder - Use scraped image
  },
];

const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png", alt: "Google Logo"},
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png", alt: "Microsoft Logo"},
    { src: "https://media.istockphoto.com/id/1330023728/vector/abstract-modern-tech-or-digital-logo-design-vector-template.jpg?s=612x612&w=0&k=20&c=Fpg-5gTNM7oJq-PkiD_sQMN40Jz5Qv-g-zF72Xf3d6Q=", alt: "Generic Tech Company Logo 1"},
    { src: "https://img.logoipsum.com/296.svg", alt: "Generic Tech Company Logo 2"}, // Example from logoipsum
    { src: "https://img.logoipsum.com/288.svg", alt: "Generic Tech Company Logo 3"}, // Example from logoipsum
    { src: "https://img.logoipsum.com/290.svg", alt: "Generic Tech Company Logo 4"}, // Example from logoipsum
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <MagicCard
        className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-4 bg-primary-dark-blue/30 backdrop-blur-sm border border-primary-teal/20 shadow-md"
        gradientSize={150}
        gradientColor="hsl(var(--primary-teal))"
        gradientOpacity={0.2}
        gradientFrom="hsl(var(--primary-teal))"
        gradientTo="hsl(var(--accent-purple))"
    >
        <div className="flex flex-row items-center gap-3 mb-3">
            <Avatar className="w-10 h-10 border-2 border-accent-purple">
                <AvatarImage src={img} alt={`${name}'s avatar`} />
                <AvatarFallback className="bg-primary-teal text-primary-dark-blue">{name.substring(0,1)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-primary-light-gray">
                {name}
                </figcaption>
                <p className="text-xs font-medium text-primary-light-gray/60">{username}</p>
            </div>
        </div>
        <blockquote className="mt-2 text-sm text-primary-light-gray/80">{body}</blockquote>
    </MagicCard>

  );
};

// Simple Layered Title Component (for reuse)
const LayeredTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("relative inline-block", className)}>
         {/* Bottom Layer (Slightly offset and darker/blurred) */}
        <TextAnimate
            as="span"
            animation="fadeIn" // Simple fade for the background layer
            className="absolute inset-0 text-primary-teal opacity-30 blur-sm transform translate-x-1 translate-y-1 z-0"
            startOnView={false} // Controlled by parent's motion.div
             variants={{
                hidden: { opacity: 0 },
                show: { opacity: 0.3, transition: { delay: 0.3, duration: 0.5 } },
             }}
        >
            {children}
        </TextAnimate>
        {/* Top Layer */}
        <TextAnimate
            as="span"
            animation="fadeIn"
            className="relative z-10"
            startOnView={false} // Controlled by parent's motion.div
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 0.1, duration: 0.5 } },
             }}
        >
            {children}
        </TextAnimate>
    </div>
);


const SocialProofSection: React.FC = () => {
  return (
    <section id="social-proof" className="py-20 md:py-32 bg-background text-foreground overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is in view
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Section Title */}
        <motion.div
             className="text-center mb-12 md:mb-16"
             variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
             }}
         >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <LayeredTitle>Trusted By Leaders</LayeredTitle>
             </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Delivering results that speak for themselves. Here's what some amazing people have to say.
            </p>
        </motion.div>

         {/* Testimonials Marquee */}
        <motion.div
            className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-16 md:mb-24"
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
             }}
        >
            <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
                {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1rem] mt-4">
                {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
             {/* Fades */}
             <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background"></div>
             <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background"></div>
        </motion.div>

         {/* Client Logos */}
         <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
             variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
             }}
         >
            {logos.map((logo, index) => (
                <motion.div
                    key={index}
                     whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
                     transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                 >
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 md:h-10 lg:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                 </motion.div>
            ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default SocialProofSection;