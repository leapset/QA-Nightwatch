    var qaConsumerEnv = "http://ds-consumer-qa.cake.net/"
        footerAboutLink = "a[href='http://www.trycake.com/company/about']"
        footerMobileAppleLink = "a[href='https://geo.itunes.apple.com/us/app/cake-mobile/id1037606214?mt=8']"
        footerMobileAndroidLink = "a[href='https://play.google.com/store/apps/details?id=net.cake.mobile']"
        modalTitle = "h4[class='modal-title']"
        modalCloseButton = "button[class='TermsOfUseModal-CloseModalButton btn btn-default']"
        footerPrivacyLink = "a[class='Footer-Privacy']"
        footerContactUsLink = "a[href='http://www.trycake.com/company/about/#contact']"
        
        


module.exports = {

  '@tags' : ['footer', 'mobile'],
  'qa-footer-mobile-category' : function (client) {

    client
 
      .url(qaConsumerEnv)
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerMobileAppleLink)
      .pause(1000)
      .assert.urlEquals('https://itunes.apple.com/us/app/cake-mobile/id1037606214?mt=8&ign-mpt=uo%3D4')
      .back()
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerMobileAndroidLink)
      .pause(1000)
      .assert.urlEquals('https://play.google.com/store/apps/details?id=net.cake.mobile')
      .end();
  }
};