(function () {
  'use strict';

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
        })
        .catch(function (err) {
        });
    });
  }

  let deferredPrompt;
  let installPromptShown = false;

  window.addEventListener('beforeinstallprompt', function (e) {

    e.preventDefault();

    deferredPrompt = e;

    if (window.innerWidth <= 768 && !installPromptShown) {
      showInstallPrompt();
    }
  });

  function showInstallPrompt() {
    const promptDiv = document.getElementById('pwa-install-prompt');
    if (!promptDiv) return;

    if (!localStorage.getItem('pwa-prompt-dismissed')) {

      setTimeout(function () {
        promptDiv.style.display = 'block';
        setTimeout(function () {
          promptDiv.style.transform = 'translateY(0)';
        }, 10);
      }, 2000);

      installPromptShown = true;

      const installBtn = document.getElementById('pwa-install-btn');
      if (installBtn) {
        installBtn.addEventListener('click', function () {

          promptDiv.style.transform = 'translateY(100%)';
          setTimeout(function () {
            promptDiv.style.display = 'none';
          }, 300);

          if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(function (choiceResult) {
              if (choiceResult.outcome === 'accepted') {
                showNotification('Cảm ơn bạn đã cài đặt ứng dụng!', 'success');
              } else {
              }
              deferredPrompt = null;
            });
          }
        });
      }

      const dismissBtn = document.getElementById('pwa-dismiss-btn');
      if (dismissBtn) {
        dismissBtn.addEventListener('click', function () {
          promptDiv.style.transform = 'translateY(100%)';
          setTimeout(function () {
            promptDiv.style.display = 'none';
          }, 300);
          localStorage.setItem('pwa-prompt-dismissed', Date.now());
        });
      }

      const closeBtn = document.getElementById('pwa-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          promptDiv.style.transform = 'translateY(100%)';
          setTimeout(function () {
            promptDiv.style.display = 'none';
          }, 300);
          localStorage.setItem('pwa-prompt-dismissed', Date.now());
        });
      }

      setTimeout(function () {
        if (promptDiv.style.display !== 'none') {
          promptDiv.style.transform = 'translateY(100%)';
          setTimeout(function () {
            promptDiv.style.display = 'none';
          }, 300);
        }
      }, 15000);
    }
  }

  function checkPromptDismissalTime() {
    const dismissedTime = localStorage.getItem('pwa-prompt-dismissed');
    if (dismissedTime) {
      const now = Date.now();
      const daysSinceDismissed = (now - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed > 7) {
        localStorage.removeItem('pwa-prompt-dismissed');
      }
    }
  }
  checkPromptDismissalTime();

  window.addEventListener('appinstalled', function (evt) {
    const promptDiv = document.getElementById('pwa-install-prompt');
    if (promptDiv) {
      promptDiv.style.transform = 'translateY(100%)';
      setTimeout(function () {
        promptDiv.style.display = 'none';
      }, 300);
    }
  });

  let isActuallyOnline = navigator.onLine;
  let networkCheckTimeout = null;

  function checkNetworkConnectivity() {
    return new Promise((resolve) => {

      if (!navigator.onLine) {
        resolve(false);
        return;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      fetch('/manifest.json', {
        method: 'HEAD',
        cache: 'no-cache',
        signal: controller.signal
      })
      .then(() => {
        clearTimeout(timeoutId);
        resolve(true);
      })
      .catch(() => {
        clearTimeout(timeoutId);
        resolve(false);
      });
    });
  }

  function updateNetworkStatus(skipConnectivityCheck = false) {
    if (skipConnectivityCheck) {

      const wasOnline = isActuallyOnline;
      isActuallyOnline = navigator.onLine;
      
      if (isActuallyOnline && !wasOnline) {

        checkNetworkConnectivity().then((actuallyOnline) => {
          updateNetworkStatusUI(actuallyOnline);
        });
      } else {
        updateNetworkStatusUI(isActuallyOnline);
      }
    } else {

      checkNetworkConnectivity().then((actuallyOnline) => {
        isActuallyOnline = actuallyOnline;
        updateNetworkStatusUI(actuallyOnline);
      });
    }
  }

  function updateNetworkStatusUI(online) {
    const wasOffline = document.body.classList.contains('offline');
    
    if (online) {
      document.body.classList.remove('offline');
      if (wasOffline) {
        showNotification('Đã kết nối internet', 'success');
        document.body.classList.remove('was-offline');
      }
    } else {
      if (!wasOffline) {
        document.body.classList.add('offline');
        document.body.classList.add('was-offline');
        showNotification('Mất kết nối internet - Đang sử dụng chế độ offline', 'warning');
      }
    }
  }

  function scheduleNetworkCheck() {
    if (networkCheckTimeout) {
      clearTimeout(networkCheckTimeout);
    }
    
    if (!isActuallyOnline) {
      networkCheckTimeout = setTimeout(() => {
        updateNetworkStatus();
        scheduleNetworkCheck();
      }, 10000);
    }
  }

  window.addEventListener('online', () => updateNetworkStatus(true));
  window.addEventListener('offline', () => updateNetworkStatus(true));
  
  updateNetworkStatus();
  scheduleNetworkCheck();

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 8px;
      color: white;
      z-index: 10000;
      font-size: 14px;
      max-width: 300px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transform: translateX(120%);
      transition: transform 0.3s ease;
      background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : '#2196F3'};
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(function () {
      notification.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(function () {
      notification.style.transform = 'translateX(120%)';
      setTimeout(function () {
        notification.remove();
      }, 300);
    }, 3000);
  }

  const offlineStyles = `
    .offline {
      filter: grayscale(0.3);
    }
    .offline::before {
      content: "Chế độ Offline";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #f44336;
      color: white;
      text-align: center;
      padding: 8px;
      z-index: 9999;
      font-size: 14px;
      font-weight: bold;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.textContent = offlineStyles;
  document.head.appendChild(styleSheet);

  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    document.addEventListener('submit', function (event) {
      const form = event.target;
      if (form.dataset.pwasync === 'true') {
        if (!isActuallyOnline) {
          event.preventDefault();

          const formData = new FormData(form);
          const formDataObj = {};
          formData.forEach(function (value, key) {
            formDataObj[key] = value;
          });

          saveFormData(form.action, formDataObj, form.method);

          navigator.serviceWorker.ready.then(function (registration) {
            registration.sync.register('form-submission');
          });

          showNotification('Form sẽ được gửi khi có kết nối internet', 'info');
        }
      }
    });
  }

  function saveFormData(url, data, method) {


  }

  window.clearPWACache = function () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        const messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = event => {
          if (event.data && event.data.success) {
            showNotification('Đã xóa cache thành công', 'success');
          } else {
            showNotification('Không thể xóa cache', 'warning');
          }
        };

        registration.active.postMessage({
          type: 'CLEAR_CACHE'
        }, [messageChannel.port2]);
      });
    }
  };

  function checkReturnVisit() {
    const lastVisit = localStorage.getItem('pwa-last-visit');
    const now = Date.now();
    localStorage.setItem('pwa-last-visit', now);

    if (lastVisit) {
      const minutesSinceLastVisit = (now - lastVisit) / (1000 * 60);
      if (minutesSinceLastVisit > 30) {
        showNotification('Chào mừng bạn quay trở lại!', 'info');
      }
    }
  }
  checkReturnVisit();

  function registerPushNotifications() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {

        registration.pushManager.getSubscription()
          .then(subscription => {
            if (subscription) {
              return subscription;
            }

            return registration.pushManager.subscribe({
              userVisibleOnly: true,

              applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_VAPID_KEY')
            });
          })
          .then(subscription => {


          })
          .catch(error => {
          });
      });
    }
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function addPushNotificationButton() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const button = document.createElement('button');
      button.id = 'pwa-push-button';
      button.textContent = 'Đăng ký thông báo';
      button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        z-index: 9998;
        font-size: 14px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      `;

      button.addEventListener('click', function () {
        registerPushNotifications();
        this.textContent = 'Đã đăng ký';
        this.disabled = true;
        setTimeout(() => {
          this.style.display = 'none';
        }, 2000);
      });

      document.body.appendChild(button);
    }
  }

})();
