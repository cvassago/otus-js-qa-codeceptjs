Feature('Computer database tests');

Scenario('check label', ({ I }) => {
    I.amOnPage('/');
    I.see('Computer database');
});
