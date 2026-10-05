import Link from "next/link";

export default function MobileMenuDrawer() {
  return (
    <div className="drawer" id="mobileMenu">
      <div className="drawer-backdrop" data-drawer-close=""></div>
      <div className="drawer-panel">
        
        <div className="flex items-center justify-between p-4 border-b border-[#e7e9ef]">
          <span className="font-display text-[17px] font-extrabold">Menu</span>
          <button className="icon-btn" data-drawer-close="" type="button">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="p-4 border-b border-[#e7e9ef] flex items-center gap-3">
          <span className="avatar avatar-lg bg-brand-500">NA</span>
          <div>
            <p className="font-bold text-[15px]">Nusrat Ahmed</p>
            <p className="text-[12.5px] text-ink-500">+880 1712-345678</p>
            <Link href="/login?next=%2Fuser%2Fprofile" className="text-[12px] font-bold text-brand-600">View profile</Link>
          </div>
        </div>
        
        <div className="p-3 overflow-y-auto flex-1">
          
          <button className="flex items-center gap-2 w-full p-3 mb-2 rounded-xl bg-ink-50 text-[13px] font-bold" data-modal-open="locationModal" type="button">
            <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
              <circle cx="12" cy="10" r="2.5"></circle>
            </svg>
            Dhanmondi, Dhaka
            <span className="ml-auto text-brand-600">Change</span>
          </button>
          
          <p className="dd-label">Shop products</p>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="12" rx="2"></rect>
              <path d="M9 20h6M12 16v4"></path>
            </svg>
            Electronics &amp; Gadgets
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
              <path d="M11 19h2"></path>
            </svg>
            Mobile &amp; Tablets
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
            </svg>
            Fashion &amp; Lifestyle
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
            </svg>
            Health &amp; Beauty
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20V9.5l8-6 8 6V20"></path>
              <path d="M9.5 20v-6h5v6"></path>
            </svg>
            Home &amp; Living
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12l1 14H5z"></path>
              <path d="M9 7a3 3 0 0 1 6 0"></path>
            </svg>
            Groceries &amp; Food
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="8" width="18" height="13" rx="2"></rect>
              <path d="M3 12h18M12 8v13"></path>
              <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
            </svg>
            Baby, Kids &amp; Toys
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8"></path>
            </svg>
            Sports &amp; Outdoor
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 16v-4l2-5h10l2 5v4"></path>
              <path d="M3 16h18v3h-2l-1-2H6l-1 2H3z"></path>
            </svg>
            Automobile Parts
          </Link>
          <Link href="/products" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"></path>
              <path d="M8 7h7"></path>
            </svg>
            Books &amp; Stationery
          </Link>
          
          <p className="dd-label">Local services</p>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
              <path d="M13 6l5 5"></path>
            </svg>
            Home Services
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
            </svg>
            AC &amp; Appliance Repair
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="2.5"></circle>
              <circle cx="6" cy="18" r="2.5"></circle>
              <path d="M8 8l12 10M8 16 20 6"></path>
            </svg>
            Beauty &amp; Salon
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
              <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
              <circle cx="18" cy="10" r="2"></circle>
            </svg>
            Doctors &amp; Clinics
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-4 9 4-9 4z"></path>
              <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path>
            </svg>
            Tutors &amp; Coaching
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 21h10l1-8H6z"></path>
              <path d="M6 13a4 4 0 0 1 2-7 4 4 0 0 1 8 0 4 4 0 0 1 2 7"></path>
            </svg>
            Restaurants &amp; Catering
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
            </svg>
            Event &amp; Wedding
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
              <circle cx="6.5" cy="17.5" r="1.5"></circle>
              <circle cx="17.5" cy="17.5" r="1.5"></circle>
            </svg>
            Packers &amp; Movers
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21 4-9 16-2-6-6-2z"></path>
            </svg>
            Travel Agents
          </Link>
          <Link href="/services" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="9" r="2"></circle>
              <circle cx="12" cy="7" r="2"></circle>
              <circle cx="17" cy="9" r="2"></circle>
              <path d="M8 15a4 4 0 0 1 8 0c0 3-2 4-4 4s-4-1-4-4z"></path>
            </svg>
            Pet Care
          </Link>
          
          <p className="dd-label">My account</p>
          
          <Link href="/login?next=%2Fuser%2Forders" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2h12l1 5H5z"></path>
              <path d="M5 7v15h14V7"></path>
              <path d="M9 12h6"></path>
            </svg>
            My Orders
          </Link>
          <Link href="/login?next=%2Fuser%2Fbookings" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2"></rect>
              <path d="M8 3v4M16 3v4M3 10h18"></path>
            </svg>
            Service Bookings
          </Link>
          <Link href="/login?next=%2Fuser%2Fwishlist" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
            </svg>
            Wishlist
          </Link>
          <Link href="/login?next=%2Fuser%2Fwallet" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="6" width="18" height="12" rx="2"></rect>
              <path d="M16 12h2"></path>
            </svg>
            Wallet
          </Link>
          <Link href="/login?next=%2Fuser%2Fnotifications" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"></path>
              <path d="M10 19a2 2 0 0 0 4 0"></path>
            </svg>
            Notifications
          </Link>
          <Link href="/help-center" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"></path>
            </svg>
            Help Center
          </Link>
          
          <div className="dd-sep"></div>
          <Link href="/become-seller" className="dd-item">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8h16v12H4z"></path>
              <path d="M9 8V4h6v4"></path>
            </svg>
            Become a Seller
          </Link>
          <Link href="/login" className="dd-item is-danger">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="16" height="11" rx="2"></rect>
              <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
            </svg>
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
