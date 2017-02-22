   /* var prodConsumerEnv = "http://www.cake.net/"
        searchField = "input[class='search-query']"
        landingEmailField = "input[placeholder='Email Address']"
        landingPasswordField = "input[placeholder='Password']"
        landingLoginButton = "button[class='btn-cake btn-cake-signin-signup']"
        emailFormatError = "span[class='form-error-text']"
        passwordShortOrLongFormatError = "//span[text()='Passwords must be between 8 and 50 characters long']"
        passwordWrongCharactersFormatError = "//span[text()='Passwords should use only letters, numbers, and these special characters: '!#$%&?'']"
        profileIcon = "img[class='profile-image-small']"
        


module.exports = {

  '@tags' : ['login', 'fieldRestrictions'],
  'stag-field-restrictions' : function (client) {

    var d = new Date();
    var n = d.getTime();

    client
 
      .url(prodConsumerEnv)
      .waitForElementVisible(searchField, 1000)
      .setValue(landingEmailField, "abc")
      .setValue(landingPasswordField, "test1234")
      .click(landingLoginButton)
      .pause(1000)
      .assert.containsText(emailFormatError, "Your email address must be in the format of name@domain.com")
      .clearValue(landingEmailField)
      .clearValue(landingPasswordField)
      .setValue(landingEmailField, "abc@abc.com")
      .setValue(landingPasswordField, "test123")
      .pause(5000)
      .useXpath()
      .assert.containsText(passwordShortOrLongFormatError, "Passwords must be between 8 and 50 characters long")
      .useCss()
      .setValue(landingPasswordField, "()")
      .useXpath()
      .pause(2000)
      .assert.containsText(passwordWrongCharactersFormatError, "Passwords should use only letters, numbers, and these special characters: '!#$%&?'")
      //.useCss()
      //.pause(5000)
      //.assert.containsText(passwordFormatError, "Password Needed")
      //.pause(1000)
      //.waitForElementVisible(profileIcon, 5000)

    client.end();
  }
};
*/