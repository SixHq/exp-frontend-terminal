
import React from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BoxReveal } from "@/components/magicui/box-reveal"; // Using BoxReveal for step animation
import { DotPattern } from "@/components/magicui/dot-pattern";

// SVG Icons fetched earlier (inline for simplicity)
const BrokenScreenIcon = () => (
    <svg width="40px" height="40px" viewBox="0 0 59.9995 50.1353" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path data from observation */}
        <g id="screen-heart-screen-heart">
            <g id="screen-heart-color">
                <path fill="#F16061" d="M57.5962,33.981H2.397l-0.0904,0.0215l-1.2544,0.2461V4.2671c0-1.772,1.4424-3.2143,3.2159-3.2143h51.4628 c1.7735,0,3.2159,1.4423,3.2159,3.2143v29.999L57.5962,33.981z"/>
                <rect x="23.8017" y="42.3784" fill="#FFFFFF" width="12.9034" height="5.6524"/>
                <path fill="#FDE3E3" d="M55.7309,40.273H4.2681c-1.1924,0-2.1631-0.9688-2.1631-2.1612v-3.1191 c0.0678,0.0137,0.1318,0.041,0.2046,0.041H57.687c0.0732,0,0.1387-0.0273,0.207-0.042v3.1201 C57.894,39.3042,56.9233,40.273,55.7309,40.273z"/>
                <path fill="#FFFFFF" d="M30.0005,14.1358c0-3.1973-2.5913-5.7876-5.7906-5.7876c-3.1967,0-5.789,2.5903-5.789,5.7876 c0,1.6753,0.7236,3.1723,1.8603,4.2309l-0.0141,0.003l9.7334,9.7334l9.7363-9.7334c-0.001-0.003-0.0068-0.003-0.0107-0.0069 c1.1338-1.0581,1.8535-2.5517,1.8535-4.227c0-3.1973-2.5908-5.7876-5.7891-5.7876C32.5933,8.3482,30.0005,10.9385,30.0005,14.1358 z"/>
            </g>
            <g id="screen-heart-line">
                <g id="screen-heart-screen">
                    <path fill="currentColor" d="M55.7309,42.3784H4.2681C1.9141,42.3784,0,40.4644,0,38.1118V4.2671C0,1.9141,1.9141,0,4.2681,0h51.4628 c2.3545,0,4.2686,1.9141,4.2686,4.2671v33.8447C59.9995,40.4644,58.0854,42.3784,55.7309,42.3784L55.7309,42.3784z M4.2681,2.1055c-1.1924,0-2.1631,0.9697-2.1631,2.1616v33.8447c0,1.1915,0.9707,2.1612,2.1631,2.1612h51.4628 c1.1924,0,2.1631-0.9697,2.1631-2.1612V4.2671c0-1.1919-0.9707-2.1616-2.1631-2.1616H4.2681L4.2681,2.1055z"/>
                    <path fill="currentColor" d="M57.687,35.0337H2.3096c-0.5806,0-1.0528-0.4717-1.0528-1.0527c0-0.5801,0.4722-1.0527,1.0528-1.0527 H57.687c0.5811,0,1.0527,0.4726,1.0527,1.0527C58.7397,34.562,58.2681,35.0337,57.687,35.0337L57.687,35.0337z"/>
                    <path fill="currentColor" d="M22.7495,50.1353c-0.5811,0-1.0527-0.4707-1.0527-1.0528l-0.001-6.7041 c0-0.582,0.4717-1.0527,1.0527-1.0527c0.5816,0,1.0528,0.4707,1.0528,1.0527l0.0009,6.7041 C23.8022,49.6646,23.3301,50.1353,22.7495,50.1353L22.7495,50.1353z"/>
                    <path fill="currentColor" d="M37.7583,50.1353c-0.582,0-1.0527-0.4707-1.0527-1.0528v-6.7041c0-0.582,0.4707-1.0527,1.0527-1.0527 c0.582,0,1.0527,0.4707,1.0527,1.0527v6.7041C38.811,49.6646,38.3403,50.1353,37.7583,50.1353L37.7583,50.1353z"/>
                    <path fill="currentColor" d="M40.0679,50.1353H19.9307c-0.5806,0-1.0528-0.4707-1.0528-1.0528c0-0.581,0.4722-1.0517,1.0528-1.0517 h20.1372c0.581,0,1.0527,0.4707,1.0527,1.0517C41.1206,49.6646,40.6489,50.1353,40.0679,50.1353L40.0679,50.1353z"/>
                </g>
                <g>
                    <path fill="currentColor" d="M30.0005,29.1558c-0.2691,0-0.5386-0.1025-0.7442-0.3086l-9.7339-9.7334 c-0.0327-0.0322-0.0634-0.0664-0.0903-0.1025c-1.332-1.3047-2.0639-3.0288-2.0639-4.8755c0-3.7715,3.0693-6.8404,6.8417-6.8404 c2.4356,0,4.5777,1.2779,5.7906,3.1983c1.2129-1.9204,3.3545-3.1983,5.79-3.1983c3.7725,0,6.8418,3.0689,6.8418,6.8404 c0,1.8476-0.7314,3.5713-2.0615,4.8745c-0.0264,0.0361-0.0576,0.0708-0.0899,0.1035l-9.7363,9.7334 C30.5391,29.0533,30.27,29.1558,30.0005,29.1558L30.0005,29.1558z M21.1304,17.7447l8.8701,8.8701l8.8769-8.874 c0.0391-0.0533,0.0821-0.1026,0.1309-0.148c0.9785-0.9136,1.5185-2.1416,1.5185-3.457c0-2.6114-2.125-4.7349-4.7363-4.7349 c-2.6123,0-4.7373,2.1235-4.7373,4.7349c0,0.581-0.4717,1.0522-1.0527,1.0522c-0.5806,0-1.0528-0.4712-1.0528-1.0522 c0-2.6114-2.1245-4.7349-4.7378-4.7349c-2.6108,0-4.7368,2.1235-4.7368,4.7349c0,1.3154,0.542,2.5449,1.5259,3.4609 C21.0483,17.6426,21.0913,17.6919,21.1304,17.7447L21.1304,17.7447z"/>
                </g>
            </g>
        </g>
    </svg>
);

