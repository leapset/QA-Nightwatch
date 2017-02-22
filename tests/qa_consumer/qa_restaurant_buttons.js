    var gardenParadiseRestaurantPage = "http://ds-consumer-qa.cake.net/restaurant/garden-paradise-austin-tx"
        qaConsumerEnv = "http://ds-consumer-qa.cake.net/"
        searchField = "input[class='search-query']"
        weListenButton = "button[class='btn-cake btn-cake-outline btn-feedback']"
        sendButtonListenModal = "button[class='FeedbackModal-Submit btn-cake']"
        closeListenModal = "button[class='close']"
        loginDropdown = "//a[text()='LOGIN']"
        dropdownEmailField = "input[class='Login-Email form-input-transparent']"
        dropdownPasswordField = "input[class='Login-Password form-input-transparent']"
        dropdownLoginButton = "button[class='Login-Submit btn-cake']"
        firstHeartButton = "i[class='icon-heart-liked']"


module.exports = {

  '@tags' : ['restaurant', 'buttons'],
  'qa-restaurant-page-buttons' : function (client) {

    client
      
      .url(qaConsumerEnv)
      .waitForElementVisible(searchField, 1000)
      .useXpath()
      .click(loginDropdown)
      .useCss()
      .setValue(dropdownEmailField, "1@2.com")
      .setValue(dropdownPasswordField, "test1234")
      .click(dropdownLoginButton)
      .pause(3000)

      .url(gardenParadiseRestaurantPage)
      .url(gardenParadiseRestaurantPage)
     
      .click(weListenButton)
      .pause(1000)
      .waitForElementVisible(sendButtonListenModal, 1000)
      .click(closeListenModal)
      .pause(1000)
      .click(firstHeartButton)

//OLO button testing to be added here when OLO staging environment is fixed. 

      



 /*
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

*/


      .end();
  }
};