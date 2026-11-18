import Image from "next/image";
import { Button } from "../elements/button";

export function Cta() {
    return (
        <section className="bg-background py-16">
            <div className="max-w-[1200px] w-full mx-auto px-4">
                <div className="bg-[url('/assets/cta-img.webp')] p-12 bg-cover bg-left sm:bg-center bg-no-repeat rounded-2xl relative overflow-hidden">
                        <div className="text-center space-y-3 mb-8">
                            <h2 className="!text-background text-3xl font-bold">Ready to get your freelance work together?</h2>
                            <p className="text-background/75">Bring your projects, timesheets, budgets, and invoices into one workspace.</p>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" size="lg">Get started for free</Button>
                        </div>
                </div>
            </div>
        </section>
    )
}