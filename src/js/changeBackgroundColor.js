import { refs } from './refs';
import { FastAverageColor } from 'fast-average-color';

export { changeBackgroundColor };

function changeBackgroundColor(currentFlag) {
  const fac = new FastAverageColor();

  fac
    .getColorAsync(currentFlag)
    .then(color => {
      const imgVisible = document.querySelector('img.visible');
      imgVisible.style.filter = `drop-shadow(0 0 10px ${color.hex})`;

      refs.bgColor.style.backgroundColor = `${color.hex}80`;
      refs.mainTilteH1.style.color = color.isDark ? '#fff' : '#999';
    })
    .catch(e => {
      throw new Error(e.message);
    });
}
