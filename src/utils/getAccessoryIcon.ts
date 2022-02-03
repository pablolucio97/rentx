import AcelerationSvg from "../../assets/car.svg";
import Exchangevg from "../../assets/exchange.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import EnergySvg from "../../assets/energy.svg";
import HybridSvg from "../../assets/hybrid.svg";
import PeopleSvg from "../../assets/people.svg";
import SpeedSvg from "../../assets/speed.svg";
import CarSvg from "../../assets/car.svg";

export function getAccessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AcelerationSvg;
    case "turning_diameter":
      return ForceSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "electric_motor":
      return EnergySvg;
    case "exchange":
      return Exchangevg;
    case "hybrid_motor":
      return HybridSvg;
    case "seats":
      return PeopleSvg;
    default:
      return CarSvg;
  }
}
