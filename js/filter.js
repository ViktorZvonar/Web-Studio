(() => {
  const refs = {
    buttonAll: document.querySelector('button[data-all]'),
    buttonSites: document.querySelector('button[data-sites]'),
    buttonApps: document.querySelector('button[data-apps]'),
    buttonDesign: document.querySelector('button[data-design]'),
    buttonMarket: document.querySelector('button[data-market]'),

    linkSites: document.querySelectorAll('[data-demo-sites]'),
    linkDesign: document.querySelectorAll('[data-demo-design]'),
    linkMarketing: document.querySelectorAll('[data-demo-marketing]'),
    linkApps: document.querySelectorAll('[data-demo-apps]'),
  };

  refs.buttonAll.addEventListener('click', isVisible);
  refs.buttonSites.addEventListener('click', isHiddenForSites);
  refs.buttonApps.addEventListener('click', isHiddenForApps);
  refs.buttonDesign.addEventListener('click', isHiddenForDesign);
  refs.buttonMarket.addEventListener('click', isHiddenForMarket);

  function isVisible() {
    refs.linkDesign.forEach(element => element.classList.remove('hidden'));
    refs.linkMarketing.forEach(element => element.classList.remove('hidden'));
    refs.linkApps.forEach(element => element.classList.remove('hidden'));
    refs.linkSites.forEach(element => element.classList.remove('hidden'));
  }

  function isHiddenForSites() {
    refs.linkDesign.forEach(element => element.classList.add('hidden'));
    refs.linkMarketing.forEach(element => element.classList.add('hidden'));
    refs.linkApps.forEach(element => element.classList.add('hidden'));
    refs.linkSites.forEach(element => element.classList.remove('hidden'));
  }

  function isHiddenForApps() {
    refs.linkDesign.forEach(element => element.classList.add('hidden'));
    refs.linkMarketing.forEach(element => element.classList.add('hidden'));
    refs.linkSites.forEach(element => element.classList.add('hidden'));
    refs.linkApps.forEach(element => element.classList.remove('hidden'));
  }

  function isHiddenForDesign() {
    refs.linkDesign.forEach(element => element.classList.remove('hidden'));
    refs.linkMarketing.forEach(element => element.classList.add('hidden'));
    refs.linkSites.forEach(element => element.classList.add('hidden'));
    refs.linkApps.forEach(element => element.classList.add('hidden'));
  }

  function isHiddenForMarket() {
    refs.linkDesign.forEach(element => element.classList.add('hidden'));
    refs.linkMarketing.forEach(element => element.classList.remove('hidden'));
    refs.linkSites.forEach(element => element.classList.add('hidden'));
    refs.linkApps.forEach(element => element.classList.add('hidden'));
  }
})();
