'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
}

export function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="relative">
      {/* Animated connecting line for desktop */}
      <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 via-green-200 via-yellow-200 to-indigo-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#116366] to-[#14b8a6]"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="text-center group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-4">
              {/* Icon circle with gradient */}
              <motion.div
                className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg relative overflow-hidden`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Animated background shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />

                {/* Icon */}
                <div className="relative z-10">{item.icon}</div>

                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold text-gray-700">{item.step}</span>
                </div>
              </motion.div>
            </div>

            {/* Title and description */}
            <h3 className="font-bold mb-2 text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>

            {/* Animated pulse indicator */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#116366] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Process flow illustration */}
      <motion.div
        className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-[#116366]/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 bg-gradient-to-br ${step.color} rounded-full animate-pulse`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
                <span className="text-sm font-medium">{step.title}</span>
              </div>
              {index < steps.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
