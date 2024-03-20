import { Inter } from "next/font/google";
import Head from 'next/head'
import Script from 'next/script'

import '../public/assets/plugins/fontawesome-free/css/all.min.css'
import '../public/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import '../public/assets/dist/css/adminlte.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clinic Management System",
  description: "Clinic Management System",
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <link rel="icon" href="images/favicon.ico" type="image/ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
      </Head>
      <body className={inter.className}>
        {children}
        <Script src="assets/plugins/jquery/jquery.min.js" />
        <Script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/dist/js/adminlte.min.js" />
        <Script src="assets/dist/js/demo.js" />
      </body>
    </html>
  );
}