const OldPhoneIcon = () => (
    <svg fill="currentColor" width="40px" height="40px" viewBox="0 0 489.117 489.117" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path data from observation */}
        <g>
            <path d="M320.873,293.221c-15.815,0-28.68,12.865-28.68,28.68c0,15.815,12.865,28.68,28.68,28.68 c15.814,0,28.68-12.865,28.68-28.68C349.553,306.086,336.688,293.221,320.873,293.221z M320.873,342.08 c-11.127,0-20.18-9.053-20.18-20.18c0-11.127,9.053-20.18,20.18-20.18c11.127,0,20.18,9.053,20.18,20.18 C341.053,333.027,332,342.08,320.873,342.08z"/>
            <path d="M245.209,293.221c-15.816,0-28.682,12.865-28.682,28.68c0,15.815,12.865,28.68,28.682,28.68 c15.814,0,28.68-12.865,28.68-28.68C273.889,306.086,261.023,293.221,245.209,293.221z M245.209,342.08 c-11.129,0-20.182-9.053-20.182-20.18c0-11.127,9.053-20.18,20.182-20.18c11.127,0,20.18,9.053,20.18,20.18 C265.389,333.027,256.336,342.08,245.209,342.08z"/>
            <path d="M169.543,293.221c-15.814,0-28.68,12.865-28.68,28.68c0,15.815,12.865,28.68,28.68,28.68 c15.813,0,28.678-12.865,28.678-28.68C198.221,306.086,185.355,293.221,169.543,293.221z M169.543,342.08 c-11.127,0-20.18-9.053-20.18-20.18c0-11.127,9.053-20.18,20.18-20.18c11.127,0,20.178,9.053,20.178,20.18 C189.721,333.027,180.67,342.08,169.543,342.08z"/>
            <path d="M320.873,367.988c-15.815,0-28.68,12.865-28.68,28.682c0,15.815,12.865,28.68,28.68,28.68 c15.814,0,28.68-12.867,28.68-28.682C349.553,380.853,336.688,367.988,320.873,367.988z M320.873,416.85 c-11.127,0-20.18-9.053-20.18-20.18c0-11.129,9.053-20.182,20.18-20.182c11.127,0,20.18,9.053,20.18,20.18 C341.053,407.795,332,416.85,320.873,416.85z"/>
            <path d="M245.209,367.988c-15.816,0-28.682,12.865-28.682,28.682c0,15.815,12.865,28.68,28.682,28.68 c15.814,0,28.68-12.867,28.68-28.682C273.889,380.853,261.023,367.988,245.209,367.988z M245.209,416.85 c-11.129,0-20.182-9.053-20.182-20.18c0-11.129,9.053-20.182,20.182-20.182c11.127,0,20.18,9.053,20.18,20.18 C265.389,407.795,256.336,416.85,245.209,416.85z"/>
            <path d="M169.543,367.988c-15.814,0-28.68,12.865-28.68,28.682c0,15.815,12.865,28.68,28.68,28.68 c15.813,0,28.678-12.867,28.678-28.682C198.221,380.853,185.355,367.988,169.543,367.988z M169.543,416.85 c-11.127,0-20.18-9.053-20.18-20.18c0-11.129,9.053-20.182,20.18-20.182c11.127,0,20.178,9.053,20.178,20.18 C189.721,407.795,180.67,416.85,169.543,416.85z"/>
            <path d="M182.15,247.018h-48c-2.348,0-4.25,1.902-4.25,4.25c0,2.348,1.902,4.25,4.25,4.25h48c2.348,0,4.25-1.902,4.25-4.25 C186.4,248.92,184.498,247.018,182.15,247.018z"/>
            <path d="M368.15,247.018h-48c-2.348,0-4.25,1.902-4.25,4.25c0,2.348,1.902,4.25,4.25,4.25h48c2.348,0,4.25-1.902,4.25-4.25 C372.4,248.92,370.498,247.018,368.15,247.018z"/>
            <path d="M374.037,0H115.08C96.809,0,81.943,14.865,81.943,33.137v293.998c0,0.219,0.018,0.436,0.049,0.647 c0.168,43.154,17.066,83.625,47.629,114.025c30.672,30.51,71.5,47.311,114.963,47.311s84.289-16.801,114.961-47.311 c30.715-30.551,47.629-71.275,47.629-114.672V33.137C407.174,14.865,392.309,0,374.037,0z M90.443,233.518H240.9v35.5H90.443 V233.518z M128.4,92.518h154.75c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25H128.4v-35.5h236.5v123.5H243.15 c-2.348,0-4.25,1.902-4.25,4.25c0,2.348,1.902,4.25,4.25,4.25H364.9v44.5H245.15H128.4V92.518z M249.4,233.518h149.273v35.5H249.4 V233.518z M115.08,8.5h258.957c13.584,0,24.637,11.051,24.637,24.637v191.881H373.4V44.268c0-2.348-1.902-4.25-4.25-4.25h-245 c-2.348,0-4.25,1.902-4.25,4.25v180.75H90.443V33.137C90.443,19.553,101.496,8.5,115.08,8.5z M244.584,480.617 c-84.967,0-154.092-68.852-154.092-153.482c0-0.217-0.018-0.432-0.049-0.639v-48.978H245.15h153.523v49.617 C398.674,411.766,329.549,480.617,244.584,480.617z"/>
        </g>
    </svg>
);

