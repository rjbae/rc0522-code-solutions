/* exported setValue */
function setValue(object, key, value) {
  var values = (object[key] = value);
  return values;
}
