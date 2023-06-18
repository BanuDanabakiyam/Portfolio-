import Link from "next/link";
import Layout from "./Layout";
import React from "react";
const Footer = () => {
    return(
        <div>
            <footer className="w-full border-t-2 border-solid border-dark font-medium">
                <Layout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="felx items-center">
                    Build With <span className="text-primary text-2xl px-1">&#9825;</span>by&nbsp;
                    <Link href="/" target="_blank" className="underline underline-offset-2 ">CodeBucks</Link>

                </div>
                <Link href="/" target="_blank" className="underline underline-offset-2 ">Say Hello </Link>
                </Layout>
                
            </footer>
            
        </div>
    );
}

export default Footer;