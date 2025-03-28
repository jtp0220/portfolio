const catalogContent = document.querySelector(".catalog-content");
const selectedCoursesContent = document.querySelector(".selected-courses-content");
const registrationWarningsContent = document.querySelector(".registration-warnings-content");
const worksheetPreviewContent = document.querySelector(".worksheet-preview-content");

let selection_boxes = document.querySelectorAll(".selection-box");

var termSelector = document.querySelector("#term-selector");
var worksheetSelector = document.querySelector("#worksheet-selector");
var subjectSelector = document.querySelector("#subject-selector");


if(termSelector) termSelector.addEventListener('change', updateTerm);
if(worksheetSelector) worksheetSelector.addEventListener('change', updateWorksheet);
if(subjectSelector) subjectSelector.addEventListener('change', updateCatalog);
if(selection_boxes) {
    renderSelectBoxes();
}



function updateTerm() {
    term = termSelector.value;
    console.log(`User selected term: ${term}`);
}

function updateWorksheet() {
    worksheet = worksheetSelector.value;
    console.log(`User selected worksheet: ${worksheet}`);
}

function updateCatalog() {

    console.log(getUserData())

    subject = subjectSelector.value;
    console.log(`User selected subject: ${subject}`);

    let result = "";

    switch(subject){
        case "CGSC":
            for(let i = 0; i < CGSC.length; i++){
                result = result + genCatalogBlock(CGSC[i]);
            }
            break;
        
        case "ECON":
            for(let i = 0; i < ECON.length; i++){
                result = result + genCatalogBlock(ECON[i]);
            }
            break;

        default:
            break;

    }

    catalogContent.innerHTML = result;

    renderSelectBoxes();
}

function renderSelectBoxes(){

    selection_boxes = document.querySelectorAll(".selection-box");
    selection_boxes.forEach((box) => {
        
        // set background to black if selected
        let user_courses = getUserData();
        if(user_courses.find(item => item.crn === box.id.substring(1))){
            box.style.backgroundColor = "black";
        }

        box.addEventListener('click', () => {
            toggleCourseSelection(box);

        })
    })
}

function toggleCourseSelection(box){
    let user_courses = getUserData();

    const isObjectInUserCourses = user_courses.find(item => item.crn === box.id.substring(1));
    const courseObject = database.find(item => item.crn === box.id.substring(1));

    if(isObjectInUserCourses == undefined){

        // add course to storage
        user_courses.push(courseObject);

        box.style.backgroundColor = "black";
        console.log(`User selected course ${courseObject.crn}`);


    } else {
        // remove course from storage
        user_courses = user_courses.filter(course => course.crn !== isObjectInUserCourses.crn);

        box.style.backgroundColor = "";
        console.log(`User unselected course ${isObjectInUserCourses.crn}`)
        
    }

    updateUserData(user_courses);
    updatePage();


    console.log(user_courses);

}

function updateSelectedCourses(){
    let result = "";

    let user_courses = getUserData();
    user_courses.forEach((course) => {
        result = result + genSelectedBlock(course);
    })
    

    selectedCoursesContent.innerHTML = result;

    // no updateUserData since it is not affected
}

function updateRegistrationWarnings(){    
    let result = "";

    let user_courses = getUserData();
    let timeConflictPairs = [];
    
    // FIND ALL CONFLICTS
    user_courses.forEach((course) => {


        // FIND ALL **TIME** CONFLICTS
        if(course.timeConflictWith){
           course.timeConflictWith.forEach((conflict_crn) =>{
                 
                let pair = [course.crn, conflict_crn].sort().join('-');

                // check if conflict is already noted
                if(!timeConflictPairs.includes(pair)){
                    
                    // check if conflict_crn is among user_courses
                    if(user_courses.find(c => c.crn === conflict_crn)){

                        console.log(`NEW CONFLICT PAIR: ${pair}`);
                        timeConflictPairs.push(pair);
                        result = result + genTimeConflictBlock(course, database.find(c => c.crn === conflict_crn));                
                    } else {
                        console.log(`No Conflict`);
                    }
                }
    
    
            })
        }

        // FIND ALL **MISSING COURSE** WARNINGS
        if(course.alsoRegister){

            let flag = false;

            course.alsoRegisterCourses.forEach((missing_crn) => {

                // check is missing_crn is selected
                if(user_courses.find(c => c.crn === missing_crn)){
                    flag = true;
                }

            })

            if(flag == false){
                result = result + genMissingTutorialBlock(course);
            }

        }

    })
    
    registrationWarningsContent.innerHTML = result;

    updateUserData(user_courses);
}

function updatePage(){
    updateRegistrationWarnings();
    updateSelectedCourses();
}

