// File: components/Logo.tsx
import React from 'react'

interface LogoProps {
  color: string
}

export const Logo: React.FC<LogoProps> = ({ color }) => (
  <svg fill={color} width="120" height="36" viewBox="0 0 150 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <title>Dorukai Logo</title>
    <text x="12" y="23" fontSize="25" fill={color}>D</text>
    <g transform="translate(30, 0)">
      <path d="M30.6,11.7C29.2,5.8,24,1.7,18,1.7c-7.2,0-13,5.8-13,13c0,6.8,5.3,12.4,12,12.9v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-5v-2V22c0,0,0,0,0-0.1v-3.6l4.7-4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L19,15.6v-3l-3.3-3.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2.7,2.7v6.2l-3.8-3.8c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l5.2,5.2v3.2c-5.6-0.5-10-5.2-10-10.9c0-6.1,4.9-11,11-11s11,4.9,11,11c0,4.9-3.3,9.2-8,10.6v2.1C28,25.7,32.3,18.7,30.6,11.7z" fill={color}></path>
    </g>
    <text x="65" y="23" fontSize="24" fill={color}>RUKAI</text>
  </svg>
)