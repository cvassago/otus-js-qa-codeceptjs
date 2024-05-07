const { I } = inject();

module.exports = {
    searchBox: '#searchbox',
    searchButton: '#searchsubmit',
    tableRows: locate('table.computers > tbody > tr'),
    addButton: '#add',
    successAlert: locate('.alert-message').withText('Done'),
    nameColumnHead: '.col-name > a',
    nextPageButton: '.next > a',
    currentPaginationLabel: '.current',

    open() {
        I.amOnPage('computers');
    },

    search(query: string) {
        I.fillField(this.searchBox, query);
        I.click(this.searchButton);
    },

    add() {
        I.click(this.addButton);
    },

    edit(computerName: string) {
        I.click(this.tableRows.find('a').withText(computerName));
    },

    nextPage() {
        I.click(this.nextPageButton);
    }
};
