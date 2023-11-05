"use client"
import CompaniesList from "@/components/CompaniesList";
import Hero from "@/components/Hero";
import ky from "ky"
import {useQuery} from "@tanstack/react-query";
import Chart from "chart.js/auto"
import {Pie} from "react-chartjs-2"


const getMostPopularProducts = async () => {
  const json = await ky.get("https://ctfkg-production.up.railway.app/product/getFiveMost").json()
  return json
}

export default function Home() {
  const {data, isLoading, error} = useQuery({
    queryKey: ["mostPopularProducts"],
    queryFn: getMostPopularProducts
  })

  const labels = data && data.map(item => item[0])
  const dataValues = data && data.map(item => item[1])

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Самые популярные продукты",
        data: dataValues,

      },
    ]
  }

  return (
    <main>
      <Hero />
      <div className="max-w-screen-xl mx-auto">
        <CompaniesList />
      </div>
    </main>
  );
}
