if (typeof(tuta) === "undefined") {
	tuta = {};
}

// global reference to your app object
var application = null; 

tuta.initCallback = function(error) {

};

// Should be called in the App init lifecycle event
// In Visualizer this should be call in the init event of the startup form
tuta.init = function() {
  	// initialize form controllers
  	new tuta.forms.frmExample();
  
  	// initialize application
 	application = new tuta.application(tuta.initCallback);
};

/*
	This is a hack so you can use this framework in
    Visualizer functional previews
*/
function initApp() {
  //ssa.util.alert("INIT");
  tuta.init();
}

//kony.application.setApplicationInitializationEvents({init  : initApp, preappinit: initApp, appservice : initApp });

