// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import bg from "../assets/home/headingBg.png";
import pic1 from "../assets/home/job/pic1.png";
import pic2 from "../assets/home/job/pic2.png";
import pic3 from "../assets/home/job/pic3.png";
import pic4 from "../assets/home/job/pic4.png";
const job = () => {
	const data = [
		{
			heading: "Nodejs Developer",
			location: "india",
			status: "active",
			time: "Full Time",
			year: "1-2",
			image: pic1,
		},
		{
			heading: "Graphics Designer",
			location: "india",
			status: "active",
			time: "Full Time",
			year: "1-8",
			image: pic2,
		},

		{
			heading: "React Developer",
			location: "india",
			status: "active",
			time: "Full Time",
			year: "1-4",
			image: pic3,
		},

		{
			heading: "Android Developer",
			location: "india",
			status: "active",
			time: "Full Time",
			year: "1-5",
			image: pic4,
		},
	];
	return (
		<JobWrapper>
			<div className="heading text-center p-12 mb-16 space-y-4">
				<h2>Latest Job Posting</h2>
				<p>
					Flexiple is an invite-only network that helps mission-driven developers and designers
					collaborate with
				</p>
			</div>

			<article className="grid-4">
				{data.map((val, index) => {
					return (
						<div className="card text-white p-4 space-y-2" key={index}>
							<div className="flex items-center gap-4">
								<img src={val.image} alt="" />
								<h4>{val.heading}</h4>
							</div>
							<div className="card-body p-2 space-y-2">
								<h5>Location: {val.location}</h5>
								<h5>Status: {val.status}</h5>
								<div className="flex-between">
									<button>{val.time}</button>
									<button>{val.year}</button>
								</div>
							</div>
						</div>
					);
				})}
			</article>
		</JobWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const JobWrapper = styled.section`
	.heading {
		background-image: url(${bg});
		color: var(--whiteColor);
		background-size: cover;
		background-position: center;
	}

	article {
		.card {
			border-radius: 5px;
			border: 1px solid var(--whiteColor);
			button {
				border: 1px solid var(--primaryColor);
				padding: 0.4rem 1rem;
				border-radius: 5px;
			}

			img {
				border: 2px solid var(--whiteColor);
				border-radius: 50%;
			}
		}
	}
`;

export default job;
