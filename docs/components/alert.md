# Alert

Alert components use to notify user of information

## Basic Use

Alert markup

- `.alert`
  - `.alert-content`
  - `.alert-dismiss`

<snippeter>
<pre>
<div class="alert">
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
  <span class="alert-content">
    This is an awesome alert!
  </span>
  <button class="alert-dismiss">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M20.71,4.71,13.41,12l7.3,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-7.29,7.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,3.29,4.71A1,1,0,0,1,4.71,3.29L12,10.59l7.29-7.3a1,1,0,1,1,1.42,1.42Z" />
    </svg>
  </button>
</div>
</pre>
</snippeter>

## Sizes

Alert sizes modifiers

- `.is-xs`
- `.is-sm`
- `.is-md`
- `.is-lg`
- `.is-xl`

<snippeter>
<pre>
<div class="alert is-xs">
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
  <span class="alert-content">
    This is an awesome alert!
  </span>
  <button class="alert-dismiss">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M20.71,4.71,13.41,12l7.3,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-7.29,7.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,3.29,4.71A1,1,0,0,1,4.71,3.29L12,10.59l7.29-7.3a1,1,0,1,1,1.42,1.42Z" />
    </svg>
  </button>
</div>

<div class="alert is-sm">
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
  <span class="alert-content">
    This is an awesome alert!
  </span>
  <button class="alert-dismiss">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M20.71,4.71,13.41,12l7.3,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-7.29,7.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,3.29,4.71A1,1,0,0,1,4.71,3.29L12,10.59l7.29-7.3a1,1,0,1,1,1.42,1.42Z" />
    </svg>
  </button>
</div>

<div class="alert is-md">
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
  <span class="alert-content">
    This is an awesome alert!
  </span>
  <button class="alert-dismiss">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M20.71,4.71,13.41,12l7.3,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-7.29,7.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,3.29,4.71A1,1,0,0,1,4.71,3.29L12,10.59l7.29-7.3a1,1,0,1,1,1.42,1.42Z" />
    </svg>
  </button>
</div>

<div class="alert is-lg">
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
  <span class="alert-content">
    This is an awesome alert!
  </span>
  <button class="alert-dismiss">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M20.71,4.71,13.41,12l7.3,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-7.29,7.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,3.29,4.71A1,1,0,0,1,4.71,3.29L12,10.59l7.29-7.3a1,1,0,1,1,1.42,1.42Z" />
    </svg>
  </button>
</div>

<div class="alert is-xl">
  <svg viewBox="0 0 24 24" class="icon">
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
  <span class="alert-content">
    This is an awesome alert!
  </span>
  <button class="alert-dismiss">
    <svg viewBox="0 0 24 24" class="icon">
      <path d="M20.71,4.71,13.41,12l7.3,7.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-7.29,7.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12,3.29,4.71A1,1,0,0,1,4.71,3.29L12,10.59l7.29-7.3a1,1,0,1,1,1.42,1.42Z" />
    </svg>
  </button>
</div>
</pre>
</snippeter>
