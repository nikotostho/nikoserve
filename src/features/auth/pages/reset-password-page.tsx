import Link from "next/link";

export default function ResetPasswordPage() {
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
            
            <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight mb-3">Choose a strong new password</h2>
            
            <p className="text-[14px] text-white/80 leading-relaxed mb-7">A strong password protects your orders, addresses and saved payment methods.</p>
            
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">At least 8 characters</p>
                  <p className="text-[12px] text-white/70">Longer is stronger</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Mix it up</p>
                  <p className="text-[12px] text-white/70">Letters, numbers and symbols</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Avoid reuse</p>
                  <p className="text-[12px] text-white/70">Don’t use the same password elsewhere</p>
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
                <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
              </svg>
            </span>
            
            <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-1.5">Set a new password</h1>
            
            <p className="text-[13.5px] text-ink-500 mb-6">Your identity has been verified. Create a new password below.</p>
            
            <form data-prevent-submit className="space-y-4">
              
              <div>
                <label className="label">
                  New password 
                  <span className="req">*</span>
                </label>
                <div className="input-group">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <input type="password" className="input" placeholder="Enter new password" />
                </div>
                
                <div className="flex gap-1 mt-2">
                  <span className="h-1 flex-1 rounded-full bg-green-500"></span>
                  <span className="h-1 flex-1 rounded-full bg-green-500"></span>
                  <span className="h-1 flex-1 rounded-full bg-green-500"></span>
                  <span className="h-1 flex-1 rounded-full bg-ink-100"></span>
                </div>
                
                <p className="hint">Strength: strong</p>
              </div>
              
              <div>
                <label className="label">
                  Confirm new password 
                  <span className="req">*</span>
                </label>
                <div className="input-group">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <input type="password" className="input" placeholder="Re-type new password" />
                </div>
              </div>
              
              <div className="space-y-2 p-3.5 rounded-xl bg-ink-50">
                <p className="flex items-center gap-2 text-[12.5px] text-green-700">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  At least 8 characters
                </p>
                <p className="flex items-center gap-2 text-[12.5px] text-green-700">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  One uppercase letter
                </p>
                <p className="flex items-center gap-2 text-[12.5px] text-green-700">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  One number
                </p>
                <p className="flex items-center gap-2 text-[12.5px] text-ink-400">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12"></path>
                  </svg>
                  One special character
                </p>
              </div>
              
              <label className="check">
                <input type="checkbox" defaultChecked />
                Sign me out of all other devices
              </label>
              
              <Link href="/login" className="btn btn-lg btn-primary btn-block">Update password</Link>
            </form>
            
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
