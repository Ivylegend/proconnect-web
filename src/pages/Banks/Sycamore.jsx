import React from "react";
import BanksLayout from "../../layouts/BanksLayout";
import sycamoreLogo from "../../assets/sycamore-bank.svg";
import Banks from "../../components/Banks";

const Sycamore = () => {
  return (
    <BanksLayout logo={sycamoreLogo}>
      <Banks bankName={"Sycamore"} miniName={"Sycamore"} />
    </BanksLayout>
  );
};

export default Sycamore;
