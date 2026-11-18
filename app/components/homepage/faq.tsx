"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What is Workspeys?",
        answer: (
            <>
                Workspeys is an all-in-one freelance management platform that helps you manage projects,
                organize tasks, track time, monitor budgets, and handle invoicing—all in one place.
                Instead of juggling multiple tools, you can manage your freelance work and keep track
                of your business finances from a single workspace.
            </>
        ),
    },
    {
        question: "How is Workspeys different from other project management tools?",
        answer: (
            <>
                Most project management tools focus on organizing tasks and keeping projects on track.
                Workspeys connects your work to your finances. Track time against projects and tasks,
                monitor budgets, identify unbilled work, and turn billable hours into invoices. It helps
                you understand not just what you&apos;re working on, but how much you&apos;re earning from it.
            </>
        ),
    },
    {
        question: "Does Workspeys offer a free trial?",
        answer: "Yes! You can try Workspeys for free and explore its features before choosing a plan. No need to commit right away.",
    },
];

export function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="bg-background py-16">
            <div className="max-w-[1200px] w-full mx-auto px-4">
                <div className="text-center space-y-3 mb-8">
                    <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-muted">Find answers to common questions about our services and features.</p>
                </div>
                <div className="flex justify-center">
                    <div className="divide-y border-y border-border/40 divide-border/40">
                        {faqs.map(({ question, answer }, index) => {
                            const isOpen = activeIndex === index;
                            const answerId = `faq-answer-${index}`;

                            return (
                                <div key={question}>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={answerId}
                                        onClick={() => setActiveIndex(isOpen ? null : index)}
                                        className="text-left font-medium text-sm px-3 py-4 text-brand w-full flex items-center justify-between"
                                    >
                                        <span>{question}</span>
                                        <ChevronDown
                                            aria-hidden="true"
                                            className={`ml-2 w-4 h-4 inline-block transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                                        />
                                    </button>
                                    <div
                                        id={answerId}
                                        aria-hidden={!isOpen}
                                        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <p className="px-3 pb-4 text-muted text-sm">{answer}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
