import React, { Component } from 'react';
import api from './api';

class App extends Component{

  state= {
    produtos:[],
  }

  async componentDidMount(){
    const resposta = await api.get('');
    //console.log(resposta.data);

    this.setState({ produtos: resposta.data });
  }

  render(){

    const { produtos } = this.state;
    let preçoComDesconto;

    return(
      
        <div class="container">
          <center>
          <div class="col-md-4">
            {produtos.map(produto => (
              <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">{produto.nome}</h4>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">R${preçoComDesconto = (produto.valor - (produto.valor * (produto.desconto.replace("%","") / 100))).toFixed(2)}</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>{produto.descricao}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </center>
      </div>
        
     
    )
  }
}

export default App;
