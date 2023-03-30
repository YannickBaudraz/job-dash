import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  Filler,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

export default () => {
  ChartJs.register(
    // Bar
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
};
