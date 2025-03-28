window.onload = function() {
    setWorksheetPage();
}

function setWorksheetPage(){
    let result = "";

    let user_courses = getUserData();
    user_courses.forEach(course => {
        let conflict_html = "";
        
        if(course.timeConflictWith){
            course.timeConflictWith.forEach((time_confl_crn) => {
                let time_confl_obj = user_courses.find(i => i.crn === time_confl_crn);
                if(time_confl_obj){
                    conflict_html += genWorksheetBlockWarningsBlock("Time Conflict", `${time_confl_obj.subject} ${time_confl_obj.section}`);
                }
            })
        }

        if(course.alsoRegister){

            let flag = false;

            course.alsoRegisterCourses.forEach((time_confl_crn) => {
                let time_confl_obj = user_courses.find(i => i.crn === time_confl_crn);
                if(time_confl_obj){
                    flag = true;
                }
            })            

            if(flag == false){
                conflict_html += genWorksheetBlockWarningsBlock("Must Also Register", course.alsoRegister);
            }


        }

        result += genWorksheetBlock(course, conflict_html);

    });



    worksheetPreviewContent.innerHTML = result;
}

function genWorksheetBlockWarningsBlock(type, desc){
    let generated_html = 
    `<tr>
        <td>
            <b>${type}: </b>
            ${desc}
        </td>

    </tr>`

    return generated_html.replace(/\n/g, "");
}