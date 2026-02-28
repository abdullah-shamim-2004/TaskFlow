import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-4 py-8 mt-16">
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 rounded-lg mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
             Task<span className="text-primary">Flow</span>
          </h2>
          <p className="text-sm text-gray-300">
            Plan, prioritize, and accomplish your tasks with ease. Manage users,
            products, and analytics all in one place.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-lg">
            <a href="https://www.facebook.com/" className="hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="https://x.com/" className="hover:text-primary">
              <FaXTwitter />
            </a>
            <a
              href="mailto:contact@taskflow.com"
              className="hover:text-primary"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h6 className="footer-title text-primary">Navigate</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/products" className="link link-hover">
            Products
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
          <Link to="/dashboard" className="link link-hover">
            Dashboard
          </Link>
        </div>

        {/* Dashboard */}
        <div>
          <h6 className="footer-title text-primary">Dashboard</h6>
          <Link to="/dashboard" className="link link-hover">
            Overview
          </Link>
          <Link to="/dashboard/users" className="link link-hover">
            Users
          </Link>
          <Link to="/dashboard/products" className="link link-hover">
            Products
          </Link>
          <Link to="/dashboard/analytics" className="link link-hover">
            Analytics
          </Link>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title text-primary">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
