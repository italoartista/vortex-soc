const { v4: uuidv4 } = require('uuid')

// models/Player.js
class Player {
    constructor(nome, nivel, pontosDeVida, pontosDeMana, experiencia) {
      this.id = uuidv4()
      this.nome = nome;
      this.nivel = nivel;
      this.pontosDeVida = pontosDeVida;
      this.pontosDeMana = pontosDeMana;
      this.experiencia = experiencia;
     
    }
  
    // Métodos simples para acessar os dados
    getNome() {
      return this.nome;
    }
  
    getNivel() {
      return this.nivel;
    }
  
    getPontosDeVida() {
      return this.pontosDeVida;
    }
  
    getPontosDeMana() {
      return this.pontosDeMana;
    }
  
    // Adiciona ou remove experiência
    adicionarExperiencia(pontos) {
      this.experiencia += pontos;
    }
  
    removerExperiencia(pontos) {
      this.experiencia -= pontos;
    }
  }
  
  module.exports = Player;
  