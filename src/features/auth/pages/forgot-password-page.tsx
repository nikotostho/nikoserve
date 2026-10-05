import Link from "next/link";

export default function ForgotPasswordPage() {
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
            
            <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight mb-3">Reset your password in two minutes</h2>
            
            <p className="text-[14px] text-white/80 leading-relaxed mb-7">Enter the phone number or email linked to your account and we will send a secure reset code.</p>
            
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="14" r="4"></circle>
                    <path d="m11 11 8-8 3 3-2 2 2 2-3 3-2-2-2 2"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Secure reset</p>
                  <p className="text-[12px] text-white/70">One-time code, expires in 10 minutes</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Account protection</p>
                  <p className="text-[12px] text-white/70">We alert you of every reset</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Need help?</p>
                  <p className="text-[12px] text-white/70">24/7 support on 16247</p>
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
                <circle cx="8" cy="14" r="4"></circle>
                <path d="m11 11 8-8 3 3-2 2 2 2-3 3-2-2-2 2"></path>
              </svg>
            </span>
            
            <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-1.5">Forgot your password?</h1>
            
            <p className="text-[13.5px] text-ink-500 mb-6">No problem. We'll send you a reset code.</p>
            
            <div className="seg w-full mb-5">
              <button className="is-active flex-1" type="button">By SMS</button>
              <button className="flex-1" type="button">By email</button>
            </div>
            
            <form data-prevent-submit className="space-y-4">
              
              <div>
                <label className="label">
                  Registered mobile number 
                  <span className="req">*</span>
                </label>
                <div className="input-affix">
                  <span className="affix">+880</span>
                  <input className="input" placeholder="1XXXXXXXXX" />
                </div>
              </div>
              
              <Link href="/reset-password" className="btn btn-lg btn-primary btn-block">Send reset code</Link>
              
              <Link href="/login" className="btn btn-ghost btn-block">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 6-6 6 6 6"></path>
                </svg>
                Back to sign in
              </Link>
            </form>
            
            <div className="mt-7 p-4 rounded-xl border border-[#e7e9ef]">
              <p className="text-[13px] font-extrabold mb-1.5">Can't access your number?</p>
              
              <p className="text-[12.5px] text-ink-500 mb-3">Contact our support team with your order ID and NID for manual verification.</p>
              
              <Link href="/contact" className="btn btn-sm btn-outline">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
                Contact support
              </Link>
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
