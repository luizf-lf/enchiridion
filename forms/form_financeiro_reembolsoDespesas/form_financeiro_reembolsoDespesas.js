/**
 * @function handleRedirect
 * @description função para lidar com redirecionamentos.
 * @param {?string} locationUrl Url de destino. Se nulo, redireciona
 * para a home do Fluig
 * @returns {void}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 28/01/2022
 */
function handleRedirect(locationUrl) {
  var destination = top.WCMAPI.tenantURL + '/' + top.WCMAPI.homePageCode;
  if (locationUrl) {
    destination = locationUrl;
  }

  top.window.location.replace(destination);

  return;
}
/**
 * @function handleSubmit
 * @description função que lida com o envio do formulário por botão dentro do formulário
 * @returns {void}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 28/01/2022
 */
function handleSubmit() {
  top.$('#workflowActions').children()[0].click();

  return;
}
