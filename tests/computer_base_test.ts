Feature('Computer database tests');

Scenario('Computer search', ({ I, computersPage }) => {
    const computerName = 'APEXC';

    computersPage.open();
    computersPage.search(computerName);

    I.seeNumberOfElements(computersPage.tableRows, 1);
    I.see(computerName, computersPage.tableRows)
});

Scenario('Form add new computer', ({I, computersPage, newComputerPage}) => {
    computersPage.open();
    computersPage.add();

    I.fillField(newComputerPage.nameInput, 'computer name');
    I.fillField(newComputerPage.introducedInput, '2024-05-05');
    I.fillField(newComputerPage.discontinuedInput, '2024-05-06');
    I.selectOption(newComputerPage.companySelect, '1');
    I.click(newComputerPage.submitButton);

    I.seeElement(computersPage.successAlert);
});

Scenario('double click on column header sort data descending', ({I, computersPage}) => {
    computersPage.open();

    I.doubleClick(computersPage.nameColumnHead);

    I.see('lenovo thinkpad z61p', computersPage.tableRows.first());
});

Scenario('delete button delete computer', ({I, computersPage, editComputerPage}) => {
    computersPage.open();

    computersPage.edit('ACE');
    editComputerPage.delete();

    I.seeElement(computersPage.successAlert);
});

Scenario('Next page button works', ({I, computersPage}) => {
    computersPage.open();
    computersPage.nextPage();

    I.see('ASCI White', computersPage.tableRows.first());
    I.see('Displaying 11 to 20', computersPage.currentPaginationLabel);
});
