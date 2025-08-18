import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoDocumentTextOutline, IoMail } from 'react-icons/io5'
import { SiLeetcode } from 'react-icons/si'
import image from'../assets/image.jpg'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50'>
      <div className='bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border border-gray-100'>
        {/* Profile Image */}
        <div className='flex justify-center mb-6'>
          <div className='w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 shadow-inner'>
            <div className='w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md'>
              <img src={image} alt="name" className='w-full h-full rounded-full object-cover' />
            </div>
          </div>
        </div>
        
        {/* Name/Title */}
        <div className='text-center mb-4'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>Saubhagya Baliarsingh</h1>
          <p className='text-blue-600 bg-blue-200 px-4 cursor-pointer py-1 inline-block rounded-full text-sm font-medium'>Full-Stack Developer</p>
        </div>
        
        {/* About */}
        <div className='text-center mb-8'>
          <p className='text-gray-500 text-sm px-4'>
            Passionate developer building amazing web experiences with modern technologies
          </p>
        </div>
        
        {/* Links */}
        <div className='space-y-3'>
          <a 
            href="https://saubhagya-2004.github.io/portfolio/" 
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-200 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FiUser size={20} className='text-blue-500' />
              </div>
              <span className='text-gray-700 font-medium'>Portfolio</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500' />
          </a>
          
          <a 
            href="https://github.com/Saubhagya-2004" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FaGithub size={20} className='text-gray-800' />
              </div>
              <span className='text-gray-700 font-medium'>GitHub</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500' />
          </a>
          
          <a 
            href="https://leetcode.com/u/Saubhagya_04/" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-4 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-200 group border border-orange-100 hover:border-orange-200'
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <SiLeetcode size={20} className='text-orange-500' />
              </div>
              <span className='text-gray-700 font-medium'>LeetCode</span>
            </div>
             <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500' />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/saubhagya-baliarsingh-0136071b0/"
            target='_blank'
            rel="noopener noreferrer" 
            className='flex items-center justify-between gap-4 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200 group border border-blue-100 hover:border-blue-200'
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FaLinkedinIn size={20} className='text-blue-600' />
              </div>
              <span className='text-gray-700 font-medium'>LinkedIn</span>
            </div>
             <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500' />
          </a>
          
          <a 
            href="https://drive.google.com/file/d/1Yd9jU2azFu6h9ETS6BJ5AixTHDsB9Mkq/view?usp=sharing" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <IoDocumentTextOutline size={20} className='text-indigo-500' />
              </div>
              <span className='text-gray-700 font-medium'>Resume</span>
            </div>
             <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500' />
          </a>
          
          <a 
            href="https://www.youtube.com/@a.p.creator9948" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-4 p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-all duration-200 group border border-red-100 hover:border-red-200'
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FaYoutube size={20} className='text-red-600' />
              </div>
              <span className='text-gray-700 font-medium'>YouTube</span>
            </div>
             <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500' />
          </a>
          
          <a 
            href="mailto:saubhagyabaliarsingh2@gmail.com" 
            className='flex items-center justify-between gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <IoMail size={20} className='text-purple-500' />
              </div>
              <span className='text-gray-700 font-medium'>Contact Me</span>
            </div>
             <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Body