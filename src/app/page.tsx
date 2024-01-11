import HeroSection from "@/components/landing/HeroSection";
import TrustedBySection from "@/components/landing/TrustedBySection";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <TrustedBySection/>
        </main>
    );
}
