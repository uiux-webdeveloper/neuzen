// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import bg from "../assets/home/banner/bg1.png";
import pic1 from "../assets/home/services/pic.png";
const services = () => {
	const data = [
		{
			heading: "Resume Creation",
			des: "Get access to dream talent screened through a 5-hour evaluation process.Not just that, each talent recommended to you is handpicked for you by our tech expert.",
			image: pic1,
		},

		{
			heading: "Courses / Tutorials",
			des: "Get access to dream talent screened through a 5-hour evaluation process.Not just that, each talent recommended to you is handpicked for you by our tech expert.",
			image: pic1,
		},

		{
			heading: "Job Posting",
			des: "Get access to dream talent screened through a 5-hour evaluation process.Not just that, each talent recommended to you is handpicked for you by our tech expert.",
			image: pic1,
		},
	];
	return (
		<ServicesWrapper className="mb-24">
			<div className="heading text-center p-12 mb-16 space-y-4">
				<h2>You bring the vision. we build the team.</h2>
				<p>
					Flexiple is an invite-only network that helps mission-driven developers and designers
					collaborate with
				</p>
			</div>

			<article className="grid-3">
				{data.map((val, index) => {
					return (
						<div className="card mb-4 md:mb-0" key={index}>
							<div className="card-body space-y-4 p-12">
								<h3>{val.heading}</h3>
								<p>{val.des}</p>
							</div>
							<figure className="flex justify-end">
								<img src={val.image} alt="" />
							</figure>
						</div>
					);
				})}
			</article>
		</ServicesWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const ServicesWrapper = styled.section`
	background-image: url(${bg});
	color: var(--whiteColor);
	background-size: cover;
	background-position: center;

	article {
		.card {
			background: var(--grayColor);
			position: relative;
			border-radius: 5px;
			&::before {
				content: "";
				position: absolute;
				top: -5%;
				left: 3%;
				width: 100%;
				height: 100%;
				border: 1px solid var(--whiteColor);
				border-radius: 5px;
			}
			h3 {
				color: var(--primaryColor);
				font-weight: 600;
			}
		}
	}
`;

export default services;
