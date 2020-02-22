# Navbar

A _navbar_ component is use to group the main navigation links in the UI

## Basic Use

_navbar_ markup

- `.navbar`
  - `.navbar-brand`
  - `.navbar-start`
    - `.navbar-item`
    - `.navbar-item`
    - `...`
  - `.navbar-end`
    - `.navbar-item`
    - `.navbar-item`
    - `...`

<snippeter>
<pre>
<header class="navbar">
  <a href="https://ismail9k.com" class="navbar-brand">
    Ismail9k_
  </a>
  <div class="navbar-start">
    <a class="navbar-item">Home</a>
    <a class="navbar-item">About</a>
    <a class="navbar-item">Company</a>
  </div>
  <div class="navbar-end">
    <a class="navbar-item">
      <svg viewbox="0 0 24 24" class="icon">
        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path>
      </svg>
    </a>
    <a class="navbar-item">
      <svg viewbox="0 0 24 24" class="icon">
        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
      </svg>
    </a>
  </div>
</header>
</pre>
</snippeter>

<style>
.snippeter .navbar {
  position: static;
}
</style>
