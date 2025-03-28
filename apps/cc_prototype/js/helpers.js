function genCatalogBlock(course_object){
    let generated_html = `<tr class="course-block" id=${course_object.crn}>
    <td>
        <table>
            <tbody>
                <tr>
                    <td width="5%"><button id="b${course_object.crn}" class="selection-box"></button></td>
                    <td width="9%">${course_object.status}</td>
                    <td width="5%">${course_object.crn}</td>
                    <td width="10%">${course_object.subject}</td>
                    <td width="5%">${course_object.section}</td>
                    <td width="15%">${course_object.title}</td>
                    <td width="5%">${course_object.credits}</td>
                    <td width="9%">${course_object.schedule}</td>
                    <td width="5%">${course_object.prereq}</td>
                    <td width="5%">${course_object.restr}</td>
                    <td width="17%">${course_object.instructor}</td>
                </tr>
                ${(course_object.alsoRegister) ? 
                `
                <tr>
                    <td>&nbsp</td>
                    <td colspan="10">
                        <b style="color:blue">Also Register in:</b>
                        ${course_object.alsoRegister}
                    </td>
                </tr>
                ` : ""}
                <tr>
                    <td>&nbsp</td>
                    <td colspan="10">
                        <b>Meeting Date:</b>
                        ${course_object.meeting_date}
                        <b>Days:</b>
                        ${course_object.days}
                        <b>Time:</b>
                        ${course_object.time}
                        <b>Building:</b>
                        ${course_object.building}
                        <b>Room:</b>
                        ${course_object.room}
                    </td>
                </tr>
                <tr>
                    <td>&nbsp</td>
                    <td colspan="10">
                        <b>Section Information:</b>
                        <span style="color:red">Section Type - </span>
                        ${course_object.section_info}
                    </td>
                </tr>
                <tr>
                    <td colspan="11"></td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>`;
    return generated_html.replace(/\n/g, "");
}


function genSelectedBlock(course_object){
    let generated_html =
    `<tr class="selected-courses-block" id=s${course_object.crn}>
        <td>
            <table>
                <tbody>
                    <tr><td><b>${course_object.subject} ${course_object.section}</b></td></tr>
                    <tr><td>${course_object.days} ${course_object.time}</td></tr>
                    <tr><td>${course_object.building} ${course_object.room}</td></tr>
                </tbody>
            </table>
        </td>
    </tr>`;

    return generated_html.replace(/\n/g, "");
}




function genTimeConflictBlock(course_object1, course_object2){
    let generated_html = 
    `<tr class="registration-warnings-block" class="time-conflict-warning">
        <td>
            <table>
                <tbody>
                    <tr><td><b>TIME CONFLICT</b></td></tr>
                    <tr><td><b>Courses:</b> ${course_object1.subject} ${course_object1.section}, ${course_object2.subject} ${course_object2.section}</td></tr>
                    <tr><td><b>Time:</b> ${course_object1.days} ${course_object1.time}</td></tr>
                </tbody>
            </table>
        </td>
    </tr>`;

    return generated_html.replace(/\n/g, "");
}

function genMissingTutorialBlock(course_object){
    let generated_html = 
    `<tr class="registration-warnings-block" class="missing-tutorial-warning">
        <td>
            <table>
                <tbody>
                    <tr><td><b>MISSING COURSES</b></td></tr>
                    <tr><td><b>Course:</b> ${course_object.subject} ${course_object.section}</td></tr>
                    <tr><td><b>Must also register in:</b> ${course_object.alsoRegister}</tr>
                </tbody>
            </table>
        </td>
    </tr>`;

    return generated_html.replace(/\n/g, "");
}

function genWorksheetBlock(course_object, conflict_html){
    let generated_html =
    `<tr class="worksheet-preview-content-block">
        <td width="5%"><button class="selection-box"></button></td>
        <td width="10%">Not Registered</td>
        <td width="10%">${course_object.crn}</td>
        <td width="12%">${course_object.subject} ${course_object.section}</td>
        <td width="20%">${course_object.title}</td>
        <td width="18%">${course_object.days} ${course_object.time}</td>
        <td width="5%">${course_object.credits}</td>
        <td width="20%">
            <table>
                <tbody class="worksheet-preview-content-block-warnings">
                ${conflict_html}
                </tbody>
            </table>
        </td>
    </tr>`

    return generated_html.replace(/\n/g, "");
}

function getUserData(){
    let user_courses = sessionStorage.getItem("user_courses");
    return user_courses ? JSON.parse(user_courses) : [];
}


function updateUserData(user_courses){
    sessionStorage.setItem("user_courses", JSON.stringify(user_courses));
}
