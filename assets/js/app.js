// 1. Imports
// ----------

import $ from "jquery";
import Foundation from 'foundation-sites';
import "lightGallery";
import "lg-fullscreen";
import "lg-video";
import AOS from 'aos';
import Swup from 'swup';
import SwupBodyClassPlugin from "@swup/body-class-plugin";

$( document ).ready( function() {
  function init() {

// 2. Special Queries
// ------------------

Foundation.Interchange.SPECIAL_QUERIES[ "medium-retina" ] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES[ "large-retina" ] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES[ "xlarge-retina" ] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES[ "xxlarge-retina" ] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

// 3. Foundation
// -------------

$(document).foundation();

if ($("body").hasClass("home")) {
var vid = document.getElementById("bgvid");
vid.playbackRate = 0.75;
}

// 4. Lightgallery
// ---------------

if ($("body").hasClass("home")) {
  $("#video" ).lightGallery( {
    counter: false,
    videoMaxWidth: '1080px',
    youtubePlayerParams: {
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      autoplay: 0
    },
    vimeoPlayerParams: {
      autoplay: 1,
      title: 0,
      byline: 0,
      portrait: 0,
      color: 'FFFFFF'
    }
  } );
}


// 8. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});
$(function() {
  window.addEventListener('load', AOS.refresh);
});
}

// 9. Page Transitions
// -------------------

const options = {
  animationSelector: '[class*="swup-transition-"]',
  containers: [ '#swup-body' ],
  plugins: [ new SwupBodyClassPlugin() ]
};
const swup = new Swup( options );

// 10. Run Once
// ------------

init();

swup.on( 'contentReplaced', init );

} );