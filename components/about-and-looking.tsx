'use client'

import React, { useState, useEffect } from 'react'
import { Typography, Card, Row, Col, ConfigProvider, theme } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'

const { Title, Paragraph } = Typography
const { useToken } = theme

const lookingForData = [
  { title: 'Ambitious Students', description: 'We seek motivated high school and college students who are eager to learn, grow, and make a positive impact on their future.' },
  { title: 'Diverse Backgrounds', description: 'We value diversity in experiences, perspectives, and ambitions. Students from all walks of life are encouraged to apply.' },
  { title: 'Innovative Thinkers', description: 'We`re looking for creative problem-solvers who can bring fresh ideas and unique approaches to their academic and professional pursuits.' },
  { title: 'Collaborative Mindset', description: 'We value students who can work well with others, share ideas, and contribute to a supportive community of learners.' },
]

export default function AboutAndLookingFor() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { token } = useToken()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lookingForData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1a472a',
          colorText: token.colorText,
        },
      }}
    >
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: token.colorBgContainer,
                  }}
                  id="about"
                  bodyStyle={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                    padding: '1.5rem',
                  }}
                >
                  <Title level={2} style={{ color: token.colorPrimary, marginBottom: '1rem' }}>About Dorukai</Title>
                  <Paragraph style={{
                    color: token.colorText,
                    textAlign: 'justify',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <span>Dorukai mentors high school and college students to help them fulfill their educational and professional goals. We are a small group of Yale alumni working in finance and technology who benefited from similar mentorship and scholarship programs.</span>
                    <span>Our aim is to pass on our experience by matching mentees with successful professionals who can provide real-world college and career advice. Additionally, mentees receive educational grants for books, technology, and courses.</span>
                    <span>We don`t ask for anything in return. If you find this program helpful, we encourage you to consider passing it on in the future by mentoring another student.</span>
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={12}>
              <Card
                style={{
                  height: '100%',
                  position: 'relative',
                  backgroundColor: token.colorBgContainer,
                  display: 'flex',
                  flexDirection: 'column',
                }}
                id="looking-for"
                bodyStyle={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.5rem',
                }}
              >
                <Title level={2} style={{ color: token.colorPrimary, marginBottom: '1rem', fontSize: '1.5rem' }}>What We Are Looking For</Title>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: '200px' }}>
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={currentIndex}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <Title level={3} style={{ color: token.colorPrimary, marginBottom: '0.5rem', fontSize: '1.2rem' }}>{lookingForData[currentIndex].title}</Title>
                      <Paragraph style={{ color: token.colorText, fontSize: '1rem' }}>
                        {lookingForData[currentIndex].description}
                      </Paragraph>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {lookingForData.map((_, index) => (
                    <motion.div
                      key={index}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: index === currentIndex ? token.colorPrimary : token.colorTextSecondary,
                        margin: '0 4px',
                        cursor: 'pointer',
                      }}
                      animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </ConfigProvider>
  )
}