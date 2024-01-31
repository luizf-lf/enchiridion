function displayFields(form, customHTML) {
  var activity = getValue('WKNumState');

  if (activity == 0 || activity == 4) {
    form.setValue(
      'vl_requesterName',
      fluigAPI.getUserService().getCurrent().getFullName()
    );
    form.setValue(
      'vl_requesterMail',
      fluigAPI.getUserService().getCurrent().getEmail()
    );
  }
}
