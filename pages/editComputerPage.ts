const { I } = inject();

module.exports = {
    deleteButton: locate('input[type="submit"]')
        .withAttr({value: 'Delete this computer'}),

    delete() {
        I.click(this.deleteButton);
    }
};
