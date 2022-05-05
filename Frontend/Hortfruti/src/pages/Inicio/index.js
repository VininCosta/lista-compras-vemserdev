import './styles.css'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import Logo from '../assets/hort.jpg'

export default function Inicio(){

    const history = useHistory()

    async function listarProdutos(e){
        history.push('/produtos')
    }

    return (
        <div className='inicio__container'>
            <section>
                <img className='center' src={Logo} />
                <br />
                <Button className='center' onClick={listarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
}