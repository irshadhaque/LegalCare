import { motion } from "framer-motion";

const features = [
  "Drive efficiency in processes",
  "Simplify Access to Legal",
  "Boost Employee Legal Well-being",
  "Get Data-driven Insights"
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#0f0c29] text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Key Benefits</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-xl shadow-lg text-lg"
          >
             {feature}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
