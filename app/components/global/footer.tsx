"use client";

import Image from "next/image";

export function Footer() {

    return (
        <footer className="bg-brand py-12">
            <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-8">
                <div className="col-span-1 md:col-span-5 lg:col-span-2">
                    <Image src="/logo/logo-light.svg" alt="Workspeys Logo" width={200} height={30} className="w-[150px] lg:w-[175px] h-auto mb-2" />
                    <p className="text-sm text-background mb-6">
                        Your freelance projects, all in one workspace.
                    </p>
                    <p className="text-xs text-muted font-medium">
                        © 2026 Workspeys. All rights reserved.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold !text-background mb-6">Product</h4>
                    <ul className="text-background text-xs space-y-2">
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Roadmap</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold !text-background mb-6">Resources</h4>
                    <ul className="text-background text-xs space-y-2">
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Guides</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold !text-background mb-6">Legal</h4>
                    <ul className="text-background text-xs space-y-2">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}