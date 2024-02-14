import HeroSection from "@/components/landing/HeroSection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import StepsSection from "@/components/landing/StepsSection";
import Footer from "@/components/common/Footer";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <TrustedBySection/>
            <StepsSection/>
            <Footer/>
        </main>
    );
}
