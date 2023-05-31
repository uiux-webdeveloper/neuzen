// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import bg from "../assets/home/banner/bg2.png";
export const homeBanner = () => {
	return (
		<HomeBannerWrapper className="flex-center text-center">
			<article className="space-y-4 w-[95%] md:w-[60%]">
				<h1>Build a dream team of developers and designers.</h1>
				<p>
					Flexiple is an invite-only network that helps mission-driven developers and designers
					collaborate with top companies to build great software products.
				</p>
				<button className="cta">Find Your Best Hire</button>
			</article>
		</HomeBannerWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const HomeBannerWrapper = styled.section`
	background-image: url(${bg});
	color: var(--whiteColor);
	background-size: cover;
	background-position: center;
	height: 100vh;
`;
export default homeBanner;
