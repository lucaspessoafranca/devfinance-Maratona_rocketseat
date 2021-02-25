const Modal = {
    open(){

        // abrir modal
        //adicionar a classe active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
        },
    close() {
        // fechar modal 
        // remover a classe actice do modal
        document.querySelector('.modal-overlay').classList.remove('active');

    }
}