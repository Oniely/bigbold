"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";
import Image from "next/image";

const HomeHeroSection = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 300], [0, -80]);

	return (
		<section className="w-full h-dvh bg-bg relative">
			<Image
				src="/images/bg.jpg"
				alt="Background Image"
				className="object-cover object-bottom z-10"
				fill
			/>

			<motion.h1
				className="max-w-container text-[9rem] font-mono font-bold z-20 absolute bottom-40 left-1/2 transform -translate-x-1/2 flex flex-col gap-2"
				style={{ y }}
			>
				<span className="mr-50 leading-none">Bigger</span>
				<span className="ml-50 leading-none text-nowrap">& Bolder</span>
			</motion.h1>
			<motion.a href="#new-arrivals" style={{ y }}>
				<Mouse
					size={30}
					className="absolute bottom-15 left-1/2 transform -translate-x-1/2 z-20 animate-bounce delay-1000"
				/>
			</motion.a>
		</section>
	);
};

export default HomeHeroSection;
