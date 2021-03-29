window.addEventListener('load', () => {
  const notificationBtn = document.getElementById('notificationBtn');
  const notificationPermissionStatus = document.getElementById(
    'notificationPermissionStatus'
  );
  const colorGreen = 'green';
  const colorRed = 'red';

  Notification.requestPermission();

  if (Notification.permission === 'granted') {
    notificationPermissionStatus.innerHTML = 'Granted';
    notificationPermissionStatus.style.color = colorGreen;
  } else {
    notificationPermissionStatus.innerHTML = 'Denied';
    notificationPermissionStatus.style.color = colorRed;
  }

  document
    .getElementById('inputNotificationTitle')
    .addEventListener('keyup', handleButtonDisplay);
  document
    .getElementById('inputNotificationBody')
    .addEventListener('keyup', handleButtonDisplay);

  notificationBtn.addEventListener('click', () => {
    const notificationTitle = document.getElementById('inputNotificationTitle')
      .value;
    const notificationBody = document.getElementById('inputNotificationBody')
      .value;
    if (notificationTitle != '' && notificationBody != '') {
      new Notification(notificationTitle, {
        body: notificationBody,
        icon: 'src/assets/img/notification.png',
      });
    }
  });
});

function handleButtonDisplay() {
  const notificationTitle = document.getElementById('inputNotificationTitle')
    .value;
  const notificationBody = document.getElementById('inputNotificationBody')
    .value;

  if (notificationTitle == '' || notificationBody == '') {
    document.getElementById('notificationBtn').setAttribute('disabled', true);
  } else {
    document.getElementById('notificationBtn').removeAttribute('disabled');
  }
}
