const tech = {
  matchColor: (e) => {
    if (e === "javascript") {
      return "#f5ef42";
    } else if (e === "python" || e === "css") {
      return "#326ef0";
    } else if (e === "html" || e === "sql;") {
      return "#f56642";
    } else if (e === "react js" || e === "next js") {
      return "#d032f0";
    } else if (e === "react native" || e === "node js") {
      return "#29f057";
    } else if (e === "nosql") {
      return "#f02929";
    } else {
      return "#8c8c8c";
    }
  },
  data: [
    { name: "javascript", color: "yellow" },
    { name: "python", color: "blue" },
    { name: "html", color: "orange" },
    { name: "css", color: "blue" },
    { name: "react js", color: "purple" },
    { name: "react native", color: "green" },
    { name: "node js", color: "green" },
    { name: "next js", color: "purple" },
    { name: "sql", color: "orange" },
    { name: "nosql", color: "red" },
  ],
};

export default tech;
