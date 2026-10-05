export default function NotificationsPage() {
  return (
    <>
      <div className="page-head"><div><nav className="crumb mb-1.5"><a href="/user/dashboard">My Account</a><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg><span className="is-current">Account</span><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg><span className="is-current">Notifications</span></nav>
      <h1>Notifications</h1><p>3 unread · you are all caught up otherwise</p></div>
      <div className="flex flex-wrap items-center gap-2"><button className="btn btn-sm btn-outline" data-toast="All notifications marked as read"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Mark all read</button><button className="btn btn-sm btn-outline"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>Preferences</button><button className="btn btn-sm btn-danger"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg>Clear all</button></div></div>
      
      <div className="tabs  mb-4" data-tabs><button className="tab is-active" data-tab="t0">All<span className="count">48</span></button><button className="tab " data-tab="t1">Unread<span className="count">3</span></button><button className="tab " data-tab="t2">Orders<span className="count">18</span></button><button className="tab " data-tab="t3">Bookings<span className="count">6</span></button><button className="tab " data-tab="t4">Offers<span className="count">14</span></button><button className="tab " data-tab="t5">Reviews<span className="count">5</span></button><button className="tab " data-tab="t6">Account<span className="count">5</span></button></div>
      <div className="card overflow-hidden"><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0 bg-brand-50/40 hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12l1 5H5z"/><path d="M5 7v15h14V7"/><path d="M9 12h6"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold ">Your order has shipped</p><span className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0"></span>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">12 minutes ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Order HB-884213 (Realme C100X) has left the seller warehouse and is on its way. Estimated delivery 18 August.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">Track order</button>
      <button className="btn btn-xs btn-ghost">Mark as read</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0 bg-brand-50/40 hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"/><path d="M12 7v10"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold ">New voucher just for you — 20% off electronics</p><span className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0"></span>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">3 hours ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Use code ELEC20 before 25 August to get up to ৳1,500 off any electronics purchase.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">Collect voucher</button>
      <button className="btn btn-xs btn-ghost">Mark as read</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0 bg-brand-50/40 hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4.5 19 9l-9 9H5v-5z"/><path d="M13 6l5 5"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold ">Booking confirmed — AC servicing</p><span className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0"></span>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">5 hours ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Kamal AC Servicing confirmed your appointment for 18 August, 10:00 AM – 12:00 PM.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">View booking</button>
      <button className="btn btn-xs btn-ghost">Mark as read</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0  hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold text-ink-800">How was your Cotton Panjabi?</p>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">Yesterday, 4:20 PM</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Share your experience and earn 25 loyalty points for a verified review.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">Write review</button>
      <button className="btn btn-xs btn-ghost">Mark unread</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0  hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 12 3h8v8l-9 9z"/><circle cx="16" cy="8" r="1.5"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold text-ink-800">Price dropped on your wishlist item</p>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">Yesterday, 11:02 AM</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Bluetooth Speaker — Portable is now ৳1,850 (was ৳2,100). Only 8 pieces left in stock.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">Buy now</button>
      <button className="btn btn-xs btn-ghost">Mark unread</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0  hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold text-ink-800">Refund completed — ৳2,300</p>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">2 days ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Your refund for return RTN-4821 has been credited to your bKash account 01712xxxx78.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">View refund</button>
      <button className="btn btn-xs btn-ghost">Mark unread</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0  hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="M8 12h8M8 9h5"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold text-ink-800">Rahim Electronics replied to your question</p>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">3 days ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">“Yes, the phone comes with an official 1-year warranty and a free tempered glass.”</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">Open chat</button>
      <button className="btn btn-xs btn-ghost">Mark unread</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0  hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-ink-50 text-ink-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold text-ink-800">New login from Chrome on Windows</p>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">4 days ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">If this was not you, please change your password and review active sessions immediately.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">Review sessions</button>
      <button className="btn btn-xs btn-ghost">Mark unread</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0  hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13"/><path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold text-ink-800">You earned 500 points</p>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">5 days ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Your friend Sadia Rahman completed her first order. ৳500 voucher added to your account.</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">View rewards</button>
      <button className="btn btn-xs btn-ghost">Mark unread</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div><div className="flex gap-3.5 p-4 border-b border-[#f0f1f5] last:border-0  hover:bg-ink-50">
      <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="6.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg></span>
      <div className="min-w-0 flex-1"><div className="flex items-start gap-2"><p className="text-[13.5px] font-extrabold text-ink-800">Delivered — Organic Honey 500g</p>
      <span className="text-[11.5px] text-ink-400 ml-auto shrink-0">1 week ago</span></div>
      <p className="text-[12.5px] text-ink-500 mt-1 leading-relaxed">Your parcel was delivered and received by you at 3:42 PM. Enjoy!</p>
      <div className="flex items-center gap-2 mt-2.5"><button className="btn btn-xs btn-outline">Rate product</button>
      <button className="btn btn-xs btn-ghost">Mark unread</button>
      <button className="btn btn-xs btn-ghost !text-ink-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></svg></button></div></div></div>
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-[#f0f1f5]">
      <p className="text-[12.5px] text-ink-500">Showing <b>1–10</b> of <b>48</b> entries</p>
      <div className="flex items-center gap-3"><select className="select input-sm !w-auto"><option>10 / page</option><option>25 / page</option><option>50 / page</option><option>100 / page</option></select>
      <div className="pager"><a><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6"/></svg></a><span className="is-current">1</span><a>2</a><a>3</a><a>…</a><a>5</a><a><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg></a></div></div></div></div>
    </>
  );
}
