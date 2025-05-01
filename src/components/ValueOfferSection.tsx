
import React from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/magicui/magic-card";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { RetroGrid } from "@/components/magicui/retro-grid"; // Using RetroGrid for subtle background
import { NumberTicker } from "@/components/magicui/number-ticker";

// Fetched SVG Icons
const DollarSignIcon = () => (
    <svg width="36px" height="36px" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M406.195,383.984c-8.391,15.734-19.922,28.859-34.516,39.609c-14.656,10.719-32.188,18.703-52.563,23.969 c-8.906,2.25-18.234,3.813-27.703,5.094V512h-70.828v-58.156c-20.172-1.703-39.453-4.844-57.609-9.844 c-27.719-7.594-64.016-38.25-64.016-38.25c-3.109-1.813-5.172-5-5.609-8.531c-0.453-3.563,0.766-7.156,3.313-9.688l35.484-35.5 c3.828-3.781,9.766-4.5,14.359-1.688c0,0,26.563,23.063,46.688,28.563c20.125,5.469,40.094,8.219,60.016,8.219 c25.125,0,45.891-4.438,62.359-13.313c16.5-8.938,24.719-22.75,24.719-41.625c0-13.594-4.031-24.313-12.172-32.188 c-8.109-7.813-21.828-12.734-41.188-14.891l-63.563-5.469c-37.641-3.672-66.672-14.172-87.063-31.375 c-20.453-17.266-30.609-43.453-30.609-78.453c0-19.375,3.906-36.625,11.766-51.797c7.875-15.172,18.563-27.984,32.172-38.422 c13.594-10.469,29.438-18.313,47.469-23.531c7.547-2.188,15.453-3.625,23.484-4.938V0h70.828v50.094 c16.531,1.625,32.266,4.281,46.906,8.313c24.844,6.781,50.938,27.188,50.938,27.188c3.266,1.688,5.484,4.875,6.047,8.5 c0.563,3.688-0.641,7.313-3.219,9.969l-33.281,33.781c-3.547,3.594-9.031,4.531-13.563,2.188c0,0-19.703-14.031-36.734-18.469 c-17.016-4.438-34.891-6.688-53.719-6.688c-24.609,0-42.797,4.719-54.531,14.109c-11.781,9.453-17.625,21.734-17.625,36.875 c0,13.641,4.109,24.078,12.531,31.359c8.359,7.344,22.469,12.109,42.359,14.125l55.703,4.75 c41.297,3.656,72.563,14.625,93.734,32.922c21.203,18.328,31.781,45.016,31.781,80.016 C418.742,350.016,414.554,368.281,406.195,383.984z"/>
    </svg>
);

