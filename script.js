function buildAndShowHomeHTML(categories) {
  // Load home snippet page
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtml) {
      // TODO: STEP 2: Choose a random category using the chooseRandomCategory function
      var randomCategory = chooseRandomCategory(categories);

      // TODO: STEP 3: Substitute {{randomCategoryShortName}} in the home HTML snippet with the chosen category
      var homeHtmlToInsertIntoMainPage = insertProperty(
        homeHtml,
        "randomCategoryShortName",
        randomCategory.short_name
      );

      // TODO: STEP 4: Insert the produced HTML into the main page
      insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
    },
    false
  ); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}
document.addEventListener("DOMContentLoaded", function (event) {
  // On first load, show home view
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl,
    buildAndShowHomeHTML, // ***** <---- TODO: STEP 1: Substitute [...]
    true
  ); // Explicitly setting the flag to get JSON from server processed into an object literal
});
