"use strict";
var router_1 = require('@angular/router');
var project_component_1 = require('./project.component');
var project_detail_component_1 = require('./project-detail.component');
var project_section_component_1 = require('./project-section.component');
var projectRoutes = [
    {
        path: '',
        component: project_section_component_1.ProjectSectionComponent,
        children: [
            {
                path: '',
                component: project_component_1.ProjectComponent
            },
            {
                path: ':username',
                component: project_detail_component_1.DetailProjectComponent
            }
        ]
    }
];
exports.projectRouting = router_1.RouterModule.forChild((projectRoutes));
//# sourceMappingURL=project.routing.js.map