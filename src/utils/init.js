if (!('Notification' in navigator)) {
  console.log('Esse browser/navegador não suporta notificações desktop')
} else {
  if (Notification.permission !== 'denied') {
    await Notification.requestPermission()
  }
}
