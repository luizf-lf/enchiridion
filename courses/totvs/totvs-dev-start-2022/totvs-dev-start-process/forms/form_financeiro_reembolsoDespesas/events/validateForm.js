function validateForm(form) {
  var activity = getValue('WKNumState');
  var invalidFields = [];
  var childrenIndexes = form.getChildrenIndexes('table_expenses');

  if (childrenIndexes.length == 0) {
    throw 'Insira pelo menos uma despesa para poder enviar a solicitação';
  }

  if (activity == 0 || activity == 4) {
    if (form.getValue('vl_requesterName') == '') {
      invalidFields.push('Nome do solicitante é obrigatório');
    }

    if (form.getValue('vl_requesterMail') == '') {
      invalidFields.push('E-mail do solicitante é obrigatório');
    }

    if (form.getValue('vl_requesterCompany') == '') {
      invalidFields.push('Empresa é obrigatório');
    }

    if (form.getValue('vl_requesterArea') == '') {
      invalidFields.push('Área é obrigatório');
    }

    for (var i = 0; i < childrenIndexes.length; i++) {
      if (form.getValue('vl_expenseType___' + childrenIndexes[i]) == '') {
        invalidFields.push(
          'Tipo de despesa (' + (i + 1) + 'º registro.) é obrigatório.'
        );
      }

      if (
        form.getValue('vl_expenseUnitaryValue___' + childrenIndexes[i]) == '0'
      ) {
        invalidFields.push(
          'Valor unitário da despesa (' +
            (i + 1) +
            'º registro.) é obrigatório.'
        );
      }

      if (form.getValue('vl_expenseQuantity___' + childrenIndexes[i]) == '0') {
        invalidFields.push(
          'Quantidade da despesa (' + (i + 1) + 'º registro.) é obrigatório.'
        );
      }
    }

    if (invalidFields.length > 0) {
      var msg = 'Verifique os seguintes campos antes de prosseguir: \n';
      for (var i = 0; i < invalidFields.length; i++) {
        msg += ' • ' + invalidFields[i] + '\n';
      }

      throw msg;
    }
  }

  return;
}
