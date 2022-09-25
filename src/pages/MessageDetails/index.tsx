import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import './styles.css';

const MessageDetails = () => {
    return (
        <div className="message-details-container">
            <div className="base-card message-details-card">
                <div className="goback-container">
                    <ArrowIcon />
                    <h2>VOLTAR</h2>
                </div>
                <div className="message-content-container">
                    <div className="message-text-container">
                        <h2>Título</h2>
                        <p>Nesta noite fria aí no plano físico, que o amor possa aquecer os corações, amparar, auxiliar e esclarecer aquele que vem em busca do alimento da alma, do Espírito imortal. Graças a Deus. É sempre bom estarmos juntos, não é mesmo? A cada encontro aprendemos um pouco mais, nos aperfeiçoamos na tarefa a qual fomos convidados a exercer. Hoje aqui viemos com o propósito de observar as diferentes terapias oferecidas neste hospital e escola ao mesmo tempo, pois aprendemos muito. As técnicas aqui utilizadas são diferentes das conhecidas enquanto encarnado. Mas o amor daquele que tem vontade de servir é o ingrediente que não deve faltar. Quando aqui chegamos fomos distribuídos em subgrupos para observar, registrar e anotar as dúvidas para, ao final, nos reunirmos novamente, onde cada um colocará as suas impressões. Quanta situação de aprendizado é ofertada desde as primeiras horas. Como vocês já sabem, o pronto socorro espiritual não para. O fluído vital se faz necessário para recolocar os irmãos na vida e, cada um, ao receber esses fluídos, com o auxílio do médium, percebe que pode movimentar o corpo. Alguns, pela vontade, restauram o corpo rapidamente, deixando essa terapia chamada de fisioterapia, e seguindo para outras: orientação, esclarecimento e encaminhamento. Sim, são muitos trabalhadores à disposição desse auxílio. É tudo muito bonito e, gratificante, ver a transformação. Nós, desse grupo, somos fortalecidos por Jesus e pelo desejo de servir na sua vinha. Muito obrigado por hoje, continuaremos aqui “estagiando”, pois as sementes serão plantadas em outras searas. Continuem o estudo de vocês para serem boas ferramentas. A disciplina, o estudo, a vontade e o amor são indispensáveis para o êxito da tarefa. Muito obrigado por hoje. Um aluno aprendiz, candidato ao trabalho do bem com Jesus! Até a próxima oportunidade, se for permitido relataremos a experiência do nosso grupo.</p>
                    </div>
                    <div>
                        <div className="message-data-container">
                            <h1>11/11/11</h1>
                            <h1>-</h1>
                            <h1>Um irmão</h1>
                        </div>                    
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default MessageDetails;