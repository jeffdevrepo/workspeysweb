import { FileText, FolderBookmark, Hourglass, ReceiptText } from "lucide-react";

export function Features() {
    return (
        <section id="features" className="bg-background py-16 lg:py-24">
            <div className="max-w-[1200px] w-full mx-auto px-4">
                <div className="text-center space-y-3 mb-12">
                    {/* <p className="text-sm text-muted font-semibold mb-4">Features</p> */}
                    <h2 className="text-3xl font-bold">Everything you need to run your freelancing business.</h2>
                    <p className="text-muted">A simple, connected workspace for projects, time, budgets, invoicing, and more.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-card p-6 rounded-lg border border-border/60">
                        <div className="size-10 mb-6 flex items-center justify-center rounded-md bg-primary">
                            <FolderBookmark className="text-brand" size={20} />
                        </div>
                        <h3 className="font-bold mb-1">Project Management</h3>
                        <p className="text-muted text-sm">Organize tasks, milestones, and files to keep projects moving.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border/60">
                        <div className="size-10 mb-6 flex items-center justify-center rounded-md bg-primary">
                            <Hourglass className="text-brand" size={20} />
                        </div>
                        <h3 className="font-bold mb-1">Time Tracking</h3>
                        <p className="text-muted text-sm">Track billable hours and see how time is spent on each project.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border/60">
                        <div className="size-10 mb-6 flex items-center justify-center rounded-md bg-primary">
                            <ReceiptText className="text-brand" size={20} />
                        </div>
                        <h3 className="font-bold mb-1">Budgeting</h3>
                        <p className="text-muted text-sm">Set clear budgets and catch overspending before it adds up.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border/60">
                        <div className="size-10 mb-6 flex items-center justify-center rounded-md bg-primary">
                            <FileText className="text-brand" size={20} />
                        </div>
                        <h3 className="font-bold mb-1">Invoicing</h3>
                        <p className="text-muted text-sm">Create polished invoices and keep client payments on track.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
