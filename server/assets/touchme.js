let played = false;
AFRAME.registerComponent('markerhandler', {
  init: function() {
    const animatedMarker = document.querySelector('#animated-marker');
    const aEntity = document.querySelector('#animated-model');
    const soundentity = document.querySelector('[sound]');

    // every click, we play or stop sound :)
    animatedMarker.addEventListener('click', function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (aEntity && intersectedElement === aEntity) {
        played
          ? soundentity.components.sound.stopSound()
          : soundentity.components.sound.playSound();
        played = !played;
        // aEntity.setAttribute('animation-mixer', 'true');
        // const scale = aEntity.getAttribute('scale');
        // Object.keys(scale).forEach(key => (scale[key] = scale[key] + 1));
        // aEntity.setAttribute('scale', scale);
      }
    });
  }
});

// let soundentity = null;
// let isTargetFound = false;
// let model = null;

// AFRAME.registerComponent('markerhandler', {
//   init: function() {
//     console.log('markerhandler-init');

//     // const animatedMarker = document.querySelector("#animated-marker");
//     // const aEntity = document.querySelector("#animated-model");

//     markerObj = document.querySelector('a-marker');
//     markerObj.hidden = true;

//     soundentity = document.querySelector('#sound');

//     model = document.querySelector('#animated-model');
//     model.object3D.visible = false;

//     //model.setAttribute('animation-mixer', {clip: 'C4D Animation Take', loop: 'repeat'});

//     markerObj.addEventListener('click', function(ev, target) {
//       const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
//       if (model && intersectedElement === model) {
//         // const scale = aEntity.getAttribute('scale');
//         // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
//         // aEntity.setAttribute('scale', scale);
//         soundentity.components.sound.playSound();
//       }
//     });
//   },

//   tick: function() {
//     if (markerObj != null) {
//       if (markerObj.object3D.visible == true) {
//         if (isTargetFound) return;
//         isTargetFound = true;
//         document.getElementById('banner-section').style.display = 'none';

//         model.object3D.visible = true;
//       } else {
//         if (!isTargetFound) return;

//         isTargetFound = false;
//         console.log('marker invisible');
//         document.getElementById('banner-section').style.display = 'block';

//         model.object3D.visible = false;
//         // soundentity.components.sound.stopSound();
//       }
//     }
//   }
// });
