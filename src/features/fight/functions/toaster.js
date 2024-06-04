function toaster(div, id, hit, positive, classStart, classAnimate, mana) {
  if (!mana) {
      mana = ' PV'
  }
  return (
    
        document.querySelector(div + id).innerHTML = positive + hit + mana,
        document.querySelector(div  + id).className = classStart,
        window.requestAnimationFrame(function (time) {
          window.requestAnimationFrame(function (time) {
            document.querySelector(div  + id).className = classAnimate;
          });
        })
  )
}

export default toaster
