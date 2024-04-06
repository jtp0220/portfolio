// GLOBAL VARIABLES
var term = "W24";
var worksheet = "NEW_Worksheet";
var selectedCourseCount = 0;


// Cognitive Science (CGSC) Courses
let CGSC1001A = {
    status: "Open",
    crn: "20886",
    subject: "CGSC 1001",
    section: "A",
    title: "Mysteries of the Mind",
    credits: "0.5",
    schedule: "Lecture",
    prereq: "No",
    restr: "No",
    instructor: "Ronald McDonald",
    meeting_date: "May 06, 2024 to Jun 18, 2024",
    days: "Tue Thu",
    time: "14:35 - 17:25",
    building: "ON",
    room: "LINE",
    section_info: "ONLINE",
    timeConflictWith: ["21268", "20887", "21270"]
}


let CGSC1001B = {
    status: "Open",
    crn: "21268",
    subject: "CGSC 1001",
    section: "B",
    title: "Mysteries of the Mind",
    credits: "0.5",
    schedule: "Lecture",
    prereq: "No",
    restr: "No",
    instructor: "Donald Trump",
    meeting_date: "Jul 02, 2024 to Aug 14, 2024",
    days: "Tue Thu",
    time: "14:35 - 17:25",
    building: "ON",
    room: "LINE",
    section_info: "ONLINE",
    timeConflictWith: ["20886", "20887", "21270"] 
}

let CGSC3201A = {
    status: "Waitlist Open",
    crn: "20887",
    subject: "CGSC 3201",
    section: "A",
    title: "Cognitive Processes",
    credits: "0.5",
    schedule: "Seminar",
    prereq: "Yes",
    restr: "Yes",
    instructor: "Mohammed Ali",
    meeting_date: "Jul 02, 2024 to Aug 14, 2024",
    days: "Tue Thu",
    time: "14:35 - 15:55",
    building: "ON",
    room: "LINE",
    section_info: "ONLINE",
    timeConflictWith: ["20886", "21268", "21270"]
}

let CGSC3601B = {
    status: "Open",
    crn: "21270",
    subject: "CGSC 3601",
    section: "B",
    title: "AI and Cog Sci",
    credits: "0.5",
    schedule: "Seminar",
    prereq: "Yes",
    restr: "Yes",
    instructor: "Barrack Obama",
    meeting_date: "Jul 02, 2024 to Aug 14, 2024",
    days: "Tue Thu",
    time: "14:35 - 15:55",
    building: "ON",
    room: "LINE",
    section_info: "ONLINE",
    timeConflictWith: ["20886", "21268", "20887"]
}

// Economics (ECON) Courses
let ECON1001S = {
    status: "Open",
    crn: "20934",
    subject: "ECON 1001",
    section: "S",
    title: "Intro to Microeconomics",
    credits: "0.5",
    schedule: "Lecture",
    prereq: "No",
    restr: "No",
    instructor: "Lebron James",
    meeting_date: "May 06, 20245 to Jun 18, 2024",
    days: "Mon Wed",
    time: "18:05 - 20:55",
    building: "ON",
    room: "LINE",
    section_info: "ONLINE ASYNCHRONOUS",
    alsoRegister: "ECON 1001 S01 or S02",
    alsoRegisterCourses: ["21556","21557"]
}

let ECON1001S01 = {
    status: "Open",
    crn: "21556",
    subject: "ECON 1001",
    section: "S01",
    title: "Intro to Microeconomics",
    credits: "0",
    schedule: "Discussion Group",
    prereq: "No",
    restr: "No",
    instructor: "",
    meeting_date: "May 06, 20245 to Jun 18, 2024",
    days: "",
    time: "",
    building: "ON",
    room: "LINE",
    section_info: "ONLINE ASYNCHRONOUS",
    alsoRegister: "ECON 1001 S",
    alsoRegisterCourses: ["20934"]
}

let ECON1001S02 = {
    status: "Open",
    crn: "21557",
    subject: "ECON 1001",
    section: "S02",
    title: "Intro to Microeconomics",
    credits: "0",
    schedule: "Discussion Group",
    prereq: "No",
    restr: "No",
    instructor: "",
    meeting_date: "May 06, 20245 to Jun 18, 2024",
    days: "",
    time: "",
    building: "ON",
    room: "LINE",
    section_info: "ONLINE ASYNCHRONOUS",
    alsoRegister: "ECON 1001 S",
    alsoRegisterCourses: ["20934"]
}

const database = [
    CGSC1001A,
    CGSC1001B,
    CGSC3201A,
    CGSC3601B,
    ECON1001S,
    ECON1001S01,
    ECON1001S02
]

const CGSC = [
    CGSC1001A,
    CGSC1001B,
    CGSC3201A,
    CGSC3601B
]

const ECON = [
    ECON1001S,
    ECON1001S01,
    ECON1001S02
]


