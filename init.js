var Init = function(country) {
  this.country = country;
}

Init.prototype.setCountry = function(country) {
  this.country = country;
};

Init.prototype.getCountry = function() {
  return this.country;
};

Init.prototype.init = function() {
  console.log("Initializing...");
};

