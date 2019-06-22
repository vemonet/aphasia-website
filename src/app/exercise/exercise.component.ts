import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  exerciseText: string = 'Can you repeat words and sentences ?';
  exerciseDifficulty: number = 4;
  exerciseLanguage: string = 'en';

  constructor() { }

  ngOnInit() {
  }

}
