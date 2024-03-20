"use client"
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Page = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/assets/plugins/jquery/jquery.min.js';
        script.async = true;

        script.onload = () => {
            // jQuery is loaded, you can now check its availability
            if (window.jQuery) {
                console.log('jQuery is loaded.');
            } else {
                console.log('jQuery is not loaded yet.');
            }
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">
                <Header />
                <Menu />
              
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Blank Page</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Blank Page</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Title</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                Start creating your amazing application!
                            </div>
                            <div className="card-footer">
                                Footer
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
                <aside className="control-sidebar control-sidebar-dark"></aside>
            </div>
        </div>
    );
};

export default Page;