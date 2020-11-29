// clicked (button) ---Event generated ---> Listener (Action)




<div class="buttons">
  <button>Press 1</button>
  <button>Press 2</button>
  <button>Press 3</button>
</div>
const buttonContainer = document.querySelector('.buttons');
console.log('buttonContainer', buttonContainer);

buttonContainer.addEventListener('click', event => {
  console.log(event.target.value)
})

/**
 * Different phases of events - capture, target, bubble
 * 
 * When an event moves through the DOM - whether bubbling up or trickling down
 *  - it is called event propagation. The event propagates through the DOM tree.
 * 
 * Events happen in two phases: the bubbling phase and the capturing phase.
 * In capture phase, also called the trickling phase, the event "trickles down" to the element that caused the event.
 * It starts from the root level element and handler, and then propagates down to the element. 
 * The capture phase is completed when the event reaches the target.
 * In the bubble phase, the event is "bubbled" up to the DOM tree.
 * It is first captured and handled by the innermost handler (the one that is closest to the element on which the event occurred). 
 * It then bubbles up (or propagates up) to the higher levels of DOM tree, further up to its parents, and then finally to its root.
 * Her's a trick to help you remember this:
 */

 //trickle down, bubble up

 /**
  * 
  *            / \
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  | |          |     |
|   -------------------------     |
|        Event BUBBLING           |
-----------------------------------

               | |
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  \ /          |     |
|   -------------------------     |
|        Event CAPTURING          |
-----------------------------------


  */