"use strict";
var router_1 = require("@angular/router");
var checkbox_component_1 = require("./checkbox/checkbox.component");
var home_component_1 = require("./home/home.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'checkbox', component: checkbox_component_1.CheckboxComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
