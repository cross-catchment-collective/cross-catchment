import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import drakensbergImg from "../assets/news/drakensberg.jpg";
import umzimNews from "../assets/news/umzimvubunews.PNG";
import umzimNews2 from "../assets/news/umzimvuNews.PNG";
import Subscribe from "../components/Subscribe";
import pattern from "../assets/news/20220217_120811.jpg";

const cards = [
  {
    title: "Farmer Exchange Cross Visits",
    description:
      "A cross visit took place to Emmaus on 8 August 2024 to visit Ezimbomvini and EStulwane communities.",
    image: drakensbergImg,
    link: "https://www.ndrakcollab.org/post/farmer-exchange-cross-visit",
  },
  {
    title: "Ecofutures update",
    description:
      `The Ecofutures programme is a pilot project in the upper uMzimvubu catchment, catalysed
        through Green Trust funding in early 2017, with further support from CITI Foundation, which
        aims to open opportunities for local youth with limited tertiary access...`,
    image: umzimNews,
    link: "https://umzimvubu.org/wp-content/uploads/2020/06/ucp-newsflash-18-ecofutures-update.pdf",
  },
  {
    title: "A framework for monitoring & evaluation of UCP projects",
    description:
      `Implementing partners involved in landscape restoration and livelihood enhancing activities in the uMzimvubu catchment
        are obliged to show developmental impact...`,
    image: umzimNews2,
    link: "https://umzimvubu.org/wp-content/uploads/2020/06/ucpp-newsflash-17-establishing-me-framework.pdf",
  },
];

export default function CommunitySection() {

  const handleClick = () => {
    window.open("https://za.linkedin.com/company/cross-catchment-collective?trk=public_post_follow-view-profile", "_blank");
  };

  return (
    <motion.section 
    initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 mb-8 rounded-b-3xl"
      style={{
              backgroundImage: `linear-gradient(rgb(255, 252, 252), rgba(248, 248, 248, 0.5)), url(${pattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
      >

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h1 className="text-2xl md:text-5xl xl:text-4xl font-extrabold text-[#074C82] pb-1 leading-none">
              Cross Catchment Collective Insights
            </h1>

            <p className="mt-6 max-w-xl text-xl text-[#074C82] md:text-[#074C82F] leading-tight mx-auto lg:mx-0">
              Impact across our Partnerships. Follow us on LinkedIn for more regular updates.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button onClick={handleClick} className="px-8 py-3 rounded-md bg-[#074C82] text-white font-medium hover:bg-[#043052] transition">
              
                LinkedIn
              </button>

              

            </div>

          </div>

        </div>

      </div>





      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-1x1 font-bold text-[#074C82] sm:text-4xl lg:text-4xl">
            Cross Catchment Collective Insights
          </h2>

          <p className="mt-2 text-gray-600 text-base sm:text-lg">
            Impact across our Partnerships
          </p>
        </div>

        <div className="mx-[8px]">
          <div>

                  <h3 className="text-2xl font-semibold text-[#22613C]">
                    Follow Us
                  </h3>

                  <a
                    href="https://www.linkedin.com/company/cross-catchment-collective/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-[#22613C]"
                  >
                    LinkedIn
                  </a>

                </div>
        </div> */}

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7 text-left">
                <h3 className="mb-4 text-2xl font-bold text-[#074C82]">
                  {card.title}
                </h3>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                <Link
                  to={card.link}
                  target="_blank"
                  className="inline-flex items-center rounded-lg bg-[#22613C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18492C]"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Subscribe />
    </motion.section>
  );
}