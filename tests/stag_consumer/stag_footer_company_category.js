    var stagConsumerEnv = "http://ds-consumer-staging.cake.net/"
        footerAboutLink = "a[href='http://www.trycake.com/company/about']"
        footerCareersLink = "a[href='http://www.trycake.com/company/about/#jobs']"
        footerPressLink = "a[href='http://www.trycake.com/press']"
        footerBlogLink = "a[href='http://www.trycake.com/blog']"
        
        


module.exports = {

  '@tags' : ['footer', 'company'],
  'stag-footer-company-category' : function (client) {

    client
 
      .url(stagConsumerEnv)
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerAboutLink)
      .pause(1000)
      .assert.urlEquals('https://www.trycake.com/about-cake/about/')
      .back()
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerCareersLink)
      .pause(1000)
      .assert.urlEquals('https://www.trycake.com/about-cake/about/#jobs')
      .back()
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerPressLink)
      .pause(1000)
      .assert.urlEquals('http://www.trycake.com/press/')
      .back()
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerBlogLink)
      .pause(1000)
      .assert.urlEquals('http://www.trycake.com/blog/')
      .end();
  }
};