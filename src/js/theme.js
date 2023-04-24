window.addEventListener('DOMContentLoaded', () => {
  const lightIcon = document.querySelector('.lightToggleIcon');
  const darkIcon = document.querySelector('.darkToggleIcon');

  const setTheme = themeName => {
    lightIcon.style.display = themeName === 'theme-dark' ? 'none' : 'block';
    darkIcon.style.display = themeName === 'theme-dark' ? 'block' : 'none';
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  };

  const toggleTheme = () => {
    const theme =
      localStorage.getItem('theme') === 'theme-dark'
        ? 'theme-light'
        : 'theme-dark';
    setTheme(theme);
  };

  (function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
    const buttonChange = document.querySelector('.theme-changer');
    buttonChange.addEventListener('click', toggleTheme);
  })();
});
