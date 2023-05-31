// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { LuSquare } from "react-icons/lu";
const sponser = () => {
	const data = [
		{
			heading: "Frontend Developer",
			icon: <LuSquare />,
		},
		{
			heading: "Backend Developer",
			icon: <LuSquare />,
		},

		{
			heading: "Backend Developer",
			icon: <LuSquare />,
		},

		{
			heading: "Backend Developer",
			icon: <LuSquare />,
		},

		{
			heading: "Frontend Developer",
			icon: <LuSquare />,
		},
	];
	return (
		<SponserWrapper className="flex gap-8 justify-center">
			{data.map((val, index) => {
				return (
					<article className="flex items-center gap-2" key={index}>
						<h3>{val.heading}</h3>
						<span>{val.icon}</span>
					</article>
				);
			})}
		</SponserWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const SponserWrapper = styled.div`
	border: 1px solid var(--whiteColor);
	padding: 1rem;
	color: var(--whiteColor);
	background: var(--grayColor);
	span {
		transform: rotate(122deg);
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export default sponser;
