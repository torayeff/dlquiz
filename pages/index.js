import React from "react";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import useSWR from "swr";
import fetch from "node-fetch";

function Index() {
  const reqBody = {
    ids: [3, 36, 88, 9]
  };

  const fetcher = url => fetch(url, {
    method: "post",
    body: JSON.stringify(reqBody),
    headers: {"Content-Type": "application/json"}
  }).then(res => res.json());
  const {data, error} = useSWR('/api/fetch-quiz', fetcher);

  const getUserAnswers = (userAnswers) => {
    console.log("from index: ", userAnswers);
  };

  return (
    <Layout title={"Deep Learning Quiz"}>
      <div className="wrapper">
        <div className="container">
          {data ? <div className="row"><Quiz questions={data} time={3} getUserAnswers={getUserAnswers}/></div> :
            <h4 className="centered-info">Loading...</h4>}
        </div>
      </div>
    </Layout>
  );
}

export default Index;