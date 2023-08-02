window.addEventListener('DOMContentLoaded', () => {
  const lightIcon = document.querySelector('.lightToggleIcon');
  const darkIcon = document.querySelector('.darkToggleIcon');

  (() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark', lightIcon, darkIcon);
    } else {
      setTheme('theme-light', lightIcon, darkIcon);
    }
    const buttonChange = document.querySelector('.theme-changer');
    buttonChange.addEventListener('click', () =>
      toggleTheme(lightIcon, darkIcon),
    );
  })();
});

const setTheme = (themeName, lightIcon, darkIcon) => {
  lightIcon.style.display = themeName === 'theme-dark' ? 'none' : 'block';
  darkIcon.style.display = themeName === 'theme-dark' ? 'block' : 'none';
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

const toggleTheme = (lightIcon, darkIcon) => {
  const theme =
    localStorage.getItem('theme') === 'theme-dark'
      ? 'theme-light'
      : 'theme-dark';
  setTheme(theme, lightIcon, darkIcon);
};
