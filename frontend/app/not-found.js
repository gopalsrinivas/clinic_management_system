import React from 'react'
import { redirect } from 'next/navigation'

const notFound = () => {
    redirect("/dashboard")
  return (
    
      <div className="content-wrapper1">
          <section className="content-header">
              <div className="container-fluid">
                  <div className="row mb-2">
                      <div className="col-sm-6">
                      </div>
                      <div className="col-sm-6">
                          <h1>404 Error</h1>
                      </div>
                  </div>
              </div>
          </section>
          <section className="content">
              <div className="error-page">
                  <h2 className="headline text-warning"> 404</h2>
                  <div className="error-content">
                      <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>
                      <p>
                          We could not find the page you were looking for.
                          Meanwhile, you may <a href="#">return to dashboard</a>
                      </p>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default notFound