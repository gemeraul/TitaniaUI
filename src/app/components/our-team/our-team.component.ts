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
      tech_list: ['Angular 7', 'Typescript', 'Python', 'HTML + CSS', 'NodeJs'],
      int_title: 'Gaming Enthusiast: ',
      int_text: 'If he\'s not coding he\'s playing League of Legends. Currently ranked Diamond, if you want to play with him check out the links!',
      links_title: 'Twitch & OP.GG',
      links_urls: [{ class: 'twitch', url: 'https://www.twitch.tv/tottogoboom' }, { class: 'globe', url: 'http://na.op.gg/summoner/userName=eltotto' }]
    },
    {
      name: 'Andres Jacobowitz',
      title: 'Web & Graphic Designer',
      experience: 'A very long experinece working with Web Development technologies for many clients. Expert in transforming customer ideas into real prototypes and designs that impress everyone.',
      tech_list: ['Wordpress', 'Adobe Certified', 'Illustrator', 'HTML + CSS']
    },
    {
      name: 'Eunice Grimaldi',
      title: 'Product & UX Designer',
      experience: 'Bachellors degree in Product design with experience on 3D modeling & printing. Participated in an Interaction Design certificate with CIID and UX design with Pratt Institute in New York.',
      tech_list: ['Sketch', 'Illustrator', '3D Modeling', 'HTML + CSS'],
      int_title: 'Anime fanatic:',
      int_text: 'Loves spending weekends watching all kinds of anime series on Crunchyroll. Learned japanase just to watch them without subtitles!',
      links_title: 'Portfolio',
      links_urls: [{ class: 'globe', url: '' }]
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
      tech_list: person.tech_list,
      int_title: person.int_title,
      links_title: person.links_title,
      int_text: person.int_text,
      links_urls: person.links_urls
    }).afterClosed().subscribe(result => {
      console.log('Item card dialog closed');
    });
  }

}