const BatteryDrainIcon = () => (
     <svg width="40px" height="40px" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path data from observation */}
        <g transform="translate(1 1)">
            <path fill="#FDCC00" d="M366.258,502.467H143.734c-13.952,0-25.267-11.315-25.267-25.276V32.809 c0-13.96,11.315-25.276,25.267-25.276h222.524c13.961,0,25.276,11.315,25.276,25.276v444.382 C391.533,491.152,380.218,502.467,366.258,502.467"/>
            <polygon fill="#FFE100" points="118.467,434.2 391.533,434.2 391.533,58.733 118.467,58.733"/>
            <path fill="#E4667F" d="M303.922,348.867h-80.785c-5.965,0-10.803-4.838-10.803-10.812V189.012 c0-5.973,4.838-10.812,10.803-10.812h80.785c5.973,0,10.812,4.838,10.812,10.812v149.043 C314.733,344.028,309.895,348.867,303.922,348.867"/>
            <polygon fill="#E4667F" points="246.467,178.2 280.6,178.2 280.6,144.067 246.467,144.067"/>
            {/* Removed star/sparkle paths as they are small and complex */}
            <circle cx="255" cy="468.333" r="17.067" fill="#FFE100" />
             {/* Adding Lightning Bolt for "Drain" */}
             <polygon fill="#FFFFFF" points="265,220 235,260 255,260 245,300 275,260 255,260 "/>
             {/* Outlines */}
            <path d="M366.258,511H143.734c-18.637,0-33.801-15.164-33.801-33.809V32.809C109.933,14.164,125.097-1,143.734-1h222.524 c18.645,0,33.809,15.164,33.809,33.809v444.382C400.067,495.836,384.903,511,366.258,511z M143.734,16.067 c-9.224,0-16.734,7.509-16.734,16.742v444.382c0,9.233,7.509,16.742,16.734,16.742h222.524c9.233,0,16.742-7.509,16.742-16.742 V32.809c0-9.233-7.509-16.742-16.742-16.742H143.734z"/>
            <path d="M400.067,442.733H109.933V50.2h290.133V442.733z M127,425.667h256v-358.4H127V425.667z"/>
            <path d="M289.133,41.667h-42.667c-4.71,0-8.533-3.823-8.533-8.533s3.823-8.533,8.533-8.533h42.667c4.719,0,8.533,3.823,8.533,8.533 S293.852,41.667,289.133,41.667z"/>
            <path d="M220.867,41.667h-8.533c-4.71,0-8.533-3.823-8.533-8.533s3.823-8.533,8.533-8.533h8.533c4.71,0,8.533,3.823,8.533,8.533 S225.577,41.667,220.867,41.667z"/>
            <path d="M255,502.467c-18.824,0-34.133-15.309-34.133-34.133c0-18.824,15.309-34.133,34.133-34.133s34.133,15.309,34.133,34.133 C289.133,487.158,273.824,502.467,255,502.467z M255,451.267c-9.412,0-17.067,7.654-17.067,17.067 c0,9.412,7.654,17.067,17.067,17.067s17.067-7.654,17.067-17.067C272.067,458.921,264.412,451.267,255,451.267z"/>
        </g>
    </svg>
);

