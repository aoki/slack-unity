var customCss = document.createElement('style');
customCss.type = 'text/css';
customCss.id = 'customCss';
customCss.innerHTML = `
  .StoplightContainer, .ScrollableArea, .TeamSelector-addArea {
    background-color: white !important;
  }
  .TeamSidebar-addArea {
    background: transparent !important;
  }
`;

var x = document.querySelector('#customCss');
if (x === null || typeof x === 'undefined') {
  document.getElementsByTagName('head').item(0).appendChild(customCss);
}
window.onkeydown = function(event) {
  if(event.ctrlKey && event.shiftKey && event.keyCode == 220) {
    console.log('Toggle!');
    if (document.getElementsByClassName('TeamSelector')[0].style.display !== 'none'){
      document.getElementsByClassName('TeamSelector')[0].style.display = 'none';
    } else {
      document.getElementsByClassName('TeamSelector')[0].style.display = '';
    }
  }
}
