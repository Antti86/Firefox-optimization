# Firefox Optimization user.js  

A custom Firefox `user.js` configuration file optimized for **older laptops and low-spec systems** (e.g. Ubuntu laptops with limited CPU/RAM, or legacy Windows machines).  

This configuration reduces memory and CPU usage by disabling unnecessary animations, telemetry, and background tasks, while improving responsiveness and browsing speed.  

---

## 🚀 Features
- Reduces session save frequency (less disk I/O on HDDs)  
- Limits concurrent HTTP connections (lighter network/CPU load)  
- Disables unnecessary UI animations and smooth scrolling  
- Enables built-in tracking protection  
- Disables Pocket integration and telemetry/usage reporting  
- Prevents autoplay of media by default  

---

## 📂 Installation
1. **Find your Firefox profile folder**:  
   - **Linux**: `~/.mozilla/firefox/xxxxxxxx.default-release/`  
   - **Windows**: `C:\Users\<Username>\AppData\Roaming\Mozilla\Firefox\Profiles\xxxxxxxx.default-release\`  
   *(You can also open `about:support` in Firefox and click “Open Folder” next to “Profile Folder”)*  

2. **Copy `user.js` into that folder.**  

3. Restart Firefox → the new settings will be applied automatically.  

---

## 💡 Notes
- These settings are meant for **performance optimization** on older hardware.  
- You can edit `user.js` with any text editor to adjust preferences for your own needs.  
- If Firefox updates or resets settings, `user.js` will always reapply your custom configuration at startup.  

---

## 📜 License
MIT License – free to use, modify, and share.  
