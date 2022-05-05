import './App.css';
import { Layout, Menu } from 'antd';
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Routes from './routes'
import Logo1 from './pages/assets/logo2-.png'

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="main">  
         <Layout className="main__content">
      <Header className='header'>
        <img src={Logo1} />
      </Header>
      <Layout>
        <Sider className='menu'>
          <Menu className='menu__section'>
            <Menu.Item key={1} icon={<PlusOutlined />}>
              Adicionar Produtos
            </Menu.Item>
            <Menu.Item key={2} icon={<UnorderedListOutlined />}>
              Listar Produtos
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="content">
          <Routes />
        </Content>
      </Layout>
      <Footer className='footer'>@2022 Todos os direitos reservados </Footer>
    </Layout>
    </div>
  );
}

export default App;
