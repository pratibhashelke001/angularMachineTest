import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-machine-test1',
  templateUrl: './machine-test1.component.html',
  styleUrls: ['./machine-test1.component.css']
})
export class MachineTest1Component implements OnInit {

  studentForm: FormGroup;
  studentArr: any[] = [];
  isSidePanel: boolean = false;

  constructor() {
    this.studentForm = new FormGroup({
      studentId: new FormControl(0),
      fullName: new FormControl(""),
      dob: new FormControl(''),
      mobile: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl("")
    });
  }

  ngOnInit(): void {
   this.loadData();
  }
  loadData(){
    const localData = localStorage.getItem('studData');
    if (localData != null) {
      this.studentArr = JSON.parse(localData);
    }
  }
  saveStudent() {
    if(this.studentForm.controls['studentId'].value == 0) {
      const studObj = this.studentForm.value;
      studObj.studentId = this.studentArr.length + 1;
      this.studentArr.push(studObj);
    } else {
      const currentRec =  this.studentArr.find(m=>m.studentId == this.studentForm.controls['studentId'].value);
      if (currentRec !== undefined) {
        currentRec.fullName = this.studentForm.controls['fullName'].value;
        currentRec.mobile = this.studentForm.controls['mobile'].value;
        currentRec.dob = this.studentForm.controls['dob'].value;
        currentRec.email = this.studentForm.controls['email'].value;
        currentRec.address = this.studentForm.controls['address'].value;
      }
    }
    localStorage.setItem('studData', JSON.stringify(this.studentArr));
  }
  onEdit(id: number) {
    const currentRec =  this.studentArr.find(m=>m.studentId == id);
    if (currentRec !== undefined) {
      this.studentForm = new FormGroup({
        studentId: new FormControl(currentRec.studentId),
        fullName: new FormControl(currentRec.fullName),
        mobile: new FormControl(currentRec.mobile),
        dob: new FormControl(currentRec.dob),
        email: new FormControl(currentRec.email),
        address: new FormControl(currentRec.address)
      });
    }
  }
  onDelete(id: number) {
    const recordIndex =  this.studentArr.findIndex(m=>m.studentId == id);
    this.studentArr.splice(recordIndex,1);
    for (let index = 0; index < this.studentArr.length; index++) {
      if (this.studentArr[index].studentId == id) {
        this.studentArr.splice(index,1)
      }
    }
    localStorage.setItem('studData', JSON.stringify(this.studentArr));
  }

}
