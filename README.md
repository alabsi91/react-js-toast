# react-js-toast

- Customizable Android like snackbar notification.
- Different icon and background color for every toast type.
- Stack new toasts on top of each other.

![](https://github.com/alabsi91/react-js-toast/blob/readme/toasts.png)

## Installation

`npm install react-js-toast`

## Usage

```jsx
//...
import Toast from 'react-js-toast';

export default function App() {
  let toastMethod = null;

  const toast_handle = () => {
    // passing (message, type) params will replace Toast props.
    toastMethod.showToast('this is a toast notification', 'success');
  };

  return (
    <>
      <Toast ref={node => (toastMethod = node)} type='info' message='my default message' />
      // ...
      <button onClick={toast_handle}>Show Toast Notification</button>
    </>
  );
}
```

## Props

### message : _[String]_

- Toast text message.
- **Default Value** `Toast message goes here`

### type : _[ 'info' | 'warning' | 'error' | 'success' ] [optional]_

- Every type has different icon and background color.
- **Default Value** `info`

### animation : _[ 'fade' | 'slide' | 'none' ] [optional]_

- Toast animaion style.
- **Default Value** `fade`

### animationDutation : _[Number] [optional]_

- Toast animaion duration in ms.
- **Default Value** `300`

### ease : _[String] [optional]_

- Toast animaion timing function.
- Check [easings.net](https://easings.net/) to learn more.
- **Default Value** `easeOutExpo`
- If you want to provide your own timing-function make sure that the function takes one parameter and returns one value.

```javascript
function easeInQuad(x) {
  return x * x;
}
```

### position : _[ 'top' | 'bottom' ] [optional]_

- Show toast from the bottom or from the top of the body page.
- **Default Value** `bottom`

### offset : _[Number] [optional]_

- Toast offset from the `bottom` or from the `top` in pixels depending on the `position` prop value.
- **Default Value** `30`

### duration : _[Number] [optional]_

- The time that takes to hide toast in ms.
- **Default Value** `3000`

### toastStyle : _[Object] [optional]_

- Toast container custom style.
- If given will overwrite toast `type` prop default style.

### textStyle : _[Object] [optional]_

- Toast text meassage custom style.

### iconColor : _[String] [optional]_

- Icon default color.
- **Default Value** `#fff`

### customIcon : _[Function] [optional]_

- Provide you own icon, a function that return a jsx element.
- Use upper case for the function name.

```jsx
const Custom_icon = () => {
  return (
    <svg style={icon_style} viewBox='0 0 24 24'>
      <path d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z' />
    </svg>
  );
};
```

### stackable : _[Boolean] [optional]_

- Allow toasts to stack on top of each other, if false new toast will replace the old one.
- **Default Value** `true`

### stackLimit : _[Number] [optional]_

- Toasts stack limit number, no new toast will be added to the stack after reaching the limit.
- **Default Value** `5`

### rtl : _[Boolean] [optional]_

- For right to left languages.
- **Default Value** `false`

### zIndex : _[Number] [optional]_

- Toast wrapper element z-index css value.
- **Default Value** `1000`

## Methods

### showToast()

- `showToast(message?: String, type?: 'info' | 'warning' | 'error' | 'success')`
- **Note:** Passing params will replace given porps values.
