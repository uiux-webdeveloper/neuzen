// eslint-disable-next-line no-unused-vars
import React from "react";
import {
	Courses,
	HomeBanner,
	Job,
	MoreServices,
	Services,
	Sponser,
	Testimonial,
} from "../components";

const home = () => {
	return (
		<>
			<HomeBanner />;
			<Sponser />
			<Sponser />
			<Services />
			<Courses />
			<MoreServices />
			<Job />
			<Testimonial />
		</>
	);
};

export default home;
