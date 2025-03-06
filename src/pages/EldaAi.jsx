import EldaAI from "../assets/elda-pamphlet.png";
import MainLayout from "../layouts/MainLayout";

const EldaAi = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-center w-full">
        <img src={EldaAI} alt="elda ai" className="w-full" />
      </div>
    </MainLayout>
  );
};

export default EldaAi;
