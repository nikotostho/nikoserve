import Link from "next/link";

export default function ServiceDetailsPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/services">Local Services</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/services">Dhaka</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/services">AC Repair &amp; Service</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">CoolCare AC Servicing</span>
          </nav>
        </div>
      </div>
      <main className="shell py-5">
        
        <div className="card overflow-hidden mb-4">
          
          <div className="relative ph ph-b h-[150px] sm:h-[210px] grid-noise">
            <div className="absolute top-3 right-3 flex gap-2">
              
              <button className="btn btn-sm !bg-white/90 !text-ink-900" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                  <circle cx="12" cy="14" r="3.2"></circle>
                </svg>
                42 photos
              </button>
              <button className="btn btn-sm !bg-white/90 !text-ink-900" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 5l11 7-11 7z"></path>
                </svg>
                3 videos
              </button>
            </div>
          </div>
          
          <div className="p-4 sm:p-5 -mt-12 relative">
            
            <div className="flex flex-col sm:flex-row gap-4">
              
              <div className="w-[92px] h-[92px] rounded-2xl bg-white p-1.5 shadow-pop shrink-0">
                <span className="ph ph-b w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex-1 min-w-0 sm:pt-11">
                
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  
                  <h1 className="font-display text-[22px] sm:text-[27px] font-extrabold tracking-tight">CoolCare AC Servicing &amp; Repair</h1>
                  
                  <span className="badge badge-teal">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    HaatBazar Verified
                  </span>
                  <span className="badge badge-gold !bg-gold-50 !text-gold-700">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="9" r="5"></circle>
                      <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                    </svg>
                    Top Pro 2026
                  </span>
                  <span className="badge badge-green badge-dot">Open now</span>
                </div>
                
                <p className="text-[13.5px] text-ink-600 mb-2">AC Repair &amp; Service · Appliance Repair · Since 2017 · Trade licence verified</p>
                
                <div className="flex flex-wrap items-center gap-3 text-[12.5px] mb-3">
                  
                  <span className="flex items-center gap-1.5">
                    <span className="rating-pill">
                      4.8 
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <a href="#reviews" className="link">1,032 ratings</a>
                  </span>
                  
                  <span className="text-ink-300">|</span>
                  <span className="text-ink-500">4,280 jobs completed</span>
                  
                  <span className="text-ink-300">|</span>
                  <span className="text-ink-500">Responds in ~12 min</span>
                  
                  <span className="text-ink-300">|</span>
                  <span className="text-ink-500">Serving 14 areas in Dhaka</span>
                </div>
                
                <p className="flex items-start gap-2 text-[13px] text-ink-600 mb-1">
                  <svg className="w-4 h-4 text-service-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  House 42, Road 7, Sector 7, Uttara, Dhaka 1230 · 
                  <button className="link" type="button">Get directions</button>
                </p>
                
                <p className="flex items-center gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Open today until 9:00 PM · 
                  <button className="link" data-scroll="#hours" type="button">See all hours</button>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              
              <button className="btn btn-service" data-modal-open="callModal" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                </svg>
                Show number
              </button>
              
              <a href="#book" className="btn btn-primary">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                  <path d="M8 3v4M16 3v4M3 10h18"></path>
                </svg>
                Book appointment
              </a>
              
              <button className="btn btn-outline" data-modal-open="quoteModal" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
                Request a quote
              </button>
              
              <button className="btn btn-outline" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
                WhatsApp
              </button>
              
              <button className="btn btn-outline btn-icon" data-toggle-class="is-on" aria-label="Save" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                </svg>
              </button>
              
              <button className="btn btn-outline btn-icon" aria-label="Share" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="2.5"></circle>
                  <circle cx="6" cy="12" r="2.5"></circle>
                  <circle cx="18" cy="19" r="2.5"></circle>
                  <path d="m8 11 8-4M8 13l8 4"></path>
                </svg>
              </button>
              
              <button className="btn btn-outline btn-icon" aria-label="Report" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21V4h9l-1 3h7l-2 6 2 6H5"></path>
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-4">
              
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="5"></circle>
                    <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                  </svg>
                </span>
                <p className="text-[12.5px] font-bold">9 years in business</p>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.2"></circle>
                    <path d="M2 21a7 7 0 0 1 14 0"></path>
                    <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
                  </svg>
                </span>
                <p className="text-[12.5px] font-bold">24 trained technicians</p>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
                <p className="text-[12.5px] font-bold">90-day service warranty</p>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                    <circle cx="12" cy="12" r="2.6"></circle>
                  </svg>
                </span>
                <p className="text-[12.5px] font-bold">Cash, bKash, Nagad, card</p>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="grid lg:grid-cols-[minmax(0,1fr)_330px] gap-5">
          
          <div className="min-w-0">
            
            <div className="card mb-4">
              <div className="tabs px-4" data-tabs="">
                
                <button className="tab is-active" data-tab="0" type="button">Overview</button>
                <button className="tab " data-tab="1" type="button">Services &amp; Prices</button>
                <button className="tab " data-tab="2" type="button">Photos</button>
                <button className="tab " data-tab="3" type="button">Reviews (1,032)</button>
                <button className="tab " data-tab="4" type="button">Q&amp;A</button>
                <button className="tab " data-tab="5" type="button">Team</button>
                <button className="tab " data-tab="6" type="button">Offers</button>
              </div>
              
              <div className="p-5" data-tab-panel="0">
                
                <h2 className="font-display text-[17px] font-extrabold mb-2">About CoolCare</h2>
                
                <p className="text-[13.5px] text-ink-600 leading-relaxed mb-4">CoolCare has been servicing air conditioners across Dhaka since 2017. Our team of 24 factory-trained technicians handles split, window, cassette and VRF systems for homes, offices, showrooms and restaurants. Every job comes with a written 90-day service warranty and a transparent price list — no hidden charges, no surprise "extra parts" bills.</p>
                
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-5">
                  
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Established</span>
                    <span className="text-[13px] text-ink-800">2017</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Business type</span>
                    <span className="text-[13px] text-ink-800">Service provider (Pvt. Ltd.)</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Trade licence</span>
                    <span className="text-[13px] text-ink-800">TRAD/DNCC/117420/2019 — verified</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Team size</span>
                    <span className="text-[13px] text-ink-800">24 technicians, 4 supervisors</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Service areas</span>
                    <span className="text-[13px] text-ink-800">Uttara, Airport, Khilkhet, Banani, Gulshan, Baridhara, Mirpur, Dhanmondi +6 more</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Emergency service</span>
                    <span className="text-[13px] text-ink-800">Yes — until 11 PM</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Languages</span>
                    <span className="text-[13px] text-ink-800">Bangla, English</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Payment modes</span>
                    <span className="text-[13px] text-ink-800">Cash, bKash, Nagad, Rocket, Visa/Mastercard, bank transfer</span>
                  </div>
                </div>
                
                <h3 className="text-[15px] font-extrabold mb-2.5">Services offered</h3>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="badge badge-teal">AC servicing</span>
                  <span className="badge badge-teal">Gas refill</span>
                  <span className="badge badge-teal">AC installation</span>
                  <span className="badge badge-teal">AC uninstallation</span>
                  <span className="badge badge-teal">Compressor repair</span>
                  <span className="badge badge-teal">PCB repair</span>
                  <span className="badge badge-teal">Duct cleaning</span>
                  <span className="badge badge-teal">Annual maintenance</span>
                  <span className="badge badge-teal">Chiller service</span>
                  <span className="badge badge-teal">VRF service</span>
                  <span className="badge badge-teal">Refrigerator repair</span>
                  <span className="badge badge-teal">Washing machine repair</span>
                </div>
                
                <h3 className="text-[15px] font-extrabold mb-2.5">Brands we service</h3>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="badge badge-gray">Gree</span>
                  <span className="badge badge-gray">Walton</span>
                  <span className="badge badge-gray">General</span>
                  <span className="badge badge-gray">Midea</span>
                  <span className="badge badge-gray">Samsung</span>
                  <span className="badge badge-gray">LG</span>
                  <span className="badge badge-gray">Daikin</span>
                  <span className="badge badge-gray">Carrier</span>
                  <span className="badge badge-gray">Hitachi</span>
                  <span className="badge badge-gray">Chigo</span>
                  <span className="badge badge-gray">Singer</span>
                  <span className="badge badge-gray">Panasonic</span>
                </div>
                
                <h3 className="text-[15px] font-extrabold mb-2.5">Why customers choose us</h3>
                
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold mb-0.5">On-time arrival</p>
                      <p className="text-[12px] text-ink-500 leading-relaxed">93% of jobs start within the promised time slot</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold mb-0.5">Written warranty</p>
                      <p className="text-[12px] text-ink-500 leading-relaxed">90 days on labour, 6 months on replaced parts</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                        <circle cx="12" cy="12" r="2.6"></circle>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold mb-0.5">Fixed price list</p>
                      <p className="text-[12px] text-ink-500 leading-relaxed">Quoted before work starts — approved by you</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="8" r="3.2"></circle>
                        <path d="M2 21a7 7 0 0 1 14 0"></path>
                        <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold mb-0.5">Background-checked staff</p>
                      <p className="text-[12px] text-ink-500 leading-relaxed">Every technician carries a photo ID card</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-[15px] font-extrabold mb-2.5" id="hours">Business hours</h3>
                
                <div className="rounded-xl border border-[#e7e9ef] overflow-hidden mb-5">
                  <div className="flex items-center justify-between px-4 py-2.5  ">
                    <span className="text-[13px] font-bold text-service-700">
                      Saturday 
                      <span className="badge badge-green ml-1.5">Today</span>
                    </span>
                    <span className="text-[13px] text-ink-600 mono">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 bg-ink-50/50 border-t border-[#f0f1f5]">
                    <span className="text-[13px] font-bold text-ink-700">Sunday</span>
                    <span className="text-[13px] text-ink-600 mono">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5  border-t border-[#f0f1f5]">
                    <span className="text-[13px] font-bold text-ink-700">Monday</span>
                    <span className="text-[13px] text-ink-600 mono">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 bg-ink-50/50 border-t border-[#f0f1f5]">
                    <span className="text-[13px] font-bold text-ink-700">Tuesday</span>
                    <span className="text-[13px] text-ink-600 mono">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5  border-t border-[#f0f1f5]">
                    <span className="text-[13px] font-bold text-ink-700">Wednesday</span>
                    <span className="text-[13px] text-ink-600 mono">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 bg-ink-50/50 border-t border-[#f0f1f5]">
                    <span className="text-[13px] font-bold text-ink-700">Thursday</span>
                    <span className="text-[13px] text-ink-600 mono">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5  border-t border-[#f0f1f5]">
                    <span className="text-[13px] font-bold text-ink-700">Friday</span>
                    <span className="text-[13px] text-ink-600 mono">3:00 PM – 9:00 PM</span>
                  </div>
                </div>
                
                <h3 className="text-[15px] font-extrabold mb-2.5">Location &amp; service area</h3>
                
                <div className="rounded-xl overflow-hidden border border-[#e7e9ef] mb-3">
                  <div className="ph ph-j h-[220px] relative">
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="w-10 h-10 rounded-full bg-brand-500 text-white grid place-items-center shadow-pop animate-pulse-soft">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                          <circle cx="12" cy="10" r="2.5"></circle>
                        </svg>
                      </span>
                    </div>
                    
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                      <button className="btn btn-sm btn-dark" type="button">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                          <circle cx="12" cy="10" r="2.5"></circle>
                        </svg>
                        Get directions
                      </button>
                      <button className="btn btn-sm !bg-white !text-ink-900" type="button">Open in Google Maps</button>
                    </div>
                  </div>
                </div>
                
                <p className="text-[12.5px] text-ink-500 mb-6">House 42, Road 7, Sector 7, Uttara, Dhaka 1230. Landmark: opposite Rajlakshmi Complex, beside BRAC Bank ATM.</p>
                
                <h3 className="text-[15px] font-extrabold mb-2.5">Certifications &amp; documents</h3>
                
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl border border-[#e7e9ef] flex gap-2.5">
                    <span className="w-9 h-9 rounded-lg bg-green-50 text-green-700 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[12.5px] font-extrabold">Trade licence</p>
                      <p className="text-[11px] text-ink-500">Verified 12 Jan 2026</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#e7e9ef] flex gap-2.5">
                    <span className="w-9 h-9 rounded-lg bg-green-50 text-green-700 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[12.5px] font-extrabold">TIN certificate</p>
                      <p className="text-[11px] text-ink-500">Verified 12 Jan 2026</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#e7e9ef] flex gap-2.5">
                    <span className="w-9 h-9 rounded-lg bg-green-50 text-green-700 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[12.5px] font-extrabold">Technician training cert.</p>
                      <p className="text-[11px] text-ink-500">Gree authorised</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="1" hidden>
                
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display text-[17px] font-extrabold">Price list</h2>
                  <span className="badge badge-gray">Updated 2 days ago</span>
                </div>
                
                <div className="tbl-wrap card-flat">
                  <table className="tbl">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Starting price</th>
                        <th>Duration</th>
                        <th></th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      <tr>
                        <td className="font-semibold text-ink-900">Split AC servicing (up to 1.5 ton)</td>
                        <td className="font-extrabold text-service-600">৳1,200</td>
                        <td>60–90 min</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">Split AC servicing (2 ton and above)</td>
                        <td className="font-extrabold text-service-600">৳1,600</td>
                        <td>90 min</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">Window AC servicing</td>
                        <td className="font-extrabold text-service-600">৳900</td>
                        <td>45–60 min</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">Gas refill R22 (per ton)</td>
                        <td className="font-extrabold text-service-600">৳2,200</td>
                        <td>60 min</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">Gas refill R410a (per ton)</td>
                        <td className="font-extrabold text-service-600">৳2,800</td>
                        <td>60 min</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">AC installation (split, indoor + outdoor)</td>
                        <td className="font-extrabold text-service-600">৳3,500</td>
                        <td>2–3 hours</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">AC uninstallation</td>
                        <td className="font-extrabold text-service-600">৳1,500</td>
                        <td>60 min</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">Compressor replacement</td>
                        <td className="font-extrabold text-service-600">Quote after inspection</td>
                        <td>Half day</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">PCB / thermostat repair</td>
                        <td className="font-extrabold text-service-600">৳2,500 onwards</td>
                        <td>2 hours</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-ink-900">Annual maintenance contract (4 visits)</td>
                        <td className="font-extrabold text-service-600">৳4,800/year</td>
                        <td>—</td>
                        <td className="text-right">
                          <a href="#book" className="btn btn-xs btn-service">Book</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-[12px] text-ink-400 mt-3">* Prices exclude spare parts. A ৳300 inspection fee applies if no work is carried out. Prices valid inside Dhaka city; outside Dhaka a travel charge applies.</p>
                
                <h3 className="text-[15px] font-extrabold mt-6 mb-3">Packages</h3>
                
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-[#e7e9ef] p-4 relative">
                    
                    <p className="font-display text-[15px] font-extrabold mb-1">Basic Clean</p>
                    <p className="font-display text-[24px] font-extrabold text-service-600 mb-3">৳1,200</p>
                    
                    <ul className="space-y-1.5 mb-4">
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Indoor unit cleaning
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Filter wash
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Performance check
                      </li>
                    </ul>
                    
                    <a href="#book" className="btn btn-sm btn-outline btn-block">Choose plan</a>
                  </div>
                  <div className="rounded-2xl border border-service-300 ring-2 ring-service-100 p-4 relative">
                    <span className="badge badge-teal absolute -top-2.5 left-4">Most popular</span>
                    
                    <p className="font-display text-[15px] font-extrabold mb-1">Deep Service</p>
                    <p className="font-display text-[24px] font-extrabold text-service-600 mb-3">৳2,400</p>
                    
                    <ul className="space-y-1.5 mb-4">
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Indoor + outdoor cleaning
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Chemical wash
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Gas pressure check
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        90-day warranty
                      </li>
                    </ul>
                    
                    <a href="#book" className="btn btn-sm btn-service btn-block">Choose plan</a>
                  </div>
                  <div className="rounded-2xl border border-[#e7e9ef] p-4 relative">
                    
                    <p className="font-display text-[15px] font-extrabold mb-1">Annual Contract</p>
                    <p className="font-display text-[24px] font-extrabold text-service-600 mb-3">৳4,800</p>
                    
                    <ul className="space-y-1.5 mb-4">
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        4 scheduled visits
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Priority booking
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        15% off spare parts
                      </li>
                      <li className="flex gap-2 text-[12.5px] text-ink-600">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Free emergency visit
                      </li>
                    </ul>
                    
                    <a href="#book" className="btn btn-sm btn-outline btn-block">Choose plan</a>
                  </div>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="2" hidden>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <button className="chip is-active" type="button">All (42)</button>
                  <button className="chip " type="button">Work in progress (18)</button>
                  <button className="chip " type="button">Before &amp; after (9)</button>
                  <button className="chip " type="button">Team (7)</button>
                  <button className="chip " type="button">Office (5)</button>
                  <button className="chip " type="button">Certificates (3)</button>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-a ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-b ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-c ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-d ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-e ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-f ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-g ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-h ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-i ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-a ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-b ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-xl overflow-hidden card-hover" type="button">
                    <span className="ph ph-c ratio-4 w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                        <circle cx="12" cy="14" r="3.2"></circle>
                      </svg>
                    </span>
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <button className="btn btn-outline" type="button">Load 30 more photos</button>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="3" hidden id="reviews">
                
                <div className="grid md:grid-cols-[250px_1fr] gap-6 pb-5 border-b border-[#f0f1f5]">
                  
                  <div className="text-center">
                    <p className="font-display text-[44px] font-extrabold leading-none">4.8</p>
                    <span className="stars stars-lg">
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    
                    <p className="text-[12.5px] text-ink-500 mt-1.5">1,032 ratings · 640 written</p>
                    <button className="btn btn-sm btn-service mt-3" data-modal-open="srevModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 20h4L20 8l-4-4L4 16z"></path>
                      </svg>
                      Rate this business
                    </button>
                  </div>
                  
                  <div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[12.5px] font-bold w-8">5★</span>
                        <div className="bar flex-1">
                          <i style={{ width: "84%" }}></i>
                        </div>
                        <span className="text-[12px] text-ink-500 w-10 text-right">84%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[12.5px] font-bold w-8">4★</span>
                        <div className="bar flex-1">
                          <i style={{ width: "11%" }}></i>
                        </div>
                        <span className="text-[12px] text-ink-500 w-10 text-right">11%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[12.5px] font-bold w-8">3★</span>
                        <div className="bar flex-1">
                          <i style={{ width: "3%" }}></i>
                        </div>
                        <span className="text-[12px] text-ink-500 w-10 text-right">3%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[12.5px] font-bold w-8">2★</span>
                        <div className="bar flex-1">
                          <i style={{ width: "1%" }}></i>
                        </div>
                        <span className="text-[12px] text-ink-500 w-10 text-right">1%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[12.5px] font-bold w-8">1★</span>
                        <div className="bar flex-1">
                          <i style={{ width: "1%" }}></i>
                        </div>
                        <span className="text-[12px] text-ink-500 w-10 text-right">1%</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-2.5 rounded-xl bg-ink-50 text-center">
                        <p className="text-[16px] font-extrabold">4.9</p>
                        <p className="text-[11px] text-ink-500">Punctuality</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-ink-50 text-center">
                        <p className="text-[16px] font-extrabold">4.8</p>
                        <p className="text-[11px] text-ink-500">Work quality</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-ink-50 text-center">
                        <p className="text-[16px] font-extrabold">4.6</p>
                        <p className="text-[11px] text-ink-500">Pricing</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-ink-50 text-center">
                        <p className="text-[16px] font-extrabold">4.9</p>
                        <p className="text-[11px] text-ink-500">Behaviour</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 py-4">
                  <button className="chip !h-8 is-active" type="button">All reviews</button>
                  <button className="chip !h-8 " type="button">With photos (86)</button>
                  <button className="chip !h-8 " type="button">5★ (866)</button>
                  <button className="chip !h-8 " type="button">Critical (21)</button>
                  <button className="chip !h-8 " type="button">Punctuality (120)</button>
                  <button className="chip !h-8 " type="button">Pricing (98)</button>
                </div>
                
                <div className="divide-y divide-[#f0f1f5]">
                  <div className="py-5">
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-service-600">M</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Mahmudul Karim</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Job verified
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">3 days ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <span className="stars ">
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                          </span>
                          <span className="text-[11.5px] text-ink-400">AC servicing · Uttara</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">Booked at 10 AM, technician reached by 12:30 PM. Cleaned both indoor and outdoor units, checked gas pressure and left the place spotless. Charged exactly what was quoted — ৳1,200.</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-service-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (31)
                          </button>
                          <button className="font-bold text-ink-500" type="button">Share</button>
                          <button className="font-bold text-ink-400" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 pl-3.5 border-l-2 border-service-100">
                          <p className="text-[12px] font-extrabold text-service-700 mb-1">Owner replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for choosing CoolCare! Your AMC reminder is scheduled — our team will contact you before the next visit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-service-600">F</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Farhana Yasmin</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Job verified
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">1 week ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <span className="stars ">
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                          </span>
                          <span className="text-[11.5px] text-ink-400">Gas refill · Banani</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">My AC was not cooling for a week. They diagnosed a gas leak, fixed the joint and refilled. 3 months warranty given in writing. Very professional team.</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-service-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (19)
                          </button>
                          <button className="font-bold text-ink-500" type="button">Share</button>
                          <button className="font-bold text-ink-400" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 pl-3.5 border-l-2 border-service-100">
                          <p className="text-[12px] font-extrabold text-service-700 mb-1">Owner replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for choosing CoolCare! Your AMC reminder is scheduled — our team will contact you before the next visit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-service-600">S</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Shakil Ahmed</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Job verified
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">2 weeks ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <span className="stars ">
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                          </span>
                          <span className="text-[11.5px] text-ink-400">AC installation · Mirpur</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">Good service overall, arrived 40 minutes late but informed me by phone beforehand. Work quality was fine and price was reasonable.</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-service-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (7)
                          </button>
                          <button className="font-bold text-ink-500" type="button">Share</button>
                          <button className="font-bold text-ink-400" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 pl-3.5 border-l-2 border-service-100">
                          <p className="text-[12px] font-extrabold text-service-700 mb-1">Owner replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for choosing CoolCare! Your AMC reminder is scheduled — our team will contact you before the next visit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-service-600">R</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Rownak Jahan</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Job verified
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">1 month ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <span className="stars ">
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                            <svg viewBox="0 0 24 24">
                              <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                            </svg>
                          </span>
                          <span className="text-[11.5px] text-ink-400">AMC · Dhanmondi</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">Took an annual maintenance package for 2 ACs. Reminders come by SMS and they never miss a visit. Highly recommended for offices.</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-service-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (12)
                          </button>
                          <button className="font-bold text-ink-500" type="button">Share</button>
                          <button className="font-bold text-ink-400" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 pl-3.5 border-l-2 border-service-100">
                          <p className="text-[12px] font-extrabold text-service-700 mb-1">Owner replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for choosing CoolCare! Your AMC reminder is scheduled — our team will contact you before the next visit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <button className="btn btn-outline" type="button">Load 636 more reviews</button>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="4" hidden>
                
                <div className="flex flex-col sm:flex-row gap-2 mb-5">
                  <input className="input" placeholder="Ask CoolCare a question…" />
                  <button className="btn btn-service shrink-0" data-toast="Question sent" type="button">Ask</button>
                </div>
                
                <div className="divide-y divide-[#f0f1f5]">
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Do you serve Mirpur 12?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-service-50 text-service-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      Yes, we cover all of Mirpur. Travel charge ৳150 applies beyond Mirpur 11.
                    </p>
                    
                    <p className="ml-7 mt-1.5 text-[11.5px] text-ink-400">Owner · 1 day ago</p>
                  </div>
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Is there any charge if the AC cannot be repaired?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-service-50 text-service-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      An inspection fee of ৳300 applies if you decide not to proceed after diagnosis.
                    </p>
                    
                    <p className="ml-7 mt-1.5 text-[11.5px] text-ink-400">Owner · 4 days ago</p>
                  </div>
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Can I get a service invoice for office claim?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-service-50 text-service-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      Yes, we provide a printed VAT invoice with BIN on request.
                    </p>
                    
                    <p className="ml-7 mt-1.5 text-[11.5px] text-ink-400">Owner · 1 week ago</p>
                  </div>
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Do you work on Fridays?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-service-50 text-service-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      Yes, from 3 PM to 9 PM. Emergency calls are accepted from 9 AM.
                    </p>
                    
                    <p className="ml-7 mt-1.5 text-[11.5px] text-ink-400">Owner · 2 weeks ago</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="5" hidden>
                
                <h2 className="font-display text-[17px] font-extrabold mb-3">Meet the team</h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl border border-[#e7e9ef] flex gap-3">
                    <span className="ph ph-a w-14 h-14 rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="3.5"></circle>
                        <path d="M5 21a7 7 0 0 1 14 0"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-extrabold clamp-1">Mizanur Rahman</p>
                      <p className="text-[12px] text-ink-500 clamp-1">Founder &amp; Chief Technician</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">16 years experience</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#e7e9ef] flex gap-3">
                    <span className="ph ph-b w-14 h-14 rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="3.5"></circle>
                        <path d="M5 21a7 7 0 0 1 14 0"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-extrabold clamp-1">Sohel Rana</p>
                      <p className="text-[12px] text-ink-500 clamp-1">Senior Technician</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">9 years · Gree certified</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#e7e9ef] flex gap-3">
                    <span className="ph ph-c w-14 h-14 rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="3.5"></circle>
                        <path d="M5 21a7 7 0 0 1 14 0"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-extrabold clamp-1">Kamrul Hasan</p>
                      <p className="text-[12px] text-ink-500 clamp-1">Technician</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">6 years · Split &amp; VRF</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#e7e9ef] flex gap-3">
                    <span className="ph ph-d w-14 h-14 rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="3.5"></circle>
                        <path d="M5 21a7 7 0 0 1 14 0"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-extrabold clamp-1">Ayesha Siddika</p>
                      <p className="text-[12px] text-ink-500 clamp-1">Customer Support Lead</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">Booking &amp; complaints</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#e7e9ef] flex gap-3">
                    <span className="ph ph-e w-14 h-14 rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="3.5"></circle>
                        <path d="M5 21a7 7 0 0 1 14 0"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-extrabold clamp-1">Jahangir Alam</p>
                      <p className="text-[12px] text-ink-500 clamp-1">Supervisor — Uttara zone</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">11 years</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#e7e9ef] flex gap-3">
                    <span className="ph ph-f w-14 h-14 rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="3.5"></circle>
                        <path d="M5 21a7 7 0 0 1 14 0"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-extrabold clamp-1">Rakib Hossain</p>
                      <p className="text-[12px] text-ink-500 clamp-1">Technician</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">4 years · Window AC</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="6" hidden>
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-dashed border-service-300 bg-service-50/40">
                    
                    <span className="w-11 h-11 rounded-xl bg-white text-service-600 grid place-items-center shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                        <path d="M12 7v10"></path>
                      </svg>
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-[13.5px] font-extrabold">20% off on first booking</p>
                      <p className="text-[12px] text-ink-500">New customers only. Valid on servicing packages up to ৳3,000.</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">Ends 31 Aug 2026</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-dashed border-service-300 text-[12.5px] font-extrabold mono">FIRSTCOOL20</span>
                      <button className="btn btn-sm btn-service" data-toast="Coupon copied" type="button">Copy</button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-dashed border-service-300 bg-service-50/40">
                    
                    <span className="w-11 h-11 rounded-xl bg-white text-service-600 grid place-items-center shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                        <path d="M12 7v10"></path>
                      </svg>
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-[13.5px] font-extrabold">Free gas pressure check</p>
                      <p className="text-[12px] text-ink-500">With any deep service package booked online.</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">Ends 30 Sep 2026</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-dashed border-service-300 text-[12.5px] font-extrabold mono">AUTO</span>
                      <button className="btn btn-sm btn-service" data-toast="Coupon copied" type="button">Copy</button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-dashed border-service-300 bg-service-50/40">
                    
                    <span className="w-11 h-11 rounded-xl bg-white text-service-600 grid place-items-center shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                        <path d="M12 7v10"></path>
                      </svg>
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-[13.5px] font-extrabold">AMC bundle — 2 ACs</p>
                      <p className="text-[12px] text-ink-500">Annual contract for two units at ৳8,600 instead of ৳9,600.</p>
                      <p className="text-[11.5px] text-ink-400 mt-1">Limited to 50 customers</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-dashed border-service-300 text-[12.5px] font-extrabold mono">AMC2</span>
                      <button className="btn btn-sm btn-service" data-toast="Coupon copied" type="button">Copy</button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="card p-4 sm:p-5 mb-4" id="book">
              
              <h2 className="font-display text-[18px] font-extrabold mb-1">Book an appointment</h2>
              
              <p className="text-[12.5px] text-ink-500 mb-4">Choose a slot — CoolCare confirms within 15 minutes during business hours.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                
                <div>
                  <label className="label">
                    Select service 
                    <span className="req">*</span>
                  </label>
                  <select className="select">
                    <option>Split AC servicing (up to 1.5 ton) — ৳1,200</option>
                    <option>Deep service package — ৳2,400</option>
                    <option>Gas refill — from ৳2,200</option>
                    <option>AC installation — ৳3,500</option>
                    <option>Other / not sure</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">Number of units</label>
                  <select className="select">
                    <option>1 unit</option>
                    <option>2 units</option>
                    <option>3 units</option>
                    <option>4+ units</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">
                    Preferred date 
                    <span className="req">*</span>
                  </label>
                  <input type="date" className="input" defaultValue="2026-08-19" />
                </div>
                
                <div>
                  <label className="label">
                    Preferred time slot 
                    <span className="req">*</span>
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <button className="chip !justify-center " type="button">9–11 AM</button>
                    <button className="chip !justify-center " type="button">11 AM–1 PM</button>
                    <button className="chip !justify-center is-active" type="button">2–4 PM</button>
                    <button className="chip !justify-center " type="button">4–6 PM</button>
                    <button className="chip !justify-center " type="button">6–8 PM</button>
                    <button className="chip !justify-center " type="button">Flexible</button>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="label">
                    Service address 
                    <span className="req">*</span>
                  </label>
                  <textarea className="textarea !min-h-[70px]">Flat 5B, House 27, Road 11, Dhanmondi, Dhaka 1209</textarea>
                  
                  <label className="check mt-2">
                    <input type="checkbox" defaultChecked />
                    Use my saved home address
                  </label>
                </div>
                
                <div>
                  <label className="label">
                    Your name 
                    <span className="req">*</span>
                  </label>
                  <input className="input" defaultValue="Nusrat Ahmed" />
                </div>
                
                <div>
                  <label className="label">
                    Mobile number 
                    <span className="req">*</span>
                  </label>
                  <div className="input-affix">
                    <span className="affix">+880</span>
                    <input className="input" defaultValue="1712-345678" />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="label">Problem description</label>
                  <textarea className="textarea" placeholder="Describe the issue, AC brand, model and how old the unit is…"></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label className="label">Attach photos (optional)</label>
                  <div className="upload-box">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                      <circle cx="12" cy="14" r="3.2"></circle>
                    </svg>
                    <span>Upload photos of the unit or error code — helps the technician prepare</span>
                  </div>
                </div>
                
                <div className="md:col-span-2 rounded-xl bg-ink-50 p-4">
                  
                  <div className="flex justify-between text-[13px] mb-1.5">
                    <span className="text-ink-600">Service charge (estimated)</span>
                    <b>৳1,200</b>
                  </div>
                  
                  <div className="flex justify-between text-[13px] mb-1.5">
                    <span className="text-ink-600">Visiting charge</span>
                    <b className="text-green-700">Free</b>
                  </div>
                  
                  <div className="flex justify-between text-[13px] mb-1.5">
                    <span className="text-ink-600">Spare parts</span>
                    <span className="text-ink-500">Charged after your approval</span>
                  </div>
                  
                  <div className="dotted-sep my-2.5"></div>
                  
                  <div className="flex justify-between text-[15px] font-extrabold">
                    <span>Estimated total</span>
                    <span className="text-service-600">৳1,200</span>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="check">
                    <input type="checkbox" defaultChecked />
                    I agree to the 
                    <Link href="/terms" className="link">booking terms</Link>
                     and understand the final price may change after inspection.
                  </label>
                </div>
                
                <div className="md:col-span-2 flex flex-wrap gap-2">
                  <button className="btn btn-lg btn-service flex-1 min-w-[200px]" data-toast="Booking request sent to CoolCare" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Confirm booking request
                  </button>
                  
                  <button className="btn btn-lg btn-outline" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Call instead
                  </button>
                </div>
                
              </div>
            </div>
            
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-end justify-between gap-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-service-50 text-service-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3.2"></circle>
                      <path d="M2 21a7 7 0 0 1 14 0"></path>
                      <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Similar providers nearby</h2>
                    <p className="text-[12.5px] text-ink-500">Compare before you decide</p>
                  </div>
                </div>
                
                <Link href="/services" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-service-600 hover:gap-2 transition-all shrink-0">
                  View all 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3.5">
                <article className="card card-hover overflow-hidden">
                  
                  <div className="flex gap-3.5 p-3.5">
                    
                    <Link href="/service-details" className="shrink-0">
                      <span className="ph ph-f w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                        </svg>
                      </span>
                    </Link>
                    
                    <div className="min-w-0 flex-1">
                      
                      <div className="flex items-start gap-2">
                        
                        <div className="min-w-0">
                          <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">CoolCare AC Servicing &amp; Repair</Link>
                          
                          <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">AC Repair &amp; Service · 9 yrs in business</p>
                        </div>
                        
                        <span className="badge badge-teal ml-auto shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          Verified
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        
                        <span className="rating-pill">
                          4.8 
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                          </svg>
                        </span>
                        <span className="text-2xs text-ink-400">1,032 ratings</span>
                        
                        <span className="badge badge-gray !text-[10.5px]">2.4 km away</span>
                      </div>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                          <circle cx="12" cy="10" r="2.5"></circle>
                        </svg>
                        <span className="clamp-1">Uttara Sector 7, Dhaka</span>
                      </p>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        <span className="text-green-700 font-semibold">Open now · Closes 9 PM</span>
                      </p>
                      
                      <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                        <span className="badge badge-gray !text-[10.5px]">Same-day service</span>
                        <span className="badge badge-gray !text-[10.5px]">Warranty 90 days</span>
                        <span className="badge badge-gray !text-[10.5px]">Verified</span>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                    
                    <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳600 – ৳3,500</span>
                    
                    <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                      </svg>
                      Show number
                    </button>
                    
                    <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                        <path d="M8 12h8M8 9h5"></path>
                      </svg>
                      Get quote
                    </button>
                    
                    <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                        <path d="M8 3v4M16 3v4M3 10h18"></path>
                      </svg>
                      Book
                    </Link>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                    </button>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="2.5"></circle>
                        <circle cx="6" cy="12" r="2.5"></circle>
                        <circle cx="18" cy="19" r="2.5"></circle>
                        <path d="m8 11 8-4M8 13l8 4"></path>
                      </svg>
                    </button>
                    
                  </div>
                </article>
                <article className="card card-hover overflow-hidden">
                  
                  <div className="flex gap-3.5 p-3.5">
                    
                    <Link href="/service-details" className="shrink-0">
                      <span className="ph ph-g w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="6" cy="6" r="2.5"></circle>
                          <circle cx="6" cy="18" r="2.5"></circle>
                          <path d="M8 8l12 10M8 16 20 6"></path>
                        </svg>
                      </span>
                    </Link>
                    
                    <div className="min-w-0 flex-1">
                      
                      <div className="flex items-start gap-2">
                        
                        <div className="min-w-0">
                          <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Glam Studio — Ladies Beauty Parlour</Link>
                          
                          <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Beauty Parlour · 7 yrs in business</p>
                        </div>
                        
                        <span className="badge badge-teal ml-auto shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          Verified
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        
                        <span className="rating-pill">
                          4.6 
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                          </svg>
                        </span>
                        <span className="text-2xs text-ink-400">489 ratings</span>
                        
                        <span className="badge badge-gray !text-[10.5px]">1.2 km away</span>
                      </div>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                          <circle cx="12" cy="10" r="2.5"></circle>
                        </svg>
                        <span className="clamp-1">Dhanmondi 27, Dhaka</span>
                      </p>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        <span className="text-green-700 font-semibold">Open now · Closes 8 PM</span>
                      </p>
                      
                      <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                        <span className="badge badge-gray !text-[10.5px]">Home service</span>
                        <span className="badge badge-gray !text-[10.5px]">Bridal package</span>
                        <span className="badge badge-gray !text-[10.5px]">AC lounge</span>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                    
                    <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳500 – ৳12,000</span>
                    
                    <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                      </svg>
                      Show number
                    </button>
                    
                    <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                        <path d="M8 12h8M8 9h5"></path>
                      </svg>
                      Get quote
                    </button>
                    
                    <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                        <path d="M8 3v4M16 3v4M3 10h18"></path>
                      </svg>
                      Book
                    </Link>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                    </button>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="2.5"></circle>
                        <circle cx="6" cy="12" r="2.5"></circle>
                        <circle cx="18" cy="19" r="2.5"></circle>
                        <path d="m8 11 8-4M8 13l8 4"></path>
                      </svg>
                    </button>
                    
                  </div>
                </article>
                <article className="card card-hover overflow-hidden">
                  
                  <div className="flex gap-3.5 p-3.5">
                    
                    <Link href="/service-details" className="shrink-0">
                      <span className="ph ph-h w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
                          <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
                          <circle cx="18" cy="10" r="2"></circle>
                        </svg>
                      </span>
                    </Link>
                    
                    <div className="min-w-0 flex-1">
                      
                      <div className="flex items-start gap-2">
                        
                        <div className="min-w-0">
                          <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Dr. Farhana Rahman — Skin &amp; Laser</Link>
                          
                          <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Dermatologist · 14 yrs in business</p>
                        </div>
                        
                        <span className="badge badge-teal ml-auto shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          Verified
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        
                        <span className="rating-pill">
                          4.9 
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                          </svg>
                        </span>
                        <span className="text-2xs text-ink-400">318 ratings</span>
                        
                        <span className="badge badge-gray !text-[10.5px]">3.1 km away</span>
                      </div>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                          <circle cx="12" cy="10" r="2.5"></circle>
                        </svg>
                        <span className="clamp-1">Green Road, Dhaka</span>
                      </p>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        <span className="text-green-700 font-semibold">Chamber: 5 PM – 9 PM</span>
                      </p>
                      
                      <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                        <span className="badge badge-gray !text-[10.5px]">Online booking</span>
                        <span className="badge badge-gray !text-[10.5px]">MBBS, FCPS</span>
                        <span className="badge badge-gray !text-[10.5px]">Card accepted</span>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                    
                    <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳800 consultation</span>
                    
                    <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                      </svg>
                      Show number
                    </button>
                    
                    <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                        <path d="M8 12h8M8 9h5"></path>
                      </svg>
                      Get quote
                    </button>
                    
                    <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                        <path d="M8 3v4M16 3v4M3 10h18"></path>
                      </svg>
                      Book
                    </Link>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                    </button>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="2.5"></circle>
                        <circle cx="6" cy="12" r="2.5"></circle>
                        <circle cx="18" cy="19" r="2.5"></circle>
                        <path d="m8 11 8-4M8 13l8 4"></path>
                      </svg>
                    </button>
                    
                  </div>
                </article>
                <article className="card card-hover overflow-hidden">
                  
                  <div className="flex gap-3.5 p-3.5">
                    
                    <Link href="/service-details" className="shrink-0">
                      <span className="ph ph-i w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3 9 9-4 9 4-9 4z"></path>
                          <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path>
                        </svg>
                      </span>
                    </Link>
                    
                    <div className="min-w-0 flex-1">
                      
                      <div className="flex items-start gap-2">
                        
                        <div className="min-w-0">
                          <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Scholars Home Tutor Network</Link>
                          
                          <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Home Tutors · 6 yrs in business</p>
                        </div>
                        
                        <span className="badge badge-teal ml-auto shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          Verified
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        
                        <span className="rating-pill">
                          4.5 
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                          </svg>
                        </span>
                        <span className="text-2xs text-ink-400">742 ratings</span>
                        
                        <span className="badge badge-gray !text-[10.5px]">1.9 km away</span>
                      </div>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                          <circle cx="12" cy="10" r="2.5"></circle>
                        </svg>
                        <span className="clamp-1">Mohammadpur, Dhaka</span>
                      </p>
                      
                      <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                        <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9"></circle>
                          <path d="M12 7v5l3 2"></path>
                        </svg>
                        <span className="text-green-700 font-semibold">Open now · Closes 11 PM</span>
                      </p>
                      
                      <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                        <span className="badge badge-gray !text-[10.5px]">Demo class free</span>
                        <span className="badge badge-gray !text-[10.5px]">All boards</span>
                        <span className="badge badge-gray !text-[10.5px]">Female tutor</span>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                    
                    <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳3,000 – ৳12,000/mo</span>
                    
                    <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                      </svg>
                      Show number
                    </button>
                    
                    <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                        <path d="M8 12h8M8 9h5"></path>
                      </svg>
                      Get quote
                    </button>
                    
                    <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                        <path d="M8 3v4M16 3v4M3 10h18"></path>
                      </svg>
                      Book
                    </Link>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                    </button>
                    
                    <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="2.5"></circle>
                        <circle cx="6" cy="12" r="2.5"></circle>
                        <circle cx="18" cy="19" r="2.5"></circle>
                        <path d="m8 11 8-4M8 13l8 4"></path>
                      </svg>
                    </button>
                    
                  </div>
                </article>
              </div>
            </div>
            
          </div>
          
          <aside className="lg:w-[330px] shrink-0 space-y-4">
            
            <div className="card p-4 sticky-24">
              
              <div className="rounded-xl bg-service-500 text-white p-4 mb-4">
                <p className="text-[11.5px] font-bold uppercase tracking-wider text-white/70 mb-1">Contact this business</p>
                
                <p className="font-display text-[20px] font-extrabold tracking-tight mb-2">+880 1712-99••••</p>
                
                <button className="btn btn-block !bg-white !text-service-700" data-modal-open="callModal" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                  </svg>
                  Show full number
                </button>
                
                <p className="text-[11px] text-white/70 mt-2 text-center">Free to call · 4,280 people contacted this month</p>
              </div>
              
              <div className="space-y-2 mb-4">
                
                <a href="#book" className="btn btn-primary btn-block">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                    <path d="M8 3v4M16 3v4M3 10h18"></path>
                  </svg>
                  Book appointment
                </a>
                
                <button className="btn btn-outline btn-block" data-modal-open="quoteModal" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                  Get a free quote
                </button>
                
                <button className="btn btn-outline btn-block" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                  Chat on WhatsApp
                </button>
              </div>
              
              <div className="dotted-sep my-4"></div>
              
              <p className="text-[13px] font-extrabold mb-2.5">Quick facts</p>
              
              <div className="space-y-2.5 text-[12.5px]">
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  <span className="text-ink-700">Responds in ~12 minutes</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-ink-700">93% jobs on time</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-ink-700">90-day service warranty</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.2"></circle>
                    <path d="M2 21a7 7 0 0 1 14 0"></path>
                    <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
                  </svg>
                  <span className="text-ink-700">24 verified technicians</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                    <circle cx="12" cy="12" r="2.6"></circle>
                  </svg>
                  <span className="text-ink-700">No advance payment needed</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                  </svg>
                  <span className="text-ink-700">Emergency service until 11 PM</span>
                </p>
              </div>
              
              <div className="dotted-sep my-4"></div>
              
              <p className="text-[13px] font-extrabold mb-2.5">Service areas</p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="badge badge-gray">Uttara</span>
                <span className="badge badge-gray">Airport</span>
                <span className="badge badge-gray">Khilkhet</span>
                <span className="badge badge-gray">Banani</span>
                <span className="badge badge-gray">Gulshan</span>
                <span className="badge badge-gray">Baridhara</span>
                <span className="badge badge-gray">Mirpur</span>
                <span className="badge badge-gray">Dhanmondi</span>
                <span className="badge badge-gray">Mohakhali</span>
                <span className="badge badge-gray">Badda</span>
              </div>
              
              <div className="dotted-sep my-4"></div>
              
              <p className="text-[13px] font-extrabold mb-2.5">Payment accepted</p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="badge badge-gray">Cash</span>
                <span className="badge badge-gray">bKash</span>
                <span className="badge badge-gray">Nagad</span>
                <span className="badge badge-gray">Rocket</span>
                <span className="badge badge-gray">Visa</span>
                <span className="badge badge-gray">Mastercard</span>
                <span className="badge badge-gray">Bank</span>
              </div>
              
              <div className="rounded-xl border border-[#e7e9ef] p-3.5">
                <p className="text-[12.5px] font-extrabold mb-1.5">Need AC parts too?</p>
                <p className="text-[12px] text-ink-500 mb-2.5">Buy genuine filters, remotes and stabilisers from verified sellers.</p>
                
                <Link href="/products" className="btn btn-sm btn-outline-brand btn-block">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 7h12l1 14H5z"></path>
                    <path d="M9 7a3 3 0 0 1 6 0"></path>
                  </svg>
                  Shop AC accessories
                </Link>
              </div>
              
              <button className="btn btn-sm btn-ghost btn-block mt-3 !text-ink-400" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21V4h9l-1 3h7l-2 6 2 6H5"></path>
                </svg>
                Report this listing
              </button>
              
              <p className="text-[11px] text-ink-400 text-center mt-2">Listing ID: SRV-2026-04412 · Claimed by owner</p>
              
            </div>
          </aside>
        </div>
      </main>
      <div className="modal" id="srevModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel">
          
          <div className="flex items-center justify-between p-5 border-b border-[#e7e9ef]">
            <h3 className="font-display text-[17px] font-extrabold">Rate CoolCare AC Servicing</h3>
            <button className="icon-btn" data-modal-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-5 space-y-4">
            
            <div>
              <label className="label">
                Overall experience 
                <span className="req">*</span>
              </label>
              <div className="flex gap-1.5">
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="label !text-[12px]">Punctuality</label>
                <div className="flex gap-1">
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label className="label !text-[12px]">Work quality</label>
                <div className="flex gap-1">
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label className="label !text-[12px]">Pricing</label>
                <div className="flex gap-1">
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label className="label !text-[12px]">Staff behaviour</label>
                <div className="flex gap-1">
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                  <button className="text-gold-400" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <label className="label">Which service did you take?</label>
              <select className="select">
                <option>AC servicing</option>
                <option>Gas refill</option>
                <option>Installation</option>
                <option>Repair</option>
                <option>Annual contract</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                Your review 
                <span className="req">*</span>
              </label>
              <textarea className="textarea" placeholder="Tell others about the work quality, timing and pricing…"></textarea>
            </div>
            
            <div>
              <label className="label">Add photos of the work</label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                  <circle cx="12" cy="14" r="3.2"></circle>
                </svg>
                <span>Up to 6 photos</span>
              </div>
            </div>
            
            <label className="check">
              <input type="checkbox" defaultChecked />
              I confirm I actually used this service
            </label>
            
            <div className="flex gap-2">
              <button className="btn btn-outline flex-1" data-modal-close="" type="button">Cancel</button>
              <button className="btn btn-service flex-1" data-modal-close="" data-toast="Thanks! Your review is under moderation" type="button">Submit review</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="callModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel is-narrow">
          
          <div className="p-6 text-center">
            <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center mx-auto mb-3">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
              </svg>
            </span>
            
            <h3 className="font-display text-[17px] font-extrabold mb-1">CoolCare AC Servicing</h3>
            <p className="text-[12.5px] text-ink-500 mb-4">Uttara Sector 7, Dhaka · 4.8★ (1,032)</p>
            
            <div className="rounded-xl bg-ink-50 p-4 mb-4">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-400 mb-1">Primary number</p>
              
              <p className="font-display text-[22px] font-extrabold tracking-tight">+880 1712-998877</p>
              
              <p className="text-[11.5px] text-ink-500 mt-1">Alternate: +880 9612-334455 · Landline: 02-58054412</p>
            </div>
            
            <div className="flex gap-2 mb-3">
              <a href="tel:+8801712998877" className="btn btn-service flex-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                </svg>
                Call now
              </a>
              <button className="btn btn-outline flex-1" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
                WhatsApp
              </button>
            </div>
            
            <p className="text-[11.5px] text-ink-400">
              By calling you agree to our 
              <Link href="/terms" className="link">Terms</Link>
              . Never pay in advance without an invoice.
            </p>
          </div>
        </div>
      </div>
      <div className="modal" id="quoteModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel">
          
          <div className="flex items-center justify-between p-5 border-b border-[#e7e9ef]">
            <div>
              <h3 className="font-display text-[17px] font-extrabold">Get free quotes</h3>
              <p className="text-[12.5px] text-ink-500">Tell us what you need — up to 5 providers will reply.</p>
            </div>
            <button className="icon-btn" data-modal-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-5 grid sm:grid-cols-2 gap-4">
            
            <div className="sm:col-span-2">
              <label className="label">
                What service do you need? 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>AC Servicing &amp; Repair</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>House Cleaning</option>
                <option>Home Tutor</option>
                <option>Event Planner</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                Your name 
                <span className="req">*</span>
              </label>
              <input className="input" defaultValue="Nusrat Ahmed" />
            </div>
            
            <div>
              <label className="label">
                Mobile number 
                <span className="req">*</span>
              </label>
              <div className="input-affix">
                <span className="affix">+880</span>
                <input className="input" defaultValue="1712-345678" />
              </div>
            </div>
            
            <div>
              <label className="label">
                Area / Location 
                <span className="req">*</span>
              </label>
              <input className="input" defaultValue="Dhanmondi, Dhaka" />
            </div>
            
            <div>
              <label className="label">When do you need it?</label>
              <select className="select">
                <option>As soon as possible</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This week</option>
                <option>Just exploring</option>
              </select>
            </div>
            
            <div>
              <label className="label">Approximate budget</label>
              <select className="select">
                <option>Not sure yet</option>
                <option>Under ৳1,000</option>
                <option>৳1,000 – ৳5,000</option>
                <option>৳5,000 – ৳20,000</option>
                <option>Above ৳20,000</option>
              </select>
            </div>
            
            <div>
              <label className="label">Preferred contact</label>
              <select className="select">
                <option>Phone call</option>
                <option>WhatsApp</option>
                <option>SMS</option>
                <option>Email</option>
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">Describe your requirement</label>
              <textarea className="textarea" placeholder="e.g. 1.5 ton split AC not cooling, need servicing and gas refill this weekend…"></textarea>
            </div>
            
            <div className="sm:col-span-2">
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                  <circle cx="12" cy="14" r="3.2"></circle>
                </svg>
                <span>Attach photos or documents (optional) — max 5 files, 5 MB each</span>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label className="check">
                <input type="checkbox" defaultChecked />
                <span>Share my number with matching providers so they can call me back</span>
              </label>
            </div>
            
            <div className="sm:col-span-2 flex gap-2">
              <button className="btn btn-outline flex-1" data-modal-close="" type="button">Cancel</button>
              <button className="btn btn-primary flex-1" data-modal-close="" data-toast="Request sent to 5 providers" type="button">Send my request</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
