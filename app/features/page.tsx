"use client";
import { useState } from "react";
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
	const [openCard, setOpenCard] = useState<string | null>(null);

	return (
		<main className="flex w-full flex-1 flex-col justify-center py-4">
			{/* Heading */}
			<div className="mb-4 text-center sm:mb-6">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500 sm:text-sm sm:tracking-[0.25em]">
					Fillware Features
				</p>

				<h1 className="mt-1 text-2xl font-bold tracking-tight text-brand-800 sm:text-3xl xl:text-4xl">
					Everything your pharmacy needs.
				</h1>

				<p className="mt-2 text-xs text-slate-500 sm:text-sm">
					Tap or hover over a feature to learn more.
				</p>
			</div>

			{/* Cards */}
			<div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 2xl:grid-cols-7 2xl:left-1/2 2xl:w-[80vw] 2xl:-translate-x-1/2 2xl:relative">
				{features.map((feature) => (
					<FeatureCard
						key={feature.title}
						{...feature}
						flipped={openCard === feature.title}
						onToggle={() =>
							setOpenCard((current) =>
								current === feature.title
									? null
									: feature.title,
							)
						}
					/>
				))}
			</div>
		</main>
	);
}

function FeatureCard({
	title,
	description,
	icon,
	flipped,
	onToggle,
}: {
	title: string;
	description: string;
	icon: string;
	flipped: boolean;
	onToggle: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onToggle}
			aria-expanded={flipped}
			aria-label={`${title}: ${description}`}
			className="group relative h-32 w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-inherit [perspective:1000px] sm:h-30 md:h-28">
			<div
				className={`relative h-full w-full transition-transform duration-400 [transform-style:preserve-3d] [will-change:transform] lg:group-hover:[transform:rotateY(180deg)] ${flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`}>
				{/* FRONT */}
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border border-brand-100 bg-white/75 p-2 text-center shadow-sm backdrop-blur-md transition [backface-visibility:hidden] sm:gap-3 sm:rounded-2xl sm:p-3 lg:group-hover:border-brand-300 lg:group-hover:shadow-xl">
					<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 sm:size-9 sm:rounded-xl">
						<FeatureIcon type={icon} />
					</div>

					<h2 className="text-sm font-semibold leading-tight text-brand-800 xl:text-sm">
						{title}
					</h2>
				</div>

				{/* BACK */}
				<div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-brand-600 px-2 py-2 text-center text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] sm:rounded-2xl sm:px-3 md:px-2 xl:px-3">
					<h3 className="mb-1 shrink-0 text-xs font-semibold leading-tight sm:text-sm">
						{title}
					</h3>

					<p className="max-w-full text-[11px] leading-[1.3] text-white/85 sm:text-xs sm:leading-[1.35] md:text-[11px] xl:text-xs xl:leading-[1.4]">
						{description}
					</p>
				</div>
			</div>
		</button>
	);
}
