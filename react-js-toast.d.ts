
type NamedColor =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgreen"
    | "darkgrey"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "gold"
    | "goldenrod"
    | "gray"
    | "green"
    | "greenyellow"
    | "grey"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavender"
    | "lavenderblush"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgreen"
    | "lightgrey"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "rebeccapurple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "transparent"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen"
    | (string & {})

type requestFrameEasing = "linear" | "easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | "easeInExpo" | "easeOutExpo" | "easeInOutExpo" | "easeInCirc" | "easeOutCirc" | "easeInOutCirc" | "easeInBack" | "easeOutBack" | "easeInOutBack" | "easeInElastic" | "easeOutElastic" | "easeInOutElastic" | "easeInBounce" | "easeOutBounce" | "easeInOutBounce";

interface ToastProps {
    /**
     * - Toast text message.
     * - **Default Value** `Toast message goes here`
     */
    message?: string

    /**
     * - Every type has different icon and background color.
     * - **Default Value** `info`
     */
    type?: 'info' | 'warning' | 'error' | 'success'

    /**
     * - Show toast from the bottom or from the top of the body page.
     * - **Default Value** `bottom`
     */
    position?: 'top' | 'bottom'

    /**
     * - Toast offset from the `bottom` or from the `top` in pixels depending on the `position` prop value.
     * - **Default Value** `30`
     */
    offset?: number

    /**
     * - Toast animaion style.
     * - **Default Value** `fade`
     */
    animation?: 'fade' | 'slide' | 'none'

    /**
     * - Toast animaion duration in ms.
     * - **Default Value** `300`
     */
    animationDutation?: number

    /**
     * - Toast animaion timing function.
     * - Easing functions specify the rate of change of the number over time.
     * - **Default Value** `easeOutExpo`
     */
    ease?: requestFrameEasing | ((x: number) => number);

    /**
     * - The time that take to hide toast in ms.
     * - Check [easings.net](https://easings.net/) to learn more.
     * - **Default Value** `3000`
     */
    duration?: number

    /**
     * - Toast container custom style like background color and size.
     */
    toastStyle?: React.CSSProperties

    /**
     * - Toast text meassage custom style.
     */
    textStyle?: React.CSSProperties

    /**
     * - Icone default color.
     * - **Default Value** `#fff`
     */
    iconColor?: NamedColor

    /**
     * - Provide you own icon, a function that return a jsx element.
     */
    customIcon?: React.FunctionComponent<any>

    /**
     * - Allow toasts to stack on top of each other, if false new toast will replace the old one.
     * - **Default Value** `true`
     */
    stackable?: boolean

    /**
     * - Toasts stack limit number, no new toast will be added to the stack after reaching the limit.
     * - **Default Value** `5`
     */
    stackLimit?: number

    /**
     * - For right to left languages.
     * - **Default Value** `false`
     */
    rtl?: boolean

    /** 
     * - Toast wrapper element z-index css value.
     * - **Default Value** `1000`
     */
    zIndex?: number;

    /**
     * - Toast Methods
     */
    ref?: React.LegacyRef<ToastMethods>
}
interface ToastMethods {
    /**
     * - **Note:** Passing params will replace given porps values.
     */
    showToast?: (message?: string, type?: 'info' | 'warning' | 'error' | 'success') => void
}
declare const Toast: React.FunctionComponent<ToastProps>

export default Toast