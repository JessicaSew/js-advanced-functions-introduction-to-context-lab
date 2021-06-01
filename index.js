// Your code here

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
const hour = dateStamp.split(' ')[1]
const date = dateStamp.split(' ')[0]

employeeRecord.timeInEvents.push({ 
   type: "TimeIn",
   hour: parseInt(hour, 10),
   date: date

   
})
return employeeRecord   
}

function createTimeOutEvent(employeeRecord, dateStamp)
{
const hour = dateStamp.split(' ')[1]
const date = dateStamp.split(' ')[0]

employeeRecord.timeOutEvents.push({ 
   type: "TimeOut",
   hour: parseInt(hour, 10),
   date: date

   
})
return employeeRecord   
}

function hoursWorkedOnDate(employeeRecord,soughtDate) {



}