import Link from "next/link";

export default function OtpVerifyPage() {
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
            
            <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight mb-3">One last step — verify your number</h2>
            
            <p className="text-[14px] text-white/80 leading-relaxed mb-7">Verification keeps your account and every order secure. It takes less than a minute.</p>
            
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Account safety</p>
                  <p className="text-[12px] text-white/70">Prevents fraud and fake accounts</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Order updates</p>
                  <p className="text-[12px] text-white/70">Delivery alerts by SMS</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="14" r="4"></circle>
                    <path d="m11 11 8-8 3 3-2 2 2 2-3 3-2-2-2 2"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Easy recovery</p>
                  <p className="text-[12px] text-white/70">Reset your password anytime</p>
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
            
            <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                <path d="M8 12h8M8 9h5"></path>
              </svg>
            </span>
            
            <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-1.5">Enter verification code</h1>
            
            <p className="text-[13.5px] text-ink-500 mb-6">
              We sent a 6-digit code to 
              <b className="text-ink-800">+880 1712-345678</b>
              . 
              <Link href="/register" className="link">Change number</Link>
            </p>
            
            <div className="flex gap-2 mb-5" data-otp="">
              <input className="input !h-14 text-center !text-[22px] font-extrabold" maxLength={1} defaultValue="2" />
              <input className="input !h-14 text-center !text-[22px] font-extrabold" maxLength={1} defaultValue="4" />
              <input className="input !h-14 text-center !text-[22px] font-extrabold" maxLength={1} defaultValue="8" />
              <input className="input !h-14 text-center !text-[22px] font-extrabold" maxLength={1} defaultValue="" />
              <input className="input !h-14 text-center !text-[22px] font-extrabold" maxLength={1} defaultValue="" />
              <input className="input !h-14 text-center !text-[22px] font-extrabold" maxLength={1} defaultValue="" />
            </div>
            
            <button type="button" data-toast="Demo only: phone verification is not connected." className="btn btn-lg btn-primary btn-block mb-4">Verify &amp; continue</button>
            
            <div className="flex items-center justify-between text-[12.5px]">
              <span className="text-ink-500">
                Didn't get the code? Resend in 
                <b className="text-ink-800 mono">00:42</b>
              </span>
              <button className="font-bold text-brand-600" type="button">Resend</button>
            </div>
            
            <div className="dotted-sep my-6"></div>
            
            <div className="space-y-2.5">
              
              <button className="btn btn-outline btn-block" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                </svg>
                Get the code by voice call
              </button>
              
              <button className="btn btn-ghost btn-block" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
                Send to WhatsApp instead
              </button>
            </div>
            
            <div className="mt-6 p-3.5 rounded-xl bg-ink-50 flex items-start gap-2.5">
              <svg className="w-4 h-4 text-ink-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 11v5M12 8h.01"></path>
              </svg>
              
              <p className="text-[12px] text-ink-500">HaatBazar will never ask for your OTP over a phone call. Never share this code with anyone.</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="max-w-[420px] mx-auto px-4 pb-10">
        
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11.5px] text-ink-400">
          
          <Link href="/terms" className="hover:text-brand-600">Terms of Service</Link>
          <span className="text-ink-200">·</span>
          
          <Link href="/privacy-policy" className="hover:text-brand-600">Privacy Policy</Link>
          <span className="text-ink-200">·</span>
          
          <Link href="/help-center" className="hover:text-brand-600">Help Centre</Link>
          <span className="text-ink-200">·</span>
          
          <Link href="/contact" className="hover:text-brand-600">Contact us</Link>
        </div>
        
        <p className="text-center text-[11.5px] text-ink-400 mt-2">© 2026 HaatBazar Ltd. Protected by reCAPTCHA — never share your OTP with anyone.</p>
      </div>
    </>
  );
}
