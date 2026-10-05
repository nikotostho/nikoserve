import Link from "next/link";

export default function SellerRegisterPage() {
  return (
    <>
      <main className="shell py-8 max-w-4xl">
        
        <div className="mb-6">
          <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-1.5">Open your online shop</h1>
          
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
              Bank &amp; pickup
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
                Shop name 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="e.g. Gadget Hub BD" />
              <p className="hint">This is what customers will see.</p>
            </div>
            
            <div>
              <label className="label">
                Main product category 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Electronics &amp; Gadgets</option>
                <option>Mobile &amp; Tablets</option>
                <option>Fashion &amp; Lifestyle</option>
                <option>Health &amp; Beauty</option>
                <option>Home &amp; Living</option>
                <option>Groceries &amp; Food</option>
                <option>Baby, Kids &amp; Toys</option>
                <option>Sports &amp; Outdoor</option>
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
              <textarea className="textarea" placeholder="Tell customers what you sell, since when, and what makes you different…"></textarea>
              <p className="hint">50–500 characters. This appears at the top of your public profile.</p>
            </div>
            
            <div>
              <label className="label">Shop logo</label>
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
              <label className="label">
                Trade licence 
                <span className="text-ink-400 font-medium">(required for companies)</span>
              </label>
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
            <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10 12 4l9 6"></path>
              <path d="M5 10v10h14V10M9 20v-6h6v6"></path>
            </svg>
            4. Payout &amp; pickup details
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            
            <div>
              <label className="label">
                Payout method 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Bank account</option>
                <option>bKash</option>
                <option>Nagad</option>
                <option>Rocket</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                Account holder name 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="As per bank record" />
            </div>
            
            <div>
              <label className="label">
                Bank name 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>BRAC Bank</option>
                <option>City Bank</option>
                <option>Dutch-Bangla Bank</option>
                <option>Islami Bank Bangladesh</option>
                <option>Eastern Bank</option>
                <option>Sonali Bank</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                Branch name 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="e.g. Gulshan Branch" />
            </div>
            
            <div>
              <label className="label">
                Account number 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="Enter account number" />
            </div>
            
            <div>
              <label className="label">Routing number</label>
              <input className="input" placeholder="9 digit routing number" />
            </div>
            
            <div className="sm:col-span-2 dotted-sep pt-4">
              <label className="label">
                Warehouse / pickup address 
                <span className="req">*</span>
              </label>
              <textarea className="textarea !min-h-[80px]" placeholder="Where our courier will collect parcels…"></textarea>
            </div>
            
            <div>
              <label className="label">Pickup contact person</label>
              <input className="input" placeholder="Name" />
            </div>
            
            <div>
              <label className="label">Pickup contact number</label>
              <div className="input-affix">
                <span className="affix">+880</span>
                <input className="input" placeholder="1XXXXXXXXX" />
              </div>
            </div>
            
            <div>
              <label className="label">Daily handover time</label>
              <select className="select">
                <option>10 AM – 12 PM</option>
                <option>12 PM – 3 PM</option>
                <option>3 PM – 6 PM</option>
              </select>
            </div>
            
            <div>
              <label className="label">Estimated monthly orders</label>
              <select className="select">
                <option>Less than 50</option>
                <option>50 – 200</option>
                <option>200 – 1,000</option>
                <option>1,000+</option>
              </select>
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
              <Link href="/terms" className="link">Seller Agreement</Link>
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
            <button className="btn btn-lg btn-primary flex-1 min-w-[200px]" data-toast="Application submitted for review" type="button">Submit application</button>
            
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
          <Link href="/login?next=%2Fvendor%2Fdashboard" className="link">Sign in to the seller centre</Link>
        </p>
        
      </main>
    </>
  );
}