const WrenchToolsIcon = () => (
    <svg fill="currentColor" width="36px" height="36px" viewBox="0 0 129 129" style={{fillRule:'evenodd', clipRule:'evenodd', strokeLinejoin:'round', strokeMiterlimit:2}} xmlns="http://www.w3.org/2000/svg">
         <g transform="matrix(1,0,0,1,-315,-508)">
            <g id="wrench" transform="matrix(1,0,0,1,315.418,508.75)">
                <rect height="128" style={{fill:'none'}} width="128" x="0" y="0"/>
                <g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6135.14,3161.66L6152.61,3152.99C6152.61,3152.99 6152.15,3154.9 6151.55,3157.41C6150.39,3162.23 6147.89,3166.55 6144.42,3169.93C6142.19,3171.69 6139.79,3172.51 6137.22,3172.38L6135.14,3172.38L6135.14,3161.66Z" style={{fill:'currentColor'}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6142.27,3171.31C6140.67,3172.11 6138.99,3172.47 6137.22,3172.38L6135.14,3172.38L6135.14,3161.66L6152.61,3152.99C6152.61,3152.99 6152.15,3154.9 6151.55,3157.41C6151.44,3157.87 6151.31,3158.33 6151.18,3158.79L6142.27,3163.21L6142.27,3171.31Z" style={{fill:'hsl(var(--brand-blue) / 0.6)'}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6103.25,3168.16C6105.92,3165.49 6107.53,3161.95 6107.79,3158.18C6108.1,3152.19 6110.53,3146.37 6115.04,3141.87C6125.08,3131.83 6141.66,3132.1 6152.04,3142.48C6152.17,3142.61 6152.3,3142.74 6152.42,3142.87C6149.05,3144.54 6136.5,3150.78 6136.5,3150.78C6136.5,3150.78 6136.5,3172.55 6136.5,3182.23C6136.5,3183.51 6135.95,3184.73 6135,3185.59C6134.05,3186.44 6132.78,3186.85 6131.5,3186.71C6130.36,3186.51 6129.22,3186.29 6128.08,3186C6124.1,3184.96 6119.87,3186.11 6116.96,3189.02C6103.66,3202.29 6068.83,3237.12 6053.84,3252.12C6049.96,3256 6043.66,3256 6039.78,3252.12C6038.72,3251.06 6037.63,3249.96 6036.57,3248.9C6032.69,3245.02 6032.69,3238.73 6036.57,3234.85C6052.3,3219.11 6090.02,3181.39 6103.25,3168.16ZM6050.2,3238.01C6051.9,3239.71 6051.9,3242.47 6050.2,3244.16C6048.5,3245.86 6045.75,3245.86 6044.05,3244.16C6042.35,3242.47 6042.35,3239.71 6044.05,3238.01C6045.75,3236.31 6048.5,3236.31 6050.2,3238.01Z" style={{fill:'currentColor'}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6146.34,3138.1C6148.38,3139.27 6150.3,3140.73 6152.04,3142.48C6152.17,3142.61 6152.3,3142.74 6152.42,3142.87C6149.05,3144.54 6136.5,3150.78 6136.5,3150.78C6136.5,3150.78 6136.5,3172.55 6136.5,3182.23C6136.5,3183.51 6135.95,3184.73 6135,3185.59C6134.05,3186.44 6132.78,3186.85 6131.5,3186.71C6130.36,3186.51 6129.22,3186.29 6128.08,3186C6124.1,3184.96 6119.87,3186.11 6116.96,3189.02C6103.66,3202.29 6068.83,3237.12 6053.84,3252.12C6049.96,3256 6043.66,3256 6039.78,3252.12C6038.72,3251.06 6037.63,3249.96 6036.57,3248.9C6036.23,3248.56 6035.92,3248.21 6035.64,3247.84C6039.53,3250.76 6045.09,3250.45 6048.63,3246.91C6063.62,3231.92 6098.46,3197.09 6111.75,3183.81C6114.66,3180.9 6118.9,3179.76 6122.88,3180.8C6124.01,3181.09 6125.15,3181.3 6126.3,3181.51C6127.57,3181.65 6128.84,3181.24 6129.79,3180.38C6130.75,3179.53 6131.29,3178.31 6131.29,3177.03C6131.29,3167.35 6131.29,3145.57 6131.29,3145.57L6146.34,3138.1Z" style={{fill:'hsl(var(--brand-blue) / 0.6)'}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6041.11,3253.23C6040.65,3252.91 6040.2,3252.53 6039.78,3252.12C6038.72,3251.06 6037.63,3249.96 6036.57,3248.9C6032.69,3245.02 6032.69,3238.73 6036.57,3234.85C6052.3,3219.11 6090.02,3181.39 6103.25,3168.16C6105.92,3165.49 6107.53,3161.95 6107.79,3158.18C6108.1,3152.19 6110.53,3146.37 6115.04,3141.87C6125.08,3131.83 6141.66,3132.1 6152.04,3142.48C6152.17,3142.61 6152.3,3142.74 6152.42,3142.87L6151.35,3143.4C6141.38,3138.02 6128.88,3139.36 6120.7,3147.53C6116.19,3152.04 6113.77,3157.86 6113.45,3163.85C6113.19,3167.61 6111.58,3171.16 6108.91,3173.83L6045.8,3236.94C6045.16,3237.14 6044.56,3237.5 6044.05,3238.01C6043.54,3238.52 6043.18,3239.12 6042.98,3239.76L6042.23,3240.51C6038.77,3243.97 6038.4,3249.36 6041.11,3253.23Z" style={{fill:'hsl(var(--brand-blue) / 0.8)'}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6096.59,3186.17C6098.25,3184.51 6100.61,3184.16 6101.85,3185.41C6101.85,3185.41 6101.85,3185.41 6101.85,3185.41C6103.09,3186.65 6102.75,3189.01 6101.09,3190.67L6064.36,3227.39C6062.7,3229.06 6060.34,3229.4 6059.1,3228.16C6059.1,3228.16 6059.1,3228.16 6059.1,3228.16C6057.86,3226.91 6058.2,3224.56 6059.87,3222.89L6096.59,3186.17Z" style={{fill:'hsl(var(--brand-blue) / 0.6)'}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6119.19,3176.96C6118.69,3177.22 6118.09,3177.2 6117.6,3176.91C6117.12,3176.61 6116.81,3176.1 6116.8,3175.53C6116.72,3171.88 6116.56,3165.41 6116.51,3162.9C6116.49,3162.26 6116.84,3161.68 6117.41,3161.39C6118.68,3160.74 6121.02,3159.56 6122.81,3158.65C6123.32,3158.39 6123.93,3158.42 6124.42,3158.72C6124.9,3159.02 6125.2,3159.55 6125.2,3160.12C6125.2,3163.85 6125.2,3170.4 6125.2,3172.91C6125.2,3173.53 6124.85,3174.1 6124.3,3174.38C6123.09,3174.99 6120.89,3176.1 6119.19,3176.96Z" style={{fill:'hsl(var(--brand-blue) / 0.6)'}}/>
                    </g>
                    <g transform="matrix(1,0,0,1,-6029.91,-3130.42)">
                        <path d="M6121.4,3159.37L6122.81,3158.65C6123.32,3158.39 6123.93,3158.42 6124.42,3158.72C6124.9,3159.02 6125.2,3159.55 6125.2,3160.12C6125.2,3163.85 6125.2,3170.4 6125.2,3172.91C6125.2,3173.53 6124.85,3174.1 6124.3,3174.38C6123.09,3174.99 6120.89,3176.1 6119.19,3176.96C6118.69,3177.22 6118.09,3177.2 6117.6,3176.91C6117.33,3176.74 6117.12,3176.51 6116.98,3176.25L6120.68,3174.38C6121.23,3174.1 6121.58,3173.53 6121.58,3172.91C6121.58,3170.4 6121.58,3163.85 6121.58,3160.12C6121.58,3159.86 6121.52,3159.6 6121.4,3159.37Z" style={{fill:'hsl(var(--brand-blue) / 0.4)'}}/>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

const LeafIcon = () => (
     <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9.00006L16.5 4.50006M12 14.5001L18.5 8.00006M12 19.5001L19.5 12.0001"/>
        <path d="M12 22C16.4183 22 20 18.3541 20 13.8567C20 9.39453 17.4467 4.18759 13.4629 2.32555C12.9986 2.10852 12.4993 2 12 2M12 22C7.58172 22 4 18.3541 4 13.8567C4 9.39453 6.55332 4.18759 10.5371 2.32555C11.0014 2.10852 11.5007 2 12 2M12 22V2"/>
    </svg>
);

const DiagnosticIcon = () => (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 11h-1.26a8 8 0 1 0-11.48 0H5"/>
        <path d="M19 11a7 7 0 0 1-14 0h14Z"/>
        <path d="M12 11V5"/>
        <path d="M12 19v-3"/>
    </svg>
);

// Benefit Card Component
const BenefitCard = ({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <MagicCard
            className="flex flex-col items-center text-center p-6 rounded-xl border border-border/10 bg-background/30 backdrop-blur-md shadow-lg overflow-hidden cursor-pointer h-full"
            gradientColor="hsl(var(--brand-blue))"
            gradientSize={150}
            gradientOpacity={0.15}
        >
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: delay }}
                className="flex flex-col items-center h-full" // Ensure inner div takes full height for centering
            >
                <div className="mb-4 text-brandBlue">{icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{description}</p>
                 {/* Optional Mini CTA - Example */}
                 {/* <a href="#" className="mt-4 text-sm text-brandBlue hover:underline">Learn More &rarr;</a> */}
            </motion.div>
        </MagicCard>
    );
};


export function ValueOfferSection() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const benefits = [
        { icon: <DollarSignIcon />, title: "Get Top Dollar", description: "We offer competitive prices for your used phones, turning clutter into cash.", delay: 0.2 },
        { icon: <WrenchToolsIcon />, title: "Fast, Reliable Repairs", description: "Expert technicians fix screens, batteries & more, often same-day.", delay: 0.3 },
        { icon: <LeafIcon />, title: "Sustainable Choice", description: "Selling or repairing extends device life, reducing e-waste. Good for your wallet and the planet.", delay: 0.4 },
    ];

    return (
        <section id="value" ref={ref} className="py-20 md:py-32 bg-background relative ">
            {/* Subtle Background Grid */}
             <RetroGrid />

             <div className="container mx-auto px-4 relative z-10">

                 {/* --- Benefits Section --- */}
                 <div className="mb-20 md:mb-32 text-center">
                    <TextAnimate
                         animation="fadeIn" by="word"
                         className="text-sm font-semibold uppercase tracking-widest text-brandBlue mb-3"
                         startOnView={true} once={true}
                    >
                        Why Choose Us?
                    </TextAnimate>
                     <TextAnimate
                        animation="slideUp" by="line"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12"
                        startOnView={true} once={true} delay={0.1}
                    >
                        Maximum Value, Minimum Hassle
                    </TextAnimate>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                         {benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                         ))}
                    </div>
                 </div>

                 {/* --- Offer / Value Proposition Section --- */}
                 <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-brandBlue/10 to-background/20 p-8 md:p-12 rounded-2xl border border-border/10 backdrop-blur-lg shadow-xl overflow-hidden mb-20 md:mb-32">
                     {/* Background Element */}
                    {/* You could add Particles or another subtle effect here if desired */}

                     <motion.div
                         className="md:w-1/2 text-center md:text-left"
                         initial={{ opacity: 0, x: -40 }}
                         animate={isInView ? { opacity: 1, x: 0 } : {}}
                         transition={{ duration: 0.6, delay: 0.3 }}
                     >
                         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Unsure What's Wrong?
                         </h2>
                         <p className="text-lg text-muted-foreground mb-6">
                            Get a <strong className="text-brandBlue font-semibold">FREE diagnostic check</strong> for your phone. No commitment, just clear answers from our experts.
                         </p>
                         <ShimmerButton
                             className="group shadow-md"
                             background="hsl(var(--brand-blue))"
                             shimmerColor="hsl(var(--brand-blue-foreground) / 0.6)"
                             borderRadius="0.5rem"
                         >
                             <a href="#contact" className="flex items-center justify-center gap-2 whitespace-pre-wrap px-6 py-3 text-base font-semibold leading-none tracking-tight text-brandBlue-foreground transition-transform duration-300 ease-in-out group-hover:scale-105">
                                 <DiagnosticIcon />
                                 <span>Book Free Check</span>
                             </a>
                         </ShimmerButton>
                     </motion.div>

                      {/* Visual Element - e.g., Animated Progress Bar */}
                     <motion.div
                        className="md:w-1/3 flex justify-center mt-8 md:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {/* Example: Abstract visual or relevant graphic. Here using a phone outline */}
                        <div className="relative w-48 h-80 border-4 border-brandBlue/30 rounded-3xl p-2 flex items-center justify-center">
                             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-brandBlue/30 rounded-full"></div> {/* Notch */}
                            <DiagnosticIcon /> {/* Use icon as placeholder graphic */}
                            <p className="absolute bottom-4 text-xs text-muted-foreground">Checking...</p>
                        </div>
                     </motion.div>
                 </div>

                  {/* --- Pricing Summary / Hint --- */}
                 <motion.div
                    className="text-center text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                 >
                    <p className="text-sm">
                        Need a repair estimate? <a href="#repair" className="text-brandBlue hover:underline font-medium">Check common repair costs</a> or visit us.
                    </p>
                    {/* Example using NumberTicker if showing a specific price */}
                    {/* <p className="text-sm mt-1">
                        Screen repairs starting from <span className="text-foreground font-semibold">$<NumberTicker value={89} delay={1} /></span>
                    </p> */}
                 </motion.div>

            </div>
        </section>
    );
}