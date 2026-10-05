import Link from "next/link";

export default function LoginPage() {
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
            
            <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight mb-3">Welcome back to Bangladesh’s everything marketplace</h2>
            
            <p className="text-[14px] text-white/80 leading-relaxed mb-7">One account for shopping products and booking trusted local services — with order tracking, wishlists and saved addresses.</p>
            
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Buyer protection</p>
                  <p className="text-[12px] text-white/70">Refund guarantee on every order</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Faster checkout</p>
                  <p className="text-[12px] text-white/70">Saved addresses and payment methods</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/15 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"></path>
                    <path d="M10 19a2 2 0 0 0 4 0"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13.5px] font-bold">Live updates</p>
                  <p className="text-[12px] text-white/70">Order and booking status in real time</p>
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
            
            <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-1.5">Sign in to your account</h1>
            
            <p className="text-[13.5px] text-ink-500 mb-6">
              New to HaatBazar? 
              <Link href="/register" className="link">Create an account</Link>
            </p>
            
            <div className="seg w-full mb-5">
              <button className="is-active flex-1" type="button">Phone number</button>
              <button className="flex-1" type="button">Email address</button>
            </div>
            
            <form data-prevent-submit className="space-y-4">
              
              <div>
                <label className="label">
                  Mobile number 
                  <span className="req">*</span>
                </label>
                <div className="input-affix">
                  <span className="affix">+880</span>
                  <input className="input" placeholder="1XXXXXXXXX" defaultValue="1712345678" />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="label !mb-0">
                    Password 
                    <span className="req">*</span>
                  </label>
                  <Link href="/forgot-password" className="text-[12.5px] font-bold text-brand-600">Forgot password?</Link>
                </div>
                
                <div className="input-group">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  <input type="password" className="input" placeholder="Enter your password" defaultValue="password123" />
                  
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"></path>
                      <circle cx="12" cy="12" r="2.6"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="check">
                  <input type="checkbox" defaultChecked />
                  Keep me signed in
                </label>
                
                <Link href="/otp-verify" className="text-[12.5px] font-bold text-brand-600">Sign in with OTP</Link>
              </div>
              
              <button type="button" data-toast="Demo only: authentication is not connected." className="btn btn-lg btn-primary btn-block">
                Sign in 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </button>
              
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
            
            <div className="mt-6 p-3.5 rounded-xl bg-ink-50 flex items-start gap-2.5">
              <svg className="w-4 h-4 text-ink-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 11v5M12 8h.01"></path>
              </svg>
              
              <p className="text-[12px] text-ink-500">
                Selling on HaatBazar? 
                <Link href="/login?next=%2Fvendor%2Fdashboard" className="link">Sign in to the seller centre</Link>
                 · Platform staff? 
                <Link href="/login?next=%2Fadmin%2Fdashboard" className="link">Admin sign in</Link>
              </p>
            </div>
            
            <p className="text-[11.5px] text-ink-400 text-center mt-6">
              By signing in you agree to our 
              <Link href="/terms" className="link">Terms</Link>
               and 
              <Link href="/privacy-policy" className="link">Privacy Policy</Link>
              .
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