const BuyIconSVG = () => (
    <svg width="40px" height="40px" viewBox="0 -0.5 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path data from observation */}
        <path d="M15.701,3054.81641 C14.115,3056.27579 13.842,3056.62159 11.852,3054.7663 C9.237,3052.33065 12.066,3049.6725 13.688,3051.73327 C13.746,3051.80845 13.862,3051.80644 13.92,3051.73227 C15.506,3049.70357 18.427,3052.31161 15.701,3054.81641 L15.701,3054.81641 Z M19.306,3056.95236 L8.694,3056.95236 L7.361,3048.93379 L20.639,3048.93379 L19.306,3056.95236 L19.306,3056.95236 Z M21,3046.92915 L16.976,3039.96803 L15.244,3040.95932 L18.691,3046.92915 L9.309,3046.92915 L12.755,3040.97035 L11.023,3039.957 L7,3046.92915 L4,3046.92915 L4,3048.93379 L5.333,3048.93379 L7,3058.957 L21,3058.957 L22.667,3048.93379 L24,3048.93379 L24,3046.92915 L21,3046.92915 L21,3046.92915 Z" transform="translate(-4 -3039.5)" />
    </svg>
);

const SellIconSVG = () => (
     <svg width="40px" height="40px" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path data from observation */}
         <path d="M62.828,29.172l-28-28C34.078,0.422,33.062,0,32,0H4C1.789,0,0,1.789,0,4v28 c0,1.062,0.422,2.078,1.172,2.828l28,28C29.953,63.609,30.977,64,32,64s2.047-0.391,2.828-1.172l28-28 C64.391,33.266,64.391,30.734,62.828,29.172z M20,28.004c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S24.418,28.004,20,28.004z"/>
    </svg>
);

