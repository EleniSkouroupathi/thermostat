$( document ).ready(function() {
var thermostat = new Thermostat(); 
powerSavingState();
$("#Temperature").text(thermostat.readTemperature());
$("#temperature-up").click(function(){
  thermostat.up();
  $("#Temperature").text(thermostat.readTemperature());
});
$("#temperature-down").click(function(){
  thermostat.down();
  $("#Temperature").text(thermostat.readTemperature());
});
$("#temperature-reset").click(function(){
  thermostat.resetTemperature();
  $("#Temperature").text(thermostat.readTemperature());
});
$("#powersaving-on").click(function(){
  thermostat.setPowerSavingModeOn();
  powerSavingState();
});
$("#powersaving-off").click(function(){
  thermostat.setPowerSavingModeOff();
  powerSavingState();
});
function powerSavingState(){
  if (thermostat.isPowerSavingModeOn()){
    $("#power-saving-status").text("on");
  }
  else {
    $("#power-saving-status").text("off");
  };
}
});