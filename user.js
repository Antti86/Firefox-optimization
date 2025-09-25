// =======================================================
// Firefox optimization settings (for older laptops / Ubuntu)
// Antti86 user.js
// =======================================================

// Save session less frequently (reduces disk I/O on HDDs)
user_pref("browser.sessionstore.interval", 300000); // 5 min
user_pref("browser.sessionstore.interval.idle", 900000); // 15 min

// Limit the number of concurrent HTTP connections (lighter CPU/network load)
user_pref("network.http.max-connections", 200);

// Disable page prefetching (reduces unnecessary traffic)
user_pref("network.prefetch-next", false);

// Disable tab and UI animations
user_pref("browser.tabs.animate", false);
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Disable smooth scrolling
user_pref("general.smoothScroll", false);

// Enable built-in tracking protection
user_pref("privacy.trackingprotection.enabled", true);

// Disable Pocket integration (if not used)
user_pref("extensions.pocket.enabled", false);

// Prevent autoplay of media
user_pref("media.autoplay.default", 1);

// Disable telemetry and data collection
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("browser.ping-centre.telemetry", false);
