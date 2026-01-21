

    
    const header = document.getElementById('header');
    const onScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      header.classList.toggle('scrolled', top > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    
    const root = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    const themeBtnMobile = document.getElementById('themeToggleMobile');
    const themeIcon = document.getElementById('themeIcon');

    function toggleTheme() {
      root.classList.toggle('theme-dark');
      const isDark = root.classList.contains('theme-dark');
      themeIcon.className = isDark ? 'bi bi-moon-stars' : 'bi bi-brightness-high';
    }
    themeBtn.addEventListener('click', toggleTheme);
    themeBtnMobile.addEventListener('click', toggleTheme);

    
    const langBtn = document.getElementById('langToggle');
    const langBtnMobile = document.getElementById('langToggleMobile');
    const langCode = document.getElementById('langCode');
    const langCodeMobile = document.getElementById('langCodeMobile');

    const i18nMap = {
      EN: {
        brand: 'MyServFix',
        home: 'Home',
        categories: 'Categories',
        services: 'Services',
        blogs: 'Blogs',
        providers: 'Providers',
        contact: 'Contact',
        login: 'Login',
        register: 'Register',
        simple: 'Simple', fast: 'Fast', reliable: 'Reliable', connects: 'Connects',
        heroDesc: 'MyServFix helps customers find the right service provider – and service providers find new jobs. Register for free, receive inquiries, and get started right away.',
        stat1: 'Successful services', stat2: 'Reviews', stat3: 'Satisfied customers',
        verified: 'Verified professionals', tested: '100% tested',
        email: 'Email', password: 'Password', fullname: 'Full name', createaccount: 'Create account',
        yourlocation: 'Your location', enteraddress: 'Enter address', openmaps: 'Open in Google Maps'
      },
      DE: {
        brand: 'MyServFix',
        home: 'Home',
        categories: 'Kategorien',
        services: 'Dienstleistungen',
        blogs: 'Blogs',
        providers: 'Anbieter',
        contact: 'Contact',
        login: 'Anmelden',
        register: 'Registrieren',
        simple: 'Einfach', fast: 'Schnell', reliable: 'Zuverlässig', connects: 'verbindet',
        heroDesc: 'Auf MyServFix finden Kunden den passenden Dienstleister – und Dienstleister neue Aufträge. Kostenlos registrieren, Anfragen erhalten und direkt starten.',
        stat1: 'Erfolgreiche Dienstleistungen', stat2: 'Bewertungen', stat3: 'Zufriedene Kunden',
        verified: 'Verifizierte Fachkräfte', tested: '100% geprüft',
        email: 'E-Mail', password: 'Passwort', fullname: 'Vollständiger Name', createaccount: 'Konto erstellen',
        yourlocation: 'Ihr Standort', enteraddress: 'Adresse eingeben', openmaps: 'In Google Maps öffnen'
      }
    };

    function applyLanguage(lang) {
      const dict = i18nMap[lang];
      langCode.textContent = lang;
      langCodeMobile.textContent = lang;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
      });
      
      const heroDesc = document.getElementById('heroDesc');
      heroDesc.textContent = dict.heroDesc;
     
      document.getElementById('locationField').setAttribute('placeholder', lang === 'DE' ? 'Ihr Standort' : 'Your location');
      document.getElementById('serviceField').setAttribute('placeholder', lang === 'DE' ? 'Dienst suchen...' : 'Find a service...');
      document.getElementById('seekBtn').textContent = lang === 'DE' ? 'Suchen' : 'Seek';
    }
    
    applyLanguage('EN');

    function toggleLanguage() {
      const next = (langCode.textContent === 'EN') ? 'DE' : 'EN';
      applyLanguage(next);
    }
    langBtn.addEventListener('click', toggleLanguage);
    langBtnMobile.addEventListener('click', toggleLanguage);

    
    const servicesDropdown = document.getElementById('servicesDropdown');
    const servicesToggle = document.getElementById('servicesToggle');
    servicesToggle.addEventListener('click', (e) => {
      e.preventDefault();
      servicesDropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!servicesDropdown.contains(e.target)) {
        servicesDropdown.classList.remove('open');
      }
    });

    
    const mobilePanel = document.getElementById('mobilePanel');
    const openMobile = document.getElementById('hamburgerBtn');
    const closeMobile = document.getElementById('closeMobile');
    openMobile.addEventListener('click', () => mobilePanel.classList.add('open'));
    closeMobile.addEventListener('click', () => mobilePanel.classList.remove('open'));

    
    const locationInput = document.getElementById('locationInput');
    const locationModalEl = document.getElementById('locationModal');
    const locationModal = new bootstrap.Modal(locationModalEl);
    const mapAddress = document.getElementById('mapAddress');
    const openMapsBtn = document.getElementById('openMapsBtn');
    const locationField = document.getElementById('locationField');

    locationInput.addEventListener('click', () => {
      mapAddress.value = locationField.value || '';
      locationModal.show();
    });
    openMapsBtn.addEventListener('click', () => {
      const addr = mapAddress.value.trim();
      if (!addr) return;
      locationField.value = addr;
      const url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(addr);
      window.open(url, '_blank');
      locationModal.hide();
    });

   
    const seekBtn = document.getElementById('seekBtn');
    const serviceField = document.getElementById('serviceField');
    seekBtn.addEventListener('click', () => {
      const q = serviceField.value.trim();
      if (!q) return;
      alert('Searching for: ' + q);
    });

(function () {
  const section = document.getElementById('msf-how-it-works');
  if (!section) return;

  
  const i18n = {
    en: {
      title: 'This is how easy MyServFix works',
      subtitle: 'Find your perfect service provider in just three easy steps.',
      step1_title: 'Select service',
      step1_desc: 'Find the perfect offer right in your area.',
      step2_title: 'Select your preferred date',
      step2_desc: 'Choose your preferred date.',
      step3_title: 'Send booking request',
      step3_desc: 'Compare profiles and prices and send a booking request.',
    },
   
  };

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;
    section.setAttribute('data-lang', lang);
    section.querySelectorAll('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      if (dict[key]) el.textContent = dict[key];
    });
  }

  function applyTheme(theme) {
    section.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
  }

 
  window.addEventListener('toggle:theme', e => applyTheme(e.detail?.theme));
  window.addEventListener('toggle:lang',  e => applyLang(e.detail?.lang));

  
  window.msfSyncTheme = applyTheme;
  window.msfSyncLang  = applyLang;
})();


// Show/Hide Button on Scroll
window.onscroll = function() {
  const btn = document.getElementById("toUpBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Smooth Scroll to Top
document.getElementById("toUpBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

