import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const wait = time => new Promise(e => setTimeout(e, time));

let tempStack = [];
const Toast = forwardRef((props, ref) => {
  const type = props.type || 'info'; // 'warning','error', 'success'
  const position = props.position || 'bottom'; // 'top'
  const animation = props.animation || 'fade'; // 'slide'
  const duration = props.duration ?? 3000;
  const message = props.message || 'Toast message goes here';
  const text_style = props.textStyle || {};
  const toast_style = props.toastStyle || {};
  const CustomIcon = props.customIcon;
  const icon_color = props.iconColor || '#fff';
  const stackable = props.stackable ?? true;
  const rtl = props.rtl ?? false;

  const backgroundColor = type =>
    type === 'error'
      ? '#f44336'
      : type === 'warning'
      ? '#ff9800'
      : type === 'info'
      ? '#2196f3'
      : type === 'success'
      ? '#4caf50'
      : '#4caf50';

  const icon_style = {
    width: '24px',
    height: '24px',
    fill: icon_color,
    ...(rtl ? { marginRight: '20px' } : { marginLeft: '20px' }),
  };

  const Icon = porps => {
    switch (porps.type) {
      case 'error':
        return (
          <svg style={icon_style} viewBox='0 0 24 24'>
            <path d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
          </svg>
        );

      case 'warning':
        return (
          <svg style={icon_style} viewBox='0 0 24 24'>
            <path d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z'></path>
          </svg>
        );

      case 'info':
        return (
          <svg style={icon_style} viewBox='0 0 24 24'>
            <path d='M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z'></path>
          </svg>
        );
      case 'success':
        return (
          <svg style={icon_style} viewBox='0 0 24 24'>
            <path d='M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z'></path>
          </svg>
        );
      default:
        break;
    }
  };

  const ToastElement = props => {
    let el = null;
    const [opacity, setOpacity] = useState(animation === 'fade' ? 0 : 1);
    const [translate, setTranslate] = useState(
      animation === 'slide' ? ((parseInt(toast_style?.height) || 50) + 20) * (position === 'top' ? -1 : 1) : 0
    );

    const fadeAnimation = async () => {
      const element = el;
      setOpacity(1);
      await wait(duration - 250);
      setOpacity(0);
      element.style.height = '0px';
      element.style.marginBottom = '0px';
    };

    const slideAnimation = async () => {
      const element = el;
      setTranslate(0);
      await wait(duration - 250);
      setTranslate(((parseInt(toast_style?.height) || 50) + 20) * (position === 'top' ? -1 : 1));
      element.style.height = '0px';
      element.style.marginBottom = '0px';
    };

    useEffect(() => {
      if (animation === 'fade') fadeAnimation();
      if (animation === 'slide') slideAnimation();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        ref={node => (el = node)}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '50px',
          width: '90vw',
          maxWidth: '500px',
          borderRadius: '10px',
          backgroundColor: backgroundColor(props.type || type),
          margin: 'auto',
          marginBottom: '20px',
          boxShadow: '#00000050 0px 2px 5px 0px',
          overflow: 'hidden',
          opacity,
          transform: `translateY(${translate}px)`,
          ...toast_style,
          transitionProperty: 'opacity, height, margin-bottom, transform',
          transitionDuration: '250ms',
          transitionTimingFunction: 'ease',
        }}
      >
        {CustomIcon ? <CustomIcon /> : <Icon type={props.type || type} />}
        <p
          style={{
            fontFamily: 'system-ui',
            fontSize: '18px',
            color: '#fff',
            textAlign: 'center',
            margin: 'auto',
            ...text_style,
          }}
        >
          {props.message || message}
        </p>
      </div>
    );
  };

  const [stack, setStack] = useState(tempStack);

  /**
   * - message: Toast text message.
   * @param {String} message
   *
   * - type: Every type has different icon and background color.
   * @param {'info' | 'warning' | 'error' | 'success'} type
   */
  const showToast = async (message, type) => {
    const elKey = Math.random() * 1000;
    tempStack =
      position === 'top'
        ? [...(stackable ? tempStack : []), <ToastElement key={elKey} message={message} type={type} />]
        : [<ToastElement key={elKey} message={message} type={type} />, ...(stackable ? tempStack : [])];

    setStack(tempStack);
    await wait(duration);
    tempStack = tempStack.filter(e => e.key !== elKey + '');
    setStack(tempStack);
  };

  useImperativeHandle(ref, () => ({ showToast }));

  return (
    <div
      style={{
        position: 'fixed',
        ...(position === 'top' ? { top: '30px' } : { bottom: '30px' }),
        left: '0px',
        width: '100vw',
        direction: rtl ? 'rtl' : 'ltr',
        zIndex: 1000,
      }}
    >
      {stack}
    </div>
  );
});

export default Toast;