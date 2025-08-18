import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoDocumentTextOutline, IoMail } from 'react-icons/io5'
import { SiLeetcode } from 'react-icons/si'
import image from'../assets/image.jpg'

const Body = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50'>
      <div className='bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-4 border border-gray-100'>
        {/* Profile Image */}
        <div className='flex justify-center mb-4 sm:mb-6'>
          <div className='w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 shadow-inner'>
            <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden'>
              <img 
                src={image} 
                alt="Saubhagya Baliarsingh" 
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
          </div>
        </div>
        
        {/* Name/Title */}
        <div className='text-center mb-3 sm:mb-4'>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2'>Saubhagya Baliarsingh</h1>
          <p className='text-blue-600 bg-blue-100 sm:bg-blue-200 px-3 sm:px-4 py-1 inline-block rounded-full text-xs sm:text-sm font-medium'>
            Full-Stack Developer
          </p>
        </div>
        
        {/* About */}
        <div className='text-center mb-6 sm:mb-8'>
          <p className='text-gray-500 text-xs sm:text-sm px-2 sm:px-4'>
            Passionate developer building amazing web experiences with modern technologies
          </p>
        </div>
        
        {/* Links */}
        <div className='space-y-2 sm:space-y-3'>
          <a 
            href="https://saubhagya-portfolio.netlify.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-gray-50 hover:bg-gray-200 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='p-1 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FiUser className='text-blue-500 w-4 h-4 sm:w-5 sm:h-5' />
              </div>
              <span className='text-gray-700 font-medium text-sm sm:text-base'>Portfolio</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500 w-3 h-3 sm:w-4 sm:h-4' />
          </a>
          
          <a 
            href="https://github.com/Saubhagya-2004" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='p-1 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FaGithub className='text-gray-800 w-4 h-4 sm:w-5 sm:h-5' />
              </div>
              <span className='text-gray-700 font-medium text-sm sm:text-base'>GitHub</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500 w-3 h-3 sm:w-4 sm:h-4' />
          </a>
          
          <a 
            href="https://leetcode.com/u/Saubhagya_04/" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-200 group border border-orange-100 hover:border-orange-200'
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='p-1 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <SiLeetcode className='text-orange-500 w-4 h-4 sm:w-5 sm:h-5' />
              </div>
              <span className='text-gray-700 font-medium text-sm sm:text-base'>LeetCode</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500 w-3 h-3 sm:w-4 sm:h-4' />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/saubhagya-baliarsingh-0136071b0/"
            target='_blank'
            rel="noopener noreferrer" 
            className='flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200 group border border-blue-100 hover:border-blue-200'
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='p-1 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FaLinkedinIn className='text-blue-600 w-4 h-4 sm:w-5 sm:h-5' />
              </div>
              <span className='text-gray-700 font-medium text-sm sm:text-base'>LinkedIn</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500 w-3 h-3 sm:w-4 sm:h-4' />
          </a>
          
          <a 
            href="https://drive.google.com/file/d/1Yd9jU2azFu6h9ETS6BJ5AixTHDsB9Mkq/view?usp=sharing" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='p-1 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <IoDocumentTextOutline className='text-indigo-500 w-4 h-4 sm:w-5 sm:h-5' />
              </div>
              <span className='text-gray-700 font-medium text-sm sm:text-base'>Resume</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500 w-3 h-3 sm:w-4 sm:h-4' />
          </a>
          
          <a 
            href="https://www.youtube.com/@a.p.creator9948" 
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-all duration-200 group border border-red-100 hover:border-red-200'
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='p-1 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <FaYoutube className='text-red-600 w-4 h-4 sm:w-5 sm:h-5' />
              </div>
              <span className='text-gray-700 font-medium text-sm sm:text-base'>YouTube</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500 w-3 h-3 sm:w-4 sm:h-4' />
          </a>
          
          <a 
            href="mailto:saubhagyabaliarsingh2@gmail.com" 
            className='flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group border border-gray-100 hover:border-gray-200'
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <div className='p-1 sm:p-2 rounded-lg bg-white shadow-sm group-hover:shadow'>
                <IoMail className='text-purple-500 w-4 h-4 sm:w-5 sm:h-5' />
              </div>
              <span className='text-gray-700 font-medium text-sm sm:text-base'>Contact Me</span>
            </div>
            <FaExternalLinkAlt className='text-blue-200 group-hover:text-blue-500 w-3 h-3 sm:w-4 sm:h-4' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Body