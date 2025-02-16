import Button from "./Button";
import MountainsIcon from "../../assets/mountains-dark.svg";
import FishingIcon from "../../assets/fishing-dark.svg";
import CrosshairIcon from "../../assets/crosshair-dark.svg";
import SectionBlock from "../shared/SectionBlock";
import LeafletMap from "./LeafletMap.tsx";

const Map = () => {
  function renderContent() {
    return (
      <>
        <div className="flex gap-5">
          <Button buttonText="Activité 1" src={MountainsIcon} />
          <Button buttonText="Activité 2" src={FishingIcon} />
          <Button buttonText="Activité 3" src={CrosshairIcon} />
        </div>
        <div className="w-full h-[698px]">
          <LeafletMap />
        </div>
      </>
    );
  }
  return <SectionBlock title="TITRE BLOC 2" content={renderContent()} />;
};

export default Map;
