'use client'

import React from 'react'
import { Typography } from 'antd'

const { Title, Text } = Typography

interface FooterProps {
  isDarkMode: boolean
}

export default function Footer({ isDarkMode }: FooterProps) {
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-900'
  const borderColor = isDarkMode ? 'bg-gray-700' : 'bg-gray-400'

  return (
    <footer>
      <div className="max-w-6xl mx-auto">
        <div className={`w-full h-px ${borderColor}`} />
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center w-full md:col-span-3 space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <Title level={2} className={textColor}>DORUKAI</Title>
            </div>
            <div>
              <Text className={`${textColor} text-center md:text-left`}>
                © {new Date().getFullYear()} DORUKAI. All rights reserved.
              </Text>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ramizcolak/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:text-gray-500 flex items-center justify-center md:justify-start`}
              > 
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}