import Link from "next/link";

export default function DashboardTopbar() {
  return (
    <header className="topbar">
      <button className="icon-btn lg:hidden" data-drawer-open="sidebar-drawer" aria-label="Open menu" type="button">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <button className="icon-btn hidden lg:grid" data-sb-toggle aria-label="Toggle sidebar" type="button">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <div className="topbar-search hidden sm:block">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input placeholder="Search orders, products, services…" />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <Link href="/products" className="btn btn-sm btn-outline hidden md:inline-flex">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 7h12l1 14H5z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
          Continue shopping
        </Link>

        <div data-dropdown>
          <button data-dropdown-toggle className="icon-btn" type="button" aria-label="Notifications">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
              <path d="M10 19a2 2 0 0 0 4 0" />
            </svg>
            <span className="dot">3</span>
          </button>
          <div data-dropdown-menu className="right-0 !min-w-[320px] !p-0">
            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#f0f1f5]">
              <p className="text-[13px] font-extrabold">Notifications</p>
              <button className="text-[12px] font-bold text-brand-600" type="button">
                Mark all read
              </button>
            </div>
            <div className="max-h-[300px] overflow-auto thin-scroll">
              <a className="flex gap-2.5 px-3.5 py-3 hover:bg-ink-50 border-b border-[#f6f7f9]">
                <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h12l1 5H5z" />
                    <path d="M5 7v15h14V7" />
                    <path d="M9 12h6" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold clamp-1">Order HB-884213 shipped</p>
                  <p className="text-[11px] text-ink-400">12 min ago</p>
                </div>
              </a>
              <a className="flex gap-2.5 px-3.5 py-3 hover:bg-ink-50 border-b border-[#f6f7f9]">
                <span className="w-8 h-8 rounded-lg bg-gold-50 text-gold-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold clamp-1">New 5-star review received</p>
                  <p className="text-[11px] text-ink-400">1 hour ago</p>
                </div>
              </a>
              <a className="flex gap-2.5 px-3.5 py-3 hover:bg-ink-50 border-b border-[#f6f7f9]">
                <span className="w-8 h-8 rounded-lg bg-service-50 text-service-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M16 12h2" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold clamp-1">Payout ৳48,200 completed</p>
                  <p className="text-[11px] text-ink-400">Yesterday</p>
                </div>
              </a>
            </div>
            <Link href="/user/notifications" className="block text-center py-2.5 text-[12.5px] font-bold text-brand-600">
              View all notifications
            </Link>
          </div>
        </div>

        <div data-dropdown>
          <button data-dropdown-toggle className="icon-btn" type="button" aria-label="Messages">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a8 8 0 1 1-3.2-6.4" />
              <path d="M8 12h8M8 9h5" />
            </svg>
            <span className="dot">5</span>
          </button>
          <div data-dropdown-menu className="right-0 !min-w-[300px]">
            <div className="dd-label">Recent messages</div>
            <Link href="/user/messages" className="dd-item">
              <span className="avatar avatar-sm bg-ink-700">K</span>
              <span className="min-w-0">
                <span className="block text-[12.5px] font-bold">Kamal Uddin</span>
                <span className="block text-[11.5px] text-ink-400 clamp-1">Is the AC still in stock?</span>
              </span>
            </Link>
            <Link href="/user/messages" className="dd-item">
              <span className="avatar avatar-sm bg-ink-700">S</span>
              <span className="min-w-0">
                <span className="block text-[12.5px] font-bold">Sadia Rahman</span>
                <span className="block text-[11.5px] text-ink-400 clamp-1">Thanks for the fast delivery!</span>
              </span>
            </Link>
            <Link href="/user/messages" className="dd-item">
              <span className="avatar avatar-sm bg-ink-700">H</span>
              <span className="min-w-0">
                <span className="block text-[12.5px] font-bold">HaatBazar Support</span>
                <span className="block text-[11.5px] text-ink-400 clamp-1">Your ticket has been updated</span>
              </span>
            </Link>
            <div className="dd-sep"></div>
            <Link href="/user/messages" className="dd-item !justify-center !text-brand-600">
              Open inbox
            </Link>
          </div>
        </div>

        <div data-dropdown className="ml-1">
          <button data-dropdown-toggle className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl hover:bg-ink-50" type="button">
            <span className="avatar avatar-sm bg-brand-500">N</span>
            <span className="hidden sm:block text-left">
              <span className="block text-[12.5px] font-extrabold leading-tight">Nusrat Jahan</span>
              <span className="block text-[11px] text-ink-400">Gold member</span>
            </span>
            <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div data-dropdown-menu className="right-0">
            <div className="dd-label">Account</div>
            <Link href="/user/profile" className="dd-item">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>
              My profile
            </Link>
            <Link href="/user/settings" className="dd-item">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3.2" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
              </svg>
              Settings
            </Link>
            <Link href="/user/wallet" className="dd-item">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M16 12h2" />
              </svg>
              Wallet — ৳2,480
            </Link>
            <div className="dd-sep"></div>
            <Link href="/help-center" className="dd-item">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01" />
              </svg>
              Help centre
            </Link>
            <Link href="/login" className="dd-item is-danger">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
