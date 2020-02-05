import { Component, OnInit } from '@angular/core';
import { MedgrupoService } from 'src/app/service/medgrupo.service';
import { EventModel } from 'src/app/models/schedule/event.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  // events: Array<EventModel[]> = this.medgrupoService.events;

  title: string = 'Produtos';
  listProducts: any[] = [];
  showContent: boolean = false;
  count: number = 0;

  infoProduct: Object = {
    name: '',
    status: true
  };

  type: string;

  private idProduct: string;

  constructor(
    private medgrupoService: MedgrupoService,
  ) {
    console.log("cadastra produto");
    this.postProducts();

    this.getProducts().then(
      (resp: any) => {
        console.log(resp)
        // this.listProducts = resp.result;
        // this.showContent = true;
        // this.createForm(this.infoProduct);
      }
    )
      .catch(
        (error: any) => {
          // this.notify('Ocorreu um erro inesperado!', 'danger');
          console.log(error)
        }
      )
  }

  ngOnInit() {
  }

  private getProducts() {
    return new Promise((resolve, reject) => {
      this.medgrupoService.getProducts().subscribe(
        (resp: any) => {
          resolve(resp);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  private postProducts() {
    const body = {
      "id": this.count,
      "Dia": 2222,
      "IdProduto": 5,
      "IdTurma": 16047,
      "Mes": 1,
      "NomeTurma": "2019 MED MEDICINE MEDREADER",
      "tema": [
        {
          "Hora": "08:30:00",
          "IdProduto": 5,
          "NomeTema": "1º Tema - Clínica Médica",
          "Tempo": "MED MEDICINE MEDREADER &raquo; 08:30h",
          "Titulo": "MED Síndrome Ictérica I ( Hepatites)"
        },
        {
          "Hora": "11:30:00",
          "IdProduto": 5,
          "NomeTema": "2º Tema - Pediatria",
          "Tempo": "MED MEDICINE MEDREADER &raquo; 08:30h",
          "Titulo": "MED Doenças Exantemáticas"
        }
      ]
    };

    this.medgrupoService.createProduct(body).subscribe(
      (resp: any) => {
        if (resp.status) {
          this.showContent = false;
          this.getProducts().then(
            (resp: any) => {
              this.listProducts = resp.result;
              this.showContent = true;
              this.count = this.count + 1;
              // this.createForm(this.infoProduct);
              console.log('Produto cadastrado com sucesso!', 'success');
            }
          )
            .catch(
              (error) => {
                console.log('Ocorreu um erro inesperado!', 'danger');
              }
            );
        } else {
          console.log('Ocorreu um erro, tente novamente mais tarde!', 'warning');
        }
      },
      error => {
        console.log('Ocorreu um erro inesperado!', 'danger');
      }
    );
  }

}
