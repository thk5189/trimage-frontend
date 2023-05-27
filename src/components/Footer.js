import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer(props) {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Company Mission</h2>
            <p className="text-gray-400 text-sm">
              Trimage combines memory preservation and capturing extraordinary moments effortlessly. It offers a user-friendly platform to relive the past, enhance photos, and unleash emotions. With intuitive tools, Trimage empowers users to transform snapshots into remarkable masterpieces. Through Trimage, we immortalize stories, celebrate achievements, and treasure life's priceless moments.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Social Media</h2>
            <div className="flex items-center">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 mr-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 mr-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-4" />
              </a>
              {/* Add more social media links with icons as needed */}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400 text-sm">
              Phone: 123-456-7890
              <br />
              Email: info@trimage.com
              <br />
              Address: 123 Main Street, City, Country
            </p>
          </div>
        </div>
        <hr className="border-gray-200 mt-8" />
        <div className="text-gray-400 text-xs mt-6">
          &copy; {new Date().getFullYear()} Trimage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
