/**
 * @function eventDispatcher
 * @description Function dispatcher all the other functions when the body element is loaded
 * @returns {void}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 23/01/2022
 */
function eventDispatcher() {
  getCurrentYear('spanCurrentYear');

  return;
}

/**
 * @function getCurrentYear
 * @description Function that sets the current year to a page element;
 * @param {string} elementId the Id of the HTML element
 * @returns {void}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 23/01/2022
 */
function getCurrentYear(elementId) {
  document.getElementById(elementId).innerHTML = new Date().getFullYear();

  return;
}
