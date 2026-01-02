import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../ui/Logo';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content rounded-t-xl mt-20">
            <div className="w-11/12 mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <Logo />
                        <p className="text-base opacity-70 leading-relaxed max-w-xs">
                            Bringing joy and learning to every child's world. Discover our curated collection of toys that inspire imagination and growth.
                        </p>
                        <div className="flex gap-3">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="w-10 h-10 rounded-xl bg-base-100 shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'Products', 'About', 'Contact', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                                        className="hover:text-primary hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-8 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FaMapMarkerAlt />
                                </div>
                                <span className="text-sm opacity-80 pt-1">Chandgaon, Chattogram, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FaPhoneAlt />
                                </div>
                                <span className="text-sm opacity-80">01851588329</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FaEnvelope />
                                </div>
                                <span className="text-sm opacity-80">mohammadrashel002@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-8 relative inline-block">
                            Newsletter
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <p className="text-sm opacity-70 mb-6">
                            Join our community and get 10% off your first purchase!
                        </p>
                        <div className="space-y-3">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="input input-bordered w-full pl-4 pr-12 bg-base-100 focus:outline-primary border-none shadow-inner" 
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform">
                                    <FaEnvelope size={14} />
                                </button>
                            </div>
                            <p className="text-[10px] opacity-50 px-2">
                                * We respect your privacy and never spam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-linear-to-r from-transparent via-base-content/10 to-transparent my-12"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm opacity-60">
                        © {new Date().getFullYear()} <span className="font-bold text-primary">Hero Kidz</span>. Made with ❤️ for kids.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm opacity-60">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/shipping" className="hover:text-primary transition-colors">Shipping Info</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;