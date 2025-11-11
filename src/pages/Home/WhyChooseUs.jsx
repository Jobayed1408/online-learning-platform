import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const faqs = [
    {
      q: "What makes your courses unique?",
      a: "Our courses are designed by real-world experts and updated regularly to match industry standards.",
    },
    {
      q: "Can I access the courses anytime?",
      a: "Yes! All our courses are available 24/7, so you can learn at your own pace, from any device.",
    },
    {
      q: "Do I get a certificate after completion?",
      a: "Absolutely. You’ll receive a verified certificate upon successfully completing any course.",
    },
    {
      q: "Is there community support?",
      a: "Yes, you’ll have access to a learner community, mentors, and discussion boards.",
    },
  ];

  return (
    <section className="py-16 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold ">Why Choose Us</h2>
        <p className=" mt-3 max-w-2xl mx-auto p-2">
          Discover why thousands of learners choose us for their online learning journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 px-3 md:px-12">
        {/* Left side: FAQ */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className=" rounded-xl p-3 shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold ">{faq.q}</h3>
                <ChevronDown className=" w-5 h-5" />
              </div>
              <p className="text-gray-600 mt-2 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/3yvyCGD1/why.webp"
            alt="Learning illustration"
            className="rounded-2xl shadow-xl w-full  object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
