import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultStats } from "../../features/allEmployees/allEmployeesSlice";
import { ChartsContainers, DefaultStatsContainer } from "../Charts";
import Loading from "../Loading/Loading";

const Stats = () => {
  const dispatch = useDispatch();

  const { isGettingDefaultStats, monthlyApplication } = useSelector(
    (store) => store.allEmployees
  );

  useEffect(() => {
    dispatch(getDefaultStats());
  }, []);

  if (isGettingDefaultStats) {
    return <Loading />;
  } else {
    return (
      <div className="container fullPage ">
        <h1 className="display-4">Stats</h1>
        <DefaultStatsContainer />
        {monthlyApplication.length > 0 && <ChartsContainers />}
      </div>
    );
  }
};

export default Stats;
