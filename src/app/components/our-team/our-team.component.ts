import { Component, OnInit } from '@angular/core';

// Services
import { PersonCardModalService } from '../../services/person-card-modal.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  team = [
    {
      name: 'Raul Grimaldi',
      title: 'Founder | Software Architect',
      experience: 'Developing custom software solutions for over 4 years. Highly proficient in Angular 7 and NodeJs. Participated in several Hackathons and Innovation Challenges achieving 2nd place finishes.',
      tech_list: ['Angular 7', 'Typescript', 'Python', 'HTML + CSS', 'NodeJs']
    },
    {
      name: 'Andres Jacobowitz',
      title: 'Web & Graphic Designer',
      experience: 'A very long bla bla bla thing of experinece work related what to put here lorem ipsum absjsf kjfk kjkdf als thi s i a nie pace t wirte stuff what do we avengers is a ery good moe i dot wannt go sir',
      tech_list: ['Wordpress', 'Adobe Certified', 'Illustrator', 'HTML + CSS']
    },
    {
      name: 'Eunice Grimaldi',
      title: 'Product & UX Designer',
      experience: 'Bachellors degree in Product design with experience on 3D modeling & printing. Participated in an Interaction Design certificate with CIID and UX design with Pratt Institute in New York.',
      tech_list: ['Sketch', 'Illustrator', '3D Modeling', 'HTML + CSS']
    }
  ];

  constructor(private personCardModalService: PersonCardModalService) { }

  ngOnInit() {
  }

  openItemCardDialog(person) {
    this.personCardModalService.openModal({
      name: person.name,
      title: person.title,
      experience: person.experience,
      tech_list: person.tech_list
    }).afterClosed().subscribe(result => {
      console.log('Item card dialog closed');
    });
  }

}
