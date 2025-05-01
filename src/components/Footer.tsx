
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { CoolMode } from '@/components/magicui/cool-mode';
import { LinkedInIcon, GitHubIcon, XIcon, HomeIcon, UserIcon, DevelopmentIcon, MailIcon } from '@/components/icons/icons';

const footerNavItems = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Contact', sectionId: 'contact' },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', Icon: LinkedInIcon }, // Replace with your URL
  { name: 'GitHub', url: 'https://github.com/your-username', Icon: GitHubIcon },     // Replace with your URL
  { name: 'X', url: 'https://x.com/your-handle', Icon: XIcon },           // Replace with your URL
];

const legalLinks = [
    { label: 'Privacy Policy', url: '#' }, // Replace with actual URLs or pages
    { label: 'Terms of Service', url: '#' },
];


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <motion.footer
        className="relative bg-primary-dark-blue text-primary-light-gray pt-16 pb-8 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {/* Background Grid */}
        <RetroGrid
            className="absolute inset-0 opacity-10 z-0"
            lightLineColor="hsl(var(--primary-teal))"
            darkLineColor="hsl(var(--primary-teal))" // Same for dark theme
            cellSize={50}
            angle={45}
        />

         <div className="container mx-auto px-6 md:px-8 relative z-10">
            {/* Top Row: Logo, Nav, Social */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 border-b border-primary-light-gray/10 pb-8">
                {/* Logo/Name */}
                <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2, duration: 0.6 }}
                     className="text-2xl font-bold text-primary-teal cursor-pointer"
                     onClick={() => scrollToSection('home')}
                 >
                     MyPortfolio
                </motion.div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8" aria-label="Footer navigation">
                    {footerNavItems.map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={`#${item.sectionId}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId); }}
                            className="text-sm text-primary-light-gray hover:text-primary-teal transition-colors duration-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </nav>

                {/* Social Links */}
                <div className="flex gap-5">
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4, type: 'spring', stiffness: 150 }}
                        >
                             <CoolMode>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Link to ${link.name}`}
                                    className="text-primary-light-gray/70 hover:text-accent-purple transition-colors duration-300 block p-1" // Added padding for better CoolMode effect
                                >
                                    <link.Icon className="w-5 h-5" />
                                </a>
                            </CoolMode>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Row: Copyright & Legal */}
             <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                {/* Copyright */}
                 <AnimatedGradientText
                     className="text-primary-light-gray/60"
                     colorFrom="hsl(var(--primary-light-gray)/0.6)" // Slightly transparent gray
                     colorTo="hsl(var(--primary-teal)/0.8)" // Slightly transparent teal
                     speed={5} // Slower gradient animation
                 >
                     © {currentYear} MyPortfolio. All rights reserved.
                 </AnimatedGradientText>

                {/* Legal Links */}
                 <div className="flex gap-4 md:gap-6">
                    {legalLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.url}
                            className="text-primary-light-gray/60 hover:text-primary-light-gray/90 hover:underline underline-offset-4 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>
             </div>
         </div>
    </motion.footer>
  );
};

export default Footer;