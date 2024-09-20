import React, { useState, useEffect } from 'react'
import { Layout, Button, Dropdown, Menu, Switch } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-scroll'
import { Logo } from '@/components/logo'

const { Header: AntHeader } = Layout

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['about', 'looking-for', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  const menu = (
    <Menu>
      {menuItems.map((item, index) => (
        <Menu.Item key={index}>
          <Link
            to={item}
            spy={true}
            smooth={true}
            offset={-64} // Adjust this value based on your header height
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <AntHeader
      className="flex items-center justify-between px-4 bg-transparent fixed w-full z-10"
      style={{ 
        backdropFilter: 'blur(6px)', 
        height: '64px', 
        backfaceVisibility: "hidden" 
      }}
    >
      <div className="flex items-center">
        <Logo color={isDarkMode ? '#ffffff' : '#1a472a'} />
      </div>
      <div className="flex items-center">
        <Dropdown 
          overlay={menu} 
          placement="bottomRight" 
          trigger={['click']}
          onVisibleChange={setIsMenuOpen}
          visible={isMenuOpen}
        >
          <Button 
            icon={<MenuOutlined />} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </Dropdown>
        <Switch
          className="ml-4"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
      </div>
      {/* Additional div for backdrop filter */}
      <div style={{ height: '1px', bottom: '-1px', position: 'absolute', width: '100%' }}></div>
    </AntHeader>
  )
}
