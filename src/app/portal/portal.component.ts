import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  title = 'indeed';
 jobsdata;
 mumbai;
 pune;

  constructor(public http:HttpClient) { }

  ngOnInit() {


  this.http.get('http://localhost:8888/jobportal/readdata.php').subscribe(
    data => {
      
      this.jobsdata = data as string;
      console.log('Data fetched is successful ', data);
    },
    error => {
      console.log('Error', error);

}
  );
  }

  getjoball()
{

  this.http.get('http://localhost:8888/jobportal/readdata.php').subscribe(
    data => {
      
      this.jobsdata = data as string;
      console.log('Data fetched is successful ', data);
    },
    error => {
      console.log('Error', error);

}
  );
}


getjobpune(){
  this.http.get('http://localhost:8888/jobportal/readdatapune.php').subscribe(
    data => {
      
      this.jobsdata = data as string;
      console.log('Data fetched is successful ', data);
    },
    error => {
      console.log('Error', error);

}
  );

}
getjobmumbai(){
  this.http.get('http://localhost:8888/jobportal/readdatamumbai.php').subscribe(
    data => {
      
      this.jobsdata = data as string;
      console.log('Data fetched is successful ', data);
    },
    error => {
      console.log('Error', error);

}
  );

}


}
