import { AIMatchingSection } from "@/components/AIMatchingSection";
import { DriverMarketplaceSection } from "@/components/DriverMarketplaceSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { SignupSection } from "@/components/SignupSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AIMatchingSection />
          <ProblemSection />
          <ProductSection />
          <FeaturesSection />
          <HowItWorksSection />
          <DriverMarketplaceSection />
          <SocialProofSection />
          <SignupSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
