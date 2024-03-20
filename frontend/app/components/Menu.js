import React from 'react'
import { usePathname } from 'next/navigation';


const Menu = () => {
  const currentRoute = usePathname();
  console.log(currentRoute)
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <img src="/assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
          <span className="brand-text font-weight-light">Admin</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="/assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Clinic Mng System</a>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a href="/dashboard" className={currentRoute === "/dashboard" ? "nav-link active" : "nav-link"}>
                  <i className="nav-icon far fa-image"></i>
                  <p>
                    Dashboard
                  </p>
                </a>
              </li>
              
              <li className="nav-header">Doctors</li>
              <li className="nav-item">
                <a href="/dashboard/doctors" className={currentRoute === "/dashboard/doctors" ? "nav-link active" : "nav-link"}>
                  <i className="nav-icon far fa-circle text-danger"></i>
                  <p>Doctor List</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/dashboard/patients" className={currentRoute === "/dashboard/patients" ? "nav-link active" : "nav-link"}>
                  <i className="nav-icon far fa-circle text-warning"></i>
                  <p>Level 1</p>
                </a>
              </li>

              <li className="nav-header">Patients</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger"></i>
                  <p className="text">Patient List</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning"></i>
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info"></i>
                  <p>Informational</p>
                </a>
              </li>

              <li className="nav-header">Settings</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger"></i>
                  <p className="text">Profile</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning"></i>
                  <p>Change Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info"></i>
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Menu