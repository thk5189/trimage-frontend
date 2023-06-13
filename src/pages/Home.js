// import React from 'react';
// import '../css/Home.css';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Trimko</h1>
//       <button className="start-button">Let's Start</button>
//     </div>
//   );
// }

// export default Home;

import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="bg-white">
  
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                {/* <stop stopColor="#199999" />
                <stop offset={1} stopColor="#199999" /> */}
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight bg-white sm:text-4xl">
              Unleash your creativity
              
              {/* <br />
              Start using our app today. */}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
            Capture, Customize, and Cherish Your Precious Moments
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link to="/album" className="rounded-md bg-blue-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Create Album
              </Link>
              <Link to="/learnmore" className="text-sm font-semibold leading-6 text-black">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[37rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://i.imgur.com/Z4CGuMd.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';

// const Home = () => {
//   const [isFirebaseAvailable, setFirebaseAvailable] = useState(false);

//   useEffect(() => {
//     // Assuming you have a way to determine if Firebase is available
//     const checkFirebaseAvailability = () => {
//       // Check if Firebase is available
//       // Set the value of isFirebaseAvailable accordingly
//       setFirebaseAvailable(true); // Change this based on your logic
//     };

//     checkFirebaseAvailability();
//   }, []);

//   useEffect(() => {
//     if (isFirebaseAvailable) {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           const uid = user.uid;
//           console.log("uid", uid);
//         } else {
//           console.log("user is logged out");
//         }
//       });
//     }
//   }, [isFirebaseAvailable]);

//   if (isFirebaseAvailable) {
//     return (
//       <div className="bg-white">
//         <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
//           <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//             <svg
//               viewBox="0 0 1024 1024"
//               className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
//               aria-hidden="true"
//             >
//               <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
//               <defs>
//                 <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                   {/* <stop stopColor="#199999" />
//                   <stop offset={1} stopColor="#199999" /> */}
//                 </radialGradient>
//               </defs>
//             </svg>
//             <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//               <h2 className="text-3xl font-bold tracking-tight bg-white sm:text-4xl">
//                 Unleash your creativity
                
//                 {/* <br />
//                 Start using our app today. */}
//               </h2>
//               <p className="mt-6 text-lg leading-8 text-gray-800">
//                 Capture, Customize, and Cherish Your Precious Moments
//               </p>
//               <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//                 <Link to="/learnmore" className="rounded-md bg-blue-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:
// outline-offset-2 focus-visible:outline-white">
// Create Album
// </Link>
// <Link to="/learnmore" className="text-sm font-semibold leading-6 text-black">
// Learn more <span aria-hidden="true">→</span>
// </Link>
// </div>
// </div>
// <div className="relative mt-16 h-80 lg:mt-8">
// <img
// className="absolute left-0 top-0 w-[37rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
// src="https://i.imgur.com/Z4CGuMd.png"
// alt="App screenshot"
// width={1824}
// height={1080}
// />
// </div>
// </div>
// </div>
// </div>
// );
// } else {
// return (
// <section>
// {/* Non-Firebase content */}
// </section>
// );
// }
// }

// export default Home;


// import React, { useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase';

// const Home = () => {
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         console.log('uid', uid);
//       } else {
//         console.log('user is logged out');
//       }
//     });
//   }, []);

//   return (
//     <section>
//       <div className="bg-white">
//         <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
//           <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//             <svg
//               viewBox="0 0 1024 1024"
//               className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
//               aria-hidden="true"
//             >
//               <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
//               <defs>
//                 <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                   {/* <stop stopColor="#199999" />
//                   <stop offset={1} stopColor="#199999" /> */}
//                 </radialGradient>
//               </defs>
//             </svg>
//             <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//               <h2 className="text-3xl font-bold tracking-tight bg-white sm:text-4xl">
//                 Unleash your creativity
//                 {/* <br />
//                 Start using our app today. */}
//               </h2>
//               <p className="mt-6 text-lg leading-8 text-gray-800">
//                 Capture, Customize, and Cherish Your Precious Moments
//               </p>
//               <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//                 <a
//                   href="/learnmore"
//                   className="rounded-md bg-blue-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                 >
//                   Create Album
//                 </a>
//                 <a href="/learnmore" className="text-sm font-semibold leading-6 text-black">
//                   Learn more <span aria-hidden="true">→</span>
//                 </a>
//               </div>
//             </div>
//             <div className="relative mt-16 h-80 lg:mt-8">
//               <img
//                 className="absolute left-0 top-0 w-[37rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          
//                 src="https://i.imgur.com/Z4CGuMd.png"
//                 alt="App screenshot"
//                 width={1824}
//                 height={1080}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
