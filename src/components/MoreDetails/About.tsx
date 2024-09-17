import React from "react";
import '@/app/globals.css';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Rating } from "@mui/material";

const contributors = [
    { name: "Krishna", role: "Frontend Developer", img: "/contributors/krishna.jpg", des: "A front-end expert with a passion for designing seamless user interfaces, Krishna specializes in building responsive websites and crafting pixel-perfect components." },
    { name: "Shivam", role: "Backend Developer", img: "/contributors/shivam.jpg", des: "Shivam is a skilled back-end developer, ensuring our web solutions are fast, secure, and scalable by utilizing cutting-edge technologies and best practices." },
    { name: "Raushan", role: "Full Stack Developer", img: "/contributors/raushan.jpg", des: "With a focus on full-stack development, Raushan bridges the gap between design and functionality, delivering high-performance web applications from start to finish." },
    { name: "Bittu", role: "UI/UX Designer", img: "/contributors/bittu.jpg", des: "Bittu excels at UX/UI design, ensuring that our solutions are not only visually appealing but also user-friendly, optimizing user engagement and satisfaction." },
];


export default function Contribute() {
    return (
        <div className="flex flex-col items-center bg-black">
            <Navbar />
            <div className="flex flex-col mt-36 mx-6 md:mx-24 items-center gap-16 text-white">
                <div className="flex flex-col gap-10 items-center md:text-left w-2/3 max-w-7xl leading-10">
                    <div className="bg-[#363733] px-5 rounded-full font-bold w-fit">About Us</div>
                    <h1 className="text-[#363733] text-center text-7xl"><span className="text-gray-400">About Anamarhs</span> <br /> Crafting Exceptional Websites</h1>
                    <p className="text-center text-xl leading-7 mt-10">Welcome to Anamarhs, your trusted software consultancy! Our dedicated team of professionals is committed to crafting beautiful and functional websites tailored precisely to meet your needs. Whether you're envisioning a sophisticated web application or a seamless digital solution, Anamarhs is here to turn your ideas into reality. Our innovative approach and user-friendly tools empower you to create cutting-edge applications effortlessly. Begin your journey with us today and transform your software visions into impactful digital experiences!</p>
                </div>
                <div className="flex flex-col gap-24 max-w-7xl">
                    <h1 className="text-6xl font-semibold text-gray-300 text-center">Our Mission, Vision, and Values</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <h1 className="card-title">Our Mission</h1>
                            <p className="card-content">Discover our mission to deliver exceptional web solutions that empower businesses to achieve their goals efficiently, leveraging cutting-edge technologies including artificial intelligence and cloud computing.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Our Vision</h1>
                            <p className="card-content">Explore our vision to become a leading force in the web development industry, renowned for innovative and client-centric approaches powered by AI, cloud computing, and emerging technologies.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Integrity</h1>
                            <p className="card-content">We uphold uncompromising integrity in every action and decision, ensuring trust and reliability in our services, supported by secure cloud infrastructure and AI-driven solutions.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Excellence</h1>
                            <p className="card-content">Committing to excellence in all endeavors, we harness the latest technologies such as AI and cloud computing to surpass client expectations with superior web development solutions.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Innovation</h1>
                            <p className="card-content">Embracing innovation as a cornerstone, we integrate advancements in AI, cloud computing, and other emerging technologies to continuously enhance our services and deliver cutting-edge solutions.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Customer Satisfaction</h1>
                            <p className="card-content">Customer satisfaction is paramount. We prioritize client needs, ensuring their happiness and success with our innovative web solutions powered by AI and hosted on scalable cloud infrastructures.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-24 max-w-7xl">
                    <h1 className="text-6xl font-semibold text-gray-300 text-center">Why Choose Us?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <h1 className="card-title">Expertise</h1>
                            <p className="card-content">Our expert team boasts extensive experience in AI-driven web development and cloud solutions, delivering high-quality services with precision and proficiency.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Quality</h1>
                            <p className="card-content">Committed to excellence, we guarantee top-tier services and products leveraging AI and hosted on secure cloud environments, exceeding client expectations for quality and reliability.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Customer Support</h1>
                            <p className="card-content">Our dedicated customer support ensures seamless assistance throughout the client journey, providing expert guidance in adopting AI and cloud solutions to foster strong and enduring relationships.</p>
                        </div>
                        <div>
                            <h1 className="card-title">Innovative Solutions</h1>
                            <p className="card-content">Staying ahead with the latest AI, cloud computing, and emerging technologies, we offer innovative solutions tailored to meet evolving business needs, ensuring scalability and efficiency.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 mb-10 mx-w-7xl">
                    <h1 className="text-6xl font-semibold text-gray-300 text-center">Contributors</h1>
                    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 gap-5 mt-20 mb-20 max-w-7xl">
                        {contributors.map((conrtibutor, index) => (
                            <div key={index} className="flex flex-col justify-between rounded-2xl p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg">
                                <Rating name="read-only" value={5} readOnly />
                                <div className="py-5 text-white">{conrtibutor.des}</div>
                                <div className="flex flex-wrap flex-row gap-5 ">
                                    <img src={conrtibutor.img} className="rounded-full w-10 h-10" />
                                    <div className="flex flex-col">
                                        <h1 className="text-white text-xl">{conrtibutor.name}</h1>
                                        <h3>{conrtibutor.role}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

