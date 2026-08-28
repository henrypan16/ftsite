export default function FeatureIcon({ type }: { type: string }) {
	const common = {
		width: 20,
		height: 20,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.8,
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
	};

	switch (type) {
		case "rx":
		case "medical":
			return (
				<svg {...common}>
					<path d="M9 3v18" />
					<path d="M4 8h10a4 4 0 0 0 0-8H9" />
					<path d="m13 12 7 9" />
				</svg>
			);

		case "pos":
		case "card":
			return (
				<svg {...common}>
					<rect x="3" y="5" width="18" height="14" rx="2" />
					<path d="M3 10h18" />
					<path d="M7 15h3" />
				</svg>
			);

		case "cloud":
			return (
				<svg {...common}>
					<path d="M17.5 19H7a5 5 0 1 1 1.4-9.8A7 7 0 0 1 21 13a4 4 0 0 1-3.5 6Z" />
				</svg>
			);

		case "chart":
			return (
				<svg {...common}>
					<path d="M4 20V10" />
					<path d="M10 20V4" />
					<path d="M16 20v-7" />
					<path d="M22 20V7" />
				</svg>
			);

		case "message":
		case "fax":
			return (
				<svg {...common}>
					<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
					<path d="M8 9h8" />
					<path d="M8 13h5" />
				</svg>
			);

		case "document":
			return (
				<svg {...common}>
					<path d="M6 2h8l4 4v16H6Z" />
					<path d="M14 2v5h5" />
					<path d="M9 13h6" />
					<path d="M9 17h6" />
				</svg>
			);

		case "box":
			return (
				<svg {...common}>
					<path d="m3 7 9-4 9 4-9 4Z" />
					<path d="M3 7v10l9 4 9-4V7" />
					<path d="M12 11v10" />
				</svg>
			);

		case "calendar":
			return (
				<svg {...common}>
					<rect x="3" y="5" width="18" height="16" rx="2" />
					<path d="M16 3v4" />
					<path d="M8 3v4" />
					<path d="M3 10h18" />
				</svg>
			);

		case "money":
			return (
				<svg {...common}>
					<circle cx="12" cy="12" r="9" />
					<path d="M16 8.5c-1-1-2.2-1.5-4-1.5-2 0-3 1-3 2.3 0 3.5 7 1.5 7 5 0 1.5-1.2 2.7-3.5 2.7-1.8 0-3.2-.5-4.5-1.7" />
					<path d="M12 5v14" />
				</svg>
			);

		case "shield":
			return (
				<svg {...common}>
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
					<path d="m9 12 2 2 4-4" />
				</svg>
			);

		case "support":
			return (
				<svg {...common}>
					<circle cx="12" cy="12" r="9" />
					<circle cx="12" cy="12" r="3" />
					<path d="m6 6 4 4" />
					<path d="m14 14 4 4" />
					<path d="m18 6-4 4" />
					<path d="m10 14-4 4" />
				</svg>
			);

		case "spark":
			return (
				<svg {...common}>
					<path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z" />
					<path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" />
				</svg>
			);

		default:
			return (
				<svg {...common}>
					<circle cx="12" cy="12" r="9" />
					<path d="M8 12h8" />
					<path d="M12 8v8" />
				</svg>
			);
	}
}
