import PageHeader from "../components/pageheader-comp/pageHeader";
import bgImg from "../assets/image_01.jpg";
import infoSection from "../components/infosection-comp/infoSection";
import stayData from "../components/staydata-comp/stayData";

// Stays.jsx er parent komponenten, fordi den er ansvarlig for PageHeader child visning
const Stays = () => {
  return (
    <article>
      <PageHeader titleOne="Vores ophold" bgImg01={bgImg} />
      <infoSection
        title="Vi har ophold til enhver smag"
        description="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den idelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem til at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
      />
      <stayData />
    </article>
  );
};

export default Stays;
