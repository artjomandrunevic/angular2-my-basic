"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var not_found_component_1 = require('./404/not-found.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'project',
        loadChildren: 'app/project/project.module#ProjectModule'
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map