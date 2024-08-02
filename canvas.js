//This event function controls the mouse tracking eyeball movement.

document.onmousemove = (event) => {
  const { clientX, clientY } = event;

  let k = document.getElementsByClassName("eyeBall");

  for (let i = 0; i < k.length; i++) {
    k[i].style.left = `${clientX / 7}px`;

    k[i].style.bottom = `${clientX / 7}px`;
  }
};

//Because of the rotation of the div housing the eyeball, the left property moves in the direction of an upward left diagonal and the bottom moves in a mirrored direction.
//Combining the two achieves a horizontal movement of the eyeball.
