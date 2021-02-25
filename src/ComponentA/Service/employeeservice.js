const KEYS = {
    Users: 'Users',
    employeeId: 'employeeId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export function insertEmployee(data) {
    let Users = getAllEmployees();
    data['id'] = generateEmployeeId()
    Users.push(data)
    localStorage.setItem(KEYS.Users, JSON.stringify(Users))
}
export function updateEmployee(data) {
    let Users = getAllEmployees();
    let recordIndex=Users.findIndex(x=>x.id==data.id);
    Users[recordIndex]={...data}
    localStorage.setItem(KEYS.Users, JSON.stringify(Users))
}
export function deleteEmployee(id) {
    let Users = getAllEmployees();
    Users=Users.filter(x=>x.id!=id);
    localStorage.setItem(KEYS.Users, JSON.stringify(Users))
}
export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.Users) == null)
        localStorage.setItem(KEYS.Users, JSON.stringify([]))
        //return JSON.parse(localStorage.getItem(KEYS.Users));
        let Users = JSON.parse(localStorage.getItem(KEYS.Users));
        //map departmentID to department title
        console.log(Users);
        let departments = getDepartmentCollection();
 
        console.log(departments);
        return Users.map(x => ({
            ...x,
            department: departments[x.dept-1].title
        }))
}