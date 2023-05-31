// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImFacebook, ImInstagram, ImTwitter, ImTwitch, ImLinkedin } from "react-icons/im";
import { TbArrowBigRightFilled } from "react-icons/tb"
const footer = () => {
	return (
		<FooterWrapper className="py-12">
			{/* main footer start */}
			<div className="row grid-4-footer py-12">
				<div className="col space-y-4">
					<h3>
						<Link to="">Contact Details</Link>
					</h3>
					<p>2093, Philadelphia Pike, DE 19703, Claymont</p>
					<p>mailto:suvansh.bansal@flexiple.com</p>

					<div className="socials flex gap-2">
						<Link to="">
							<ImFacebook />
						</Link>
						<Link to="">
							<ImInstagram />
						</Link>
						<Link to="">
							<ImTwitter />
						</Link>
						<Link to="">
							<ImTwitch />
						</Link>
						<Link to="">
							<ImLinkedin />
						</Link>
					</div>
				</div>
				<div className="col">
					<ul className="space-y-2">
						<li>
							<h3>Why neuZen</h3>
						</li>
						<li>
							<Link to="">Why Flexible</Link>
						</li>
						<li>
							<Link to="">Faq</Link>
						</li>
						<li>
							<Link to="">Screening Process</Link>
						</li>
					</ul>
				</div>
				<div className="col">
					<ul className="space-y-2">
						<li>
							<h3>About Us</h3>
						</li>
						<li>
							<Link to="">We are hiring</Link>
						</li>
						<li>
							<Link to="">Our Team</Link>
						</li>
						<li>
							<Link to="">Team Handbook</Link>
						</li>
						<li>
							<Link to="">Write for us</Link>
						</li>

					</ul>
				</div>
				<div className="col space-y-4">
					<h3>Subscribe</h3>
					<div className="form-group flex items-center">
						<input type="text" placeholder="Enter Your Email" />
						<span><TbArrowBigRightFilled /></span>
					</div>
				</div>
			</div>

			<div className="copyright text-center border-t pt-8 flex-between flex-col md:flex-row gap-4">
				<h3>neuZen</h3>
				<p>Copyright © 2023 neuZen, All rights reserved. Powered by neuZen</p>
			</div>
		</FooterWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const FooterWrapper = styled.footer`
	background: var(--grayColor);
	color: var(--whiteColor);

	.socials {
		a {
			color: var(--primaryColor);
			border: 1px solid var(--primaryColor);
			padding: 0.6rem;
			border-radius: 5px;
			transition: all 0.5s ease;

			&:hover {
				background: var(--secondryColor);
				color: var(--primaryColor);
				transform: scale(1.1);
			}
		}
	}

	.form-group{
	input{
		border-radius:2px;
		padding:.6rem 1rem;
	}
		span{
			background:var(--primaryColor);
			padding:1rem;
		}
	}
`;
export default footer;
