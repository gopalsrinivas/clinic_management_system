import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.2.0
        </div>
        <strong>Copyright &copy; 2014-{currentYear} <a href="#">Clinic Management System</a>.</strong> All rights reserved.
      </footer>
    </>
  )
}

export default Footer