import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
interface Iprops {
  type: string;
  icon: ReactNode;
  title: string;
}
const Alerts = ({ type, icon, title }: Iprops) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <span>
          <X />
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione
        doloremque autem doloribus illum qui earum eligendi ab dolor similique?
      </p>
    </div>
  );
};

export default Alerts;
