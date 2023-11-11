import {
  StatisticsItem,
  StatisticsList,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <div>
      <StatisticsSection>
        <StatisticsTitle>{title}</StatisticsTitle>

        <StatisticsList>
          {data.map(({ id, label, percentage }) => (
            <StatisticsItem key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatisticsItem>
          ))}
        </StatisticsList>
      </StatisticsSection>
    </div>
  );
};
