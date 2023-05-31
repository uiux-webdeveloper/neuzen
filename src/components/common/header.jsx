// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import styled from "styled-components";
const Header = () => {
	const [showBar, setShowBar] = useState(false);
	return (
		<HeaderWrapper className="flex-between">
			<div className="logo">
				<Link to="">neuZen</Link>
			</div>

			<ul className={`menu ${showBar && "mobile"}`}>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/about">ABOUT US</Link>
				</li>
				<li>
					<Link to="/company">LOGIN</Link>
				</li>
				<li>
					<Link to="/contact">TALENT</Link>
				</li>
				<li>
					<Link to="" className="flex items-center gap-2">
						<span className="cta w-full">HIRE NOW</span>
					</Link>
				</li>
			</ul>

			<div className="bars block md:hidden" onClick={() => setShowBar(!showBar)}>
				<span>{showBar ? <MdOutlineClose /> : <HiBars3CenterLeft />}</span>
			</div>
		</HeaderWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const HeaderWrapper = styled.header`
	/* overflow: hidden; */
	padding: 15px 3%;
	width: 100%;
	border: 1px solid var(--whiteColor);
	position: fixed;
	background: var(--grayColor);
	z-index: 1000;

	.logo {
		a {
			color: var(--whiteColor);
		}
	}
	.menu {
		display: flex;
		align-items: center;
		gap: 2rem;
		&.mobile {
			margin-top: 1rem;
		}
		a {
			font-size: var(--fourteenpx);
			color: var(--whiteColor);
			font-weight: 500;
		}
	}
	.bars {
		font-size: 26px;
		font-weight: 600;
		cursor: pointer;
		color: var(--whiteColor);
	}

	@media screen and (max-width: 1024px) {
		.menu {
			background: var(--grayColor);
			margin-top: -40rem;
			flex-direction: column;
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			height: min-content;
			border-radius: 5px;
			padding: 1rem;
			text-align: center;
			li {
				border-bottom: 1px solid var(--whiteColor);
				width: 100%;
				padding: 0.8rem 0.4rem;
			}
		}
	}
`;

export default Header;
