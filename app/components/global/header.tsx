"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "../elements/button"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-background min-h-[70px] flex items-center relative">
            <div className="max-w-[1200px] w-full mx-auto px-4">
                <div className="flex items-center">
                    <Image src="/logo/logo-dark.svg" alt="Workspeys Logo" width={200} height={30} className="w-[150px] lg:w-[175px] h-auto" />
                    <nav className="hidden md:block mx-auto">
                        <ul className="flex space-x-4">
                            <li><a href="#features" className="font-medium text-sm">Features</a></li>
                            <li><a href="#pricing" className="font-medium text-sm">Pricing</a></li>
                            <li><a href="#about" className="font-medium text-sm">About</a></li>
                        </ul>
                    </nav>
                    <div className="hidden md:flex space-x-3">
                        <Button variant="outline">Log in</Button>
                        <Button>Get started</Button>
                    </div>
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="size-8 items-center justify-center text-brand flex md:hidden ms-auto lg:ms-3 rounded-full border border-border bg-background"
                    >
                        {/* <span className="font-semibold text-sm me-2">Menu</span> */}
                        {isMenuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
                    </button>
                </div>
                <div
                    id="mobile-navigation"
                    className={`${isMenuOpen ? "block" : "hidden"} absolute left-0 right-0 top-full z-50 bg-background px-4 py-4 shadow-md lg:hidden`}
                >
                    <nav aria-label="Mobile navigation">
                        <ul className="flex flex-col gap-4">
                            <li><a href="#features" onClick={() => setIsMenuOpen(false)} className="font-medium text-sm block">Features</a></li>
                            <li><a href="#pricing" onClick={() => setIsMenuOpen(false)} className="font-medium text-sm block">Pricing</a></li>
                            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="font-medium text-sm block">About</a></li>
                        </ul>
                    </nav>
                    <div className="mt-4 flex flex-col gap-3 lg:hidden">
                        <Button className="w-full">Get started</Button>
                        <Button variant="outline" className="w-full">Log in</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
