const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabPanes = $$('.tab-pane');
const lineTab = $('.line');

function lineTabFn() {
  lineTab.style.cssText = `left: ${$('.tab-item.active').offsetLeft}px; width: ${$('.tab-item.active').offsetWidth}px`
};

lineTabFn();

tabItems.forEach((tabItem, index) => {
  tabItem.addEventListener('click', function() {
    $('.tab-pane.active').classList.remove('active');
    $('.tab-item.active').classList.remove('active');
    this.classList.add('active');
    tabPanes[index].classList.add('active');
    lineTab.style.cssText = `left: ${$('.tab-item.active').offsetLeft}px; width: ${$('.tab-item.active').offsetWidth}px`
  });
});

