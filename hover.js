// Tracking Top Links Hover Menus
  function trackHoverIntent(selector, time) {
    var timeoutId;
    var elements = window.document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('mouseenter', function(event) {
        var targetElement = event.target || event.srcElement;
        var classes = targetElement.className;
        var id = targetElement.id;
        if (!timeoutId) {
          timeoutId = window.setTimeout(function() {
            dataLayer.push({
              'event': 'gtm.hover',
              'gtm.element': targetElement,
              'gtm.elementClasses': classes,
              'gtm.elementId': id,
              'gtm.elementHoverTime': time
            });
            timeoutId = null;
          }, time);
        }
      });
    }

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('mouseleave', function() {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
          timeoutId = null;
        }
      });
    }
  }
                              