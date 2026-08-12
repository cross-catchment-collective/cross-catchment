import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <motion.section
        initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}

      className="relative overflow-hidden bg-[#EEF3EF] py-20 lg:py-28"
    //   style={{
    //     backgroundImage: `url(${pattern})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* <p>How</p> */}

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#074C82] leading-none">
          How the Cross-Catchment Collective
          <br className="hidden md:block" />
          Works
        </h2>

        <p className="mt-8 text-base md:text-lg lg:text-[25px] leading-tight text-[#2C2C2C] max-w-4xl mx-auto">
          The CCC is grounded in real catchment practice. Each partnership
          operates in its own landscape, responding to local ecological,
          social and economic needs through action on the ground.
        </p>

        <p className="mt-6 text-base md:text-lg lg:text-[25px] leading-tight text-[#2C2C2C] max-w-4xl mx-auto">
          Its purpose is to enhance water security, protect biodiversity,
          create income opportunities, and unite government and civil society
          in collective action.
        </p>

      </div>
    </motion.section>
  );
}

export default HowItWorks;