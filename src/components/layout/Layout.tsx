import React from 'react'

interface Props {
    children: React.ReactElement
}

export default function Layout({ children }: Props) {
    return (
        <div className='flex flex-col items-center h-screen'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-full'>
                <path
                    fill='#DEE2E6'
                    fillOpacity='1'
                    d='M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,101.3C672,96,768,64,864,42.7C960,21,1056,11,1152,53.3C1248,96,1344,192,1392,240L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
                ></path>
            </svg>
            {children}
        </div>
    )
}
