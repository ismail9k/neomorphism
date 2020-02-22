# Form

A form component is use to group multiple input fields

## Basic Use

Button markup

- `.form`
  - `.field`
    - `.input`
    - `.checkbox`
    - `...`
  - `...`

<snippeter>
<pre>
<form class="form" autocomplete="off">
  <div class="field">
    <label for="exampleEmail1" class="field-label">Email</label>
    <input id="exampleEmail1" type="text" placeholder="Enter email" class="input">
    <small class="field-text">We'll never share your email with anyone else.</small>
  </div>
  <div class="field">
    <label for="examplePassword1" class="field-label">Password</label>
    <input id="examplePassword1" type="password" placeholder="Enter password" class="input">
  </div>
  <div class="field">
    <label class="checkbox">
      <input type="checkbox" class="checkbox-input">
      <span class="checkbox-label">I agree to the Terms and Conditions</span>
    </label>
  </div>
  <div class="field">
    <label for="exampleTextarea1" class="field-label">Description</label>
    <textarea name="description-textarea" id="exampleTextarea1" class="textarea" rows="10"></textarea>
  </div>
  <div class="field">
    <button class="button">Submit</button>
  </div>
</form>
</pre>
</snippeter>
