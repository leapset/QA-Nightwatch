    var stagConsumerEnv = "http://ds-consumer-staging.cake.net/"
        footerAboutLink = "a[href='http://www.trycake.com/company/about']"
        footerForRestaurantsLink = "a[href='http://www.trycake.com/products/cake-connect']"
        footerFAQLink = "a[href='http://university.trycake.com/faq']"
        footerSearchLink = "a[href='http://ds-consumer-staging.cake.net/search']"
        
        


module.exports = {

  '@tags' : ['footer', 'company'],
  'stag-footer-restaurant-explore-category' : function (client) {

    client
 
      .url(stagConsumerEnv)
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerForRestaurantsLink)
      .pause(1000)
      .assert.urlEquals('http://www.trycake.com/products/cake-connect/')
      .back()
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerFAQLink)
      .pause(1000)
      .assert.urlEquals('http://university.cake.net/faq')
      .back()
      .waitForElementVisible(footerAboutLink, 1000)
      .click(footerSearchLink)
      .pause(1000)
      .assert.urlEquals('http://ds-consumer-staging.cake.net/search')
      .end();
  }
};