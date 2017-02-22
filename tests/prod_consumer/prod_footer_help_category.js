    var prodConsumerEnv = "http://www.cake.net/"
        footerAboutLink = "a[href='http://www.trycake.com/company/about']"
        footerTermsOfUseLink = "a[class='Footer-TOS']"
        modalTitle = "h4[class='modal-title']"
        modalCloseButton = "button[class='TermsOfUseModal-CloseModalButton btn btn-default']"
        footerPrivacyLink = "a[class='Footer-Privacy']"
        footerContactUsLink = "a[href='http://www.trycake.com/company/about/#contact']"
        
        


module.exports = {

  '@tags' : ['footer', 'help'],
  'stag-footer-help-category' : function (client) {

    client
 
      .url(prodConsumerEnv)
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerTermsOfUseLink)
      .pause(1000)
      .waitForElementVisible(modalTitle, 1000)
      .click(modalCloseButton)
      .waitForElementVisible(footerAboutLink, 1000)
      .pause(1000)
      .click(footerPrivacyLink)
      .pause(1000)
      .waitForElementVisible(modalTitle, 1000)
      .click(modalCloseButton)
      .waitForElementVisible(footerAboutLink, 1000)
      .pause(1000)
      .click(footerContactUsLink)
      .pause(5000)
      .assert.urlEquals('https://www.trycake.com/about-cake/about/#contact')
      .end();
  }
};