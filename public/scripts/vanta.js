if (window.VANTA)
  window.VANTA.NET({
    el: document.querySelector("#vantaBG"),
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
