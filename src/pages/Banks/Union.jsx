import BanksLayout from "../../layouts/BanksLayout";
import unionLogo from "../../assets/union-bank.svg";
import Banks from "../../components/Banks";

const Union = () => {
  return (
    <BanksLayout logo={unionLogo}>
      <Banks bankName={"Union Bank Nigeria Plc"} miniName={"Union Bank"} />
    </BanksLayout>
  );
};

export default Union;
