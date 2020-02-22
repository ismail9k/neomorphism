# Button

Button component is used to trigger an action

## Basic Use

Button markup

- `.button`

<snippeter>
<pre>
<button class="button">Click me!</button>
</pre>
</snippeter>

## Using icons

Adding icons to a _button_

<snippeter>
<pre>
<button class="button">
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
  <span>Star</span>
</button>
<button class="button">
  <span>Like</span>
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
  </svg>
</button>
</pre>
</snippeter>

## Sizes

Button sizes modifiers

- `.is-xs`
- `.is-sm`
- `.is-md`
- `.is-lg`
- `.is-xl`

<snippeter>
<pre>
<button class="button is-xs">Tiny Button</button>
<button class="button is-sm">Small Button</button>
<button class="button is-md">Medium Button</button>
<button class="button is-lg">Large Button</button>
<button class="button is-xl">Massive Button</button>
</pre>
</snippeter>
