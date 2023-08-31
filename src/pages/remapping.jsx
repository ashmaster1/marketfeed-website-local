import Head from 'next/head';

import Footer from '../components/Footer';
import HeaderFullWidth from '../components/HeaderFullWidth';
// import EMIForm from "../components/EMIForm";
// import { useState, useEffect } from "react";
import RemappingComponent from '../components/RemappingComponent';

export default function EmiCalculator() {
  return (
    <>
      <Head />
      <HeaderFullWidth type="CALC" />
      <RemappingComponent />
      <Footer />
    </>
  );
}
