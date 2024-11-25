import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar />
        <div>
      <section className="container mx-auto px-4 py-16 h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          About Us
        </h1>
        <p className="mt-6 text-lg text-gray-600 text-center">
          We are a team dedicated to providing the best services and solutions.
          Our mission is to help individuals and businesses achieve their goals
          through innovative technology and exceptional support.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              To empower people and organizations with technology that helps
              them grow and succeed.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              To be a global leader in providing innovative and effective
              solutions that make a difference.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}

export default page
