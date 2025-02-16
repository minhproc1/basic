import { ReactNode } from "react";

interface SectionBlock {
  title: ReactNode;
  content: ReactNode;
  subTitle?: ReactNode;
}

const SectionBlock = ({ title, subTitle, content }: SectionBlock) => {
  return (
    <div className="px-[340px] flex flex-col justify-center items-center gap-y-10">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex items-center w-full">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="mx-10 text-[56px] text-[#F2542D]">{title}</span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        {subTitle}
      </div>
      {content}
    </div>
  );
};

export default SectionBlock;
