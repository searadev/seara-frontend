import Pagination from "components/Pagination";
import PsychographyCard from "components/PsychographyCard";
import { Link } from "react-router-dom";
import { PsychographyDto } from "types/psychographyDto";
import './styles.css';

const Psychographies = () => {

  const psychographyDto : PsychographyDto = {
    "id": 2,
    "fullName": "Um aluno aprendiz, candidato ao trabalho do bem com Jesus",
    "title": "Nesta noite fria aí no plano físico, que o amor possa aquecer os corações, amparar, auxiliar e esclarecer aquele que vem em busca do alimento da alma, do Espírito imortal. Graças a Deus. É sempre bom estarmos juntos, não é mesmo? A cada encontro aprendemos um pouco mais, nos aperfeiçoamos na tarefa a qual fomos convidados a exercer. Hoje aqui viemos com o propósito de observar as diferentes terapias oferecidas neste hospital e escola ao mesmo tempo, pois aprendemos muito. As técnicas aqui utilizadas são diferentes das conhecidas enquanto encarnado. Mas o amor daquele que tem vontade de servir é o ingrediente que não deve faltar. Quando aqui chegamos fomos distribuídos em subgrupos para observar, registrar e anotar as dúvidas para, ao final, nos reunirmos novamente, onde cada um colocará as suas impressões. Quanta situação de aprendizado é ofertada desde as primeiras horas. Como vocês já sabem, o pronto socorro espiritual não para. O fluído vital se faz necessário para recolocar os irmãos na vida e, cada um, ao receber esses fluídos, com o auxílio do médium, percebe que pode movimentar o corpo. Alguns, pela vontade, restauram o corpo rapidamente, deixando essa terapia chamada de fisioterapia, e seguindo para outras: orientação, esclarecimento e encaminhamento. Sim, são muitos trabalhadores à disposição desse auxílio. É tudo muito bonito e, gratificante, ver a transformação. Nós, desse grupo, somos fortalecidos por Jesus e pelo desejo de servir na sua vinha. Muito obrigado por hoje, continuaremos aqui “estagiando”, pois as sementes serão plantadas em outras searas. Continuem o estudo de vocês para serem boas ferramentas. A disciplina, o estudo, a vontade e o amor são indispensáveis para o êxito da tarefa. Muito obrigado por hoje. Um aluno aprendiz, candidato ao trabalho do bem com Jesus! Até a próxima oportunidade, se for permitido relataremos a experiência do nosso grupo.",
    "date": "18/08/2022",
    "medium": {
        "id": 1,
        "fullName": "Ananda Silva"
    },
    "status": true
}

    return (
        <div className="container my-4 psychography-container">
          <div className="row psychography-title-container">
            <h1>Psicografias</h1>
          </div>
          <div className="row">
            <Link to="/psychography/1">
              <PsychographyCard psychographyDto={psychographyDto}  />
            </Link>
          </div>
          <div className="row">
            <Link to="/psychography/1">
              <PsychographyCard psychographyDto={psychographyDto}  />
            </Link>
          </div>
          <div className="row">
            <Link to="/psychography/1">
              <PsychographyCard psychographyDto={psychographyDto}  />
            </Link>
          </div>
          <div className="row">
            <Link to="/psychography/1">
              <PsychographyCard psychographyDto={psychographyDto}  />
            </Link>
          </div>
          <div className="row">
            <Link to="/psychography/1">
              <PsychographyCard psychographyDto={psychographyDto}  />
            </Link>
          </div>
          <div className="row">
            <Pagination />
          </div>
        </div>  
    );
  };
  
  export default Psychographies;