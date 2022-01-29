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

/**
 * @function calculateRowValue
 * @description função que calcula o valor total de uma linha
 * @param {string} fieldId id do campo
 * @returns {void}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 29/01/2022
 */
function calculateRowValue(fieldId) {
  var rowSequence = fieldId.split('___')[1];
  var unitaryVal = $('#vl_expenseUnitaryValue___' + rowSequence).val();
  var amount = $('#vl_expenseQuantity___' + rowSequence).val();
  var total = 0;

  total = parseFloat(unitaryVal) * parseFloat(amount);
  $('#vl_expenseTotalValue___' + rowSequence).val(total);

  // se valor for acima de 200, realça os campos do formulário
  if (total >= 200) {
    $('#vl_expenseDescription___' + rowSequence)
      .parent()
      .addClass('has-error');
    $('#vl_expenseUnitaryValue___' + rowSequence)
      .parent()
      .parent()
      .addClass('has-error');
    $('#vl_expenseQuantity___' + rowSequence)
      .parent()
      .addClass('has-error');
    $('#vl_expenseTotalValue___' + rowSequence)
      .parent()
      .parent()
      .addClass('has-error');
  } else if (total < 200) {
    $('#vl_expenseDescription___' + rowSequence)
      .parent()
      .removeClass('has-error');
    $('#vl_expenseUnitaryValue___' + rowSequence)
      .parent()
      .parent()
      .removeClass('has-error');
    $('#vl_expenseQuantity___' + rowSequence)
      .parent()
      .removeClass('has-error');
    $('#vl_expenseTotalValue___' + rowSequence)
      .parent()
      .parent()
      .removeClass('has-error');
  }

  // chama a função que calcula o total geral
  calculateGlobalTotal();

  return;
}

/**
 * @function calculateGlobalTotal
 * @description função que calcula o valor geral de todas as linhas
 * @returns {void}
 * @author Luiz Ferreira <luizfernando_lf@hotmail.com.br>
 * @since 29/01/2022
 */
function calculateGlobalTotal() {
  var total = 0;

  // percorre os campos de valor total e soma ao total
  $('input.totalAmountRow').each(function () {
    total += parseFloat($(this).val());
  });

  // aplica o valor total ao campo de total geral
  $('#vl_globalTotal').val(total);

  // if (total >= 400) {
  //   $('#valueAmountWarning').html(
  //     '<p><b>Aviso: </b>Esta solicitação será enviada para aprovação seu seu gestor.</p>'
  //   );
  // } else if (total < 400) {
  //   $('#valueAmountWarning').html('');
  // }

  return;
}
