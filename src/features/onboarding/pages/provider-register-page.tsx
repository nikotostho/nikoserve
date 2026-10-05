import Link from "next/link";

export default function ProviderRegisterPage() {
  return (
    <>
      <main className="shell py-8 max-w-4xl">
        
        <div className="mb-6">
          <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-1.5">List your service business</h1>
          
          <p className="text-[13.5px] text-ink-500">Complete the steps below. Verification usually takes less than 24 hours.</p>
        </div>
        
        <div className="card p-4 mb-5">
          <div className="steps">
            
            <span className="step is-current">
              <span className="num">1</span>
              Account
            </span>
            <span className="step-line"></span>
            
            <span className="step">
              <span className="num">2</span>
              Business info
            </span>
            <span className="step-line"></span>
            
            <span className="step">
              <span className="num">3</span>
              Documents
            </span>
            <span className="step-line"></span>
            
            <span className="step">
              <span className="num">4</span>
              Services &amp; areas
            </span>
            <span className="step-line"></span>
            
            <span className="step">
              <span className="num">5</span>
              Review
            </span>
          </div>
        </div>
        
        <div className="card p-5 sm:p-6 mb-5">
          <h2 className="text-[16px] font-extrabold mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="3.5"></circle>
              <path d="M5 21a7 7 0 0 1 14 0"></path>
            </svg>
            1. Account details
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            
            <div>
              <label className="label">
                Owner full name 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="As printed on your NID" />
            </div>
            
            <div>
              <label className="label">
                Mobile number 
                <span className="req">*</span>
              </label>
              <div className="input-affix">
                <span className="affix">+880</span>
                <input className="input" placeholder="1XXXXXXXXX" />
              </div>
            </div>
            
            <div>
              <label className="label">
                Email address 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="you@business.com" />
            </div>
            
            <div>
              <label className="label">
                Password 
                <span className="req">*</span>
              </label>
              <input type="password" className="input" placeholder="Minimum 8 characters" />
            </div>
          </div>
        </div>
        
        <div className="card p-5 sm:p-6 mb-5">
          <h2 className="text-[16px] font-extrabold mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8h16v12H4z"></path>
              <path d="M9 8V4h6v4"></path>
            </svg>
            2. Business information
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            
            <div>
              <label className="label">
                Business name 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="e.g. CoolCare AC Servicing" />
              <p className="hint">This is what customers will see.</p>
            </div>
            
            <div>
              <label className="label">
                Primary service category 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Home Services</option>
                <option>AC &amp; Appliance Repair</option>
                <option>Beauty &amp; Salon</option>
                <option>Doctors &amp; Clinics</option>
                <option>Tutors &amp; Coaching</option>
                <option>Restaurants &amp; Catering</option>
                <option>Event &amp; Wedding</option>
                <option>Packers &amp; Movers</option>
                <option>Travel Agents</option>
                <option>Pet Care</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                Business type 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Individual / sole proprietor</option>
                <option>Partnership</option>
                <option>Private limited company</option>
                <option>Brand / authorised distributor</option>
              </select>
            </div>
            
            <div>
              <label className="label">Year established</label>
              <input className="input" placeholder="e.g. 2017" />
            </div>
            
            <div>
              <label className="label">
                Division 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Barishal</option>
                <option>Rangpur</option>
                <option>Mymensingh</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                District / City 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Dhaka</option>
                <option>Gazipur</option>
                <option>Narayanganj</option>
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">
                Full business address 
                <span className="req">*</span>
              </label>
              <textarea className="textarea !min-h-[80px]" placeholder="House, road, area, landmark…"></textarea>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">
                Short description 
                <span className="req">*</span>
              </label>
              <textarea className="textarea" placeholder="Tell customers what you do, since when, and what makes you different…"></textarea>
              <p className="hint">50–500 characters. This appears at the top of your public profile.</p>
            </div>
            
            <div>
              <label className="label">Business logo</label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                  <circle cx="12" cy="14" r="3.2"></circle>
                </svg>
                <span>Square image, min 300×300px</span>
              </div>
            </div>
            
            <div>
              <label className="label">Cover banner</label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                  <circle cx="12" cy="14" r="3.2"></circle>
                </svg>
                <span>1200×300px recommended</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-5 sm:p-6 mb-5">
          <h2 className="text-[16px] font-extrabold mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h8l4 4v14H6z"></path>
              <path d="M14 3v4h4"></path>
            </svg>
            3. Verification documents
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            
            <div>
              <label className="label">
                NID front 
                <span className="req">*</span>
              </label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span>JPG or PNG, max 5 MB</span>
              </div>
            </div>
            
            <div>
              <label className="label">
                NID back 
                <span className="req">*</span>
              </label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span>JPG or PNG, max 5 MB</span>
              </div>
            </div>
            
            <div>
              <label className="label">Trade licence</label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span>PDF or image</span>
              </div>
            </div>
            
            <div>
              <label className="label">TIN / BIN certificate</label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span>Optional but recommended</span>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">
                NID number 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="10 or 17 digit NID number" />
            </div>
          </div>
        </div>
        
        <div className="card p-5 sm:p-6 mb-5">
          <h2 className="text-[16px] font-extrabold mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-service-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
              <path d="M13 6l5 5"></path>
            </svg>
            4. Services &amp; coverage
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            
            <div className="sm:col-span-2">
              <label className="label">
                Services you offer 
                <span className="req">*</span>
              </label>
              
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="badge badge-teal">
                  AC servicing
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="badge badge-teal">
                  Gas refill
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="badge badge-teal">
                  Installation
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="badge badge-teal">
                  Repair
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="badge badge-teal">
                  Annual contract
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
              </div>
              
              <input className="input" placeholder="Type a service and press Enter…" />
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">
                Areas you serve 
                <span className="req">*</span>
              </label>
              
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="badge badge-gray">
                  Uttara
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="badge badge-gray">
                  Banani
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="badge badge-gray">
                  Gulshan
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="badge badge-gray">
                  Mirpur
                  <button className="ml-1" type="button">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
              </div>
              
              <input className="input" placeholder="Add an area…" />
            </div>
            
            <div>
              <label className="label">Team size</label>
              <select className="select">
                <option>Just me</option>
                <option>2–5 people</option>
                <option>6–20 people</option>
                <option>20+ people</option>
              </select>
            </div>
            
            <div>
              <label className="label">Emergency service</label>
              <select className="select">
                <option>Not available</option>
                <option>Available until 11 PM</option>
                <option>24 hours</option>
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">
                Business hours 
                <span className="req">*</span>
              </label>
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-24 text-[13px] font-bold">Saturday</span>
                  
                  <label className="switch switch-service">
                    <input type="checkbox" defaultChecked />
                    <span className="track"></span>
                  </label>
                  
                  <input type="time" className="input input-sm w-32" defaultValue="09:00" />
                  <span className="text-ink-400">to</span>
                  <input type="time" className="input input-sm w-32" defaultValue="21:00" />
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-24 text-[13px] font-bold">Sunday</span>
                  
                  <label className="switch switch-service">
                    <input type="checkbox" defaultChecked />
                    <span className="track"></span>
                  </label>
                  
                  <input type="time" className="input input-sm w-32" defaultValue="09:00" />
                  <span className="text-ink-400">to</span>
                  <input type="time" className="input input-sm w-32" defaultValue="21:00" />
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-24 text-[13px] font-bold">Monday</span>
                  
                  <label className="switch switch-service">
                    <input type="checkbox" defaultChecked />
                    <span className="track"></span>
                  </label>
                  
                  <input type="time" className="input input-sm w-32" defaultValue="09:00" />
                  <span className="text-ink-400">to</span>
                  <input type="time" className="input input-sm w-32" defaultValue="21:00" />
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-24 text-[13px] font-bold">Tuesday</span>
                  
                  <label className="switch switch-service">
                    <input type="checkbox" defaultChecked />
                    <span className="track"></span>
                  </label>
                  
                  <input type="time" className="input input-sm w-32" defaultValue="09:00" />
                  <span className="text-ink-400">to</span>
                  <input type="time" className="input input-sm w-32" defaultValue="21:00" />
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-24 text-[13px] font-bold">Wednesday</span>
                  
                  <label className="switch switch-service">
                    <input type="checkbox" defaultChecked />
                    <span className="track"></span>
                  </label>
                  
                  <input type="time" className="input input-sm w-32" defaultValue="09:00" />
                  <span className="text-ink-400">to</span>
                  <input type="time" className="input input-sm w-32" defaultValue="21:00" />
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-24 text-[13px] font-bold">Thursday</span>
                  
                  <label className="switch switch-service">
                    <input type="checkbox" defaultChecked />
                    <span className="track"></span>
                  </label>
                  
                  <input type="time" className="input input-sm w-32" defaultValue="09:00" />
                  <span className="text-ink-400">to</span>
                  <input type="time" className="input input-sm w-32" defaultValue="21:00" />
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-24 text-[13px] font-bold">Friday</span>
                  
                  <label className="switch switch-service">
                    <input type="checkbox" />
                    <span className="track"></span>
                  </label>
                  
                  <input type="time" className="input input-sm w-32" defaultValue="09:00" />
                  <span className="text-ink-400">to</span>
                  <input type="time" className="input input-sm w-32" defaultValue="21:00" />
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">Payment methods accepted</label>
              <div className="flex flex-wrap gap-2">
                <label className="chip">
                  <input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-brand-500" />
                  Cash
                </label>
                <label className="chip">
                  <input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-brand-500" />
                  bKash
                </label>
                <label className="chip">
                  <input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-brand-500" />
                  Nagad
                </label>
                <label className="chip">
                  <input type="checkbox" className="w-3.5 h-3.5 accent-brand-500" />
                  Rocket
                </label>
                <label className="chip">
                  <input type="checkbox" className="w-3.5 h-3.5 accent-brand-500" />
                  Card
                </label>
                <label className="chip">
                  <input type="checkbox" className="w-3.5 h-3.5 accent-brand-500" />
                  Bank transfer
                </label>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">Choose your plan</label>
              
              <div className="grid sm:grid-cols-3 gap-2.5">
                <label className="p-3.5 rounded-xl border border-[#e7e9ef] flex items-center gap-2.5 cursor-pointer">
                  <input type="radio" name="plan" className="accent-brand-500" />
                  <div>
                    <p className="text-[13px] font-extrabold">Free Listing</p>
                    <p className="text-[12px] text-ink-500">৳0</p>
                  </div>
                </label>
                <label className="p-3.5 rounded-xl border border-service-400 bg-service-50/40 flex items-center gap-2.5 cursor-pointer">
                  <input type="radio" name="plan" defaultChecked className="accent-brand-500" />
                  <div>
                    <p className="text-[13px] font-extrabold">Verified Pro</p>
                    <p className="text-[12px] text-ink-500">৳1,200/mo</p>
                  </div>
                </label>
                <label className="p-3.5 rounded-xl border border-[#e7e9ef] flex items-center gap-2.5 cursor-pointer">
                  <input type="radio" name="plan" className="accent-brand-500" />
                  <div>
                    <p className="text-[13px] font-extrabold">Premium Partner</p>
                    <p className="text-[12px] text-ink-500">৳3,500/mo</p>
                  </div>
                </label>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="card p-5 sm:p-6 mb-5">
          <h2 className="text-[16px] font-extrabold mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            5. Review &amp; submit
          </h2>
          
          <div className="space-y-2.5 mb-4">
            
            <label className="check">
              <input type="checkbox" defaultChecked />
              I confirm all information provided is accurate and the documents belong to me.
            </label>
            
            <label className="check">
              <input type="checkbox" defaultChecked />
              I accept the 
              <Link href="/terms" className="link">Provider Agreement</Link>
              , 
              <Link href="/terms" className="link">Terms of Service</Link>
               and 
              <Link href="/privacy-policy" className="link">Privacy Policy</Link>
              .
            </label>
            
            <label className="check">
              <input type="checkbox" />
              Send me tips, product updates and marketing opportunities.
            </label>
          </div>
          
          <div className="p-4 rounded-xl bg-ink-50 flex items-start gap-2.5 mb-4">
            <svg className="w-4 h-4 text-ink-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M12 11v5M12 8h.01"></path>
            </svg>
            
            <p className="text-[12.5px] text-ink-500">Our verification team reviews every application within 24 hours. You will receive an SMS and email once your account is approved. You can save this form and come back anytime.</p>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            <button className="btn btn-lg btn-service flex-1 min-w-[200px]" data-toast="Application submitted for review" type="button">Submit application</button>
            
            <button className="btn btn-lg btn-outline" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4"></path>
              </svg>
              Save as draft
            </button>
          </div>
        </div>
        
        <p className="text-center text-[12.5px] text-ink-500">
          Already have an account? 
          <Link href="/login?next=%2Fvendor%2Fdashboard" className="link">Sign in to the provider centre</Link>
        </p>
        
      </main>
    </>
  );
}
