export class Employee {
    constructor(name, grade, hardSkills, company) {
      this.name = name;
      this.grade = grade;
      this.hardSkills = hardSkills;
      this.company = company;
    }
  
    changeCompany(newCompanyName) {
      this.company = newCompanyName;
    }
  
    upGrade() {
      let numberOfGrade = parseInt(this.grade.match(/\d+/));
      if (numberOfGrade < 4) this.grade = `L${numberOfGrade + 1}`;
    }
  
    addSkill(newSkillName) {
      this.hardSkills.push(newSkillName);
    }
  }
