# API Filter Example

### About

This repository is an example on how to fetch an API and filter its results directly from the JavaScript without having to fetch the API again. jQuery and Bootstrap was used for this example, but it can be easily done in plain JavaScript too.

You can see a live deploy at [GitHub Pages](https://luizf-lf.github.io/api-filter-example/)

### How it Works

In the `main.js` file it's used the [array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to filter the results from the [Covid19 API](https://covid19api.com/), from the [summary route](https://api.covid19api.com/summary).

When the DOM is loaded, a new `GET` request is made and the whole page is loaded. Then, whenever a new search value is typed in the search field, the array of results is filtered to a new filtered array:

```JavaScript

fetch('https://api.covid19api.com/summary')
  .then((response) => response.json())
  .then((result) => (apiResult = result.Countries));


$('#searchInput').keyup(() => {
  if ($('#searchInput').val() == '') {
    renderResult(apiResult);
  } else {
    let filteredArr = [];
    let searchInputValue = $('#searchInput').val();

    $('#covidDataContainer').html('');

    filteredArr = apiResult.filter((val) => {
      return val.Country.toLowerCase().includes(
        searchInputValue.toLowerCase()
      );
    });

    renderResult(filteredArr);
  }
});
```

The function `renderResult()` it's used only to render the elements on the page.
