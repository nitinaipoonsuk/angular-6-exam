import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  private name: string;
  private age: number;
  private email: string;
  private address: {
    street: string;
    city: string;
    provice: string;
    postcode: string;
  };

  private isEditable:boolean;

  private todoList:Todo[];

  private skills: string[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.name = "Nitinai Poonsuk";
    this.age = 25;
    this.email = "nitinaipoonsuk@gmail.com";
    this.address = {
      street: "22/27 ชยางกูร",
      city: "Nakhonphanom",
      provice: "Bagkok",
      postcode: "48110"
    };

    this.skills = ["Programming", "Gammer", "Sleeping"];

    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response
    })
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }  

  toggleEdit(){
    this.isEditable =! this.isEditable;
    
  }
  
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
