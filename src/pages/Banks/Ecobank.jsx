import BanksLayout from "../../layouts/BanksLayout";
import ecobankLogo from "../../assets/ecobank.svg";
import Banks from "../../components/Banks";

const Ecobank = () => {
  return (
    <BanksLayout logo={ecobankLogo}>
      <Banks bankName={"Ecobank Bank Nigeria Plc"} miniName={"Ecobank"} />
    </BanksLayout>
  );
};

export default Ecobank;
