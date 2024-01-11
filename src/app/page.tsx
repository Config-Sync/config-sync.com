import HeroSection from "@/components/landing/HeroSection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import StepsSection from "@/components/landing/StepsSection";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <TrustedBySection/>
            <StepsSection/>
        </main>
    );
}
