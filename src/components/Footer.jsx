import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content sm:footer-horizontal text-center sm:text-left">
            {/* Services */}
            <nav className="flex flex-col sm:flex-1 sm:items-start mb-4 sm:mb-0">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>

            {/* Company */}
            <nav className="flex flex-col sm:flex-1 sm:items-start mb-4 sm:mb-0">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>

            {/* Legal */}
            <nav className="flex flex-col sm:flex-1 sm:items-start mb-4 sm:mb-0">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>

            {/* Social Icons */}
            <div className="flex flex-col sm:flex-1 sm:items-start">
                <h6 className="footer-title mb-2">Follow Us</h6>
                <div className="flex justify-center sm:justify-start gap-4 text-xl">
                    <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                    <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
                    <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                    <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
