import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function AdicionarProdutoModal() {
  const [show, setShow] = useState(false);
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
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
      <Button variant="primary" onClick={handleShow} className='Martipla'>
        Adicionar Produto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNomeProduto">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do produto"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescricaoProduto" className="mt-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Insira a descrição do produto"
                name="descricao"
                value={produto.descricao}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrecoProduto" className="mt-3">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o preço do produto"
                name="preco"
                value={produto.preco}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Cadastrar Produto
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdicionarProdutoModal;
