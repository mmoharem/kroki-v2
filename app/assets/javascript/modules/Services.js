import $ from 'jquery';

class Services {
    constructor() {
        this.openModalButton = $(".link-3");
        this.block = $(".block1");
        // this.modalCoseBtn = $(".modal__close");
        this.events();
    }

    events() {
        // clicking the open-modal-_btn
        this.openModalButton.click(this.openModalbind(this));

        //clicking the close-modal-_btn
        // this.modalCoseBtn.click(this.closeModal.bind(this));

        //clicking any-key
        // $(document).keyup(this.keyPressHandler.bind(this));
    }

    openModal() {
        this.block.addClass("block1--visible");
        return false;
    }

    // closeModal() {
    //     this.modal.removeClass("modal--visible");
    // }

    // keyPressHandler(e) {
    //     if (e.keyCode == 27) {
    //         this.closeModal();
    //     }
    // }

}

export default Services;