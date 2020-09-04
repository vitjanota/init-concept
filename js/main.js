// global array of init functions references
var Inits = [];

// run all available init functions
$(document).ready(function(){
    Inits.forEach(function(Init){
		Init();
    });
});
