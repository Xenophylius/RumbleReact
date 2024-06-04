function animate(div, classStart, classAnimate) {
    
  return (
    
    document.querySelector(div).className = classStart,
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        document.querySelector(div).className = classAnimate;
      });
    })
  )
}

export default animate