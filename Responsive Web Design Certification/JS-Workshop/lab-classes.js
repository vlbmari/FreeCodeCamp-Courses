const projectStatus = {
  "PENDING": {description: "Pending Execution"},
  "SUCCESS": {description: "Executed Successfully"},
  "FAILURE": {description: "Execution Failed"},
}

class ProjectIdea {
  constructor(title, description){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus){
    this.status = newStatus
  }
}

class ProjectIdeaBoard {
  constructor(title){
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea){
    return this.ideas.push(projectIdea);
  }

  unpin(projectIdea){
    const index = this.ideas.indexOf(projectIdea);
    if(index != -1){
      this.ideas.splice(index,1)
    }else{
      return console.log("Not found");
    };
  }

  count(){
    return this.ideas.length;
  }

  formatToString(){
    const quantityIdeas = this.count();

    if (!quantityIdeas){
        return `${this.title} has ${quantityIdeas} idea(s)\n`;
    }

    return `${this.title} has ${quantityIdeas} idea(s)\n${this.ideas.map(idea => `${idea.title} (${idea.status.description}) - ${idea.description}\n`)}`;

  }
}

const emptyBoard = new ProjectIdeaBoard("Empty Board");
const result = emptyBoard.formatToString();
console.log(result); 

const techProjects = new ProjectIdeaBoard("Tech Projects Board");
const smartHome = new ProjectIdea(
  "Smart Home System", 
  "An integrated system to control lighting, temperature, and security devices remotely."
);

techProjects.pin(smartHome);
const result2 = techProjects.formatToString();
console.log(result2);