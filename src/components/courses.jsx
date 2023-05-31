// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import bg from "../assets/home/headingBg.png";
import pic1 from "../assets/home/course/pic1.png";
import pic2 from "../assets/home/course/pic2.png";
import pic3 from "../assets/home/course/pic3.png";
import pic4 from "../assets/home/course/pic4.png";
import { AiTwotoneStar } from "react-icons/ai";
const courses = () => {
	const data = [
		{
			heading: "Python: Master Programming Course",
			subHeading: "By Dr Zen",
			price: 99,
			image: pic1,
			icon: <AiTwotoneStar />,
		},
		{
			heading: "Python: Master Programming Course",
			subHeading: "By Dr Zen",
			price: 102,
			image: pic2,
			icon: <AiTwotoneStar />,
		},
		{
			heading: "Python: Master Programming Course",
			subHeading: "By Dr Zen",
			price: 92,
			image: pic3,
			icon: <AiTwotoneStar />,
		},
		{
			heading: "Python: Master Programming Course",
			subHeading: "By Dr Zen",
			price: 91,
			image: pic4,
			icon: <AiTwotoneStar />,
		},
	];
	return (
		<CoursesWrapper>
			<div className="heading text-center p-12 mb-16 space-y-4">
				<h2>Courses We Offer.</h2>
				<p>
					Flexiple is an invite-only network that helps mission-driven developers and designers
					collaborate with{" "}
				</p>
			</div>

			<article className="grid-4">
				{data.map((val, index) => {
					return (
						<div className="card" key={index}>
							<img src={val.image} className="w-full" alt="" />
							<div className="card-body text-white p-2 space-y-2">
								<h5>{val.heading}</h5>
								<div className="flex-between">
									<p>{val.subHeading}</p>
									<span className="text-yellow-300">{val.icon}</span>
								</div>

								<div className="flex-between">
									<h4>${val.price}</h4>
									<button className="cta">Best Seller</button>
								</div>
							</div>
						</div>
					);
				})}
			</article>
		</CoursesWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const CoursesWrapper = styled.section`
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
			img {
				border-bottom: 5px solid var(--primaryColor);
			}
		}
	}
`;

export default courses;
