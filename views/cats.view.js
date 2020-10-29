const renderCat = require("./cat.view");

module.exports = function (props) {
  const {cats} = props;
  return /*html*/ `
  <h1>Cats!</h1>

  <h2>Cats that are not sleepy!</h2>

  <ul>
    ${cats
      .filter(cat => !cat.sleepy)
      .map(cat => renderCat(cat))
      .join("")}
  </ul>

  <h2>Cats that are sleepy!</h2>

  <ul>
  ${cats
      .filter(cat => cat.sleepy)
      .map(cat => renderCat(cat))
      .join("")}
  </ul>

  <h2>Add a Cat</h2>
  <form class="create-form">

    <div class="form-group">
      <label for="ca">Cat Name:</label>
      <input type="text" id="ca" name="name">
    </div>

    <div class="form-group">
      <label for="slee">Sleepy?</label><br>
      <input type="radio" name="sleepy" value="false" checked> Awake! <br>
      <input type="radio" name="sleepy" value="true"> Sleepy...
      
    </div>

    <button type="submit">Add Cat</button>
  </form>
`
};