import searchIcon from '../assets/search.svg'

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
          alt='Search Icon'
          className='absolute left-4 top-1/2 transform -translate-y-1/2 ml-[16px]'
        />
        <input
          type='text'
          placeholder='Search for something'
          className='w-full h-full pl-12 rounded-[40px] bg-[#F5F7FA] p-2 text-sm focus:outline-none placeholder:text-[#8BA3CB] placeholder:font-inter placeholder:font-normal placeholder:text-[15px] placeholder:leading-[18.15px] placeholder:pl-[16px]'
          aria-label='Search'
        />
      </div>
      <img
        src='/assets/user-avatar.png'
        alt='User Avatar'
        className='w-10 h-10 rounded-full object-cover'
        aria-label='User Avatar'
      />
      <img
        src='/assets/settings-icon.png'
        alt='Settings Icon'
        className='w-6 h-6 object-cover cursor-pointer'
        aria-label='Settings Icon'
      />
    </nav>
  </header>
)

export default Header
