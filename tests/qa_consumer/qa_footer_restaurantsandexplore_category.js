    var qaConsumerEnv = "http://ds-consumer-qa.cake.net/"
        footerAboutLink = "a[href='http://www.trycake.com/company/about']"
        footerForRestaurantsLink = "a[href='http://www.trycake.com/products/cake-connect']"
        footerFAQLink = "a[href='http://university.trycake.com/faq']"
        footerSearchLink = "a[href='http://ds-consumer-qa.cake.net/search']"
        
        


module.exports = {

  '@tags' : ['footer', 'company'],
  'qa-footer-restaurant-explore-category' : function (client) {

    client
 
      .url(qaConsumerEnv)
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
      .assert.urlEquals('http://ds-consumer-qa.cake.net/search')
      .end();
  }
};