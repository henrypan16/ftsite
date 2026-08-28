"use client";

import FeatureIcon from "@/app/features/FeatureIcon";

const features = [
	{
		title: "Fillware RX",
		icon: "rx",
		description:
			"A complete pharmacy management platform designed to simplify prescription workflow and daily operations.",
	},
	{
		title: "Fillware POS",
		icon: "pos",
		description:
			"Integrated point-of-sale tools for retail sales, inventory, reporting, and customer management.",
	},
	{
		title: "RX + POS",
		icon: "sync",
		description:
			"Connect pharmacy and retail operations through one integrated Fillware ecosystem.",
	},
	{
		title: "Cloud Community",
		icon: "cloud",
		description:
			"Securely connect locations, teams, and pharmacy information through cloud-enabled services.",
	},
	{
		title: "Cloud Dashboard",
		icon: "chart",
		description:
			"View important pharmacy information and operational insights from a centralized dashboard.",
	},
	{
		title: "AI",
		icon: "spark",
		description:
			"Intelligent tools designed to assist workflow, automation, and everyday pharmacy operations.",
	},
	{
		title: "eFax",
		icon: "fax",
		description:
			"Send and receive pharmacy documents electronically through integrated fax functionality.",
	},
	{
		title: "SMS",
		icon: "message",
		description:
			"Communicate with patients quickly using integrated text messaging.",
	},
	{
		title: "Work Bench",
		icon: "workflow",
		description:
			"Organize pharmacy tasks and prescriptions through a centralized workflow environment.",
	},
	{
		title: "Cloud Backup",
		icon: "cloud",
		description:
			"Protect important pharmacy information with secure cloud-based backups.",
	},
	{
		title: "Reports",
		icon: "document",
		description:
			"Generate useful operational, prescription, financial, and business reports.",
	},
	{
		title: "Accounts Receivable",
		icon: "money",
		description:
			"Track outstanding balances and manage pharmacy accounts receivable.",
	},
	{
		title: "Analytics",
		icon: "chart",
		description:
			"Turn pharmacy data into useful insights for better business decisions.",
	},
	{
		title: "On Account",
		icon: "money",
		description:
			"Maintain customer accounts and conveniently manage account-based transactions.",
	},
	{
		title: "Inventory",
		icon: "box",
		description:
			"Monitor product quantities, purchasing, stock movement, and inventory levels.",
	},
	{
		title: "Narcotic Reconciliation",
		icon: "shield",
		description:
			"Assist with controlled medication tracking and narcotic reconciliation workflows.",
	},
	{
		title: "Digital Tracking",
		icon: "workflow",
		description:
			"Track prescriptions and pharmacy processes electronically throughout the workflow.",
	},
	{
		title: "RX Verification",
		icon: "shield",
		description:
			"Support prescription verification and help maintain accurate pharmacy workflow.",
	},
	{
		title: "Clinical Services",
		icon: "medical",
		description:
			"Manage pharmacy clinical services and related patient care activities.",
	},
	{
		title: "Calendar",
		icon: "calendar",
		description:
			"Organize appointments, clinical services, and pharmacy schedules.",
	},
	{
		title: "Nursing Home",
		icon: "medical",
		description:
			"Workflow tools designed to support pharmacies servicing long-term care facilities.",
	},
	{
		title: "Compliance Packaging",
		icon: "box",
		description:
			"Manage medication compliance packaging and associated pharmacy workflows.",
	},
	{
		title: "MedsCheck",
		icon: "medical",
		description:
			"Support medication review workflows and documentation for patient consultations.",
	},
	{
		title: "Scanning",
		icon: "document",
		description:
			"Digitize and organize pharmacy documents directly within your workflow.",
	},
	{
		title: "Multi-Session",
		icon: "workflow",
		description:
			"Work across multiple sessions to improve productivity in busy pharmacy environments.",
	},
	{
		title: "Sales",
		icon: "chart",
		description:
			"Monitor retail sales and gain clearer insight into pharmacy business performance.",
	},
	{
		title: "Debit & Credit",
		icon: "card",
		description:
			"Support integrated debit and credit payment processing at point of sale.",
	},
	{
		title: "Customer Support",
		icon: "support",
		description:
			"Access Fillware's support team for assistance with your pharmacy systems.",
	},
];

export default function FeaturesPage() {
	return (
		<main className="flex flex-1 flex-col justify-center py-4 w-full">
			{/* Heading */}
			<div className="mb-6 text-center">
				<p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
					Fillware Features
				</p>

				<h1 className="mt-1 text-4xl font-bold tracking-tight text-brand-800">
					Everything your pharmacy needs.
				</h1>

				<p className="mt-2 text-sm text-slate-500">
					Hover over a feature to learn more.
				</p>
			</div>

			{/* Cards */}
			<div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
				{features.map((feature) => (
					<FeatureCard key={feature.title} {...feature} />
				))}
			</div>
		</main>
	);
}

function FeatureCard({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: string;
}) {
	return (
		<div className="group relative h-28 cursor-pointer transition-transform duration-300 hover:z-20 perspective-midrange">
			<div className="relative h-full w-full transition-transform duration-400 group-hover:transform-[rotateY(180deg)] transform-3d">
				{/* FRONT */}
				<div
					className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand-100 bg-white/75 p-3 text-center shadow-sm backdrop-blur-md transition group-hover:border-brand-300 group-hover:shadow-xl
			backface-hidden">
					<div className="flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ">
						<FeatureIcon type={icon} />
					</div>

					<h2 className="text-sm font-semibold leading-tight text-brand-800">
						{title}
					</h2>
				</div>

				{/* BACK */}
				<div
					className=" absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-brand-600 px-4 text-center text-white shadow-xl
			backface-hidden
			transform-[rotateY(180deg)]
          ">
					<h3 className="mb-1 text-sm font-semibold">{title}</h3>

					<p className="text-[11px] leading-[1.45] text-white/80">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
