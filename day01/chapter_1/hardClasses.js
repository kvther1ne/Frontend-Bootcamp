import { Employee } from "./classes.js";
import structuredClone from "@ungap/structured-clone";

export class Company {
  constructor(companyName, currentProjects, completedProjects, staff) {
    this.companyName = companyName;
    this.currentProjects = currentProjects;
    this.completedProjects = completedProjects;
    this.staff = structuredClone(staff);
  }

  addNewCompanyMember(candidate) {
    if (candidate instanceof Manager) {
      this.staff.managers.push(candidate);
    } else if (candidate instanceof FrontendDeveloper) {
      this.staff.developers.frontend.push(candidate);
    } else {
      this.staff.developers.backend.push(candidate);
    }
  }

  addProject(Project) {
    this.currentProjects.push(Project);
  }

  getMembersQuantity() {
    let members =
      1 +
      this.staff.developers.backend.length +
      this.staff.developers.frontend.length;
    return members;
  }

  completeProject(project) {
    this.currentProjects.filter((proj) => proj !== project);
    this.completedProjects.push(project);
    project.team.manager.projectQuantity += 1;
    project.team.developers.frontend.forEach((dev) => {
      dev.projectQuantity++;
    });
    project.team.developers.backend.forEach((dev) => {
      dev.projectQuantity++;
    });
  }
}

export class Project {
  constructor(projectName, minQualification, team) {
    (this.projectName = projectName);
      (this.minQualification = minQualification);
      (this.team = team);
  }

  addNewProjectMember(Developer) {
    if (this.team.manager.checkMember(this.minQualification, Developer)) {
      if (Developer.developerSide === "frontend") {
        this.team.developers.frontend.push(Developer);
      } else {
        this.team.developers.backend.push(Developer);
      }
    }
  }
}

export class Manager extends Employee {
  constructor(projectQuantity) {
    super("Katya", "L1", ["SQL"], "SBER");
    this.projectQuantity = projectQuantity;
  }

  checkMember(minQualification, member) {
    return member.company === this.company && member.grade >= minQualification
      ? true
      : false;
  }
}

export class FrontendDeveloper extends Employee {
  constructor(stack, developerSide, projectQuantity) {
    super("Katya", "L1", ["SQL"], "SBER");
    (this.stack = stack),
      (this.developerSide = developerSide),
      (this.projectQuantity = projectQuantity);
  }

  expandStack(newTech) {
    this.stack.push(newTech);
  }
}

export class BackendDeveloper extends Employee {
  constructor(stack, developerSide = "backend", projectQuantity) {
    super("Katya", "L1", ["SQL"], "SBER");
    (this.stack = stack),
      (this.developerSide = developerSide),
      (this.projectQuantity = projectQuantity);
  }

  expandStack(newTech) {
    this.stack.push(newTech);
  }
}
