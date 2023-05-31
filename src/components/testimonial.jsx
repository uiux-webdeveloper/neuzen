// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import bg from "../assets/home/headingBg.png";
import pic1 from "../assets/home/testimonial/pic1.png";
import pic2 from "../assets/home/testimonial/pic2.jpg";
import pic3 from "../assets/home/testimonial/pic3.jpg";
import pic4 from "../assets/home/testimonial/pic4.jpg";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
const testimonial = () => {
	const data = [
		{
			pic: pic1,
			heading: "Sushan Holses",
			subHeading: "Web Designer",
			des: `leading edge of IT innovation, your team needs to regularly reinvent itsTo stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.`,
		},
		{
			pic: pic2,
			heading: "Eushan Holses",
			subHeading: "Web Designer",
			des: `leading edge of IT innovation, your team needs to regularly reinvent itsTo stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.`,
		},
		{
			pic: pic3,
			heading: "Pushan Holses",
			subHeading: "Web Designer",
			des: `leading edge of IT innovation, your team needs to regularly reinvent itsTo stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.`,
		},
		{
			pic: pic4,
			heading: "Jushan Holses",
			subHeading: "Web Designer",
			des: `leading edge of IT innovation, your team needs to regularly reinvent itsTo stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.`,
		},
	];
	const breakpoint = {
		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
	};
	return (
		<TestimonialWrapper className="mb-24">
			<div className="heading text-center p-12 mb-16 flex-col md:flex-row flex-between space-y-4">
				<h2>What Our Clients Say</h2>
				<p>
					Flexiple is an invite-only network that helps mission-driven developers and designers
					collaborate with
				</p>
			</div>

			<Swiper
				modules={[Autoplay, Pagination]}
				pagination={{ clickable: true }}
				navigation
				slidesPerView={3}
				loop={true}
				autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
				breakpoints={breakpoint}
				className="card-container mt-8 text-white"
			>
				{data.map((val) => {
					return (
						<SwiperSlide
							key={val.id}
							className="card flex items-center gap-16 flex-col md:flex-row"
						>
							<div className="col-l flex-[70%] order-2 md:order-1">
								<p>{val.des}</p>
							</div>
							<div className="col-r flex-[30%] text-center flex-center flex-col order-1 md:order-2">
								<img
									src={val.pic}
									alt=""
									className="w-[140px] h-[140px] rounded-full border-[1px] p-2 border-white"
								/>
								<div className="space-y-2 mt-4">
									<h5>{val.heading}</h5>
									<h6>{val.subHeading}</h6>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</TestimonialWrapper>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
const TestimonialWrapper = styled.section`
	.heading {
		background-image: url(${bg});
		color: var(--whiteColor);
		background-size: cover;
		background-position: center;
	}

	.card-container {
		position: relative;
		.card {
			padding: 3rem;
			h6 {
				color: var(--primaryColor);
				letter-spacing: .4rem;
			}
		}
		&::before {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 1px solid var(--whiteColor);
			border-radius: 5px;
			z-index: 1000;
		}
	}
`;

export default testimonial;
