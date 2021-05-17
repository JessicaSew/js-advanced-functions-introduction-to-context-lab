// Your code here
//const testArray = ["Jess", "Addo", "Software Engineer", 40]
//const twoRows = [["Jess", "Addo", "Software Engineer", 40],["Der","Sewell", "Turtle", 80]]
function createEmployeeRecord (testArray)
{
    const employeeRecord =
    {
        firstName: testArray[0] ,
        familyName: testArray[1],
        title: testArray[2],
        payPerHour: testArray[3],
        timeInEvents: [],
        timeOutEvents: []

    }
    return employeeRecord 
}

function createEmployeeRecords(twoRows) {
    const Objs = []

    for(var i = 0; i < twoRows.length; i++)
    {

        Objs.push(
            {
            firstName: twoRows[i][0], 
            familyName: twoRows[i][1], 
            title: twoRows[i][2], 
            payPerHour: twoRows[i][3], 
            timeInEvents: [], 
            timeOutEvents: []
            }
            )
  
    }

    return Objs 
}

function createTimeInEvent(employeeRecord, dateStamp)
{

        employeeRecord.timeInEvents[0] = "TimeIn"
        //employeeRecord.timeInEvents.append(dateStamp)
        //employeeRecord.timeInEvents.push(dateStamp.substring(11, 15))
        // employeeRecord.timeInEvents.push(dateStamp.substring(0, 10))

        // employeeRecord.timeOutEvents.push("TimeOut")
        // employeeRecord.timeOutEvents.push(dateStamp.substring(11, 15))
        // employeeRecord.timeOutEvents.push(dateStamp.substring(0, 10))

        return employeeRecord;
}