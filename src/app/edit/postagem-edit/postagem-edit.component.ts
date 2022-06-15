import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Postagem } from 'src/app/model/Postagem';
import { CategoriaService } from 'src/app/service/categoria.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem

  tema: Categoria = new Categoria()
  listaTema: Categoria[]
  idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)

  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
      this.postagem = resp
    })
  }

  findByIdTema(){
    this.categoriaService
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagem.categoria = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      alert('Postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
