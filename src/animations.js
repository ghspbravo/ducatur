import { TimelineMax, TweenMax,  CSSPlugin, AttrPlugin, Power0 }  from "gsap/all";

import ScrollMagic from 'scrollmagic'

import 'gsap/src/uncompressed/TimelineMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'


//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin, AttrPlugin ];

export const rotate = target => {
    let rotation = TweenMax.to(target, 1, {rotation: '+=360', ease: Power0.easeNone})
    rotation.repeat(-1)
}

export const toggleSideBar = (target, controller) => {
    let scene = ScrollMagic.Scene({triggerElement: target, duration: 200, offset: 300})
        .setTween('#sideNav', {right: '50px', opacity: 1})
        .setPin('#sideNav')
        .addTo(controller)
}