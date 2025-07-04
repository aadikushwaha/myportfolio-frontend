import { useState } from "react";

const Header = () => {
  const [mobileView, setmobileView] = useState(false);
  return (
    <>
      {mobileView ?
      // <nav className="fixed top-0 left-0 bg-black w-screen navmenu shadow" id="navmenu">

        //   <ul className="flex flex-row px-10  py-4 gap-10 items-center justify-center text-2xl">
        //     <li><div className="profile-img ">
        //       <img
        //         src="assets/img/profile.jpg"
        //         alt="Profile"
        //         className="img-fluid rounded-circle h-8 w-8 "
        //       />
        //     </div>
        //     </li>
        //     <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
        //     <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        //     <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        //     <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Projects</a></li>
        //     <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
        //     <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        //   </ul>
        // </nav> 
        <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 md:hidden">
          {/* Mobile header with profile and hamburger button */}
          
          {/* Mobile menu items */}
          <div className={`${mobileView ? 'block' : 'hidden'} bg-gray-800 pb-2`}>

            <div className="flex justify-between h-full items-center px-4 py-3">
              <div className="flex flex-row gap-2 justify-center ">
                <img
                  src="assets/img/profile.jpg"
                  alt="Profile"
                  className="h-9 w-9 rounded-full border-2 border-indigo-400 object-cover"
                />
                <h1 className="sitename text-xl text-white mt-1">Aditya Kushwaha</h1>


              </div>


              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setmobileView(!mobileView)}
              >
                <i className={`bi ${mobileView ? 'bi-x' : 'bi-list'} text-2xl`}></i>
              </button>
            </div>
 


            <div className="flex flex-col px-2">
             
              <a href="#hero" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <i className="bi bi-house mr-2"></i> Home
              </a>
              <a href="#about" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <i className="bi bi-person mr-2"></i> About
              </a>
              <a href="#resume" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <i className="bi bi-file-earmark-text mr-2"></i> Resume
              </a>
              <a href="#portfolio" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <i className="bi bi-images mr-2"></i> Projects
              </a>
              <a href="#services" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <i className="bi bi-hdd-stack mr-2"></i> Services
              </a>
              <a href="#contact" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <i className="bi bi-envelope mr-2"></i> Contact
              </a>
            </div>
          </div>
        </nav> :
        <header id="header" className=" header dark-background d-flex flex-column">
          <i className="header-toggle d-xl-none bi bi-list" onClick={() => setmobileView(!mobileView)} ></i>
<div className="profile-img">
  <img 
    src="assets/img/profile.jpg" 
    alt="Profile" 
    className="img-fluid rounded-circle h-full w-full "

  />

</div>

    <div className="logo d-flex flex-col align-items-center justify-content-center">
      <h1 className="sitename mt-5 text-xl">Aditya Kushwaha</h1>
            <h2 className="p-3 text-light">MERN Stack Developer</h2>
    </div>

    <div className="social-links text-center">
     <a href="https://x.com/adityak9477?t=gIOoyEF2rhUK2SZGsPjiAA&s=09" className="twitter"><i className="bi bi-twitter-x"></i></a>
      <a href="https://www.facebook.com/share/18YgJ5BnNy/" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/_aadi.kushwaha_?igsh=MWRpZnptcGlqbXl3ZQ==" className="instagram"><i
          className="bi bi-instagram"></i></a>
      <a href="http://www.github.com/aadikushwaha" className="google-plus"><i className="bi bi-github"></i></a>
      <a href="http://www.linkedin.com/in/aditya-kushwaha-77261b1b7"
        className="linkedin"><i className="bi bi-linkedin"></i></a></div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Projects</a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

  </header>



      }

    </>
  )
};
export default Header;
