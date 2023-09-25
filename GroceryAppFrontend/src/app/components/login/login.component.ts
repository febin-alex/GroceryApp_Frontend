import { Component } from '@angular/core';
import{FormBuilder,FormControl,Validators,FormGroup,ReactiveFormsModule} from '@angular/forms'
import { User } from 'src/app/models/users.model';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  textMess='';
  alertClass='';
  userModel=new User();

   constructor(private fb: FormBuilder,public authSer:AuthGuardService){
    // ,public router:Router){
    }

   loginForm=this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(6)]]
   })
   
  
   get email(){
    return this.loginForm.get('email')
   }
   get password(){
    return this.loginForm.get('password')
   }
   
   loginHandler(){
  this.userModel.Email=this.email!.value!;
  this.userModel.Password=this.password!.value!;
  this.authSer.login(this.userModel).subscribe(
    (res: any) => {
      if(res.status=="success"){
      console.log(res.message);
      this.textMess = res.message;
      this.alertClass = "alert alert-success";
      // localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
          // this.router.navigateByUrl('/');
      }else{
        this.textMess=res.message;
        this.alertClass="alert alert-danger";
      }
        },
        (error) => {
          this.textMess="Invalid Username or Password";
          this.alertClass = "alert alert-danger";
        }
      );
    } 
}
