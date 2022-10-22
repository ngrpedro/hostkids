import Leaflet from "leaflet";
import LogoIcon from "../assets/LogoMap.svg";

const mapIcon = Leaflet.icon({
  iconUrl: LogoIcon,
  iconSize: [58, 48],
  iconAnchor: [29, 58],
  popupAnchor: [170, 12],
});

export default mapIcon;
