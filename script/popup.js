var modalLetter = document.querySelector(".modal-write-to-us");
var modalOverlay = document.querySelector(".modal-overlay");
var modalMap = document.querySelector(".modal-map");
var linkAboutUs = document.querySelector(".contacts-link");
var linkMap = document.querySelector(".map-link");
var buttonClose = document.querySelectorAll(".modal-close");
var fieldName = document.querySelector("[name=username]");
var fieldEmail = document.querySelector("[name=email]");
var fieldText = document.querySelector("[name=modal-text-field]");
var formLetter = document.querySelector(".write-us-form");

var isStorageSupport = true;
var storage = "";

// Попытка доступа к локальному хранилищу
try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

// Открытие попапа формы обратной связи
linkAboutUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLetter.classList.add("modal-show");
    modalOverlay.classList.add("overlay-show");
    if (isStorageSupport) {
        if (storage) {
            fieldName.value = storage;
            fieldEmail.focus();
        } else {
            fieldName.focus();
        }
    }
})

// Открытие попапа карты
linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
    modalOverlay.classList.add("overlay-show");
})



// Закрытие попапа кликом на кнопку закрытия (крестик)
for(var i = 0; i < buttonClose.length; i++) {
    buttonClose[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modalLetter.classList.remove("modal-show");
        modalOverlay.classList.remove("overlay-show");
        modalMap.classList.remove("modal-show");
        modalLetter.classList.remove("modal-error");
        fieldName.classList.remove("form-input-error");
        fieldEmail.classList.remove("form-input-error");
        fieldText.classList.remove("form-input-error");
    })
}

// Закрытие попапа кликом на оверлей
modalOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLetter.classList.remove("modal-show");
    modalOverlay.classList.remove("overlay-show");
    modalMap.classList.remove("modal-show");
    fieldName.classList.remove("form-input-error");
    fieldEmail.classList.remove("form-input-error");
    fieldText.classList.remove("form-input-error");
})

// Закрытие попапа клавишей Esc
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalLetter.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
            evt.preventDefault();
            modalLetter.classList.remove("modal-show");
            modalOverlay.classList.remove("overlay-show");
            modalMap.classList.remove("modal-show");
            modalLetter.classList.remove("modal-error");
            fieldName.classList.remove("form-input-error");
            fieldEmail.classList.remove("form-input-error");
            fieldText.classList.remove("form-input-error");
        }
    }
})

// Обработка полей ввода попапа входа
formLetter.addEventListener("submit", function (evt) {
    modalLetter.classList.remove("modal-error");
    fieldName.classList.remove("form-input-error");
    fieldEmail.classList.remove("form-input-error");
    fieldText.classList.remove("form-input-error");
    modalLetter.offsetWidth = modalLetter.offsetWidth;
    if (!fieldName.value) {
        evt.preventDefault();
        fieldName.classList.add("form-input-error");
        modalLetter.classList.add("modal-error");
    } else if (!fieldEmail.value) {
        evt.preventDefault();
        fieldEmail.classList.add("form-input-error");
        modalLetter.classList.add("modal-error");
    } else if (!fieldText.value) {
        evt.preventDefault();
        fieldText.classList.add("form-input-error");
        modalLetter.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", fieldName.value);
        }
    }
})