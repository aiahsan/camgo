import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`

   @font-face {
	font-family: 'SFProRounded';
	src: url("/font/SFRounded-Regular/SFRounded-Regular.woff2.txt") format("woff2");
	font-display: block;
	font-weight: 400;
	font-style: normal
}

@font-face {
	font-family: 'SFProRounded';
	src: url("/font/SFRounded-Bold/SFRounded-Bold.woff2.txt") format("woff2");
	font-display: block;
	font-weight: 600;
	font-style: normal
}

@font-face {
	font-family: 'SFProDisplay';
	src: url("/font/SFDisplay-Regular/SFDisplay-Regular.woff2.txt") format("woff2");
	font-display: block;
	font-weight: 400;
	font-style: normal
}

@font-face {
	font-family: 'SFProDisplay';
	src: url("/font/SFDisplay-Bold/SFDisplay-Bold.woff2.txt") format("woff2");
	font-display: block;
	font-weight: 600;
	font-style: normal
}

@font-face {
	font-family: CamgoIcons;
	font-display: block;
	src: url("/font/camgo-icons.eot");
	src: url("/font/camgo-icons.eot") format("embedded-opentype"), url("/font/camgo-icons.woff2") format("woff2"), url("/font/camgo-icons.woff") format("woff"), url("/font/camgo-icons.ttf") format("truetype"), url("/font/camgo-icons.svg") format("svg");
	font-weight: 400;
	font-style: normal
}
* {
	-webkit-box-sizing: border-box;
	box-sizing: border-box
}


.appear-animation {
	opacity: 0
}

.appear-animation-visible {
	opacity: 1
}

.animated {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
	opacity: 0
}

@-webkit-keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

@keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

.fadeInDown {
	-webkit-animation-name: fadeInDown;
	animation-name: fadeInDown
}

@-webkit-keyframes fadeInLeft {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

@keyframes fadeInLeft {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

.fadeInLeft {
	-webkit-animation-name: fadeInLeft;
	animation-name: fadeInLeft
}

@-webkit-keyframes fadeInRight {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

@keyframes fadeInRight {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

.fadeInRight {
	-webkit-animation-name: fadeInRight;
	animation-name: fadeInRight
}

@-webkit-keyframes fadeInUp {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

@keyframes fadeInUp {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}
	to {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}

.fadeInUp {
	-webkit-animation-name: fadeInUp;
	animation-name: fadeInUp
}

@-webkit-keyframes lightSpeedInRight {
	0% {
		-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
		transform: translate3d(100%, 0, 0) skewX(-30deg);
		opacity: 0
	}
	60% {
		-webkit-transform: skewX(20deg);
		transform: skewX(20deg);
		opacity: 1
	}
	80% {
		-webkit-transform: skewX(-5deg);
		transform: skewX(-5deg)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes lightSpeedInRight {
	0% {
		-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
		transform: translate3d(100%, 0, 0) skewX(-30deg);
		opacity: 0
	}
	60% {
		-webkit-transform: skewX(20deg);
		transform: skewX(20deg);
		opacity: 1
	}
	80% {
		-webkit-transform: skewX(-5deg);
		transform: skewX(-5deg)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.lightSpeedInRight {
	-webkit-animation-name: lightSpeedInRight;
	animation-name: lightSpeedInRight;
	-webkit-animation-timing-function: ease-out;
	animation-timing-function: ease-out
}

@-webkit-keyframes lightSpeedInLeft {
	0% {
		-webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
		transform: translate3d(-100%, 0, 0) skewX(30deg);
		opacity: 0
	}
	60% {
		-webkit-transform: skewX(-20deg);
		transform: skewX(-20deg);
		opacity: 1
	}
	80% {
		-webkit-transform: skewX(5deg);
		transform: skewX(5deg)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes lightSpeedInLeft {
	0% {
		-webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
		transform: translate3d(-100%, 0, 0) skewX(30deg);
		opacity: 0
	}
	60% {
		-webkit-transform: skewX(-20deg);
		transform: skewX(-20deg);
		opacity: 1
	}
	80% {
		-webkit-transform: skewX(5deg);
		transform: skewX(5deg)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.lightSpeedInLeft {
	-webkit-animation-name: lightSpeedInLeft;
	animation-name: lightSpeedInLeft;
	-webkit-animation-timing-function: ease-out;
	animation-timing-function: ease-out
}

@-webkit-keyframes flipInX {
	0% {
		-webkit-transform: perspective(400px) rotateX(90deg);
		transform: perspective(400px) rotateX(90deg);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
		opacity: 0
	}
	40% {
		-webkit-transform: perspective(400px) rotateX(-20deg);
		transform: perspective(400px) rotateX(-20deg);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in
	}
	60% {
		-webkit-transform: perspective(400px) rotateX(10deg);
		transform: perspective(400px) rotateX(10deg);
		opacity: 1
	}
	80% {
		-webkit-transform: perspective(400px) rotateX(-5deg);
		transform: perspective(400px) rotateX(-5deg)
	}
	to {
		-webkit-transform: perspective(400px);
		transform: perspective(400px)
	}
}

@keyframes flipInX {
	0% {
		-webkit-transform: perspective(400px) rotateX(90deg);
		transform: perspective(400px) rotateX(90deg);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
		opacity: 0
	}
	40% {
		-webkit-transform: perspective(400px) rotateX(-20deg);
		transform: perspective(400px) rotateX(-20deg);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in
	}
	60% {
		-webkit-transform: perspective(400px) rotateX(10deg);
		transform: perspective(400px) rotateX(10deg);
		opacity: 1
	}
	80% {
		-webkit-transform: perspective(400px) rotateX(-5deg);
		transform: perspective(400px) rotateX(-5deg)
	}
	to {
		-webkit-transform: perspective(400px);
		transform: perspective(400px)
	}
}

.flipInX {
	-webkit-backface-visibility: visible !important;
	backface-visibility: visible !important;
	-webkit-animation-name: flipInX;
	animation-name: flipInX
}

@-webkit-keyframes bounceIn {
	0%,
	20%,
	40%,
	60%,
	80%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3)
	}
	20% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1);
		transform: scale3d(1.1, 1.1, 1.1)
	}
	40% {
		-webkit-transform: scale3d(0.9, 0.9, 0.9);
		transform: scale3d(0.9, 0.9, 0.9)
	}
	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03)
	}
	80% {
		-webkit-transform: scale3d(0.97, 0.97, 0.97);
		transform: scale3d(0.97, 0.97, 0.97)
	}
	to {
		opacity: 1;
		-webkit-transform: scaleX(1);
		transform: scaleX(1)
	}
}

@keyframes bounceIn {
	0%,
	20%,
	40%,
	60%,
	80%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3)
	}
	20% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1);
		transform: scale3d(1.1, 1.1, 1.1)
	}
	40% {
		-webkit-transform: scale3d(0.9, 0.9, 0.9);
		transform: scale3d(0.9, 0.9, 0.9)
	}
	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03)
	}
	80% {
		-webkit-transform: scale3d(0.97, 0.97, 0.97);
		transform: scale3d(0.97, 0.97, 0.97)
	}
	to {
		opacity: 1;
		-webkit-transform: scaleX(1);
		transform: scaleX(1)
	}
}

.bounceIn {
	-webkit-animation-duration: .75s;
	animation-duration: .75s;
	-webkit-animation-duration: calc(var(--animate-duration)*0.75);
	animation-duration: calc(var(--animate-duration)*0.75);
	-webkit-animation-name: bounceIn;
	animation-name: bounceIn
}

@-webkit-keyframes bounceInDown {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
		transform: translate3d(0, -3000px, 0) scaleY(3)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
		transform: translate3d(0, 25px, 0) scaleY(0.9)
	}
	75% {
		-webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
		transform: translate3d(0, -10px, 0) scaleY(0.95)
	}
	90% {
		-webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
		transform: translate3d(0, 5px, 0) scaleY(0.985)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes bounceInDown {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
		transform: translate3d(0, -3000px, 0) scaleY(3)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
		transform: translate3d(0, 25px, 0) scaleY(0.9)
	}
	75% {
		-webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
		transform: translate3d(0, -10px, 0) scaleY(0.95)
	}
	90% {
		-webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
		transform: translate3d(0, 5px, 0) scaleY(0.985)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.bounceInDown {
	-webkit-animation-name: bounceInDown;
	animation-name: bounceInDown
}

@-webkit-keyframes bounceInLeft {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
		transform: translate3d(-3000px, 0, 0) scaleX(3)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(25px, 0, 0) scaleX(1);
		transform: translate3d(25px, 0, 0) scaleX(1)
	}
	75% {
		-webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
		transform: translate3d(-10px, 0, 0) scaleX(0.98)
	}
	90% {
		-webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
		transform: translate3d(5px, 0, 0) scaleX(0.995)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes bounceInLeft {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
		transform: translate3d(-3000px, 0, 0) scaleX(3)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(25px, 0, 0) scaleX(1);
		transform: translate3d(25px, 0, 0) scaleX(1)
	}
	75% {
		-webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
		transform: translate3d(-10px, 0, 0) scaleX(0.98)
	}
	90% {
		-webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
		transform: translate3d(5px, 0, 0) scaleX(0.995)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.bounceInLeft {
	-webkit-animation-duration: 1.25s;
	animation-duration: 1.25s;
	-webkit-animation-name: bounceInLeft;
	animation-name: bounceInLeft
}

@-webkit-keyframes bounceInRight {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
		transform: translate3d(3000px, 0, 0) scaleX(3)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
		transform: translate3d(-25px, 0, 0) scaleX(1)
	}
	75% {
		-webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
		transform: translate3d(10px, 0, 0) scaleX(0.98)
	}
	90% {
		-webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
		transform: translate3d(-5px, 0, 0) scaleX(0.995)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes bounceInRight {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
		transform: translate3d(3000px, 0, 0) scaleX(3)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
		transform: translate3d(-25px, 0, 0) scaleX(1)
	}
	75% {
		-webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
		transform: translate3d(10px, 0, 0) scaleX(0.98)
	}
	90% {
		-webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
		transform: translate3d(-5px, 0, 0) scaleX(0.995)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.bounceInRight {
	-webkit-animation-duration: 1.25s;
	animation-duration: 1.25s;
	-webkit-animation-name: bounceInRight;
	animation-name: bounceInRight
}

@-webkit-keyframes bounceInUp {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
		transform: translate3d(0, 3000px, 0) scaleY(5)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
		transform: translate3d(0, -20px, 0) scaleY(0.9)
	}
	75% {
		-webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
		transform: translate3d(0, 10px, 0) scaleY(0.95)
	}
	90% {
		-webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
		transform: translate3d(0, -5px, 0) scaleY(0.985)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

@keyframes bounceInUp {
	0%,
	60%,
	75%,
	90%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
	}
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
		transform: translate3d(0, 3000px, 0) scaleY(5)
	}
	60% {
		opacity: 1;
		-webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
		transform: translate3d(0, -20px, 0) scaleY(0.9)
	}
	75% {
		-webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
		transform: translate3d(0, 10px, 0) scaleY(0.95)
	}
	90% {
		-webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
		transform: translate3d(0, -5px, 0) scaleY(0.985)
	}
	to {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
}

.bounceInUp {
	-webkit-animation-duration: 1.25s;
	animation-duration: 1.25s;
	-webkit-animation-name: bounceInUp;
	animation-name: bounceInUp
}

@-webkit-keyframes tada {
	0% {
		-webkit-transform: scaleX(1);
		transform: scaleX(1)
	}
	10%,
	20% {
		-webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
		transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg)
	}
	30%,
	50%,
	70%,
	90% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
		transform: scale3d(1.1, 1.1, 1.1) rotate(3deg)
	}
	40%,
	60%,
	80% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
		transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg)
	}
	to {
		-webkit-transform: scaleX(1);
		transform: scaleX(1)
	}
}

@keyframes tada {
	0% {
		-webkit-transform: scaleX(1);
		transform: scaleX(1)
	}
	10%,
	20% {
		-webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
		transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg)
	}
	30%,
	50%,
	70%,
	90% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
		transform: scale3d(1.1, 1.1, 1.1) rotate(3deg)
	}
	40%,
	60%,
	80% {
		-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
		transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg)
	}
	to {
		-webkit-transform: scaleX(1);
		transform: scaleX(1)
	}
}

.tada {
	-webkit-animation-name: tada;
	animation-name: tada
}

@-webkit-keyframes bounce {
	0%,
	20%,
	53%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
	40%,
	43% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
		transform: translate3d(0, -30px, 0) scaleY(1.1)
	}
	70% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
		transform: translate3d(0, -15px, 0) scaleY(1.05)
	}
	80% {
		-webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		-webkit-transform: translateZ(0) scaleY(0.95);
		transform: translateZ(0) scaleY(0.95)
	}
	90% {
		-webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
		transform: translate3d(0, -4px, 0) scaleY(1.02)
	}
}

@keyframes bounce {
	0%,
	20%,
	53%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
	40%,
	43% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
		transform: translate3d(0, -30px, 0) scaleY(1.1)
	}
	70% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
		transform: translate3d(0, -15px, 0) scaleY(1.05)
	}
	80% {
		-webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		-webkit-transform: translateZ(0) scaleY(0.95);
		transform: translateZ(0) scaleY(0.95)
	}
	90% {
		-webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
		transform: translate3d(0, -4px, 0) scaleY(1.02)
	}
}

.bounce {
	-webkit-animation-name: bounce;
	animation-name: bounce;
	-webkit-transform-origin: center bottom;
	transform-origin: center bottom
}

@-webkit-keyframes zoomIn {
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3)
	}
	50% {
		opacity: 1
	}
}

@keyframes zoomIn {
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3)
	}
	50% {
		opacity: 1
	}
}

.zoomIn {
	-webkit-animation-name: zoomIn;
	animation-name: zoomIn
}

.ci {
	display: inline-block;
	font: normal normal normal 14px/1 CamgoIcons;
	font-size: inherit;
	vertical-align: middle;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.ci-pulse {
	-webkit-animation: ci-pulse 0.8s infinite steps(8);
	animation: ci-pulse 0.8s infinite steps(8)
}

@-webkit-keyframes ci-pulse {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg)
	}
}

@keyframes ci-pulse {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg)
	}
}

.ci-heart-o:before {
	content: '\\e800'
}

.ci-right-circled:before {
	content: '\\e801'
}

.ci-check:before {
	content: '\\e802'
}

.ci-disconnect:before {
	content: '\\e803'
}

.ci-camera:before {
	content: '\\e804'
}

.ci-cog:before {
	content: '\\e805'
}

.ci-chat:before {
	content: '\\e806'
}

.ci-loop:before {
	content: '\\e807'
}

.ci-cross-circle:before {
	content: '\\e808'
}

.ci-arrow-light:before {
	content: '\\e809'
}

.ci-message:before {
	content: '\\e80a'
}

.ci-btn-badge:before {
	content: '\\e80b'
}

.ci-envelope:before {
	content: '\\e80c'
}

.ci-question:before {
	content: '\\e80d'
}

.ci-random:before {
	content: '\\e80e'
}

.ci-report:before {
	content: '\\e80f'
}

.ci-smile:before {
	content: '\\e810'
}

.ci-lock:before {
	content: '\\e811'
}

.ci-plus-circle:before {
	content: '\\e812'
}

.ci-stop:before {
	content: '\\e813'
}

.ci-heart:before {
	content: '\\e814'
}

.ci-user:before {
	content: '\\e815'
}

.ci-play-circled:before {
	content: '\\e816'
}

.ci-volume:before {
	content: '\\e817'
}

.ci-resize-full:before {
	content: '\\e818'
}

.ci-resize-normal:before {
	content: '\\e819'
}

.ci-rotate-cam:before {
	content: '\\e81a'
}

.ci-arrow-bottom:before {
	content: '\\e81b'
}

.ci-mars:before {
	content: '\\e81c'
}

.ci-venus:before {
	content: '\\e81d'
}

.ci-mask:before {
	content: '\\e81e'
}

.ci-foreign:before {
	content: '\\e81f'
}

.ci-click:before {
	content: '\\e820'
}

.ci-vertical-dots:before {
	content: '\\e821'
}

.ci-info:before {
	content: '\\e822'
}

.ci-connect-1:before {
	content: '\\e823'
}

.ci-unisex:before {
	content: '\\e824'
}

.ci-friends:before {
	content: '\\e825'
}

.ci-save-badge:before {
	content: '\\e826'
}

.ci-clock:before {
	content: '\\e827'
}

.ci-right-arrow:before {
	content: '\\e828'
}

.ci-emoji:before {
	content: '\\e82b'
}

.ci-gif:before {
	content: '\\e82c'
}

.ci-bug:before {
	content: '\\e851'
}

.ci-transgender-icon:before {
	content: '\\e880'
}

.ci-location-hidden:before {
	content: '\\e881'
}

.ci-ok:before {
	content: '\\e882'
}

.ci-cancel:before {
	content: '\\e883'
}

.ci-twitter:before {
	content: '\\f099'
}

.ci-facebook:before {
	content: '\\f09a'
}

.ci-angle-left:before {
	content: '\\f104'
}

.ci-angle-right:before {
	content: '\\f105'
}

.ci-spinner:before {
	content: '\\f110'
}

.ci-mic:before {
	content: '\\f130'
}

.ci-youtube-play:before {
	content: '\\f16a'
}

.ci-instagram:before {
	content: '\\f16d'
}

 `}
  />
);

export default Fonts;
