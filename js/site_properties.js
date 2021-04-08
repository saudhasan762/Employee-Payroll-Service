const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (!nameRegex.test(name)) throw 'Name is Incorrect';
}


const checkStartDate = (startDate) => {
    let now = new Date();
    if (startDate > now) throw 'Start Date is a Future Date';
    var diff = Math.abs(now.getTime() - startDate.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30)
        throw 'Start Date is beyond 30 Days!';
}

let site_properties = {
    use_local_storage: "true",
    home_page: "../pages/home_page.html",
    add_emp_payroll_page: "../pages/payroll_form.html",
    server_url: "http://127.0.0.1:3000/EmployeePayrollDB"
}