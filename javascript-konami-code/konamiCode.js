/**
 * Handles the Konami Code execution
 * @param {Event} event keydown press event
 */
function kCodeHandler(event) {
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

      document.body.style.filter = 'hue-rotate(0deg)';
      document.styleSheets[0].insertRule('@keyframes rotateHue { to { filter: hue-rotate(1440deg); } }');
      document.body.style.animation = 'rotateHue 3s ease-in-out';

      // undoes everything
      setTimeout(() => {
        document.body.style.animation = '';
        document.body.style.filter = '';

        document.styleSheets[0].removeRule(document.styleSheets[0].cssRules.length - 1);
      }, 3000);
    }
  } catch (error) {
    console.error(error);
  }
}

// adds the event listener
document.addEventListener('keydown', kCodeHandler);
