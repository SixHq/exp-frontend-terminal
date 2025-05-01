
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/hero-section';
import SocialProofSection from './components/social-proof-section';
import ProblemSolutionSection from './components/problem-solution-section';
import BenefitsOfferSection from './components/benefits-offer-section';
import DeepSocialProofLeadCaptureSection from './components/deep-social-proof-lead-capture-section';
import FaqSection from './components/faq-section';
import ClosingArgumentSection from './components/closing-argument-section';
import Footer from './components/Footer'; // Import Footer
import { SmoothCursor } from '@/components/magicui/smooth-cursor';

function App() {
  return (
    <>
      <SmoothCursor />
      <Header />
      <main>

        {/* --- Hero Section --- */}
        <HeroSection />
        {/* --- End Hero Section --- */}

        {/* --- Social Proof Section --- */}
        <SocialProofSection />
        {/* --- End Social Proof Section --- */}

        {/* --- Problem/Solution Section --- */}
        <ProblemSolutionSection />
        {/* --- End Problem/Solution Section --- */}

        {/* --- Benefits & Offer Section --- */}
        <BenefitsOfferSection />
        {/* --- End Benefits & Offer Section --- */}

         {/* --- Deep Social Proof & Lead Capture Section --- */}
         <DeepSocialProofLeadCaptureSection />
         {/* --- End Deep Social Proof & Lead Capture Section --- */}

         {/* --- FAQ Section --- */}
         <FaqSection />
         {/* --- End FAQ Section --- */}

         {/* --- Closing Argument Section --- */}
         <ClosingArgumentSection />
         {/* --- End Closing Argument Section --- */}



      </main>

       <Footer /> {/* Add Footer Here */}
    </>
  );
}

export default App;