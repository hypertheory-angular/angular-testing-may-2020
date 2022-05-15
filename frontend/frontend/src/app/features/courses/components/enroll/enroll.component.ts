import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectUserName } from 'src/app/features/auth/state';
import { CourseEnrollmentViewModel } from '../../models';
import { selectCourseEnrollmentViewModel } from '../../state';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css'],
})
export class EnrollComponent implements OnInit {
  model$!: Observable<CourseEnrollmentViewModel | undefined>;
  id!: string;
  form = this.formBuilder.group({
    dateOfCourse: ['', [Validators.required]],
    course: [''],
  });
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.id = id!;
      this.model$ = this.store.select(selectCourseEnrollmentViewModel(this.id));
    });
  }

  get dateOfCourse() {
    return this.form.get('dateOfCourse');
  }
  submit(course: string, foci?: HTMLInputElement | HTMLSelectElement) {
    if (this.form.valid) {
      const payload = {
        course,
        date: this.dateOfCourse?.value,
      };
      console.log(payload);
    } else {
      this.dateOfCourse?.markAsDirty();
      foci?.focus();
    }
  }
}
