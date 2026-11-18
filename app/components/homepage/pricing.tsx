import { Check } from "lucide-react";
import { Button } from "../elements/button";

export function Pricing() {
    return (
        <section id="pricing" className="bg-background py-16 lg:py-24">
            <div className="max-w-[1200px] w-full mx-auto px-4">
                <div className="text-center mb-8">
                    <small className="text-xs font-semibold text-muted uppercase tracking-widest mb-8">Pricing</small>
                    <h2 className="text-brand text-3xl font-bold mt-2 mb-3">Easy To Get Started</h2>
                    <p className="text-muted">See your projects, timesheets, budgets and invoices all in one place.</p>
                </div>
                <div className="max-w-[768px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-background rounded-xl border border-border/60 p-6">
                            <h3 className="text-brand text-2xl font-bold mb-2">14 Day Free Trial</h3>
                            <p className="text-muted text-sm mb-6">For freelancers just getting started.</p>
                            <div className="mb-6">
                                <span className="text-brand text-4xl font-bold">₱0</span>
                                <span className="text-muted text-sm font-medium ms-1">/ month</span>
                            </div>
                            <ul className="text-muted text-sm space-y-2 mb-6">
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Essential project management.</span>
                                </li>
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Basic time tracking.</span>
                                </li>
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Up to 1 project.</span>
                                </li>
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Up to 2 invoices.</span>
                                </li>
                            </ul>
                            <Button variant="primary" className="w-full">Get Started</Button>
                        </div>
                        <div className="bg-primary/10 rounded-xl border border-primary p-6">
                            <h3 className="text-brand text-2xl font-bold mb-2">Pro</h3>
                            <p className="text-muted text-sm mb-6">Actively managing a couple of clients.</p>
                            <div className="mb-6">
                                <span className="text-brand text-4xl font-bold">₱299</span>
                                <span className="text-muted text-sm font-medium ms-1">/ month</span>
                            </div>
                            <ul className="text-muted text-sm space-y-2 mb-6">
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Essential project management.</span>
                                </li>
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Connected time trackers.</span>
                                </li>
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Unlimited projects.</span>
                                </li>
                                <li>
                                    <Check className="inline-block mr-2 text-muted" size={16} />
                                    <span>Unlimited invoices.</span>
                                </li>
                            </ul>
                            <Button variant="primary" className="w-full">Get Started</Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}