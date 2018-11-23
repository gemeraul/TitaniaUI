import { Component, OnInit } from '@angular/core';

// Services
import { PersonCardModalService } from '../../services/person-card-modal.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor(private personCardModalService: PersonCardModalService) { }

  ngOnInit() {
  }

  openItemCardDialog(nombre) {
    this.personCardModalService.openModal({
      nombre: nombre
    }).afterClosed().subscribe(result => {
      console.log('Item card dialog closed');
    });
  }

}
