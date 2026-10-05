import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div className="min-h-screen grid lg:grid-cols-2">
        
        <div className="hidden lg:flex flex-col justify-between p-10 ph ph-a grid-noise text-white relative">
          
          <Link href="/" className="relative z-10 flex items-center gap-2.5">
            
            <span className="w-9 h-9 rounded-xl bg-white/15 grid place-items-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 7h12l1 14H5z"></path>
                <path d="M9 7a3 3 0 0 1 6 0"></path>
              </svg>
            </span>
            
            <span className="font-display text-[19px] font-extrabold tracking-tight">HaatBazar</span>
          </Link>
          
          <div className="relative z-10 max-w-md">
            
            <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight mb-3">Create your free HaatBazar account</h2>
            
            <p className="text-[14px] text-white/80 leading-relaxed mb-7">Shop from 48,000 sellers and book 132,000 verified service providers — all from one login.</p>
            
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                    <path d="M3 12h18M12 8v13"></path>
                    <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">৳500 welcome voucher</p>
                  <p className="text-[12px] text-white/70">Applied automatically to your first order</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Wishlist &amp; alerts</p>
                  <p className="text-[12px] text-white/70">Save items and get price-drop alerts</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="2.5"></circle>
                    <circle cx="18" cy="18" r="2.5"></circle>
                    <path d="M8.5 6H14a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Order tracking</p>
                  <p className="text-[12px] text-white/70">Follow every parcel and booking live</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 flex items-center gap-5 text-[12px] text-white/70">
            
            <div>
              <p className="font-display text-[19px] font-extrabold text-white">1.2M+</p>
              <p>Products</p>
            </div>
            <div>
              <p className="font-display text-[19px] font-extrabold text-white">132k+</p>
              <p>Providers</p>
            </div>
            <div>
              <p className="font-display text-[19px] font-extrabold text-white">4.8/5</p>
              <p>App rating</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-5 sm:p-8 bg-white">
          
          <div className="w-full max-w-[420px]">
            
            <Link href="/" className="lg:hidden flex items-center gap-2.5 mb-7">
              
              <span className="w-9 h-9 rounded-xl bg-brand-500 text-white grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 7h12l1 14H5z"></path>
                  <path d="M9 7a3 3 0 0 1 6 0"></path>
                </svg>
              </span>
              
              <span className="font-display text-[19px] font-extrabold tracking-tight">HaatBazar</span>
            </Link>
            
            <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-1.5">Create an account</h1>
            
            <p className="text-[13.5px] text-ink-500 mb-6">
              Already registered? 
              <Link href="/login" className="link">Sign in instead</Link>
            </p>
            
            <form data-prevent-submit className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="label">
                    First name 
                    <span className="req">*</span>
                  </label>
                  <input className="input" placeholder="Nusrat" />
                </div>
                
                <div>
                  <label className="label">
                    Last name 
                    <span className="req">*</span>
                  </label>
                  <input className="input" placeholder="Ahmed" />
                </div>
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
                <p className="hint">We will send a 6-digit verification code to this number.</p>
              </div>
              
              <div>
                <label className="label">Email address</label>
                <div className="input-group">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                  <input className="input" placeholder="you@example.com" />
                </div>
              </div>
              
              <div>
                <label className="label">
                  Password 
                  <span className="req">*</span>
                </label>
                <div className="input-group">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <input type="password" className="input" placeholder="Minimum 8 characters" />
                </div>
                
                <div className="flex gap-1 mt-2">
                  <span className="h-1 flex-1 rounded-full bg-gold-400"></span>
                  <span className="h-1 flex-1 rounded-full bg-gold-400"></span>
                  <span className="h-1 flex-1 rounded-full bg-ink-100"></span>
                  <span className="h-1 flex-1 rounded-full bg-ink-100"></span>
                </div>
                
                <p className="hint">Use 8+ characters with a mix of letters, numbers and symbols.</p>
              </div>
              
              <div>
                <label className="label">
                  Confirm password 
                  <span className="req">*</span>
                </label>
                <div className="input-group">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <input type="password" className="input" placeholder="Re-type your password" />
                </div>
              </div>
              
              <div>
                <label className="label">Your city</label>
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
                <label className="label">Referral code (optional)</label>
                <input className="input" placeholder="Enter a friend's code" />
              </div>
              
              <div className="space-y-2.5">
                <label className="check">
                  <input type="checkbox" defaultChecked />
                  I agree to the 
                  <Link href="/terms" className="link">Terms of Service</Link>
                   and 
                  <Link href="/privacy-policy" className="link">Privacy Policy</Link>
                  .
                </label>
                
                <label className="check">
                  <input type="checkbox" defaultChecked />
                  Send me deals, vouchers and order updates by SMS and email.
                </label>
              </div>
              
              <Link href="/otp-verify" className="btn btn-lg btn-primary btn-block">
                Create account 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
            </form>
            
            <div className="flex items-center gap-3 my-5">
              <span className="flex-1 h-px bg-[#e7e9ef]"></span>
              <span className="text-[11.5px] text-ink-400 font-bold">OR CONTINUE WITH</span>
              <span className="flex-1 h-px bg-[#e7e9ef]"></span>
            </div>
            
            <div className="grid grid-cols-3 gap-2.5">
              <button className="btn btn-outline !px-2 text-[12.5px]" type="button">
                <span className="w-4 h-4 rounded-full bg-ink-200 inline-block"></span>
                Google
              </button>
              <button className="btn btn-outline !px-2 text-[12.5px]" type="button">
                <span className="w-4 h-4 rounded-full bg-ink-200 inline-block"></span>
                Facebook
              </button>
              <button className="btn btn-outline !px-2 text-[12.5px]" type="button">
                <span className="w-4 h-4 rounded-full bg-ink-200 inline-block"></span>
                Apple
              </button>
            </div>
            
            <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
              
              <Link href="/become-seller" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[12.5px] font-extrabold">Sell products</p>
                  <p className="text-[11px] text-ink-500">Open a shop</p>
                </div>
              </Link>
              
              <Link href="/become-provider" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-service-200 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                    <path d="M13 6l5 5"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[12.5px] font-extrabold">List a service</p>
                  <p className="text-[11px] text-ink-500">Get customers</p>
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
