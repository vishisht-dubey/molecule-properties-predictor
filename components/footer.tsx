"use client"
import React from "react"

export default function Footer() {
    const date = new Date();
    const currentyear = date.getFullYear();

    return <footer>
        <div className="w-full  bg-slate-100 dark:bg-black fixed bottom-0">
            <p className="text-center font-bold mt-5">Copyright©{currentyear}. All Rights Reserved</p>
            <p className="text-center text-base mb-4">Website Created and Developed By <a href="https://www.iitbhu.ac.in/dept/phe/people/rajnishphe" className="font-semibold text-blue-500">Team</a> under the guidance of <a href="https://www.iitbhu.ac.in/dept/phe/people/rajnishphe" className="font-semibold text-blue-500">Prof. Dr. Rajnish</a> IIT-BHU, Varanasi 221005</p>
        </div>
    </footer>
}