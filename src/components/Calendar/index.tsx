import Send from "../../assets/send.svg";
import SectionBlock from "../shared/SectionBlock";
import Calendar from "./Calendar";
import Input from "./Input";
import TextBox from "./TextBox";
import FileUpload from "./Upload";

const CalendarSection = () => {
  function renderContent() {
    return (
      <div className="flex flex-col gap-y-10">
        <Calendar />
        <form className="space-y-4">
          <Input label="Nom" name="name" placeholder="Entrez votre nom" />
          <Input label="Email" name="email" placeholder="Entrez votre e-mail" />
          <TextBox
            label="Message"
            name="message"
            placeholder="Entrez votre message"
          />
          <FileUpload />
          <div className="flex gap-x-4 ml-auto justify-end">
            <button className="flex justify-center items-center h-[48px] w-[200px] rounded-[333px] border-[1.5px] border-solid border-[#562c2c4d] px-4 py-3 cursor-pointer">
              <span>Clear All</span>
            </button>
            <button className="flex items-center justify-center gap-x-2 h-[48px] w-[200px] bg-[#F2542D] rounded-[33px] cursor-pointer px-4 py-3">
              <span className="text-white">Envoyer</span>
              <img src={Send} width={32} />
            </button>
          </div>
        </form>
      </div>
    );
  }
  return <SectionBlock title="NOS ACTIVITÉS" content={renderContent()} />;
};

export default CalendarSection;
