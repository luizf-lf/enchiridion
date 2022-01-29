function validateForm(form) {
  var invalidFields = [];

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

  if (invalidFields.length > 0) {
    var msg = 'Verifique os seguintes campos antes de prosseguir: \n';
    for (var i = 0; i < invalidFields.length; i++) {
      msg += ' - ' + invalidFields[i] + '\n';
    }

    throw msg;
  }

  return;
}
