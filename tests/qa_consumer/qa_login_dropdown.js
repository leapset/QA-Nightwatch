    var qaConsumerEnv = "http://ds-consumer-qa.cake.net/"
        searchField = "input[class='search-query']"
        loginDropdown = "//a[text()='LOGIN']"
        dropdownEmailField = "input[class='Login-Email form-input-transparent']"
        dropdownPasswordField = "input[class='Login-Password form-input-transparent']"
        dropdownLoginButton = "button[class='Login-Submit btn-cake']"
        cakeConnectLogo = "img[src='/images/cake-logo.png']"

module.exports = {

  '@tags' : ['login', 'loginDropdown'],
  'qa-login-dropdown' : function (client) {

    client
 
      .url(qaConsumerEnv)
      .waitForElementVisible(searchField, 1000)
      .useXpath()
      .click(loginDropdown)
      .useCss()
      .setValue(dropdownEmailField, "test2@auto.com")
      .setValue(dropdownPasswordField, "test1234")
      .click(dropdownLoginButton)
      .waitForElementVisible(cakeConnectLogo, 5000)

    client.end();
  }
};