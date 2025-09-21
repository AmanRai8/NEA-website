// import React from "react";

// const DesktopNavbar = () => {
//   return <div>
//     <!-- NEA Desktop Navbar -->
// <div id="navbar" class="d-none d-md-block bg-primary text-white">
//   <div class="container">
//     <div class="d-flex justify-content-end align-items-center py-2">

//       <!-- Home -->
//       <div class="menu-item mx-2">
//         <a href="https://www.nea.org.np" class="menu-link text-white">Home</a>
//       </div>

//       <!-- About Us -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-white">About Us</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 900px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <div class="row">
//             <!-- Introduction -->
//             <div class="col-md-4">
//               <h6 class="text-primary text-uppercase text-underline">Introduction</h6>
//               <a href="https://www.nea.org.np/aboutus" class="menu-content-link">About Us</a>
//               <a href="https://www.nea.org.np/organizational_structure" class="menu-content-link">Organizational Structure</a>
//               <a href="https://www.nea.org.np/bod" class="menu-content-link">Board of Directors</a>
//               <a href="https://www.nea.org.np/contacts" class="menu-content-link">Contact Information</a>
//             </div>
//             <!-- Corporate Structure -->
//             <div class="col-md-4">
//               <h6 class="text-primary text-uppercase text-underline">Corporate Structure</h6>
//               <a href="https://www.nea.org.np/genDirectorate" class="menu-content-link">Generation Directorate</a>
//               <a href="https://www.nea.org.np/transDirectorate" class="menu-content-link">Transmission Directorate</a>
//               <a href="https://www.nea.org.np/disDirectorate" class="menu-content-link">Distribution Directorate</a>
//             </div>
//             <!-- Provincial Offices -->
//             <div class="col-md-4">
//               <h6 class="text-primary text-uppercase text-underline">Provincial Offices</h6>
//               <a href="https://www.nea.org.np/regional/1" class="menu-content-link">कोशी प्रदेश, बिराटनगर</a>
//               <a href="https://www.nea.org.np/regional/2" class="menu-content-link">मधेश प्रदेश, जनकपुर</a>
//               <a href="https://www.nea.org.np/regional/4" class="menu-content-link">वाग्मती प्रदेश, काठमाडौँ</a>
//               <a href="https://www.nea.org.np/regional/6" class="menu-content-link">गण्डकी प्रदेश, पोखरा</a>
//               <a href="https://www.nea.org.np/regional/5" class="menu-content-link">लुम्बिनी प्रदेश, बुटवल</a>
//               <a href="https://www.nea.org.np/regional/9" class="menu-content-link">कर्णाली प्रदेश, सुर्खेत</a>
//               <a href="https://www.nea.org.np/regional/8" class="menu-content-link">सुदुरपश्चिम प्रदेश, अत्तरिया</a>
//               <h6 class="pt-3 text-primary text-uppercase text-underline">Province Division Offices</h6>
//               <a href="https://www.nea.org.np/regional/3" class="menu-content-link">वाग्मती प्रदेश, हेटौडा</a>
//               <a href="https://www.nea.org.np/regional/7" class="menu-content-link">लुम्बिनी प्रदेश, नेपालगंज</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Media Center -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-white">Media Center</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 900px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <div class="row">
//             <div class="col-md-3">
//               <h6 class="text-primary text-uppercase text-underline">Forms / Information</h6>
//               <a href="https://www.nea.org.np/form" class="menu-content-link">Forms / Information</a>
//               <a href="https://www.nea.org.np/publications" class="menu-content-link">Publication / Reports</a>
//               <a href="https://www.nea.org.np/acts_regulations" class="menu-content-link">Acts / Regulations</a>
//               <a href="https://www.nea.org.np/press_release" class="menu-content-link">Press Releases</a>
//             </div>
//             <div class="col-md-3">
//               <h6 class="text-primary text-uppercase text-underline">News / Downloads</h6>
//               <a href="https://www.nea.org.np/notice" class="menu-content-link">News / Notices</a>
//               <a href="https://www.nea.org.np/downloads" class="menu-content-link">Downloads</a>
//             </div>
//             <div class="col-md-3">
//               <h6 class="text-primary text-uppercase text-underline">Annual Publications</h6>
//               <a href="https://www.nea.org.np/annual_report" class="menu-content-link">Annual Reports</a>
//             </div>
//             <div class="col-md-3">
//               <h6 class="text-primary text-uppercase text-underline">Gallery</h6>
//               <a href="https://www.nea.org.np/photo_gallery" class="menu-content-link">Image Gallery</a>
//               <a href="https://www.nea.org.np/video_gallery" class="menu-content-link">Video Gallery</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Consumers -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-white">Consumers</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 600px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <div class="row">
//             <div class="col-md-6">
//               <h6 class="text-primary text-uppercase text-underline">Bill Payment</h6>
//               <a target="_blank" href="https://www.neabilling.com/viewonline" class="menu-content-link">Check Your Bill</a>
//               <a href="https://www.nea.org.np/bill_payment" class="menu-content-link">Pay Your Bill</a>
//               <h6 class="pt-3 text-primary text-uppercase text-underline">TELEPHONE DIRECTORY</h6>
//               <a href="https://www.nea.org.np/nolights" class="menu-content-link">No Light Numbers</a>
//               <a href="https://www.nea.org.np/dcscontacts" class="menu-content-link">Contact Information of DCS</a>
//             </div>
//             <div class="col-md-6">
//               <h6 class="text-primary text-uppercase text-underline">Downloads</h6>
//               <a href="https://www.nea.org.np/new_connection" class="menu-content-link">नयाँ ग्राहक आवेदन फारम</a>
//               <a href="https://www.nea.org.np/meter_transfer" class="menu-content-link">मीटर नामसारी फारम</a>
//               <h6 class="pt-3 text-primary text-uppercase text-underline">TARRIF RATES</h6>
//               <a target="_blank" href="https://nea.org.np/admin/assets/uploads/Consumer_Tarrif_data.pdf" class="menu-content-link">Consumer Tarrif Rates</a>
//               <a target="_blank" href="https://nea.org.np/admin/assets/uploads/PPA_Rates.pdf" class="menu-content-link">PPA Tarrif Rates</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Recruitment -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-white">Recruitment</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 600px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <div class="row">
//             <div class="col-md-6">
//               <h6 class="text-primary text-uppercase text-underline">Internal / Promotional</h6>
//               <a href="https://www.nea.org.np/recruitment_internal/1323" class="menu-content-link">पाठ्यक्रम (आन्तरिक)</a>
//               <a href="https://www.nea.org.np/recruitment_internal/2129" class="menu-content-link">विज्ञापन तथा सूचनाहरू</a>
//               <a href="https://www.nea.org.np/recruitment_internal/1891" class="menu-content-link">नतिजाहरू</a>
//               <a href="https://www.nea.org.np/recruitment_internal/1683" class="menu-content-link">पुनरावलोकन समितिको सूचना</a>
//               <a href="https://www.nea.org.np/recruitment_internal/2045" class="menu-content-link">स्वीकृत नामावली प्रकाशित गरिएको सम्बन्धि सूचना (आन्तरिक)</a>
//             </div>
//             <div class="col-md-6">
//               <h6 class="text-primary text-uppercase text-underline">Open</h6>
//               <a href="https://www.nea.org.np/recruitment_open/321" class="menu-content-link">विज्ञापन तथा सूचनाहरू</a>
//               <a href="https://www.nea.org.np/recruitment_open/1606" class="menu-content-link">स्वीकृत नामावली प्रकाशित गरिएको सम्बन्धि सूचना (खुला)</a>
//               <a href="https://www.nea.org.np/recruitment_open/1613" class="menu-content-link">दक्ष/बिज्ञ र कर्मचारीहरुको आचार संहिता, २०७६</a>
//               <a href="https://www.nea.org.np/recruitment_open/2146" class="menu-content-link">पाठ्यक्रम (खुला)</a>
//               <a href="https://www.nea.org.np/recruitment_open/1508" class="menu-content-link">दक्षको सुचिमा नाम समावेश गर्ने सूचना तथा निवेदन फाराम</a>
//               <a href="https://www.nea.org.np/recruitment_open/27" class="menu-content-link">परीक्षा कार्यक्रम</a>
//               <a href="https://www.nea.org.np/recruitment_open/14" class="menu-content-link">नतिजाहरू</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Online Application -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-orange">Online Application</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 400px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <a target="_blank" href="https://career.nea.org.np" class="menu-content-link">Open</a>
//           <a target="_blank" href="https://hris.nea.org.np" class="menu-content-link">Promotional / Internal</a>
//         </div>
//       </div>

