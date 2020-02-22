# Dropdown

A Dropdown component is used to drop a nested menu with more options

## Basic Use

Dropdown markup

- `.dropdown`
  - `.dropdown-toggle`
  - `.dropdown-menu`
    - `.dropdown-item`
    - `.dropdown-item`
    - `...`

<snippeter>
<pre>
<div class="dropdown is-active">
  <button class="dropdown-toggle button">
    <span>Dropdown</span>
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
    </svg>
  </button>
  <div class="dropdown-menu">
    <a href="" class="dropdown-item">Dropdown item</a>
    <a href="" class="dropdown-item is-active">Active dropdown item</a>
    <a href="" class="dropdown-item">Other dropdown item</a>
    <a href="" class="dropdown-item">Other dropdown item</a>
    <a href="" class="dropdown-item">Other dropdown item</a>
  </div>
</div>
</pre>
</snippeter>
