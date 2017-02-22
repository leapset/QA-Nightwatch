    var stagConsumerEnv = "http://ds-consumer-staging.cake.net/"
        searchField = "input[class='search-query']"
        landingEmailField = "input[placeholder='Email Address']"
        landingPasswordField = "input[placeholder='Password']"
        landingLoginButton = "button[class='btn-cake btn-cake-signin-signup']"
        profileIcon = "img[class='profile-image-small']"
        


module.exports = {

  '@tags' : ['login', 'create'],
  'stag-create-landing' : function (client) {

    var d = new Date();
    var n = d.getTime();

    client
 
      .url(stagConsumerEnv)
      .waitForElementVisible(searchField, 1000)
      .setValue(landingEmailField, "test2" + n + "@auto.com")
      .setValue(landingPasswordField, "test1234")
      .click(landingLoginButton)
      .pause(10000)
      .waitForElementVisible(profileIcon, 5000)

    client.end();
  }
};