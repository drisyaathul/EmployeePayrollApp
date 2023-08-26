/*
UC9: * Perform the validation on the setter method
     * validating the user inputs using regular expression
*/

class EmployeePayrollData {
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }

    get profileImage() {
        return this.profileImage;
    }
    set profileImage(profileImage) {
        this.profileImage = profileImage;
    }

    get gender() {
        return this.gender;
    }
    set gender(gender) {
        this.gender = gender;
    }

    get department() {
        return this.department;
    }
    set department(department) {
        this.department = department;
    }

    get salary() {
        return this.salary;
    }
    set salary(salary) {
        this.salary = salary;
    }

    get startDate() {
        return this.startDate;
    }
    set startDate(startDate) {
        this.startDate = startDate;
    }

    get notes() {
        return this.notes;
    }
    set notes(notes) {
        this.notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" :
                        this.start_date.toLocaleDateString("en-US", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " +this.profilePic
                    + ", Department = " + this.department + ", Salary = " + this.salary +
                        ", StartDate = " + empDate + ", Note = " +this.note;
    }
}