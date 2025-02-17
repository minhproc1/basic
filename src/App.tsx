import ArrowUpRight from "./assets/arrow-up-right.svg";
import CardImageOne from "./assets/card-1.png";
import CardImageTwo from "./assets/card-2.png";
import CardImageThree from "./assets/card-3.png";
import ChatIcon from "./assets/chat.svg";
import CrosshairIcon from "./assets/crosshair.svg";
import FishingIcon from "./assets/fishing.svg";
import MountainsIcon from "./assets/mountains.svg";
import Calendar from "./components/Calendar";
import Map from "./components/Map";
import Card from "./components/shared/Card";
import SectionBlock from "./components/shared/SectionBlock";

function App() {
  return (
    <div className="flex flex-col gap-y-20">
      <header className="bg-[url(../src/assets/header.png)] bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between text-white relative">
        <div className="px-[340px] py-[12px] flex items-center h-[72px]  bg-[#562c2cb3] border-b border-b-[#562c2cb3] border-solid backdrop-blur-[7.5px]">
          <div className="font-bold mr-[93px]">LOGO SAMPLE</div>
          <ul className="flex gap-x-6">
            <li className="mr-[123px]">Titre 1</li>
            <li className="mr-[74px]">Titre 2</li>
            <li className="mr-[45px]">Titre 3</li>
            <li>Titre 4</li>
          </ul>
          <ul className="flex gap-x-4 items-center ml-auto">
            <li>
              <img src={MountainsIcon} width={28} className="cursor-pointer" />
            </li>
            <li>
              <img src={FishingIcon} width={28} className="cursor-pointer" />
            </li>
            <li>
              <img src={CrosshairIcon} width={28} className="cursor-pointer" />
            </li>
            <li>
              <button className="flex bg-[#F2542D] px-4 py-2.5 rounded-[33px] h-10 cursor-pointer">
                <img src={ArrowUpRight} width={24} className="ml-2" />
              </button>
            </li>
          </ul>
        </div>
        <div className="px-[340px] pb-[120px]">
          <ul className="flex gap-x-80 px-20 justify-center">
            <li className="py-5">
              <img src={MountainsIcon} width={32} className="cursor-pointer" />
            </li>
            <li className="py-5">
              <img src={FishingIcon} width={32} className="cursor-pointer" />
            </li>
            <li className="py-5">
              <img src={CrosshairIcon} width={32} className="cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="absolute bottom-2 right-2 pb-20 pr-[148px]">
          <button className="bg-[#F2542D] rounded-[222px] h-14 w-14 cursor-pointer p-3">
            <img src={ChatIcon} width={32} />
          </button>
        </div>
      </header>
      <section>
        <SectionBlock
          title="Titre Bloc 1"
          subTitle={<span className="text-2xl ">Sous-titre Bloc 1</span>}
          content={
            <div className="flex w-full gap-x-6">
              <Card
                title="Case Title"
                subTitle="Case sous-titre"
                content="Chaque sentier vous conduit à des panoramas époustouflants,chaque instant devient une aventure, chaque rencontre vouspromet un so uvenir marquant. Avec MITIK, le tourismed’aventure allie nature brute et confort raffiné à toutesles saisons. Randonnée, canoë, observation de la faune,rencontres culturelles, exploration en montagne, chaqueescapade est une immersion inoubliable dans les grandsespaces canadiens."
                imageSrc={CardImageOne}
                buttonText="Forfait 1"
                containerClass="mt-11"
              />

              <Card
                title="Case Title"
                subTitle="Case sous-titre"
                content="Chaque sentier vous conduit à des panoramas époustouflants,chaque instant devient une aventure, chaque rencontre vouspromet un so uvenir marquant. Avec MITIK, le tourismed’aventure allie nature brute et confort raffiné à toutesles saisons. Randonnée, canoë, observation de la faune,rencontres culturelles, exploration en montagne, chaqueescapade est une immersion inoubliable dans les grandsespaces canadiens."
                imageSrc={CardImageTwo}
                buttonText="Forfait 2"
              />
              <Card
                title="Case Title"
                subTitle="Case sous-titre"
                content="Chaque sentier vous conduit à des panoramas époustouflants,chaque instant devient une aventure, chaque rencontre vouspromet un so uvenir marquant. Avec MITIK, le tourismed’aventure allie nature brute et confort raffiné à toutesles saisons. Randonnée, canoë, observation de la faune,rencontres culturelles, exploration en montagne, chaqueescapade est une immersion inoubliable dans les grandsespaces canadiens."
                imageSrc={CardImageThree}
                buttonText="Forfait 3"
                containerClass="mt-11"
              />
            </div>
          }
        />
      </section>
      <section className="bg-[url(../src/assets/section-2.png)] bg-cover bg-center bg-no-repeat h-screen">
        <Map />
      </section>
      <section>
        <Calendar />
      </section>
      <div>
        <div>Title</div>
        <div>Sub-title</div>
        <div>Content</div>
      </div>
      <div>
        <div>section 1</div>
        <div>section 2</div>
      </div>
      <div>Nearly footer</div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
