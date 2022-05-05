import './styles.css';
import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { message, Form, Input, Button, InputNumber } from 'antd';

export default function AdicionarProduto() {
    const [disabled, setDisabled] = useState(false);
    const history = useHistory()
    async function handleSubmit(produto) {
        setDisabled(true);
        api.post('/item', produto)
        .then((response) => {
            if(response.status === 201) {
                message.success('Produto Adicionado com sucesso!');
                history.push('/produtos') 
            }
        })
        .catch((err) => {
            message.error('Aconteceu um erro ao adicionar o produto' + err)
        })
    }

    return(
        <div className='produto__container'>
            <h1>Adicionar novo produto</h1>
            <br/>
            <div>
                <Form
                name='submiProduto'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={handleSubmit}
                autoComplete="off"
                >
                    <Form.Item
                    label='Nome do item'
                    name='name'
                    rules={[{required: true, message: 'O nome do item não pode ser vazio'}]}
                    >
                        <Input />   
                         
                    </Form.Item>

                    <Form.Item
                    label='Descrição'
                    name='description'
                    rules={[{required: true, message: 'Insira a descrição do item'}]}
                    >
                        <Input />   
                         
                    </Form.Item>

                    <Form.Item
                    label='Quantidade'
                    name='quantity'
                    rules={[{required: true, message: 'Insira a quantidade'}]}
                    >
                        <InputNumber />   
                         
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>



                </Form>
            </div>
        </div>
    )
}


