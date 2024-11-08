import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from "recharts";
  
  export default function StatisticBar({data}) {
    const data1 = [
      { name: "Page A", uv: 590, pv: 800, amt: 1400, cnt: 490 },
      { name: "Page B", uv: 868, pv: 967, amt: 1506, cnt: 590 },
      { name: "Page C", uv: 1397, pv: 1098, amt: 989, cnt: 350 },
      { name: "Page D", uv: 1480, pv: 1200, amt: 1228, cnt: 480 },
      { name: "Page E", uv: 1520, pv: 1108, amt: 1100, cnt: 460 },
      { name: "Page F", uv: 1400, pv: 680, amt: 1700, cnt: 380 },
      { name: "Page G", uv: 1320, pv: 780, amt: 1300, cnt: 400 },
      { name: "Page H", uv: 1450, pv: 960, amt: 1200, cnt: 370 },
      { name: "Page I", uv: 1500, pv: 1150, amt: 1150, cnt: 450 },
      { name: "Page J", uv: 1200, pv: 700, amt: 1600, cnt: 360 },
      { name: "Page K", uv: 1250, pv: 980, amt: 1450, cnt: 390 },
      { name: "Page L", uv: 1380, pv: 850, amt: 1550, cnt: 420 },
    ];
  
    return (
      <div>
        <div className="relative bg-white h-[650px] lg:h-[700px] px-5">
          <div className="hero bg-[#9538E2] text-white p-5 lg:px-36 rounded-b-lg h-[250px] lg:h-[194px]">
            <div className="hero-content text-center">
              <div className="max-w-xs lg:max-w-4xl lg:max-h-[500px] absolute top-3 lg:top-10 space-y-1">
                <h1 className="text-4xl lg:text-5xl">Statistics</h1>
                <p className="lg:py-6">
                  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
              </div>
            </div>
          </div>
          <p>Statistics</p>
          <div className="w-[90%] lg:w-full">
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="id" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="price" barSize={30} fill="#413ea0" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
          </div>
          
        </div>
      </div>
    );
  }
  