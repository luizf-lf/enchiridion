$(document).ready(async () => {
  let apiResult = [];
  let resultHTML = '';
  let mappedHTML = '';

  // await fetch('http://localhost:3000/api')
  await fetch('https://api.covid19api.com/summary')
    .then((response) => response.json())
    .then((result) => (apiResult = result.Countries));

  function renderResult(contentArr) {
    resultHTML = contentArr
      .map((country) => {
        mappedHTML = `<div class="card">
        <div class="card-header" id="heading_${country.CountryCode}">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapse_${country.CountryCode}"
              aria-expanded="false"
              aria-controls="collapse_${country.CountryCode}"
            >
              ${country.Country}
            </button>
          </h2>
        </div>

        <div
          id="collapse_${country.CountryCode}"
          class="collapse"
          aria-labelledby="heading_${country.CountryCode}"
          data-parent="#covidDataContainer"
        >
          <div class="card-body">
            Total de casos: ${country.TotalConfirmed}
          </div>
        </div>
      </div>`;
        return mappedHTML;
      })
      .join('');
    $('#covidDataContainer').html(resultHTML);
  }

  renderResult(apiResult);

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
});
