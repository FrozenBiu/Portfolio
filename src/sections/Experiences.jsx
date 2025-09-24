import { Timeline } from "../components/Timeline";
import { experiences } from "../constants/index.js";

export default function Experiences() {
  return (
    <div className=" w-full">
      <Timeline data={experiences} />
    </div>
  );
}
