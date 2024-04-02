export const checkVisibility = (elementId, setVisible) => {
  const element = document.getElementById(elementId);
  if (element && window.scrollY + window.innerHeight >= element.offsetTop) {
    setVisible(true);
  }
};
