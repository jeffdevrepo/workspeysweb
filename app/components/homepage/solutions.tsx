import Image from "next/image"

export function Solutions() {
    return (
        <section className="bg-cloud py-16 lg:py-24">
            <div className="max-w-[1200px] w-full mx-auto px-4 items-center grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-6">
                <div className="space-y-6 max-w-[480px] order-last md:order-first">
                    <small className="font-semibold text-muted uppercase tracking-wider">The main problem</small>
                    <h2 className="text-brand text-3xl font-bold mt-2">Freelancing is already a lot of work. Managing it shouldn&apos;t be.</h2>
                    <p className="text-sm text-muted">Projects live in different tools. TIme entries get forgotten, budgets become difficult to track, invoices pile up. Workspeys brings everything together so you can spend less time on admin and more doing the work you love.</p>
                </div>
                <div>
                    <Image src="/assets/solutions-img.webp" alt="Solutions Image" loading="eager" width={1100} height={520} className="" />
                </div>
            </div>
        </section>
    )
}