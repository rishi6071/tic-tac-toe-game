// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;

}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    document.querySelector('#themeSelect').checked = false;
  } else {
    setTheme("theme-dark");
    document.querySelector('#themeSelect').checked = true;
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.querySelector('#themeSelect').checked = true;
  } else {
    setTheme("theme-light");
    document.querySelector('#themeSelect').checked = false;
  }
})();
