# Pagination

A _pagination_ component is used to navigate between multiple pages

## Basic Use

_pagination_ markup

- `.pagination`
  - `.pagination-prev`
  - `.pagination-item`
  - `.pagination-item`
  - `...`
  - `.pagination-next`

<snippeter>
<pre>
<div class="pagination">
  <button class="pagination-prev">
    <svg id="icon-arrowPrev" viewbox="0 0 24 24" class="icon">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  </button>
  <button class="pagination-item">6</button>
  <button class="pagination-item is-active">7</button>
  <button class="pagination-item"> 8</button>
  <button class="pagination-next">
    <svg id="icon-arrowNext" viewbox="0 0 24 24" class="icon">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
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
<div class="pagination is-xs">
  <button class="pagination-prev">
    <svg id="icon-arrowPrev" viewbox="0 0 24 24" class="icon">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  </button>
  <button class="pagination-item">6</button>
  <button class="pagination-item is-active">7</button>
  <button class="pagination-item"> 8</button>
  <button class="pagination-next">
    <svg id="icon-arrowNext" viewbox="0 0 24 24" class="icon">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
    </svg>
  </button>
</div>

<div class="pagination is-sm">
  <button class="pagination-prev">
    <svg id="icon-arrowPrev" viewbox="0 0 24 24" class="icon">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  </button>
  <button class="pagination-item">6</button>
  <button class="pagination-item is-active">7</button>
  <button class="pagination-item"> 8</button>
  <button class="pagination-next">
    <svg id="icon-arrowNext" viewbox="0 0 24 24" class="icon">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
    </svg>
  </button>
</div>

<div class="pagination is-md">
  <button class="pagination-prev">
    <svg id="icon-arrowPrev" viewbox="0 0 24 24" class="icon">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  </button>
  <button class="pagination-item">6</button>
  <button class="pagination-item is-active">7</button>
  <button class="pagination-item"> 8</button>
  <button class="pagination-next">
    <svg id="icon-arrowNext" viewbox="0 0 24 24" class="icon">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
    </svg>
  </button>
</div>

<div class="pagination is-lg">
  <button class="pagination-prev">
    <svg id="icon-arrowPrev" viewbox="0 0 24 24" class="icon">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  </button>
  <button class="pagination-item">6</button>
  <button class="pagination-item is-active">7</button>
  <button class="pagination-item"> 8</button>
  <button class="pagination-next">
    <svg id="icon-arrowNext" viewbox="0 0 24 24" class="icon">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
    </svg>
  </button>
</div>

<div class="pagination is-xl">
  <button class="pagination-prev">
    <svg id="icon-arrowPrev" viewbox="0 0 24 24" class="icon">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
    </svg>
  </button>
  <button class="pagination-item">6</button>
  <button class="pagination-item is-active">7</button>
  <button class="pagination-item"> 8</button>
  <button class="pagination-next">
    <svg id="icon-arrowNext" viewbox="0 0 24 24" class="icon">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
    </svg>
  </button>
</div>
</pre>
</snippeter>
