import React from 'react';
import { ReactComponent as PhotoEditingIcon } from '../icons/learnmoreicons/image-svgrepo-com.svg';
import { ReactComponent as UserInterfaceIcon } from '../icons/learnmoreicons/user-interface-svgrepo-com.svg';
import { ReactComponent as SecurePrivateIcon } from '../icons/learnmoreicons/privacy-dashboard-svgrepo-com.svg';
import { ReactComponent as QualityIcon } from '../icons/learnmoreicons/suitability-analysis-output-svgrepo-com.svg';

export default function LearnMore() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Enhance Your Photo Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to create and edit stunning photos</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Capture, customize, and cherish your precious moments with our intuitive photo album and powerful photo editor. Take your photography skills to the next level.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <PhotoEditingIcon className="h-6 w-6 text-white" />
                </div>
                Photo Editing Tools
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Unleash your creativity with a comprehensive set of photo editing tools. Enhance colors, apply filters, remove imperfections, and create stunning compositions.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <UserInterfaceIcon className="h-6 w-6 text-white" />
                </div>
                Intuitive User Interface
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Our user-friendly interface makes it easy for you to navigate through the photo album and editor. Enjoy a seamless and enjoyable editing experience.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <SecurePrivateIcon className="h-6 w-6 text-white" />
                </div>
                Secure and Private
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Rest assured that your photos and personal information are kept secure and private. We prioritize data protection to ensure your peace of mind.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <QualityIcon className="h-6 w-6 text-white" />
                </div>
                High-Quality Outputs
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Produce professional-quality photos with high resolution and stunning details. Ensure your images look their best when printed or shared online.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
