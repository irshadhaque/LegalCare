import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold leading-snug"
        >
          We love human-centred technology,<br className="hidden md:block" />
          and technology for the human.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300"
        >
          Are you an <span className="font-semibold text-white">HR Leader</span> looking to improve colleague outcomes in legal understanding?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-300"
        >
          Are you a <span className="font-semibold text-white">Legal Leader</span> looking to ease delivery? Then, we should talk!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl font-semibold text-blue-400 mt-6"
        >
          We love to believe in the Future of Work.
        </motion.p>
      </div>
    </section>
  );
}
