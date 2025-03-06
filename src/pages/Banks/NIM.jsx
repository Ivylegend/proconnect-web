import BanksLayout from '../../layouts/BanksLayout'
import Banks from '../../components/Banks'
import NIMLogo from '../../assets/NIM-Logo.svg';

const NIM = () => {
  return (
    <BanksLayout logo={NIMLogo}>
      <Banks bankName={"Nigerian Institute of Management"} miniName={"Nigerian Institute of Management"} />
    </BanksLayout>
  )
}

export default NIM