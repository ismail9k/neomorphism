# Modal

A _modal_ component is use to display content to the user and capture an action

## Basic Use

_modal_ markup

- `.modal`
  - `.modal-dismiss`
  - `.modal-header`
    - `.modal-title`
  - `.modal-body`
  - `.modal-footer`

<snippeter>
<pre>
<div class="modal">
  <button class="modal-dismiss">
    <svg viewbox="0 0 24 24" class="icon">
      <path d="M20.71,4.71,13.41,12l7.3,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-7.29,7.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,3.29,4.71A1,1,0,0,1,4.71,3.29L12,10.59l7.29-7.3a1,1,0,1,1,1.42,1.42Z"></path>
    </svg>
  </button>
  <div class="modal-header">
    <h4 class="modal-title">Your title</h4>
  </div>
  <div class="modal-body">
    <p>Your awesome content goes here!</p>
  </div>
  <div class="modal-footer">
    <button href="#" class="button">Ok</button>
    <button href="#" class="button shadow-no">Cancel</button>
  </div>
</div>
</pre>
</snippeter>
