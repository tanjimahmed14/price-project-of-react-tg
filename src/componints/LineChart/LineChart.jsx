import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentsdata = [
    {"id": 1, "math_score": 80,"english": 78},
    {"id": 2, "math_score": 75, "english": 66},
    {"id": 3, "math_score": 90, "english": 93},
    {"id": 4, "math_score": 85,"english": 87},
    {"id": 5, "math_score": 95, "english": 83},
    {"id": 6, "math_score": 70, "english": 55},
    {"id": 7, "math_score": 88, "english": 77},
    {"id": 8, "math_score": 92, "english": 74},
    {"id": 9, "math_score": 78, "english": 63},
    {"id": 10, "math_score": 87, "english": 99}
    ]

    return (
        <div>
            <Lchart width={700} height={400} data={studentsdata}>
            <XAxis dataKey="id" />
                <Line dataKey={'math_score'} stroke='red'></Line>
                <Line dataKey={'english'} stroke='green'></Line>
                <YAxis />
            </Lchart>
        </div>
    );
};

export default LineChart;