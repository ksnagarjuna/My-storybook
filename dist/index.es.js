import 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".button{border:none;border-radius:4px;color:#fff;cursor:pointer;display:inline-block;font-size:16px;padding:15px 32px;text-align:center;text-decoration:none}.primary{background-color:#008cba}.secondary{background-color:#e7e7e7;color:#000}.success{background-color:#4caf50}.danger{background-color:#f44336}";
styleInject(css_248z$1);

var css_248z = ".input{background-color:#fff;border:1px solid;border-color:inherit;border-radius:.25rem;display:block;padding-left:1rem;padding-right:1rem;width:400px}.small{font-size:.875rem;height:2rem}.medium{font-size:1rem;height:2.5rem}.large{font-size:1.25rem;height:3rem}";
styleInject(css_248z);
