import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment/comment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() taskId!:any;

  ngOnInit(): void {
    this.loadData();
  }

  constructor(private commentService:CommentService){}

  comments:any[]=[];

  loadData(){
    this.commentService.getTaskComment(this.taskId).subscribe((comments:any)=>{
      for(let comment of comments){
        this.comments.push(comment);
        console.log(comment);
      }
    });
  }

  addComment(data:NgForm){
    const body = {
      "commentId":1,
      "comment_info":data.value.commentText,
      "comment_date":"2022-12-12",
      "taskId":this.taskId,
      "contractorEmail":localStorage.getItem("UPN")
    }
    console.log("body: ",body);
    try {
      this.commentService.createTaskComment(body).subscribe();
    } catch (error) {
      
    }
    Swal.fire("Post","Your Comment is added on this Task","success");
    this.comments=[];
    setTimeout(() => {
      this.loadData();
    }, 3000);
  }
  

}
