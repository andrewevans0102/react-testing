it('should login and save a meal', () => {
    cy.visit('/');
    cy.get('.MuiButton-label').click();
    cy.get('.MuiTypography-root').should('contain', 'Chessie Chow Chow');

    const sundaySelector =
        '.MuiPaper-root.Mui-expanded > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > [data-testid=mealEdit] > .MuiButton-label';
    const sundayBreakfast =
        '.MuiPaper-root.Mui-expanded > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > :nth-child(2) > .MuiInputBase-root > [rows="1"]';
    const sundayLunch =
        '.MuiPaper-root.Mui-expanded > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > :nth-child(4) > .MuiInputBase-root > [rows="1"]';
    const sundayDinner =
        '.MuiPaper-root.Mui-expanded > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > :nth-child(6) > .MuiInputBase-root > [rows="1"]';

    cy.get(
        ':nth-child(2) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root'
    ).click();
    cy.log('clicking the edit button first to unlock the fields');
    cy.get(sundaySelector).click();
    cy.log('clear the fields first');
    cy.get(sundayBreakfast).clear();
    cy.get(sundayLunch).clear();
    cy.get(sundayDinner).clear();
    cy.log('enter the meals second');
    cy.get(sundayBreakfast).type('cereal');
    cy.get(sundayLunch).type('sandwhich');
    cy.get(sundayDinner).type('chicken');
    cy.log('clicking the save after entering meals');
    cy.get(
        '.MuiPaper-root.Mui-expanded > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > [data-testid=mealSave] > .MuiButton-label'
    ).click();

    cy.get(
        ':nth-child(2) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root'
    ).click();
    cy.get(sundayBreakfast).should('contain', 'cereal');
    cy.get(sundayLunch).should('contain', 'sandwhich');
    cy.get(sundayDinner).should('contain', 'chicken');
});
