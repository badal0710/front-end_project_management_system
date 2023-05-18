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
     *     
     */
    contractor_getOneContractor = '',
    /**
     *   @GetMapping("/allContractor")  
     */
    contractor_getAllContractor = 'allContractor',
    /**
     *   @GetMapping("/totalContractor")
     */
    contractor_countContractor = 'totalContractor',



    /**
     *     @GetMapping("/{investorId}/")
     */
    investor_getOneInvestor = '',
    /**
     *   @GetMapping("/allInvestor")  
     */
    investor_getAllInvestor = 'allInvestor',
    /**
     *   @GetMapping("/totalInvestor")
     */
    investor_countInvestor = 'totalInvestor',
    /**
     *   @PostMapping("/create-investor")
     */
    investor_createInvestor = 'create-investor',
    /**
     *   @DeleteMapping("/delete-investor/{id}")
     */
    investor_deleteOne = 'delete-investor',



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
     *   @GetMapping("/totalProject")
     */
    projectController_countProject = 'totalProject',




    /**
     *     @GetMapping("/{locationId}/")
     */
    projectLocation_getLocation = '',
    /**
     *     @DeleteMapping("/projectLocation/{id}")
     */
    projectLocation_projectLocation = 'projectLocation',



    /**
     *     @GetMapping("/all-task")
     */
    taskDetail_allTask = "all-task",
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
    /**
     *     @GetMapping("/getOneTask/{id}")
     */
    taskDetail_getOneTask = 'getOneTask',



    /**
     *     @PostMapping("/insertUser")
     */
    user_insertUser = 'insertUser',
    /**
     *     @GetMapping("/getUser/{email}")
     */
    user_getUser = 'getUser',
    /**
     *     @PostMapping("/login")
     */
    user_login = 'login',
    /**
     *     @GetMapping("/authorizeUser/{email}/{type}")
     */
    user_authorizeUser = 'authorizeUser',
    /**
     *     @PostMapping("/create")
     */
    projectInvestor_create = 'create',
    /**
     *     @DeleteMapping("/delete/{id}")
     */
    projectInvestor_deleteOne = 'delete',
    /**
     *     @GetMapping("/getAll")
     */
    projectInvestor_getAll = 'getAll',
}