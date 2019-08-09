(function(win, doc) {
  var docEl = doc.documentElement;
  var viewport = doc.querySelector('meta[name="viewport"]');
  var appVersion = win.navigator.appVersion.toLocaleLowerCase();
  var isIphone = appVersion.match(/iphone/gi);
  var devicePixelRatio = win.devicePixelRatio;
  var scale;
  var dpr;
  var refreshRootFont;
  if (viewport) {
    var content = viewport.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
    if (content) {
      scale = parseFloat(content[1]);
      dpr = parseInt(1 / scale);
    }
  }
  if (!dpr && !scale) {
    if (isIphone) {
      if (devicePixelRatio === 3) {
        dpr = 3;
      } else if (devicePixelRatio === 2) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      dpr = 1;
    }
    scale = 1 / dpr;
  }
  docEl.setAttribute('data-dpr', dpr);
  if (!viewport) {
    var metaElement = doc.createElement('meta');
    metaElement.setAttribute('name', 'viewport');
    metaElement.setAttribute(
      'content',
      'width=device-width,initial-scale=' + scale + ',user-scalable=no'
    );
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaElement);
    } else {
      var wrap = doc.createElement('div');
      wrap.appendChild(metaElement);
      doc.write(wrap.innerHTML);
    }
  }
  win.addEventListener(
    'resize',
    function() {
      clearTimeout(refreshRootFont);
      refreshRootFont = setTimeout(rootFont, 300);
    },
    false
  );
  win.addEventListener(
    'pageshow',
    function(e) {
      if (e.persisted) {
        clearTimeout(refreshRootFont);
        refreshRootFont = setTimeout(rootFont, 300);
      }
    },
    false
  );
  rootFont();

  function rootFont() {
    var width = docEl.clientWidth;
    if (width / dpr > 540) {
      width = 540 * dpr;
    }
    var root = width / 10;
    docEl.style.fontSize = root + 'px';
  }
})(window, document);