//       <!-- Tenders -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-white">Tenders</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 400px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <a href="https://www.nea.org.np/tender_prequalification" class="menu-content-link">Tender / Prequalifications</a>
//           <a href="https://www.nea.org.np/notifications" class="menu-content-link">Notifications</a>
//           <a href="https://www.nea.org.np/award_of_contract" class="menu-content-link">Award of Contract</a>
//         </div>
//       </div>

//       <!-- NEA Operational Reports -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-white">NEA Operational Reports</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 400px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <a href="https://www.nea.org.np/dailyOperationalReports" class="menu-content-link">Daily Operational Reports</a>
//           <a href="https://www.nea.org.np/monthlyOperationalReports" class="menu-content-link">Monthly Operational Reports</a>
//           <a href="https://www.nea.org.np/yearlyOperationalReports" class="menu-content-link">Yearly Operational Reports</a>
//         </div>
//       </div>

//       <!-- स्वत प्रकाशन -->
//       <div class="menu-item mx-2">
//         <a href="https://www.nea.org.np/monthlyUpdates" class="menu-link text-white">स्वत प्रकाशन</a>
//       </div>

//       <!-- Tarrif Rates -->
//       <div class="menu-item mx-2 position-relative">
//         <a href="#" class="menu-link text-orange">Tarrif Rates</a>
//         <div class="menu-content position-absolute bg-light text-dark p-3 shadow" style="width: 400px; top: 100%; left: 50%; transform: translateX(-50%); display: none;">
//           <a target="_blank" href="https://nea.org.np/admin/assets/uploads/Consumer_Tarrif_data.pdf" class="menu-content-link">Consumer Tarrif</a>
//           <a target="_blank" href="https://nea.org.np/admin/assets/uploads/PPA_Rates.pdf" class="menu-content-link">PPA Tarrif</a>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>

// {/* <!-- Navbar Hover Script -->
// <script>
//   document.querySelectorAll('.menu-item').forEach(item => {
//     item.addEventListener('mouseenter', () => {
//       const menu = item.querySelector('.menu-content');
//       if(menu) menu.style.display = 'block';
//     });
//     item.addEventListener('mouseleave', () => {
//       const menu = item.querySelector('.menu-content');
//       if(menu) menu.style.display = 'none';
//     });
//   });
// </script> */}

//   </div>;
// };

// export default DesktopNavbar;
