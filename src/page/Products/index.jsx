import React, { useState } from 'react';
import { MainProdutos } from './styles';
import PesquisaProduct from '../../Components/PesquisaProducs';
import { BootstrapButton } from '../../Components/Button-Materialul/styles';
import { Stack } from '@mui/material';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'; // Importe Row e Col

function AdicionarProdutoModal() {
  const [show, setShow] = useState(false);
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    categoria: '',
    idioma: 'Português',
    moeda: 'Real (R$)',
    tipo: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o envio dos dados para o backend ou realizar outras ações.
    console.log('Produto cadastrado:', produto);
    handleClose();
  };

  return (
    <>
      <BootstrapButton variant="contained" className='Martipla' disableRipple onClick={handleShow}>
        Adicionar Produto
      </BootstrapButton>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Novo Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTipoProduto">
              <Form.Label>Selecione o tipo do seu produto</Form.Label>
              <Form.Check
                type="radio"
                label="E-book e arquivos"
                name="tipo"
                value="E-book e arquivos"
                checked={produto.tipo === 'E-book e arquivos'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Serviço"
                name="tipo"
                value="Serviço"
                checked={produto.tipo === 'Serviço'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Curso"
                name="tipo"
                value="Curso"
                checked={produto.tipo === 'Curso'}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formNomeProduto" className="mt-3">
              <Form.Label>Nome do produto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite um nome"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescricaoProduto" className="mt-3">
              <Form.Label>Descrição breve</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descreva seu produto em poucas palavras"
                name="descricao"
                value={produto.descricao}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCategoria" className="mt-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                name="categoria"
                value={produto.categoria}
                onChange={handleChange}
                required
              >
                <option value="">Selecione a categoria</option>
                <option value="ebooks">E-books</option>
                <option value="servicos">Serviços</option>
                <option value="cursos">Cursos</option>
              </Form.Control>
            </Form.Group>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="formIdioma">
                  <Form.Label>Idioma principal</Form.Label>
                  <Form.Control
                    as="select"
                    name="idioma"
                    value={produto.idioma}
                    onChange={handleChange}
                    required
                  >
                    <option value="Português">Português</option>
                    <option value="Inglês">Inglês</option>
                    <option value="Espanhol">Espanhol</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formMoeda">
                  <Form.Label>Moeda base</Form.Label>
                  <Form.Control
                    as="select"
                    name="moeda"
                    value={produto.moeda}
                    onChange={handleChange}
                    required
                  >
                    <option value="Real (R$)">Real (R$)</option>
                    <option value="Dólar (US$)">Dólar (US$)</option>
                    <option value="Euro (€)">Euro (€)</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="mt-3">
              Cadastrar Produto
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function Produto() {
  return (
    <div>
      <MainProdutos className='right-content w-100'>
        <h1>Produto</h1>
        <div className='row vendasBoxWrapperRow'></div>
        <div className='card shadow border-0 p-3 mt-4'>
          <Stack spacing={3} direction="row">
            <PesquisaProduct />
            <BootstrapButton variant="contained" className='' disableRipple>
              Autorais
            </BootstrapButton>
            <BootstrapButton variant="contained" className='' disableRipple>
              Afiliação
            </BootstrapButton>
            <BootstrapButton variant="contained" className='' disableRipple>
              Coprodução
            </BootstrapButton>
            <AdicionarProdutoModal /> {/* Modal de cadastro de produto */}
          </Stack>
        </div>
      </MainProdutos>
    </div>
  );
}
