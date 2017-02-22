    var stagConsumerEnv = "http://ds-consumer-staging.cake.net/"
        searchField = "input[class='search-query']"
        signUpHeaderButton = "//a[text()='SIGN UP']"
        loginLink = "//a[text()='login']"
        loginPageEmailField = "input[placeholder='Email Address']"
        loginPagePasswordField = "input[placeholder='Password']"
        loginPageLoginButton = "button[class='btn-cake btn-cake-signin-signup']"
        cakeConnectLogo = "img[src='/images/cake-logo.png']"
        

module.exports = {

  '@tags' : ['login', 'loginViaSignUp'],
  'stag-login-via-signup' : function (client) {

    client
 
      .url(stagConsumerEnv)
      .waitForElementVisible(searchField, 1000)
      .useXpath()
      .click(signUpHeaderButton)
      .pause(5000)
      .click(loginLink)
      .useCss()
      .pause(5000)
      .setValue(loginPageEmailField, "test2@auto.com")
      .setValue(loginPagePasswordField, "test1234")
      .click(loginPageLoginButton)
      .pause(5000)
      .waitForElementVisible(cakeConnectLogo, 5000)

    client.end();
  }
};