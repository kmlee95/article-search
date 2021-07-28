export default function throttleRender(scrollCheck) {
  if (!scrollCheck) {
    throw Error('Invalid required arguments');
  }

  let tick = false;

  return function () {
    if (tick) {
      return;
    }

    tick = true;
    return requestAnimationFrame(() => {
      tick = false;
      return scrollCheck();
    });
  };
}
