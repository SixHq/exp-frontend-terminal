
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { HomeIcon, UserIcon, DevelopmentIcon, MailIcon, MenuIcon, CloseIcon } from '@/components/icons/icons';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Using Shadcn UI Tooltip


const navItems = [
  { id: 'home', label: 'Home', icon: HomeIcon, sectionId: 'home' },
  { id: 'about', label: 'About', icon: UserIcon, sectionId: 'about' },
  { id: 'projects', label: 'Projects', icon: DevelopmentIcon, sectionId: 'projects' },
  { id: 'skills', label: 'Skills', icon: DevelopmentIcon, sectionId: 'skills' }, // Re-using dev icon
  { id: 'contact', label: 'Contact Me', icon: MailIcon, sectionId: 'contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Scroll detection for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for background opacity based on scroll (more gradual)
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]); // Fade in background over 100px scroll

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if(isMobileMenuOpen) {
            setIsMobileMenuOpen(false); // Close menu after clicking a link
        }
    };


  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
           // Initial transparent state handled by motion style
        )}
         style={{
            // Apply background color conditionally using motion style
            // Use primary-dark-blue with variable opacity
            backgroundColor: useTransform(
                scrollY,
                [0, 50], // Range of scrollY
                ['hsla(var(--primary-dark-blue), 0)', 'hsla(var(--primary-dark-blue), 0.8)'] // Corresponding background colors
            ),
        }}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
          {/* Left: Logo/Name (Optional) */}
           <div className="text-xl font-bold text-primary-light-gray cursor-pointer" onClick={() => scrollToSection('home')}>
                MyPortfolio
           </div>

          {/* Right: Desktop Dock Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex justify-center flex-grow absolute left-1/2 transform -translate-x-1/2">
             <TooltipProvider delayDuration={0}>
                <Dock direction="middle" className="border border-primary-teal/20 bg-primary-dark-blue/30 backdrop-blur-md">
                    {navItems.map((item) => (
                    <Tooltip key={item.id}>
                        <TooltipTrigger asChild>
                            <DockIcon
                                onClick={() => scrollToSection(item.sectionId)}
                                className="text-primary-light-gray hover:text-accent-purple cursor-pointer transition-colors"
                            >
                                <item.icon className="w-5 h-5" />
                            </DockIcon>
                        </TooltipTrigger>
                         <TooltipContent className="bg-primary-dark-blue text-primary-light-gray border-primary-teal/30">
                            <p>{item.label}</p>
                        </TooltipContent>
                    </Tooltip>

                    ))}
                </Dock>
             </TooltipProvider>
          </div>

          {/* Right: Mobile Hamburger Menu (Visible on Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-primary-light-gray hover:text-accent-purple transition-colors p-2 z-50 relative"
            >
                {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" /> }
            </button>
          </div>
        </div>
      </motion.header>

        {/* Mobile Menu Panel */}
         <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 bottom-0 w-64 bg-primary-dark-blue shadow-lg z-40 p-6 md:hidden"
                >
                    <nav className="flex flex-col space-y-6 mt-16">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.id}
                                href={`#${item.sectionId}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.sectionId);
                                }}
                                className="text-primary-light-gray hover:text-accent-purple text-lg font-medium transition-colors flex items-center space-x-3"
                                whileHover={{ scale: 1.05, x: 5 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            >
                                 <item.icon className="w-5 h-5 mr-2 inline-block"/>
                                 <span>{item.label}</span>
                            </motion.a>
                        ))}
                    </nav>
                </motion.div>
            )}
         </AnimatePresence>
    </>
  );
};

export default Header;