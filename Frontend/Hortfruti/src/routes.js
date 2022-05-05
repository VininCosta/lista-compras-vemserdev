import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Produtos from "./pages/Produto"
import Inicio from "./pages/Inicio"
import AdicionarProduto from "./pages/AdicionarProduto/index";
import DetalhesProduto from "./pages/DetalhesProduto/index"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/produtos" exact component={Produtos} />  
                <Route path="/adicionar" component={AdicionarProduto} />
                <Route path="/detalhes/:id" component={DetalhesProduto} />
            </Switch>
        </BrowserRouter>
    )
}