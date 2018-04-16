import $ from 'jquery';

class Services {
    constructor() {
        this.iconHover = $(".crane__left--icon");
        this.selectedBlock = $(".block");
        this.events();
    }

    events() {
        // clicking the open-modal-_btn
        this.iconHover.click(this.showBlock.bind(this));
    }

    showBlock() {
        this.selectedBlock.addClass("block--visible");
        return false;
    }
}
export default Services;