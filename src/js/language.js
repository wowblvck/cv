import i18next from 'i18next';
import autoHeight from './auto-height';

const DEFAULT_LANG = 'en';

const SUPPORTED_LANGS = ['en', 'ru'];

const updateContent = () => {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = i18next.t(key);
    element.innerHTML = translation;
  });
  autoHeight.set();
};

const initLocalization = async () => {
  const translations = await Promise.all(
    SUPPORTED_LANGS.map(lang =>
      fetch(`./i18n/${lang}.json`)
        .then(r => r.json())
        .then(json => ({ lang, resources: { translation: json } })),
    ),
  );
  const currentLang = localStorage.getItem('lang') || DEFAULT_LANG;
  const fallbackLang = DEFAULT_LANG;
  await i18next.init({
    lng: currentLang,
    fallbackLng: fallbackLang,
    resources: translations.reduce((obj, item) => {
      obj[item.lang] = item.resources;
      return obj;
    }, {}),
  });
  updateContent();
  setLanguageIcon(currentLang);
  i18next.on('languageChanged', () => {
    updateContent();
  });
};

const switchLanguage = () => {
  const currentLang = localStorage.getItem('lang') || DEFAULT_LANG;
  const nextLang = SUPPORTED_LANGS.includes(currentLang)
    ? SUPPORTED_LANGS[
        (SUPPORTED_LANGS.indexOf(currentLang) + 1) % SUPPORTED_LANGS.length
      ]
    : null;
  localStorage.setItem('lang', nextLang);
  setLanguageIcon(nextLang);
  i18next.changeLanguage(nextLang);
};

const hideNonDefaultIcons = () => {
  const languagesIcon = document.querySelectorAll('.lang-changer__icon');
  languagesIcon.forEach(icon => {
    if (!icon.classList.contains(`lang-changer__icon_${DEFAULT_LANG}`)) {
      icon.style.display = 'none';
    }
  });
};

const setLanguageIcon = lang => {
  const languagesIcon = document.querySelectorAll('.lang-changer__icon');
  languagesIcon.forEach(icon => {
    if (icon.classList.contains(`lang-changer__icon_${lang}`)) {
      icon.style.display = 'block';
    } else {
      icon.style.display = 'none';
    }
  });
};

const initLanguageSwitcher = () => {
  const langSwitcher = document.querySelector('.lang-changer');
  langSwitcher.removeAttribute('disabled');
  langSwitcher.addEventListener('click', switchLanguage);
};

(async () => {
  hideNonDefaultIcons();
  initLanguageSwitcher();
  await initLocalization();
})();
