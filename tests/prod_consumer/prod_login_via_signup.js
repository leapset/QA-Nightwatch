    var prodConsumerEnv = "http://www.cake.net/"
        searchField = "input[class='search-query']"
        signUpHeaderButton = "//a[text()='SIGN UP']"
        loginLink = "//a[text()='login']"
        loginPageEmailField = "input[placeholder='Email Address']"
        loginPagePasswordField = "input[placeholder='Password']"
        loginPageLoginButton = "button[class='btn-cake btn-cake-signin-signup']"
        

module.exports = {

  '@tags' : ['login', 'loginViaSignUp'],
  'stag-login-via-signup' : function (client) {

    client
 
      .url(prodConsumerEnv)
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
      .waitForElementVisible(searchField, 5000)

    client.end();
  }
};