"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.gender = 'male';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h4>Click on below buttons to check and uncheck radio buttons</h4>\n    <button (click)=\"gender = 'male'\">Select Male</button>\n    <button (click)=\"gender = 'female'\" >Select Female</button><br>\n    <input type=\"radio\" [(ngModel)]=\"gender\" value=\"male\" name=\"gender\"/> Male<br>\n    <input type=\"radio\" [(ngModel)]=\"gender\" value=\"female\" name=\"gender\"/> Female<br>\n    <h4>Gender Value</h4>\n    <div>{{gender}}</div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
