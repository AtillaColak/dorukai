/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Typography, Form, Input, Button, Row, Col, message } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

const { Title, Paragraph } = Typography

export const InterestForm: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    console.log('Form values:', values)

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfBeKV9tjb9mybNG3QEBZ8a9s8i0pkR8EbwCgf_MCJLKEv8Dg/formResponse'

    // Prepare the form data to match Google Form entry field names
    const formData = new URLSearchParams()
    formData.append('entry.206302133', values.name) // Full Name field
    formData.append('entry.1838264106', values.email) // Email field
    formData.append('entry.1967712993', values.message) // Interests and Goals field

    try {
      // Send the form data to Google Form
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })

      // Show success message to user
      message.success('Thank you for your interest! We will get back to you soon.')
      form.resetFields()
    } catch (error) {
      console.error('Form submission error:', error)
      message.error('Failed to submit the form. Please try again later.')
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <Title level={2} className="text-3xl font-bold text-center mb-8 ">
          Express Your Interest
        </Title>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-500 dark:to-green-900 p-8 rounded-lg shadow-lg"
              >
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                  <Input prefix={<UserOutlined />} placeholder="Your Name" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                  <Input prefix={<MailOutlined />} placeholder="Your Email" />
                </Form.Item>
                <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Please enter your message' }]}>
                  <Input.TextArea
                    placeholder="Tell us about your interests and goals"
                    rows={4}
                    style={{ resize: 'none', height: '120px' }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900 border-green-200"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </motion.div>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <TreeAnimation />
              <Paragraph className="text-center mt-4 text-green-100">
                Join our growing community of mentors and mentees. Let`s grow together!
              </Paragraph>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

const TreeAnimation: React.FC = () => {
  const drawDuration = 2
  const pauseDuration = 2
  const totalDuration = (drawDuration * treePaths.length) + pauseDuration

  return (
    <svg width="300" height="320" viewBox="0 0 93.277 93.277">
      <motion.g
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{ duration: totalDuration, times: [0, 0.9, 1], repeat: Infinity, repeatDelay: 0.5 }}
      >
        {treePaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            fill="none"
            stroke={index === 5 ? "#6c574b" : "#4ADE80"}
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: totalDuration,
              times: [
                index * (drawDuration / totalDuration),
                (index + 1) * (drawDuration / totalDuration),
                0.9,
                1
              ],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        ))}
      </motion.g>
      <motion.circle
        cx="46.6385"
        cy="91.5"
        r="3"
        fill="#A7F3D0"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1, 0] }}
        transition={{ duration: totalDuration, times: [0, 0.8, 0.9, 1], repeat: Infinity, repeatDelay: 0.5 }}
      />
    </svg>
  )
}

const treePaths = [
  "M87.047,55.743c-0.715-7.514-7.509-13.256-15.051-12.777c-8.754,0.561-14.944,6.864-14.284,15.213 c1.924-3.001,2.971-6.406,5.476-8.983c3.795-3.896,8.531-4.527,13.429-3.468c4.018,0.869,6.14,4.064,7.053,7.958 c1.051,4.5-1.211,9.743-5.037,11.971c-3.806,2.211-7.881,1.913-11.057-0.812c-2.649-2.269-3.642-6.166-2.266-8.948 c1.238-2.526,5.547-4.535,8.473-3.956c2.711,0.537,4.6,3.151,4.186,5.813c-0.414,2.643-2.553,4.295-5.171,3.803 c-0.787-0.151-1.8-0.664-2.139-1.312c-0.757-1.45,0.499-1.841,1.591-2.159c0.941-0.271,1.612-0.776,1.219-1.851 c-0.339-0.907-1.164-1.308-2.074-1.369c-1.697-0.113-3.021,0.619-3.761,2.146c-0.855,1.772-0.414,3.429,0.76,4.918 c2.19,2.785,6.379,3.142,9.5,0.814c2.93-2.184,3.692-6.383,1.729-9.438c-1.89-2.926-5.873-4.206-10-3.214 c-4.682,1.133-6.878,3.347-7.162,7.406c-0.318,4.562,1.354,8.295,5.352,10.577c4.161,2.382,8.546,2.152,12.557-0.349 C84.71,65.017,87.571,61.255,87.047,55.743z",
  "M54.859,32.212c-1.126-5.327,0.981-9.61,4.589-13.091c2.956-2.853,6.793-2.842,10.533-1.434 c4.322,1.632,7.426,6.423,7.149,10.843c-0.277,4.394-2.797,7.614-6.824,8.738c-3.364,0.939-7.148-0.405-8.695-3.094 c-1.407-2.437-0.685-7.128,1.423-9.241c1.958-1.959,5.185-2.067,7.159-0.245c1.968,1.815,2.149,4.507,0.284,6.41 c-0.564,0.569-1.55,1.127-2.275,1.05c-1.626-0.183-1.253-1.437-0.91-2.527c0.294-0.931,0.249-1.772-0.859-2.04 c-0.948-0.224-1.735,0.24-2.293,0.962c-1.04,1.348-1.163,2.852-0.308,4.317c0.996,1.696,2.618,2.253,4.51,2.11 c3.532-0.271,6.16-3.558,5.959-7.443c-0.186-3.648-3.252-6.62-6.883-6.687c-3.477-0.056-6.762,2.544-8.23,6.523 c-1.662,4.516-1.047,7.575,2.17,10.069c3.614,2.805,7.646,3.487,11.762,1.434c4.295-2.13,6.544-5.905,6.694-10.627 c0.164-5.113-1.369-9.585-6.242-12.217c-6.639-3.582-15.19-1.134-18.986,5.404c-4.402,7.587-2.604,16.234,4.699,20.333 C57.856,38.488,55.608,35.726,54.859,32.212z",
  "M44.541,24.846c-2.414-1.792-5.226-2.866-7.246-5.12c-3.075-3.424-3.333-7.447-2.16-11.512 c0.96-3.332,3.775-4.937,7.099-5.484c3.855-0.623,8.139,1.578,9.795,4.924c1.646,3.332,1.163,6.749-1.314,9.267 c-2.061,2.103-5.4,2.714-7.667,1.4c-2.053-1.193-3.501-4.928-2.849-7.363c0.611-2.257,2.923-3.694,5.135-3.196 c2.204,0.505,3.471,2.394,2.907,4.574c-0.171,0.655-0.662,1.482-1.225,1.727c-1.267,0.551-1.521-0.522-1.725-1.465 c-0.178-0.806-0.568-1.401-1.492-1.131c-0.786,0.231-1.167,0.91-1.273,1.671c-0.191,1.422,0.351,2.579,1.595,3.287 c1.444,0.823,2.859,0.542,4.188-0.357c2.471-1.686,3.004-5.19,1.227-7.958c-1.672-2.59-5.162-3.47-7.849-1.992 c-2.57,1.424-3.872,4.707-3.28,8.235c0.689,4.009,2.428,5.985,5.831,6.459c3.826,0.525,7.063-0.666,9.213-3.908 c2.238-3.364,2.296-7.072,0.424-10.59c-2.032-3.812-5.039-6.437-9.71-6.31c-6.369,0.174-11.596,5.564-11.618,11.945 C32.517,19.355,37.476,24.922,44.541,24.846z",
  "M29.297,21.723c-7.065-2.692-15.251,0.792-18.153,7.754c-2.13,5.109-0.512,9.553,2.835,13.421 c3.095,3.578,7.223,5.089,11.897,4.045c4.497-1,7.195-4.066,8.242-8.52c0.929-3.963-0.519-6.728-4.654-9.195 c-3.648-2.167-7.828-2.12-10.499,0.113c-2.779,2.341-3.291,6.577-1.138,9.527c2.288,3.146,6.403,4.047,9.319,2.033 c1.559-1.08,2.469-2.534,2.175-4.475c-0.255-1.678-1.299-2.769-2.957-3.162c-0.89-0.208-1.802-0.073-2.39,0.695 c-0.697,0.907-0.2,1.591,0.618,2.127c0.95,0.628,2.031,1.371,0.883,2.534c-0.512,0.519-1.638,0.707-2.43,0.619 c-2.649-0.305-4.201-2.515-3.812-5.16c0.389-2.661,2.965-4.606,5.715-4.315c2.972,0.313,6.483,3.504,6.928,6.283 c0.487,3.063-1.612,6.494-4.815,7.878c-3.839,1.665-7.818,0.743-10.804-2.495c-2.996-3.258-3.598-8.932-1.268-12.924 c2.022-3.444,4.993-5.869,9.086-5.512c4.998,0.438,9.332,2.438,11.806,7.286c1.629,3.201,1.622,6.766,2.572,10.196 C41.541,32.703,37.496,24.846,29.297,21.723z",
  "M22.863,52.526c-7.439-1.335-14.836,3.6-16.407,10.981c-1.15,5.414,1.265,9.479,5.27,12.666 c3.705,2.939,8.035,3.665,12.438,1.772c4.233-1.813,6.32-5.329,6.521-9.894c0.178-4.065-1.752-6.513-6.269-8.176 c-3.992-1.454-8.092-0.637-10.299,2.054c-2.298,2.816-2.019,7.077,0.646,9.571c2.835,2.673,7.036,2.796,9.53,0.273 c1.336-1.352,1.963-2.946,1.311-4.801c-0.56-1.598-1.79-2.481-3.489-2.56c-0.912-0.041-1.781,0.264-2.22,1.126 c-0.515,1.02,0.094,1.598,1,1.978c1.051,0.438,2.253,0.965,1.334,2.32c-0.409,0.609-1.475,0.999-2.271,1.061 c-2.662,0.192-4.594-1.693-4.702-4.366c-0.109-2.687,2.061-5.075,4.818-5.298c2.978-0.243,7.022,2.245,7.965,4.891 c1.047,2.919-0.378,6.677-3.273,8.634c-3.463,2.345-7.547,2.177-11.078-0.455c-3.549-2.646-5.189-8.11-3.638-12.467 c1.35-3.761,3.821-6.69,7.911-7.098c4.986-0.496,9.618,0.671,12.948,4.976c2.193,2.848,2.845,6.352,4.416,9.545 C36.93,61.05,31.497,54.076,22.863,52.526z",
  "M51.128,91.5c6.536-24.04,4.896-40.539-8.897-62.727c2.635,8.42,9.128,27.153,9.128,35.794 c-0.203,2.529-5.845-0.756-14.297-13.055c2.417,8.062,4.122,9.246,9.777,15.04c2.734,2.796,4.554,3.552,3.782,7.012 c-0.923,4.11-1.525,8.319-2.762,12.323c-1.219,3.912-1.167,4.388-7.334,7.275l14.789,0.113 C54.653,93.167,52.648,91.125,51.128,91.5z",
]