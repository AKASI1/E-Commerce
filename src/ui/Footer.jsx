import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  GitHub,
  Globe,
} from "react-feather";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:(grid-cols-3) border-t border-gray-300 bg-gray-200 px-4 ">
      <div className="m-4 sm:m-6 flex-1">
        <h2 className="text-4xl text-center md:text-right mb-4">هدي البيروت</h2>
        <p className="text-justify text-gray-700">
          ⬅️ تشكيلة ملابس منزلية مميزة للنساء اكتشفيها الآن! اقوي الموديلات
          تناسب جمالك و أناقتك ✨😍 متاح حالياً اقوي كولكشن عبايات و اسدالات
          👌🤍
        </p>
        <ul className="flex mt-6 justify-center md:justify-start space-x-4 gap-3">
          <li>
            <Link
              to="https://www.facebook.com/hodabeirutt"
              style={{ color: "#3f51b5" }}
            >
              <Facebook />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/hodabeirut/"
              style={{ color: "#e91e63" }}
            >
              <Instagram />
            </Link>
          </li>
          <li>
            <Link to="https://t.me/Hodaa191" style={{ color: "#3f51b5" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
                style={{
                  width: "35px",
                  height: "32px",
                  transform: " translate(18px, -3px)",
                  position: "absolute",
                }}
              >
                <path
                  fill="#29b6f6"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                ></path>
                <path
                  fill="#fff"
                  d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                ></path>
                <path
                  fill="#b0bec5"
                  d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <a href="https://t.me/Hodaa191" style={{ color: "#3f51b5" }}>
              <Globe />
            </a>
          </li>
        </ul>
      </div>
      <div className="m-4 sm:m-6">
        {/* <h2 className="text-xl text-center md:text-right font-medium mb-4">
          Useful Links
        </h2>
        <ul className="flex flex-col flex-wrap h-36 space-y-1 text-gray-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/products?category=men">Men Fashion</Link>
          </li>
          <li>
            <Link to="/products?category=women">Women Fashion</Link>
          </li>
          <li>
            <Link to="/orders">Track Order</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul> */}
      </div>
      <div className="m-4 sm:m-6">
        <h2 className="text-xl text-center md:text-right font-medium mb-4">
          معلومات
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center">
            <MapPin className="w-5 h-5 ml-2" />
            <span>المنطقة الصناعية، مدينة العبور، القاهرة</span>
          </li>
          <a href="#" className="flex items-center">
            <Phone className="w-5 h-5 ml-2" />
            <span dir="ltr">+20 010 2183 7593</span>
          </a>
          <li className="flex items-center">
            <Mail className="w-5 h-5 ml-2" />
            <a href="mailto:nimogha@gmail.com" target="_blank">
              hodahomewear@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <GitHub className="w-5 h-5 ml-2" />
            <a href="http://yokaaa.com" target="_blank">
              /YOKA.COM
            </a>
            <span className="mx-1">built by</span>
          </li>
        </ul>
        <div className="mt-6">
          <img
            className="mx-auto md:mx-0"
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="payment providers"
          />
        </div>
      </div>
    </footer>
  );
}
