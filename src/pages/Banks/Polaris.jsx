import PolarisLogo from '../../assets/polaris.svg'
import BanksLayout from '../../layouts/BanksLayout'
import Banks from '../../components/Banks'

const Polaris = () => {
  return (
    <BanksLayout logo={PolarisLogo}>
      <Banks bankName={"Polaris Bank"} miniName={"Polaris Bank"} />
    </BanksLayout>
  )
}

export default Polaris