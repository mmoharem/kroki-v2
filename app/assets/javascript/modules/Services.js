import $ from 'jquery';

class Services {
    constructor() {
<<<<<<< HEAD
        this.openModalButton = $(".link-3");
        this.block = $(".block1");
        // this.modalCoseBtn = $(".modal__close");
=======
        this.iconHover = $(".crane__left--icon-1, .crane__left--icon-2, .crane__left--icon-3");
        this.selectedBlock = $(".block");
>>>>>>> a1e052c61dd5d0337eecf0f5093187fbbc4d7cdb
        this.events();
    }

    events() {
        // clicking the open-modal-_btn
<<<<<<< HEAD
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

=======
        this.iconHover.click(this.showBlock.bind(this));
    }

    showBlock() {
        this.selectedBlock.addClass("block--visible");
        return false;
    }
}
>>>>>>> a1e052c61dd5d0337eecf0f5093187fbbc4d7cdb
export default Services;