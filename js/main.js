window.addEventListener('load', async () => {
  let apiResult = [];
  let resultHTML = '';
  let mappedHTML = '';

  // await fetch('http://localhost:3000/api')
  await fetch('https://api.covid19api.com/summary')
    .then((response) => response.json())
    .then((result) => (apiResult = result.Countries));

  function renderResult(contentArr) {
    if (contentArr.length != 0) {
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
            <p><span class="totalCases"> Total Cases:</span> ${country.TotalConfirmed}</p>
            <p><span class="recovered">Recovered:</span> ${country.TotalRecovered}</p>
          </div>
        </div>
      </div>`;
          return mappedHTML;
        })
        .join('');

      document.getElementById('covidDataContainer').innerHTML = resultHTML;
    } else {
      if (
        document.getElementById('searchInput').value.toLowerCase() ==
        'equestria'
      ) {
        resultHTML =
          '<div class="alert alert-warning">Equestria is a safe place. There\'s no covid cases there. 🦄 </div>';
      } else {
        resultHTML =
          '<div class="alert alert-info">No countries found. Did you type correctly? 🤔 </div>';
      }
      document.getElementById('covidDataContainer').innerHTML = resultHTML;
    }
  }

  renderResult(apiResult);

  document.getElementById('searchInput').addEventListener('keyup', () => {
    if (document.getElementById('searchInput').value == '') {
      renderResult(apiResult);
    } else {
      let filteredArr = [];
      let searchInputValue = document.getElementById('searchInput').value;

      document.getElementById('covidDataContainer').innerHTML = '';

      filteredArr = apiResult.filter((val) => {
        return val.Country.toLowerCase().includes(
          searchInputValue.toLowerCase()
        );
      });

      renderResult(filteredArr);
    }
  });
});
