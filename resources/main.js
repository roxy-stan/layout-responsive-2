const wrapperMenuMobile=document.getElementById("buttonMenuMobile");
const buttonOpen=document.getElementById("buttonOpen");
const buttonClose=document.getElementById("buttonClose");

buttonOpen.addEventListener("click", function() {
    wrapperMenuMobile.classList.add("show-menu-mobile");
}
);

buttonClose.addEventListener("click", function() {
    wrapperMenuMobile.classList.remove("show-menu-mobile");
}
);