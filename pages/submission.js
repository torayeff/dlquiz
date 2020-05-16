import React from "react";
import Layout from "../components/Layout";

class Submission extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout title={"Submission"}>
        <h3 className="text-center">Your answers were successfully submitted!</h3>
      </Layout>
    );
  }
}

export default Submission;