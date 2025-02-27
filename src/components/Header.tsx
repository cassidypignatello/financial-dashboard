import { Link } from 'react-router-dom'
import searchIcon from '../assets/search.svg'
import settingsIcon from '../assets/settings.svg'
import notificationsIcon from '../assets/notification-bell.svg'

const Header = () => (
  <header
    className='flex justify-between items-center bg-white shadow-sm h-24'
    aria-label='Main Header'
  >
    <h1 className='font-semibold text-[28px] leading-[33.89px] tracking-normal pl-10 text-[#343c6a]'>
      Overview
    </h1>
    <nav className='flex items-center gap-4' aria-label='Main Navigation'>
      <div className='relative w-[255px] h-[50px]'>
        <img
          src={searchIcon}
          alt='Search'
          className='absolute left-4 top-1/2 transform -translate-y-1/2 ml-[16px]'
        />
        <input
          type='text'
          placeholder='Search for something'
          className='w-full h-full pl-16 rounded-[40px] bg-[#F5F7FA] p-2 text-sm focus:outline-none placeholder:text-[#8BA3CB] placeholder:font-inter placeholder:font-normal placeholder:text-[15px] placeholder:leading-[18.15px]'
          aria-label='Search'
        />
      </div>
      <Link to='/settings'>
        <div className='w-[50px] h-[50px] bg-[#F5F7FA] ml-[12px] rounded-full flex items-center justify-center cursor-pointer'>
          <img src={settingsIcon} alt='Settings' />
        </div>
      </Link>
      <div className='w-[50px] h-[50px] bg-[#F5F7FA] ml-[12px] rounded-full flex items-center justify-center cursor-pointer'>
        <img src={notificationsIcon} alt='Notifications' />
      </div>
      <img
        // src='/assets/user-avatar.png'
        alt='Profile Picture'
        className='w-[60px] h-[60px] ml-[12px] mr-[40px] rounded-full object-cover'
        aria-label='Profile Picture'
      />
    </nav>
  </header>
)

export default Header
