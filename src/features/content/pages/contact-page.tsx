import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Contact Us</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        
        <div className="max-w-2xl mb-8">
          <h1 className="font-display text-[28px] font-extrabold tracking-tight mb-2">We're here to help</h1>
          
          <p className="text-[14px] text-ink-500">Reach our support team 24/7 by phone, chat or email — or drop into one of our offices.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
              </svg>
            </span>
            <p className="text-[13px] text-ink-500 mb-0.5">Call us</p>
            <p className="text-[15px] font-extrabold mb-1">16247 (24/7)</p>
            <p className="text-[12px] text-ink-400">Toll free from any operator</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                <path d="M8 12h8M8 9h5"></path>
              </svg>
            </span>
            <p className="text-[13px] text-ink-500 mb-0.5">Live chat</p>
            <p className="text-[15px] font-extrabold mb-1">Start a chat</p>
            <p className="text-[12px] text-ink-400">Average reply in 2 minutes</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="m3 7 9 6 9-6"></path>
              </svg>
            </span>
            <p className="text-[13px] text-ink-500 mb-0.5">Email</p>
            <p className="text-[15px] font-extrabold mb-1">support@haatbazar.com.bd</p>
            <p className="text-[12px] text-ink-400">Reply within 6 hours</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"></path>
              </svg>
            </span>
            <p className="text-[13px] text-ink-500 mb-0.5">Help centre</p>
            <p className="text-[15px] font-extrabold mb-1">Browse articles</p>
            <p className="text-[12px] text-ink-400">240+ answers ready</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-5">
          
          <div className="card p-5 sm:p-6">
            <h2 className="font-display text-[19px] font-extrabold mb-4">Send us a message</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div>
                <label className="label">
                  Full name 
                  <span className="req">*</span>
                </label>
                <input className="input" placeholder="Your name" />
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
                <label className="label">Email address</label>
                <input className="input" placeholder="you@example.com" />
              </div>
              
              <div>
                <label className="label">
                  I am a 
                  <span className="req">*</span>
                </label>
                <select className="select">
                  <option>Customer</option>
                  <option>Product seller</option>
                  <option>Service provider</option>
                  <option>Corporate / partnership</option>
                  <option>Media / press</option>
                </select>
              </div>
              
              <div>
                <label className="label">
                  Topic 
                  <span className="req">*</span>
                </label>
                <select className="select">
                  <option>Order issue</option>
                  <option>Return or refund</option>
                  <option>Delivery delay</option>
                  <option>Payment problem</option>
                  <option>Account &amp; login</option>
                  <option>Seller onboarding</option>
                  <option>Service booking</option>
                  <option>Report a listing</option>
                  <option>Feedback / suggestion</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="label">Order or booking ID</label>
                <input className="input" placeholder="e.g. HB-2026-884213" />
              </div>
              
              <div className="sm:col-span-2">
                <label className="label">
                  Subject 
                  <span className="req">*</span>
                </label>
                <input className="input" placeholder="Short summary of your issue" />
              </div>
              
              <div className="sm:col-span-2">
                <label className="label">
                  Message 
                  <span className="req">*</span>
                </label>
                <textarea className="textarea !min-h-[140px]" placeholder="Describe your issue in detail…"></textarea>
              </div>
              
              <div className="sm:col-span-2">
                <label className="label">Attachments</label>
                <div className="upload-box">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                    <circle cx="12" cy="14" r="3.2"></circle>
                  </svg>
                  <span>Upload screenshots or photos (max 5 files, 5 MB each)</span>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label className="check">
                  <input type="checkbox" defaultChecked />
                  I agree that HaatBazar may contact me about this enquiry.
                </label>
              </div>
              
              <div className="sm:col-span-2 flex gap-2.5">
                <button className="btn btn-lg btn-primary" data-toast="Message sent — ticket #58120 created" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                  Send message
                </button>
                <button className="btn btn-lg btn-outline" type="button">Clear form</button>
              </div>
            </div>
          </div>
          
          <aside className="space-y-4">
            
            <div className="card p-5">
              <h3 className="text-[15px] font-extrabold mb-3">Head office</h3>
              
              <div className="rounded-xl overflow-hidden border border-[#e7e9ef] mb-3">
                <span className="ph ph-a h-[140px] w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                </span>
              </div>
              
              <p className="text-[13px] text-ink-600 leading-relaxed">
                Level 9, Rangs Babylonia
                <br />
                246 Bir Uttam Mir Shawkat Sarak
                <br />
                Tejgaon, Dhaka 1208, Bangladesh
              </p>
              
              <div className="dotted-sep my-3"></div>
              
              <div className="space-y-2 text-[12.5px]">
                <p className="flex items-center gap-2 text-ink-600">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                  </svg>
                  +880 9612-345678
                </p>
                <p className="flex items-center gap-2 text-ink-600">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                  hello@haatbazar.com.bd
                </p>
                <p className="flex items-center gap-2 text-ink-600">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Sun–Thu, 9 AM – 6 PM
                </p>
              </div>
            </div>
            
            <div className="card p-5">
              <h3 className="text-[15px] font-extrabold mb-3">Regional offices</h3>
              
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-ink-50">
                  <p className="text-[13px] font-extrabold">Chattogram</p>
                  <p className="text-[12px] text-ink-500">Agrabad C/A, Chattogram 4100</p>
                  <p className="text-[12px] text-brand-600 font-bold">+880 9612-345679</p>
                </div>
                <div className="p-3 rounded-xl bg-ink-50">
                  <p className="text-[13px] font-extrabold">Sylhet</p>
                  <p className="text-[12px] text-ink-500">Zindabazar, Sylhet 3100</p>
                  <p className="text-[12px] text-brand-600 font-bold">+880 9612-345680</p>
                </div>
                <div className="p-3 rounded-xl bg-ink-50">
                  <p className="text-[13px] font-extrabold">Khulna</p>
                  <p className="text-[12px] text-ink-500">KDA Avenue, Khulna 9100</p>
                  <p className="text-[12px] text-brand-600 font-bold">+880 9612-345681</p>
                </div>
                <div className="p-3 rounded-xl bg-ink-50">
                  <p className="text-[13px] font-extrabold">Rajshahi</p>
                  <p className="text-[12px] text-ink-500">Shaheb Bazar, Rajshahi 6100</p>
                  <p className="text-[12px] text-brand-600 font-bold">+880 9612-345682</p>
                </div>
              </div>
            </div>
            
            <div className="card p-5">
              <h3 className="text-[15px] font-extrabold mb-3">Department contacts</h3>
              
              <div className="space-y-2 text-[12.5px]">
                <div className="flex justify-between gap-2 py-1.5 border-b border-[#f4f5f8]">
                  <span className="text-ink-500">Seller support</span>
                  <a href="#" className="link">sellers@haatbazar.com.bd</a>
                </div>
                <div className="flex justify-between gap-2 py-1.5 border-b border-[#f4f5f8]">
                  <span className="text-ink-500">Provider support</span>
                  <a href="#" className="link">providers@haatbazar.com.bd</a>
                </div>
                <div className="flex justify-between gap-2 py-1.5 border-b border-[#f4f5f8]">
                  <span className="text-ink-500">Corporate sales</span>
                  <a href="#" className="link">business@haatbazar.com.bd</a>
                </div>
                <div className="flex justify-between gap-2 py-1.5 border-b border-[#f4f5f8]">
                  <span className="text-ink-500">Press &amp; media</span>
                  <a href="#" className="link">press@haatbazar.com.bd</a>
                </div>
                <div className="flex justify-between gap-2 py-1.5 border-b border-[#f4f5f8]">
                  <span className="text-ink-500">Careers</span>
                  <a href="#" className="link">jobs@haatbazar.com.bd</a>
                </div>
                <div className="flex justify-between gap-2 py-1.5 border-b border-[#f4f5f8]">
                  <span className="text-ink-500">Report abuse</span>
                  <a href="#" className="link">trust@haatbazar.com.bd</a>
                </div>
              </div>
            </div>
            
          </aside>
        </div>
      </main>
    </>
  );
}
