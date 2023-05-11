export enum enum_functions {

    /**
     *     @PostMapping("/create-contractor")
     */
    contractor_createContractor = 'create-contractor',
    /**
     *     @PutMapping("/update-contractor/{id}")
     */
    contractor_updateContractor = 'update-contractor',
    /**
     *     @DeleteMapping("/delete-contractor/{id}")
     */
    contractor_deleteContractor = 'delete-contractor',



    /**
     *     @GetMapping("/{investorId}/")
     */
    investor_getInvestor = '',



    /**
     *     @PostMapping("/create-project")
     */
    projectController_createProject = 'create-project',
    /**
     *     @GetMapping("/{projectId}")
     */
    projectController_getOneProject = '',
    /**
     *     @GetMapping("/AllProjects")
     */
    projectController_getAllProject = 'AllProjects',
    /**
     *     @PutMapping("/update-project/{projectId}")
     */
    projectController_updateProject = 'update-project',
    /**
     *     @DeleteMapping("/delete-project/{projectId}")
     */
    projectController_deleteProject = 'delete-project',
    /**
     *     @GetMapping("/project-investor/{projectId}")
     */
    projectController_projectInvestor = 'project-investor',
    /**
     *     @GetMapping("/task-details/{projectId}/filterDates")
     */
    projectController_taskDetail = 'task-details',
    /**
     *     @GetMapping("/project-status-date/{startingDate/{endingDate}/{projectStatus}")
     */
    projectController_projectStatusDate = 'project-status-date',




    /**
     *     @GetMapping("/{locationId}/")
     */
    projectLocation_getLocation = '',
    /**
     *     @DeleteMapping("/projectLocation/{id}")
     */
    projectLocation_projectLocation = 'projectLocation',





    /**
     *     @PostMapping("/create-task")
     */
    taskDetail_createTask = 'create-task',
    /**
     *     @PutMapping("/update-task/{taskId}")
     */
    taskDetail_updateTask = 'update-task',
    /**
     *     @DeleteMapping("/delete-task/{taskId}")
     */
    taskDetail_deleteTask = 'delete-task',
}