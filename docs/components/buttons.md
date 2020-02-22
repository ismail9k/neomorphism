# Buttons

A _buttons_ component is group multiple buttons together

## Basic Use

Button markup

- `.buttons`
  - `.button`
  - `.button`
  - `...`

<snippeter>
<pre>
<div class="buttons">
  <button class="button">one</button>
  <button class="button">two</button>
  <button class="button">three</button>
</div>
</pre>
</snippeter>

## Using icons

Adding icons to buttons

<snippeter>
<pre>
<div class="buttons">
  <button class="button">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z" />
    </svg>
  </button>
  <button class="button">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z" />
    </svg>
  </button>
  <button class="button">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z" />
    </svg>
  </button>
</div>
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
<div class="buttons is-xs">
  <button class="button">one</button>
  <button class="button">two</button>
  <button class="button">three</button>
</div>

<div class="buttons is-sm">
  <button class="button">one</button>
  <button class="button">two</button>
  <button class="button">three</button>
</div>

<div class="buttons is-md">
  <button class="button">one</button>
  <button class="button">two</button>
  <button class="button">three</button>
</div>

<div class="buttons is-lg">
  <button class="button">one</button>
  <button class="button">two</button>
  <button class="button">three</button>
</div>

<div class="buttons is-xl">
  <button class="button">one</button>
  <button class="button">two</button>
  <button class="button">three</button>
</div>
</pre>
</snippeter>
