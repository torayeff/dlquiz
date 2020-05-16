import React from "react";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import useSWR from "swr";

function DeepLearningQuiz() {
  const fetcher = url => fetch(url).then(res => res.json());
  const { data, error } = useSWR('/api/fetch-quiz', fetcher);

  return (
    <Layout title={"Deep Learning Quiz"}>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            {data ? <Quiz questions={data} time={40*60}/> : "loading"}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// class DeepLearningQuiz extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <Layout title={"Deep Learning Quiz"}>
//         <div className="wrapper">
//           <div className="container">
//             <div className="row">
//               {/*<Quiz questions={questions} time={40*60}/>*/}
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }
//
export default DeepLearningQuiz;