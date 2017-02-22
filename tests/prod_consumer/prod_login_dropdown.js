    var prodConsumerEnv = "http://www.cake.net/"
        searchField = "input[class='search-query']"
        loginDropdown = "//a[text()='LOGIN']"
        dropdownEmailField = "input[class='Login-Email form-input-transparent']"
        dropdownPasswordField = "input[class='Login-Password form-input-transparent']"
        dropdownLoginButton = "button[class='Login-Submit btn-cake']"

module.exports = {

  '@tags' : ['login', 'loginDropdown'],
  'stag-login-dropdown' : function (client) {

    client
 
      .url(prodConsumerEnv)
      .waitForElementVisible(searchField, 1000)
      .useXpath()
      .click(loginDropdown)
      .useCss()
      .setValue(dropdownEmailField, "test2@auto.com")
      .setValue(dropdownPasswordField, "test1234")
      .click(dropdownLoginButton)
      .waitForElementVisible(searchField, 5000)

    client.end();
  }
};