import DefaultStatsItem from "./DefaultStatsItem";
import { useSelector } from "react-redux";
import {
  MdOutlineBeenhere,
  MdOutlineSick,
  MdOutlineReportProblem,
} from "react-icons/md";
import { BsReverseBackspaceReverse } from "react-icons/bs";

const DefaultStatsContainer = () => {
  const { defaultStats } = useSelector((store) => store.allEmployees);

  const defaultStatsInitialArray = [
    {
      title: "Employed",
      count: defaultStats.employed || 0,
      icon: <MdOutlineBeenhere />,
      background: "bg-success",
    },
    {
      title: "Not-employed",
      count: defaultStats["not-employed"] || 0,
      icon: <BsReverseBackspaceReverse />,
    },
    {
      title: "Sick-leave",
      count: defaultStats["sick-leave"] || 0,
      icon: <MdOutlineSick />,
    },
    {
      title: "Suspended",
      count: defaultStats.suspended || 0,
      icon: <MdOutlineReportProblem />,
    },
  ];

  return (
    <div className="container d-flex gap-1 p-2 justify-content-center align-items-center flex-wrap">
      {defaultStatsInitialArray.map((statsItem, indx) => {
        return <DefaultStatsItem key={indx} {...statsItem} />;
      })}
    </div>
  );
};

export default DefaultStatsContainer;