const RepairIconSVG = () => (
    <svg width="40px" height="40px" viewBox="0 0 235.785 235.785" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* SVG path data from observation */}
        <g>
            <path d="M232.822,43.032L206.3,69.547c-1.07,1.082-2.498,1.672-4.083,1.57l-32.126-1.709c-2.745-0.144-4.935-2.338-5.082-5.078 L163.297,32.2c-0.078-1.523,0.494-3.011,1.571-4.086l26.515-26.51C187.015,0.538,182.531,0,177.975,0 c-15.07,0-29.244,5.872-39.896,16.531c-15.861,15.85-20.772,39.633-12.521,60.586l0.305,0.79c0.132,0.339,0.259,0.683,0.41,1.022 c2.882,6.617,6.845,12.454,11.806,17.412c5.386,5.391,11.87,9.588,19.266,12.48l1.044,0.441c0.273,0.118,0.546,0.242,0.824,0.339 c6.053,2.134,12.415,3.22,18.866,3.22c15.057,0,29.197-5.856,39.823-16.475C232.012,82.235,237.482,62.017,232.822,43.032z"/>
            <path d="M119.602,90.403L4.976,205.021c-0.129,0.399-0.304,0.772-0.53,1.124c-4.95,7.569-3.898,17.7,2.504,24.104 c6.305,6.311,16.771,7.35,24.163,2.478c0.344-0.226,0.708-0.408,1.086-0.556l1.858-1.859c0.05-0.047,0.103-0.094,0.153-0.146 l113.439-113.433c-6.482-3.215-12.346-7.42-17.49-12.565C126.047,100.054,122.516,95.447,119.602,90.403z M31.188,225.011 c-2.538,2.54-5.913,3.937-9.503,3.937c-3.591,0-6.969-1.396-9.505-3.937c-2.537-2.531-3.934-5.911-3.934-9.502 c0-3.59,1.397-6.96,3.934-9.502c5.069-5.069,13.922-5.069,19,0c2.543,2.542,3.942,5.923,3.942,9.513 C35.123,219.111,33.724,222.48,31.188,225.011z"/>
            <circle cx="21.685" cy="215.509" r="2.688"/> {/* Simplified circle */}
        </g>
    </svg>
);


// Testimonial Card Component
const TestimonialCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string; }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger when 30% is visible

    return (
        <motion.figure
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
         
        >
            <div className="flex flex-row items-center gap-3 mb-3">
                <img className="rounded-full size-10 object-cover border-2 border-brandBlue/50" alt={`${name}'s avatar`} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-foreground">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-muted-foreground">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-foreground/80">{body}</blockquote>
             {/* Add Magic Card for hover effect */}
            <MagicCard
                gradientColor="hsl(var(--brand-blue))"
                gradientSize={150}
                gradientOpacity={0.3}
             
            />
        </motion.figure>
    );
};

// How It Works Step Component
const HowItWorksStep = ({ step, title, description, delay }: { step: number; title: string; description: string; delay: number }) => {
    // Note: The 'delay' prop is received but not directly passed to BoxReveal as it's not a valid prop for it.
    // If animation delay is needed, it might need to be handled differently, e.g., wrapping with motion.div.
    return (
        <BoxReveal boxColor="hsl(var(--brand-blue))" duration={0.5}>
             <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center size-10 rounded-full bg-brandBlue text-brandBlue-foreground font-bold text-lg">
                    {step}
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
             </div>
        </BoxReveal>
    );
};


