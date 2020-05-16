import React from "react";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import useSWR from "swr";

function index() {
  const fetcher = url => fetch(url).then(res => res.json());
  const {data, error} = useSWR('/api/fetch-quiz', fetcher);

  return (
    <Layout title={"Deep Learning Quiz"}>
      <div className="wrapper">
        <div className="container">
          {data ? <div className="row"><Quiz questions={data} time={10 * 60}/></div> :
            <h4 className="centered-info">Loading...</h4>}
        </div>
      </div>
    </Layout>
  );
}

export default index;