    var stagConsumerEnv = "http://ds-consumer-staging.cake.net/"
        searchField = "input[class='search-query']"
        loginDropdown = "//a[text()='LOGIN']"
        dropdownEmailfield = "input[class='Login-Email form-input-transparent']"
        dropdownPasswordfield = "input[class='Login-Password form-input-transparent']"
        dropdownLoginButton = "button[class='Login-Submit btn-cake']"
        addItemButton = "button[class='Button Button--addItem']"
        itemNameField = "input[class='ItemDetails-Input--itemName']"
        itemPriceField = "input[class='ItemDetails-PriceInput--price']"
        itemDescriptionField = "textarea[class='ItemDetails-TextArea--description']"
        categoryNameField = "div[class='Chips-Field']"
        categoryName = "button[class='Option-Button Option-Button--saladsAndSoups']"
        modifierGroupField = "input[class='Autocomplete-Input Autocomplete-Input--modifierGroup']"
        modifierSizes = "button[class='Button Button--sizes']"
        modifierMin = "button[class='Button Button--0']"
        modifierOne = "button[class='Button Button--1']"
        itemSaveButton = "button[class='Button Button--save']"
        itemDeleteButton = "button[class='Button Button--deleteItem']"
        yesDeleteButton = "button[class='Button Button--yes']"

module.exports = {

  '@tags' : ['item', 'admin'],
  'stag-admin-add-item' : function (client) {

    client
 
      .url(stagConsumerEnv)
      .waitForElementVisible(searchField, 1000)
      .useXpath()
      .click(loginDropdown)
      .useCss()
      .setValue(dropdownEmailfield, "test3@auto.com")
      .setValue(dropdownPasswordfield, "test1234")
      .click(dropdownLoginButton)
      .pause(3000)
      .assert.urlEquals("http://cake-admin-staging.cake.net/restaurant/10267703/menu/items")
      .pause(3000)
      .click(addItemButton)
      .waitForElementVisible(itemNameField, 1000)
      .pause(1000)
      .setValue(itemNameField, "Delete Me")
      .pause(1000)
      .setValue(itemPriceField, "1")
      .setValue(itemDescriptionField, "This is 15 char")
      .click(categoryNameField)
      .click(categoryName)
      .click(modifierGroupField)
      .click(modifierSizes)
      .click(modifierMin)
      .click(modifierOne)
      .click(itemSaveButton)
      .waitForElementVisible(itemDeleteButton, 5000)
      .click(itemDeleteButton)
      .click(yesDeleteButton)
      .waitForElementVisible(addItemButton, 5000)

    client.end();
  }
};

//price