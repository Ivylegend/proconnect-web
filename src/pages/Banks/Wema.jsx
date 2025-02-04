import React from "react";
import Banks from "../../components/Banks";
import BanksLayout from "../../layouts/BanksLayout";
import WemaLogo from '../../assets/wema-bank.svg'

const Wema = () => {
  return (
    <BanksLayout logo={WemaLogo}>
      <Banks bankName={"Wema Bank Nigeria Plc"} miniName={"Wema Bank"} />
    </BanksLayout>
  );
};

export default Wema;
