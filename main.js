// Phần menu con
var header = document.getElementById('header');
var mobileMenu = document.getElementById('menu-mobile');
// lấy giá trị của chiều dài
var valueHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClose = header.clientHeight === valueHeight;
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

// Đóng menu khi bấm vào
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');//lấy ra tất cả thẻ a có href ko rỗng
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            //khi ko có thuộc tính này khi bấm vào more sẽ cuộn lên home
            //do có href=# vì vậy ta dùng thuộc tính này để bỏ đi hành vi mặc định của nó
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}


// Nút buy ticket
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


const modalBackground = $('.js-modal-background');
const showModalBtns = $$('.js-buy-ticket');
const hideModalClose = $('.js-modal-close');
const modalContainer = $('.js-modal-container');

// Dùng để show modal ra khi click vào button
function showModal() {
    modalBackground.classList.add('open');
}

// Dùng để hide modal khi click vào nút close
function hideModal() {
    modalBackground.classList.remove('open');
}



// Lắng nghe sự kiện click trên từng button và show ra modal
for(showModalBtn of showModalBtns) {
    showModalBtn.addEventListener('click', showModal);
}

// Lắng nghe sự kiện click của close và hide modal
hideModalClose.addEventListener('click', hideModal);

// Lắng nghe sự kiện click vào vùng bên ngoài của modal và hide
modalBackground.addEventListener('click', hideModal);

// Ngăn chặn sự kiện nỗi bọt của thẻ modal-container nếu không có nó, khi ta ấn vào phần modal nó vẫn bị đóng
modalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
})