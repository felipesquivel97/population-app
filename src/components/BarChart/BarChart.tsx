import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import type { CountryName } from '../../types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

interface Props {
  data: { name?: CountryName; region: string; population: number }[]
}

export default function BarChart({ data }: Props) {
  const chartData = {
    labels: data.map((d) => (d.name ? d.name.common : d.region)),
    datasets: [
      {
        label: 'Population',
        data: data.map((d) => d.population),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  }

  return <Bar data={chartData} />
}
