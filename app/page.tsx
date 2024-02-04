"use client"
import React from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
// import {Jsme} from "jsme-react"

export default function Home() {
  const jsmeEditorComponent = 10; 
  // const jsmeOnLoad = () => {
  //  var jsmeApplet = new JSApplet.JSME("jsme_container", "380px", "340px");
  // }

  return (
    <div>
      <Navbar />
      <div>
      <p className='text-center font-medium text-4xl'>Let's get started</p> 
      </div>
      <div>
        {/* <p>This is a JSME Block</p> */}
        <div>This is a JSME div</div>
      </div>
      <Footer />
    </div>
  )
}
