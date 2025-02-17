import clsx from "clsx";
import ArrowUpRightGreen from "../../assets/arrow-up-right-green.svg";

interface CardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  content: string;
  buttonText: string;
  containerClass?: string;
}

const Card = ({
  imageSrc,
  title,
  subTitle,
  content,
  buttonText,
  containerClass = "",
}: CardProps) => {
  return (
    <div className={clsx("w-[397px] flex flex-col gap-y-6", containerClass)}>
      <img src={imageSrc} />
      <div>
        <div className="text-[#F2542D] text-xl">{title}</div>
        <div className="text-[28px]">{subTitle}</div>
        <div className="text-[18px] line-clamp-2">{content}</div>
      </div>
      <button className="flex justify-center items-center h-10 w-[249px] gap-1 rounded-[333px] border-[1.5px] border-solid border-[#562c2c4d] py-3 px-[76px] cursor-pointer">
        <span>{buttonText}</span>
        <img src={ArrowUpRightGreen} width={24} />
      </button>
    </div>
  );
};

export default Card;
