import { addDays } from 'date-fns'

function resToWeather(res) {
  const today = new Date()
  return res.list.map((data, i) => ({
    date: addDays(today, i),
    minTemp: data.temp.min,
  }))
}
