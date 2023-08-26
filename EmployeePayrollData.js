/*
UC9: * Perform the validation on the setter method
     * validating the user inputs using regular expression
*/

class EmployeePayrollData {
    get name() {
        return this.name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$")
        if (nameRegex.test(name)) 
            this.name = name;
        else throw "Name is Incorrect !!" 
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
        const inputDate = new Date(start_date);
         if(isNaN(inputData.getTime())) {
            throw new Error ("Invalid Date Format!")
         }
         //check if the date is not in the future
         const currentDate = new Date();
         if (inputDate >  currentDate) {
            throw new Error("Start date cannot be in the future")
         }
         //check if the date is within 30days of joining
         const thirtyDaysAgo = new Date();
         thirtyDaysAgo.setDate(currentDate.getDate() - 30);
         if (inputDate < this.joinDate || inputDate > currentDate) {
            throw new Error ("Start date should be within 30 days of joining")
         }
         //Set the Start Date if all validation checks pass
         this.startDate = inputDate;
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