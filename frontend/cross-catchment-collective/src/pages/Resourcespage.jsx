import researchImage from "../assets/resources/research-framework.jpg";
import merlImage from "../assets/resources/merl.png";
import youthImage from "../assets/resources/youth-academy.JPG";
import researchFramework from "../assets/resources/CCC-Research-Framework-March-2026.pdf"
import wisdomFramework from "../assets/resources/Catchment_Wisdom_Framework_General_guide_v1.pdf"
import { Link } from "react-router-dom";
import { MoveRight, ExternalLink } from "lucide-react";
import ImpactReports from "../components/ImpactReports";


function ResourcesPage() {
    return (
        <>
            <section className="bg-[#EEF3EF] py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-[#0F4C81]">
                    Cross-Learning
                    </h2>

                    <p className="mt-8 text-lg leading-tight text-gray-700">
                    Cross-learning is at the heart of the Cross-Catchment Collective.
                    It creates space for catchment partnerships to share practical
                    experience, compare approaches and learn from both successes and
                    challenges.

                    <br /><br />

                    Through webinars, learning events, field exchanges, case studies and
                    national convenings, the CCC helps partners adapt useful ideas from
                    one catchment to another and strengthen collective practice across
                    South Africa.
                    </p>

                </div>
            </section>

            <section className="py-15 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col md:flex-row items-center justify-center md:gap-20">

                    <div className="w-full md:w-[400px] flex-shrink-0">
                        <img
                        src={researchImage}
                        alt="Research Framework"
                        className="w-full rounded-3xl shadow-xl"
                        />
                    </div>

                    <div className="text-left">
                        {/* Text */}
                        <p className="text-4xl font-bold text-[#22613C]">
                    Cross Catchment Collective Research
                    </p>

                    <p className="mt-6 text-gray-700 max-w-[500px] leading-tight">
                    The Cross-Catchment Collective’s research programme brings practitioners, researchers and institutions together to address shared challenges across South Africa’s catchments. 
                    It identifies priority knowledge gaps, connects existing research with practical experience, and supports collaborative studies that can improve catchment planning, 
                    restoration and governance. By sharing evidence and lessons across regions, the programme helps turn research into practical knowledge that strengthens
                     decision-making and supports healthier, more resilient catchments.
                    </p>

                    <a 
                    className="inline-flex items-center gap-2 mt-3 text-[#22613C] bg-[#fff] border border-[#2E613F] px-8 py-3 rounded-lg hover:bg-[#22613C] hover:text-white hover:border-white transition"
                    href={researchFramework}
                    target="_blank">
                        Learn More
                        <MoveRight />
                    </a>

                    {/* <Link
                    to={researchFramework}
                    target="_blank"
                    className="inline-block mt-8 bg-[#22613C] text-white px-8 py-3 rounded-lg hover:bg-[#18492C] transition"
                    >
                    Learn More
                    </Link> */}
                    </div>

                </div>


            </div>
                {/* Research framewwowrk */}
            <div className="max-w-7xl mx-auto mt-6 px-6">
                <h2 className="text-3xl font-bold text-[#22613C]">
                    Research Framework
                </h2>
                    
                <p className="mt-3 text-gray-700 mx-auto max-w-[500px] leading-tight">
                    The Cross-Catchment Collective Research Framework connects research across catchments with practical implementation needs. It identifies shared priorities, 
                    brings together existing knowledge, links researchers and catchment partnerships, and supports evidence-based action across restoration, governance, finance, MERL and learning.
                </p>

                <a 
                    className="inline-flex items-center mt-3 gap-2 text-[#22613C] bg-[#fff] border border-[#2E613F] px-8 py-3 rounded-lg hover:bg-[#22613C] hover:text-white hover:border-white transition"
                    href="https://drive.google.com/file/d/1iA0aaQoh4VmPWhYIWoFYrx3TOWcY4tZi/view?usp=drive_link"
                    target="_blank">
                        View Document
                        <ExternalLink />
                </a>
            </div>

        </section>

        <section className="bg-[#fff]">

            <div className="max-w-6xl mx-auto px-6 pb-10 text-center">

                <h2 className="text-4xl font-bold text-[#22613C]">
                Catchment Wisdom Framework
                </h2>
        
                <p className="block text-gray-700 mx-auto leading-tight">
                MERL stands for Monitoring, Evaluation, Reporting and Learning. For the CCC, 
                MERL is not only about reporting to funders, but about building shared “catchment wisdom” over time. 
                By tracking what is being done, what is changing, what is working, and what needs to adapt, the MERL system 
                helps partnerships make better decisions and tell a stronger story of collective impact.
                </p>
                

                <img
                src={merlImage}
                alt="MERL"
                className="mx-auto mt-5 shadow-lg"
                />
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    className="inline-flex items-center gap-2 text-[#22613C] bg-[#fff] border border-[#2E613F] px-8 py-3 rounded-lg hover:bg-[#22613C] hover:text-white hover:border-white transition"
                    href={wisdomFramework}
                    target="_blank">
                        Learn More
                        <MoveRight />
                </a>

                {/* <a 
                    className="inline-flex items-center gap-2 text-[#22613C] bg-[#fff] border border-[#2E613F] px-8 py-3 rounded-lg hover:bg-[#22613C] hover:text-white hover:border-white transition"
                    href={rolReportV10}
                    target="_blank">
                        RoL Report
                        <MoveRight />
                </a>

                <a 
                    className="inline-flex items-center gap-2 text-[#22613C] bg-[#fff] border border-[#2E613F] px-8 py-3 rounded-lg hover:bg-[#22613C] hover:text-white hover:border-white transition"
                    href={rolReportV2}
                    target="_blank">
                        RoL Report
                    <MoveRight />
                </a> */}
                </div>

            </div>

        </section>

        <section className="bg-[#EEF3EF] py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div className="md:text-right">

                    <p className="text-4xl font-bold text-[#0F4C81]">
                    Youth Academy
                    </p>

                    <p className="mt-6 text-gray-700 leading-tight">
                    The Youth Academy creates meaningful pathways for young people to
                    participate in catchment work.
                    </p>

                    <p className="mt-6 text-gray-700 leading-tight">
                    It supports youth leadership, learning, environmental awareness,
                    practical skills and involvement in the wider CCC community of
                    practice.
                    </p>

                    <p className="mt-6 text-gray-700 leading-tight">
                    The aim is to grow a new generation of catchment champions who
                    can contribute to restoration, monitoring, communication and
                    local action.
                    </p>

                </div>

                <img
                    src={youthImage}
                    alt="Youth Academy"
                    className="rounded-3xl shadow-xl w-full object-cover"
                />

                </div>

            </div>

        </section>
        <ImpactReports />
        </>
    )
}

export default ResourcesPage;