// src/SalesChart.js
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Buttongrafico, ChartWrapper, SalesChartContainer} from './styles';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const salesData = {
  segunda: [100, 200, 150, 300, 250],
  terca: [200, 150, 300, 350, 100],
  quarta: [250, 100, 200, 150, 300],
  quinta: [300, 250, 100, 200, 150],
  sexta: [150, 300, 250, 100, 200]
};

const daysOfWeek = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

const SalesChart = () => {
  const [selectedDay, setSelectedDay] = useState('segunda');

  const handleClick = (day) => {
    setSelectedDay(day);
  };

  const data = {
    labels: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5'],
    datasets: [
      {
        label: `Faturamento - ${selectedDay}`,
        data: salesData[selectedDay],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Gráfico de Faturamento - ${selectedDay}`,
      },
    },
  };

  return (
    <ChartWrapper>
      <SalesChartContainer>
        {daysOfWeek.map((day) => (
          <Buttongrafico key={day} onClick={() => handleClick(day)}>
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Buttongrafico>
        ))}
      </SalesChartContainer>
      <Line data={data} options={options} />
    </ChartWrapper>
  );
};

export default SalesChart;
