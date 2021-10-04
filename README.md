# react-js-toast

- Android like snackbar notification.
- Deferent icon and background color for every toast type.
- Stack new toasts on top of each other.

![](https://github.com/alabsi91/react-js-toast/blob/readme/toasts.png)

## Installation

`npm install react-js-toast`

## Usage

```
/...
import Toast from 'react-js-toast';

export default function App() {
    let alertMe = null;

    const toast_handle = () => {
        // passing (message, type) params will replace Toast props.
        alertMe.showToast('this is a toast notification', 'success');
    }

    return(
        <>
            <Toast
             ref={(node) => alertMe = node}
             type='info'
             message='my default message'
            />

            /...
            <button onClick={toast_handle}>Show Toast Notification
            </button>
        </>
    )
}
```

## Props

### message : _[String]_

- Toast text message.
- **Default Value** 'Toast message goes here'

### type : _['info' | 'warning' | 'error' | 'success'] [optional]_

- Every type has different icon and background color.
- **Default Value** 'info'

### animation : _['fade' | 'slide' | 'none'] [optional]_

- Toast animaion style.
- **Default Value** 'fade'

### position : _['top' | 'bottom'] [optional]_

- Show toast from the bottom or from the top of the body page.
- **Default Value** 'bottom'

### duration : _[Number] [optional]_

- The time that take to hide toast in ms.
- **Default Value** 3000

### toastStyle : _[Object] [optional]_

- Toast container custom style.

### textStyle : _[Object] [optional]_

- Toast text meassage custom style.

### iconColor : _[String] [optional]_

- The default icon color.
- **Default Value** '#fff'

### customIcon : _[Function] [optional]_

- Provide you own icon, a function that return a jsx element.

### stackable : _[Boolean] [optional]_

- Allow toasts to stack on top of each other, if false new toast will replace the old one.
- **Default Value** true

### rtl : _[Boolean] [optional]_

- For right to left languages.
- **Default Value** false

## Methods

### showToast()

- `ShowToast(message?: String, type?: 'info' | 'warning' | 'error' | 'success')`
- **Note:** Passing params will replace given porps values.
