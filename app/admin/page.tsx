import StatCard from '@/components/ui/StatCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Admin = () => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
        <header className='admin-header'>
        <Link href="/" className='cursor-pointer'>
        <Image
        src='/assets/icons/s7care.png' 
        alt='logo'
        height={47}
        width={500}
        className='h-8 w-fit'
        />
        </Link>

        <p className='text-16-semibold'>Admin Dashbaord</p>
        </header>
      <main className='admin-main'>
        <section className='w-full space-y-4'>
        <h1 className='header'>Welcome 👋</h1>
        <p className='text-dark-700'>start the day with managing new appointment</p>
        </section>

        <section className='admin-stat'>
            <StatCard 
            type= "appointments"
            count={5}
            label="Scheduled appointments"
            icon = "/assets/icons/appointments.svg"
            />

            <StatCard 
            type= "pending"
            count={10}
            label="pending"
            icon = "/assets/icons/pending.svg"
            />

            <StatCard 
            type= "cancelled"
            count={2}
            label="cancelled"
            icon = "/assets/icons/cancelled.svg"
        />

        </section>
      </main>
    </div>
  )
}

export default Admin
