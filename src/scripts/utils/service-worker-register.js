const ServiceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        console.log('Service Worker Berhasil Didaftarkan');
      });
  } else {
    console.log('Browser Ini Tidak Support Service Worker Silahkan Perbaharui');
  }
};

export default ServiceWorkerRegister;
