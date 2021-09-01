import React from "react";

export default function Comment(props: { size: number }) {
	const { size } = props;

	return (
		<svg
			className={`w-${size} h-${size}`}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" fill="white" fillOpacity="0.01" />
			<rect width="48" height="48" fill="white" fillOpacity="0.01" />
			<path
				d="M44 6H4V36H13V41L23 36H44V6Z"
				fill="none"
				stroke="#9CA3AF"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 19.5V22.5"
				stroke="#9CA3AF"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M24 19.5V22.5"
				stroke="#9CA3AF"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M34 19.5V22.5"
				stroke="#9CA3AF"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
