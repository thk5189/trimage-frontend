import React from 'react';

function Footer(props) {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Company Mission</h2>
            <p className="text-gray-400 text-sm">
              Trimage is a versatile web application that seamlessly combines the functionalities of a photo album and a photo editor. It provides users with an intuitive platform to upload, manage, and organize their photo albums while also offering powerful photo editing capabilities. With Trimage, users can adjust photo size, rotation, contrast, brightness, apply filters, and more, all within the same application.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Social Media</h2>
            <div className="flex items-center">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 mr-4" viewBox="0 0 24 24">
                  {/* Add your social media icon SVG code here */}
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 mr-4" viewBox="0 0 24 24">
                  {/* Add your social media icon SVG code here */}
                </svg>
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
        <hr className="border-gray-700 mt-8" />
        <div className="text-gray-400 text-xs mt-6">
          &copy; {new Date().getFullYear()} Trimage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
