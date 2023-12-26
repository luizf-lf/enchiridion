// adds the event listener to the keydown event
document.addEventListener('keydown', (event) => {
  try {
    const sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    if (!document.kcSequence) {
      document.kcSequence = [];
    }

    if (document.kcSequence.length === 10) {
      document.kcSequence.shift();
    }

    document.kcSequence.push(event.keyCode);

    // checks if the sequence array is equal to the input window sequence
    if (
      sequence.length == document.kcSequence.length &&
      sequence.every((item, index) => item == document.kcSequence[index])
    ) {
      // The magic goes here.
      // On this example, it creates a "rainbow" animation
      console.debug('matches');
      document.body.style.animation = '';
      document.body.style.filter = '';

      document.body.style.filter = 'hue-rotate(0deg)';
      document.styleSheets[0].insertRule('@keyframes rotateHue { to { filter: hue-rotate(1440deg); } }');
      document.body.style.animation = 'rotateHue 3s ease-in-out';
    }
  } catch (error) {
    console.error(error);
  }
});
