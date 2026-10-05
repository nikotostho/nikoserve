export default function LocationDialog() {
  return (
    <div className="modal" id="locationModal">
      <div className="modal-backdrop" data-modal-close=""></div>
      <div className="modal-panel is-narrow">
        
        <div className="flex items-center justify-between p-5 border-b border-[#e7e9ef]">
          <h3 className="font-display text-[17px] font-extrabold">Choose your location</h3>
          <button className="icon-btn" data-modal-close="" type="button">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="p-5">
          <p className="text-[13px] text-ink-500 mb-4">We use your location to show nearby service providers, accurate delivery times and shipping fees.</p>
          
          <button className="btn btn-primary btn-block mb-4" data-toast="Location detected: Dhanmondi, Dhaka" type="button">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
              <circle cx="12" cy="10" r="2.5"></circle>
            </svg>
            Use my current location
          </button>
          
          <div className="dotted-sep my-4"></div>
          
          <label className="label">Division</label>
          <select className="select mb-3">
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Khulna</option>
            <option>Rajshahi</option>
            <option>Sylhet</option>
            <option>Barishal</option>
            <option>Rangpur</option>
            <option>Mymensingh</option>
          </select>
          
          <label className="label">District / City</label>
          <select className="select mb-3">
            <option>Dhaka</option>
            <option>Gazipur</option>
            <option>Narayanganj</option>
            <option>Savar</option>
          </select>
          
          <label className="label">Area / Thana</label>
          <select className="select mb-3">
            <option>Dhanmondi</option>
            <option>Gulshan</option>
            <option>Mirpur</option>
            <option>Uttara</option>
            <option>Mohammadpur</option>
            <option>Bashundhara R/A</option>
          </select>
          
          <label className="label">
            Post code 
            <span className="text-ink-400 font-medium">(optional)</span>
          </label>
          <input className="input mb-4" placeholder="1209" />
          
          <div className="flex gap-2">
            <button className="btn btn-outline flex-1" data-modal-close="" type="button">Cancel</button>
            <button className="btn btn-primary flex-1" data-modal-close="" data-toast="Location saved" type="button">Save location</button>
          </div>
        </div>
      </div>
    </div>
  );
}
