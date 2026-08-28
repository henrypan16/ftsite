import Link from "next/link";

const benefits = [
	{
		number: "01",
		title: "Inventory Control",
		text: "Keep the right products in stock with better inventory visibility.",
	},
	{
		number: "02",
		title: "Customer Insights",
		text: "Understand purchasing habits and anticipate customer needs.",
	},
	{
		number: "03",
		title: "Sales Intelligence",
		text: "Identify best sellers, pricing opportunities, and sales trends.",
	},
	{
		number: "04",
		title: "Business Visibility",
		text: "Bring financial, operational, and retail information into one system.",
	},
];

export default function PosPage() {
	return (
		<main className="flex flex-1 items-center py-6">
			<section className="w-full">
				<div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.05fr_.95fr] xl:items-end">
					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">
							Fillware Point-of-Sale
						</p>

						<h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-brand-800 2xl:text-6xl">
							More than a cash register.
							<span className="block text-brand-500">
								A smarter way to run retail.
							</span>
						</h1>
					</div>

					<div>
						<p className="max-w-xl text-lg leading-8 text-slate-600">
							An affordable, flexible, and customizable POS system
							designed for growing pharmacies and retail
							businesses.
						</p>

						<p className="mt-3 max-w-xl leading-7 text-slate-500">
							Fully integrated with Fillware RX, it helps you
							manage sales, inventory, customer behaviour,
							reporting, and business performance from one
							connected platform.
						</p>

						<Link
							href="/contact"
							className="mt-6 inline-flex rounded-xl bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700">
							Discover Fillware POS
						</Link>
					</div>
				</div>

				<div className="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-4">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="rounded-2xl border border-brand-100 bg-white/70 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md">
							<div className="text-sm font-bold tracking-widest text-brand-400">
								{benefit.number}
							</div>

							<h2 className="mt-4 text-lg font-semibold text-brand-800">
								{benefit.title}
							</h2>

							<p className="mt-2 text-sm leading-6 text-slate-500">
								{benefit.text}
							</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
