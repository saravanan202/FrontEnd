import { Component } from '@angular/core';
import { HomeApiService } from '../home-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-sp',
  templateUrl: './employee-sp.component.html',
  styleUrls: ['./employee-sp.component.scss']
})
export class EmployeeSPComponent {
  displayedColumns: string[] = ['name', 'staffID', 'department', 'paymentDate', 'basicPay', 'hra', 'others', 'totalEarnings', 'taxPay', 'netPay', 'delete'];
  employeeData: any[] = [];
  employeeForm!: FormGroup;
  departments = ['HR', 'Finance', 'IT', 'R&D', 'Sales']; // Example departments


  constructor(private employeeService: HomeApiService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      staffID: [''],
      department: ['', Validators.required],
      paymentDate: ['', Validators.required],
      basicPay: [0, Validators.required],
      hra: [0, Validators.required],
      others: [0, Validators.required]
    });
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employeeData = data;
    });
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      let formData = this.employeeForm.value;

      // ✅ Convert all numeric fields to Decimal (Fix Type Issues)
      formData.basicPay = parseFloat(formData.basicPay).toFixed(2);
      formData.hra = parseFloat(formData.hra).toFixed(2);
      formData.others = parseFloat(formData.others).toFixed(2);

      this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
        this.loadEmployees();
        this.employeeForm.reset();
      });
    }
  }
  deleteEmployee(id: number) {

    this.employeeService.deleteRecords(id).subscribe(() => {
      this.loadEmployees();

    });    // Call delete API and refresh data
  }
}
