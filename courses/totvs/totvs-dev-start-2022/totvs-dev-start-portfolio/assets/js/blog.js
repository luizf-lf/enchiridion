window.addEventListener('load', () => {
  loadRepositories();
});

/**
 * @function loadRepositories
 * @description function that loads the repositores from github
 * @returns {void}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 27/01/2022
 */
async function loadRepositories() {
  const endpointUrl = 'https://api.github.com/users/luizf-lf/repos';

  fetch(endpointUrl)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      let htmlData = '';

      setTimeout(() => {
        htmlData = result
          .map((item) => {
            return `
          <div class="blog-list-item">
            <h3>${item.name}
              <a
                href="${item.html_url}"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="bi bi-github"></i
              ></a>
            </h3>
            <p>
              <span class="bi-date">${formatDate(item.created_at)}</span> |
              <span class="bi-additional-info">${item.language}</span>
            </p>
            <p>${item.description}</p>
          </div>
          `;
          })
          .join('');

        document.getElementById('repositoresListContainer').innerHTML =
          htmlData;
      }, 1000);
    });
  return;
}

/**
 * @function formatDate
 * @description formats the date to a custom format (DD mmm YYYY)
 * @param {string} date date in string format
 * @returns {string}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 27/01/2022
 */
function formatDate(date) {
  var newDate = new Date(date);
  var dateString = '';
  var months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  dateString =
    newDate.getDate() +
    ' ' +
    months[newDate.getMonth()] +
    ' ' +
    newDate.getFullYear();

  return dateString;
}
