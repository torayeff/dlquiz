import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default ({children, title}) => (
  <div>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
      <title>{title}</title>
      <meta name="description"
            content="Deep learning questions for an exam/interview preparation or just to master it."/>
      <link rel="icon" type="image/png" sizes="64x64" href="assets/img/favicon.png"/>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700"/>
      <link rel="stylesheet" href="assets/fonts/ionicons.min.css"/>
      <link rel="stylesheet" href="assets/css/Footer-Basic.css"/>
      <link rel="stylesheet" href="assets/css/Header-Blue.css"/>
      <link rel="stylesheet" href="assets/css/styles.css"/>
      <script src="assets/js/jquery.min.js"/>
      <script src="assets/bootstrap/js/bootstrap.min.js"/>
    </Head>
    <Header/>
    <div id="dlq-wrapper">
      {children}
    </div>
    <Footer/>
  </div>
);