export const toggleMode = () => {
  const rootNode = document.querySelector('html');
  const currentMode = localStorage.getItem('theme');
  if (currentMode === 'light' || currentMode === null) {
    localStorage.setItem('theme', 'dark');
    rootNode.setAttribute('theme', 'dark');
    return 'dark';
  } else {
    localStorage.setItem('theme', 'light');
    rootNode.setAttribute('theme', 'light');
    return 'light';
  }
};
