// =======================================================
// Firefox optimointiasetukset (vanhemmille koneille / Ubuntu)
// Antti86 user.js
// =======================================================

// Istunnon tallennus harvemmin (vähemmän levykuormaa)
user_pref("browser.sessionstore.interval", 300000); // 5 min
user_pref("browser.sessionstore.interval.idle", 900000); // 15 min

// HTTP-yhteyksien rajoittaminen (vähemmän prosessikuormaa)
user_pref("network.http.max-connections", 200);

// Estä sivujen esilataus (vähemmän turhaa liikennettä)
user_pref("network.prefetch-next", false);

// Poista välilehtien ja käyttöliittymän animaatiot
user_pref("browser.tabs.animate", false);
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Poista smooth scrolling
user_pref("general.smoothScroll", false);

// Ota käyttöön seurannan estäminen
user_pref("privacy.trackingprotection.enabled", true);

// Poista Pocket jos et käytä
user_pref("extensions.pocket.enabled", false);

// Estä media-autoplay
user_pref("media.autoplay.default", 1);

// Poista telemetria ja datan keruu
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("browser.ping-centre.telemetry", false);
