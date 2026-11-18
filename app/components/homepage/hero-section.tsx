import { BadgeCheck, CirclePlay } from "lucide-react"
import { Button } from "../elements/button";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="flex flex-col justify-center bg-cloud py-16 lg:py-24 overflow-hidden relative min-h-[640px]">
            <div className="max-w-[1200px] w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-6">
                <div className="space-y-8 text-center lg:text-left">
                    <span className="font-semibold text-sm inline-block bg-brand text-cloud p-3 leading-1 rounded-full">All-in-one freelancing tools</span>
                    <h1 className="text-brand text-5xl font-extrabold max-w-[600px] max-lg:mx-auto">Your freelance work <span className="text-primary">finally</span> in one place.</h1>
                    <p className="max-w-[450px] max-lg:mx-auto">Manage projects, track your time, keep budgets in check, and send invoices without juggling multiple tools.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <Button variant="primary" size="lg">Get started for free</Button>
                        <Button variant="outline" size="lg">
                            <CirclePlay className="inline-block mr-2" size={20} />
                            <span>See how it works</span>
                        </Button>
                    </div>

                    <div className="gap-3 flex flex-col sm:gap-6 sm:flex-row justify-center lg:justify-start">
                        <div className="flex gap-3 items-center justify-center">
                            <BadgeCheck className="text-brand" size={20} />
                            <span className="text-sm font-medium">No credit card required</span>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <BadgeCheck className="text-brand" size={20} />
                            <span className="text-sm font-medium">Setup account in minutes</span>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <Image src="/assets/hero-banner-img.webp" alt="Hero Image" loading="eager" width={1100} height={520} className="rounded-xl lg:rounded-2xl shadow-lg lg:absolute top-16" />
                </div>
            </div>
        </section>
    );
}
