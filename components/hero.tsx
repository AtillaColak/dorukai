// File: components/Hero.tsx
import React from 'react'
import { Typography, Button } from 'antd'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const { Paragraph } = Typography

export const Hero: React.FC = () => (
  <motion.section
    id="hero"
    className="text-center mb-16 relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img
      src="https://images.unsplash.com/photo-1512320696126-03a0befd8a70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Hero background"
      className="w-full h-[60vh] object-cover rounded-lg"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white rounded-lg">
      <Paragraph className="text-2xl mb-8 text-white">
        Shaping the Future Generation.
        <br />
        One <span className='text-[#1a472a]'>tree</span> at a time.
      </Paragraph>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-64} // Adjust this value based on your header height
      >
        <Button type="primary" size="large">
          Join Our Program
        </Button>
      </Link>
    </div>
  </motion.section>
)