'use client'

import React, { useState } from 'react'
import { Layout, ConfigProvider, theme } from 'antd'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import AboutAndLookingFor from '@/components/about-and-looking'
import { InterestForm } from '@/components/interest-form'
import Footer from '@/components/footer'

const { Content } = Layout
const { darkAlgorithm, defaultAlgorithm } = theme

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#1a472a',
          colorTextSecondary: "#235347"
        },
      }}
    >
      <Layout className={`min-h-screen ${
        isDarkMode
          ? 'bg-gradient-to-br from-green-950 to-gray-800'
          : 'bg-gradient-to-br from-gray-200 to-gray-600'
      }`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Content className="p-8 pt-24">
          <Hero />
          <AboutAndLookingFor />
          <InterestForm />
        </Content>
        <Footer isDarkMode={isDarkMode} />
      </Layout>
    </ConfigProvider>
  )
}