// Disable Right-Click and Context Menu
document.addEventListener('contextmenu', (event) => event.preventDefault());

// Disable Common Keyboard Shortcuts
document.addEventListener('keydown', (event) => {
  if (
    event.key === 'F12' || 
    (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) || 
    (event.ctrlKey && ['U', 'S', 'H'].includes(event.key))
  ) {
    event.preventDefault();
  }
});

// Detect DevTools Open and Hide Page Content
let devtoolsOpen = false;
const detectDevTools = () => {
  const element = new Image();
  element.__defineGetter__('id', function () {
    devtoolsOpen = true;
    document.body.innerHTML = '<h1>Access Denied</h1>';
    alert('Developer tools detected! Reloading...');
    window.location.reload();
  });
  console.log(element);
};
setInterval(() => {
  devtoolsOpen = false;
  detectDevTools();
}, 10000);

// Prevent Page Source (Additional Block for Ctrl+U)
document.onkeydown = function (event) {
  if (event.ctrlKey && event.key === 'u') {
    event.preventDefault();
    return false;
  }
};

// Obfuscate console to prevent manual debugging
(function() {
  const consoleHolder = console;
  Object.defineProperty(window, 'console', {
    get: function() {
      setTimeout(() => window.location.reload(), 1000);
      return consoleHolder;
    },
    set: function() {}
  });
})();
// Disable Right-Click and Context Menu
document.addEventListener('contextmenu', (event) => event.preventDefault());

// Disable Common Keyboard Shortcuts
document.addEventListener('keydown', (event) => {
  if (
    event.key === 'F12' || 
    (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) || 
    (event.ctrlKey && ['U', 'S', 'H'].includes(event.key))
  ) {
    event.preventDefault();
  }
});

// Detect DevTools Open and Hide Page Content
let devtoolsOpen = false;
const detectDevTools = () => {
  const element = new Image();
  element.__defineGetter__('id', function () {
    devtoolsOpen = true;
    document.body.innerHTML = '<h1>Access Denied</h1>';
    alert('Developer tools detected! Reloading...');
    window.location.reload();
  });
  console.log(element);
};
setInterval(() => {
  devtoolsOpen = false;
  detectDevTools();
}, 10000);

// Prevent Page Source (Additional Block for Ctrl+U)
document.onkeydown = function (event) {
  if (event.ctrlKey && event.key === 'u') {
    event.preventDefault();
    return false;
  }
};

// Obfuscate console to prevent manual debugging
(function() {
  const consoleHolder = console;
  Object.defineProperty(window, 'console', {
    get: function() {
      setTimeout(() => window.location.reload(), 1000);
      return consoleHolder;
    },
    set: function() {}
  });
})();
