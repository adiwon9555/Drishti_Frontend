import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private taskService: TaskService) {

  }
  final = []
  startMark = false;
  selectedIndex = -1;
  title = 'drishtiFrontend';
  selectedTask = ''
  tasks = [];
  images = [];
  ngOnInit() {
    this.getAllBlogs();
  }
  getAllBlogs() {
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }
  getImages(task) {
    this.taskService.getImages(task).subscribe(data => {
      this.selectedTask = task
      this.images = data;
    });
  }
  getImageUrl(image) {
    return "./assets/Images/" + this.selectedTask + "/" + image
  }
  start() {
    this.startMark = true;

  }
  store(i) {
    if (this.startMark == true) {
      this.final.push(i);
    }

  }
  checkActive(i) {
    for (let index = 0; index < this.final.length; index++) {
      if (this.final[index] == i) {
        return true;
        break
      }

    }
    return false
  }
  stop() {
    this.final = [];
    this.startMark = false;

  }
  submit() {
    var data = {
      task: this.selectedTask,
      images: this.images.filter((im, ind) => {
        for (let index = 0; index < this.final.length; index++) {
          if (this.final[index] == ind) {
            return true;
            break
          }

        }
        return false
      })
    }


    this.taskService.submit(data).subscribe(d => {
      console.log(d);
      alert("submitted")
    });


  }
  // alert(JSON.stringify(data))
}

