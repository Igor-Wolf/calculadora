import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-itens: center;
    justify-content: center;

`


export const Content = styled.div`

    
    position: fixed;
    z-index: 7000;
    left: 50%;
    /* Define o ponto de partida horizontalmente no centro da tela */
    top: 50%;
    /* Define o ponto de partida verticalmente no centro da tela */
    transform: translate(-50%, -50%);
    /* Move o popup de volta para cima e para a esquerda em 50% do seu próprio tamanho */
    width: 70vw;
    height: auto;
    /* Alterado para 'auto' para acomodar o conteúdo */
    max-width: 90%;
    /* Limita a largura máxima do popup */
    max-height: 90%;
    /* Limita a altura máxima do popup */
    overflow: auto;
    /* Adicionado para permitir rolagem se o conteúdo for maior do que a tela */
    

     
    
`

export const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center

`

export const Column = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
    
`




