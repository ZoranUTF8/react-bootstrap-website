const DefaultStatsItem = ({ title, count, icon, background }) => {
  return (
    <div className="stat_item_card text-light rounded bg-secondary m-3">
      <div className="stat_item_card-up">
        <div className="stat_item_card-left">
          <h1>{count}</h1>
        </div>
        <div className="stat_item_card-right">{icon}</div>
      </div>
      <div className="stat_item_card-down">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default DefaultStatsItem;
