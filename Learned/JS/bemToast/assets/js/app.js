const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const msgElement = $('#msg-wrap');
const scBtn = $('.btn--success');
const failBtn = $('.btn--fail');
const toastIcon = [
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-solid fa-triangle-exclamation"></i>',
    '<i class="fa-solid fa-circle-exclamation"></i>'
]

function toast({
    title = 'Title',
    message = 'Content',
    type = "Success",
    duration = '3250',
    icon = 0
}) {
    msgElement.innerHTML += `
    <div class="toast toast--${type}">
       <div class="toast__body">
           <div class="toast__title">
           <div class="toast__headinng">
           <div class="toast__icon">${toastIcon[icon]}</div>  ${title}</div></div>
            <div class="toast__content">${message}</div>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
   </div>
    `
    setTimeout(() => {
        msgElement.removeChild(msgElement.firstElementChild);
    }, duration + 250)
};

function btnHandle() {
    var toastCloses = $$('.toast__close');
    var toasts = $$('.toast')
    toastCloses.forEach((toastClose, index) => {
        toastClose.onclick = () => {
            toasts[index].remove();
        }
    })
}

scBtn.onclick = () => {
    toast({
        title: `OS ${Math.floor(Math.random() * 100)}`,
        message: 'Linux',
        type: 'success',
        duration: 2000,
        icon: 0
    })
    btnHandle();
}

failBtn.onclick = () => {
    toast({
        title: `OS ${Math.floor(Math.random() * 100)}`,
        message: 'Linux',
        type: 'fail',
        duration: 2000,
        icon: 2
    })
    btnHandle();
}
 