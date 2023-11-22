import React, { useEffect } from 'react';
import './adminNav.css';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBorderAll, faMessage, faGripVertical, faBuildingWheat } from '@fortawesome/free-solid-svg-icons'
// import './main';


export default function AdminNav() {
  useEffect(() => {
    // Add hovered class to the selected list item
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    // Menu Toggle
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    const toggleNavigation = () => {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };

    toggle.onclick = toggleNavigation;

    // Clean up event listeners on component unmount
    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
      toggle.onclick = null;
    };
  }, []); // Empty dependency array ensures useEffect runs once on component mount


  // use location
  const location = useLocation();

  useEffect(() => {
    // Add the "hovered" class to the "Dashboard" link when the page loads
    const dashboardLink = document.querySelector(".navigation li a[href='/admin']");
    if (dashboardLink && location.pathname === '/admin') {
      dashboardLink.parentElement.classList.add("hovered");
    }

    // Retrieve the active link from localStorage
    const activeLinkPath = localStorage.getItem("activeLinkPath");
    const activeLink = document.querySelector(`.navigation li a[href='${activeLinkPath}']`);
    if (activeLink) {
      activeLink.parentElement.classList.add("hovered");
    }
  }, [location.pathname]); // Run this effect whenever the pathname changes

  useEffect(() => {
    // Save the active link to localStorage when the "hovered" class is added
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
      localStorage.setItem("activeLinkPath", this.querySelector("a").getAttribute("href"));
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    // Clean up event listeners on component unmount
    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []); // Empty dependency array ensures useEffect runs once on component mount

return (
    <>
    {/* // <!-- =============== Navigation ================ --> */}
    
    <div className="navigation">
        <ul>
          <li>
            <span className="logo">
              
            </span>
            <span className="title">Welcome Admin</span>
          </li>

          <li >
            <Link to="/admin"> {/* Specify the link destination */}
              <span className="icoN">
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faGripVertical} />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>

                <li className={location.pathname === '/categories' ? 'hovered' : ''}>
                    <Link to={'categories'}>
                        <span className="icoN">
                        <FontAwesomeIcon className="FontAwesomeIcon" icon={faBorderAll} />
                        </span>
                        <span className="title">Categories</span>
                    </Link>
                </li>

                {/* <li className={location.pathname === '/message' ? 'hovered' : ''}>
                    <NavLink to={'message'}>
                        <span className="icoN">
                        <FontAwesomeIcon className="FontAwesomeIcon" icon={faMessage} />
                        </span>
                        <span className="title">Messages</span>
                    </NavLink>
                </li> */}

                <li className={location.pathname === '/allProperty' ? 'hovered' : ''}>
                    <Link to={'allProperty'}>
                        <span className="icoN">
                        <FontAwesomeIcon className="FontAwesomeIcon" icon={faBuildingWheat} />
                        </span>
                        <span className="title">All Property</span>
                    </Link>
                </li>


                <li className={location.pathname === '/#' ? 'hovered' : ''}>
                    <Link to={'#'}>
                        <span className="icoN">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="main">
            <div className="topbar">
               <div className="sticky">
               <div className="toggle" >
                <FontAwesomeIcon icon={faBars} />
                </div>

                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here"/>
                        {/* <FontAwesomeIcon className="FontAwesomeIcon" icon={faMagnifyingGlass} /> */}
                    </label>
                </div>

                <div className="user">
                    <img src="assets/imgs/customer01.jpg" alt=""/>
                </div>
               </div>
            </div>
        <main>
            
           <Outlet />
         </main>
            </div>
        

        

       
         </>
  )
}