export function TrustAndSolutionSection() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 }); // Trigger animation when 10% is visible

    const logos = [
        { src: "https://images.pexels.com/photos/29672341/pexels-photo-29672341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "Apple Logo" },
        { src: "https://images.pexels.com/photos/3987390/pexels-photo-3987390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "Samsung Logo" },
        { src: "https://images.pexels.com/photos/6044961/pexels-photo-6044961.jpeg", alt: "Generic Tech Company Logo" }, // Fetched generic logo
    ];

    const testimonials = [
        {
            name: "Alex R.",
            username: "@alexr_designs",
            body: "Got my screen replaced in under an hour! Looks brand new. Highly recommend.",
            img: "https://images.pexels.com/photos/7205947/pexels-photo-7205947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched Avatar 1
        },
        {
            name: "Maria G.",
            username: "@mariag_tech",
            body: "Sold my old phone for a great price. The process was super easy and fast.",
            img: "https://images.pexels.com/photos/7550888/pexels-photo-7550888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched Avatar 2
        },
        {
            name: "Sam K.",
            username: "@samk_reviews",
            body: "Needed a quick buy for a trip, found exactly what I needed here. Excellent service!",
            img: "https://images.pexels.com/photos/13890044/pexels-photo-13890044.jpeg", // Fetched Avatar 3
        },
        {
            name: "Priya S.",
            username: "@priya_updates",
            body: "Their repair service saved my phone's battery life. Very knowledgeable staff.",
            img: "https://images.pexels.com/photos/27069338/pexels-photo-27069338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Fetched Avatar 4
        },
         // Duplicate for longer marquee
         {
            name: "Chris P.",
            username: "@chrisp_gadgets",
            body: "Trading in my device was seamless. Fair value and quick turnaround.",
            img: "https://images.pexels.com/photos/7205947/pexels-photo-7205947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Reusing avatar 1
        },
        {
            name: "Isabelle L.",
            username: "@tech_isa",
            body: "Found a rare older model in perfect condition. So happy with my purchase!",
            img: "https://images.pexels.com/photos/7550888/pexels-photo-7550888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Reusing avatar 2
        },
    ];

    const firstRow = testimonials.slice(0, testimonials.length / 2);
    const secondRow = testimonials.slice(testimonials.length / 2);

    const problems = [
        { icon: <BrokenScreenIcon />, text: "Cracked or broken screen?" },
        { icon: <OldPhoneIcon />, text: "Old phone collecting dust?" },
        { icon: <BatteryDrainIcon />, text: "Battery dying too fast?" },
    ];

    const solutions = [
        {
            Icon: BuyIconSVG,
            name: "Buy Phones",
            description: "Find a wide selection of new and certified pre-owned phones at competitive prices.",
            href: "#buy",
            cta: "Shop Now",
            className: "col-span-3 lg:col-span-1",
            background: <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/10 to-transparent transition-all duration-300 ease-out group-hover:opacity-50"></div>,
        },
        {
            Icon: SellIconSVG,
            name: "Sell Your Phone",
            description: "Get instant cash or credit for your old devices. Quick and easy trade-in process.",
            href: "#sell",
            cta: "Get Quote",
            className: "col-span-3 lg:col-span-1",
             background: <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/10 to-transparent transition-all duration-300 ease-out group-hover:opacity-50"></div>,
        },
        {
            Icon: RepairIconSVG,
            name: "Expert Repairs",
            description: "Fast, reliable repairs for screens, batteries, and more. Done by certified technicians.",
            href: "#repair",
            cta: "Book Repair",
            className: "col-span-3 lg:col-span-1",
             background: <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/10 to-transparent transition-all duration-300 ease-out group-hover:opacity-50"></div>,
        },
    ];

    const howItWorksSteps = [
        { step: 1, title: "Get a Quote / Choose Service", description: "Tell us about your device or the service you need online or in-store." },
        { step: 2, title: "Send/Bring Your Device", description: "Mail your device securely or drop it off at our station." },
        { step: 3, title: "Get Paid / Repaired Fast", description: "Receive quick payment or get your repaired device back, often same-day!" },
    ];


    return (
        <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Add subtle background pattern */}
            <DotPattern
               
                 width={30} height={30} cr={1}
            />

             <div ref={ref} className="container mx-auto px-4 relative z-10">

                 {/* --- Social Proof Section --- */}
                 <div className="mb-20 md:mb-32 text-center">
                    <TextAnimate
                        animation="fadeIn"
                        by="word"
                        className="text-sm font-semibold uppercase text-brandBlue mb-4"
                        startOnView={true} once={true}
                    >
                        Trusted by Thousands
                    </TextAnimate>

                     <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-12">
                        {logos.map((logo, index) => (
                            <motion.img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 0.6, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            />
                        ))}
                    </div>

                    {/* Testimonials Marquee */}
                    <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden"> {/* Added h-96 for testing */}
                        <Marquee pauseOnHover className="[--duration:40s] mb-4">
                            {firstRow.map((review) => (
                                <TestimonialCard key={review.username + '-1'} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:40s]">
                            {secondRow.map((review) => (
                                <TestimonialCard key={review.username + '-2'} {...review} />
                            ))}
                        </Marquee>
                         {/* Gradient Fades for Marquee */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
                    </div>
                 </div>


                 {/* --- Problem / Pain Point Section --- */}
                 <div className="mb-20 md:mb-32 text-center">
                     <TextAnimate
                        animation="slideUp"
                        by="line"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                         startOnView={true} once={true} delay={0.1}
                    >
                        Facing Mobile Troubles?
                    </TextAnimate>
                     <motion.p
                        className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        We understand the frustration. Whether it's a cracked screen slowing you down or an old phone taking up space, we've got the solution.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                         {problems.map((problem, index) => (
                             <motion.div
                                key={index}
                                className="flex flex-col items-center p-6 rounded-lg border border-border/10 bg-background/30 backdrop-blur-sm shadow-sm"
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                              
                            >
                                <div className="text-brandBlue mb-4">{problem.icon}</div>
                                <p className="text-md font-medium text-foreground">{problem.text}</p>
                            </motion.div>
                         ))}
                    </div>
                 </div>


                {/* --- Solution / Product Explanation Section --- */}
                 <div className="mb-12 md:mb-24 text-center">
                    <TextAnimate
                        animation="slideUp"
                        by="line"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                         startOnView={true} once={true} delay={0.1}
                    >
                        Your One-Stop Mobile Solution
                    </TextAnimate>
                     <motion.p
                        className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Mobile World Station makes it simple to buy, sell, and repair your devices with confidence.
                    </motion.p>

                     {/* Bento Grid for Services */}
                    <BentoGrid className="lg:grid-cols-3 max-w-6xl mx-auto mb-16">
                        {solutions.map((feature, idx) => (
                             <BentoCard
                                key={idx}
                                {...feature}
                                className={cn(
                                    feature.className,
                                    "border-border/10 bg-gradient-to-br from-background/30 to-background/50 backdrop-blur-md" // Styling Bento Cards
                                )}
                                background={ // Use MagicCard inside background for effect
                                   <MagicCard
                                        gradientColor="hsl(var(--brand-blue))"
                                        gradientSize={200}
                                        gradientOpacity={0.2}
                                        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                    />
                                }
                             >
                                <div className="pointer-events-none relative z-10 flex flex-col p-6 h-full">
                                    <div className="text-brandBlue mb-3"> <feature.Icon /> </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.name}</h3>
                                    <p className="text-sm text-muted-foreground flex-grow mb-4">{feature.description}</p>
                                    <ShimmerButton
                                         className="mt-auto w-full group/button"
                                         background="hsl(var(--brand-blue))"
                                         shimmerColor="hsl(var(--brand-blue-foreground) / 0.5)"
                                         borderRadius="0.375rem" // Tailwinds rounded-md
                                     >
                                        <a href={feature.href} className="pointer-events-auto w-full block whitespace-pre-wrap px-4 py-2 text-center text-sm font-medium leading-none tracking-tight text-brandBlue-foreground transition-all duration-300 group-hover/button:scale-[1.02]">
                                            {feature.cta}
                                        </a>
                                    </ShimmerButton>
                                </div>
                            </BentoCard>
                        ))}
                    </BentoGrid>
                 </div>


                 {/* --- How It Works Section --- */}
                 <div className="max-w-4xl mx-auto">
                    <TextAnimate
                         animation="fadeIn" by="word"
                         className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10"
                         startOnView={true} once={true} delay={0.2}
                     >
                         Simple Steps, Great Results
                    </TextAnimate>
                    <div className="space-y-8">
                         {howItWorksSteps.map((item, index) => (
                             <HowItWorksStep
                                key={index}
                                step={item.step}
                                title={item.title}
                                description={item.description}
                                delay={0.4 + index * 0.2} // Staggered delay using BoxReveal's delay
                            />
                         ))}
                    </div>
                 </div>

            </div>
        </section>
    );
}
