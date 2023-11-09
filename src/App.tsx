import "./App.css";
import Alert from "./components/ui/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert type={"alert-default"} icon={<Bell />} title={"Upgrade your plan"}>
        <p>
          Ahmed Lorem ipsum <a href="/">Go Home</a> dolor sit amet consectetur
          adipisicing elit. Unde aliquid quod, ab at in tempora nihil magni
          porro alias totam
        </p>
      </Alert>
      <Alert
        type={"alert-info"}
        icon={<Info />}
        title={"Note"}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid quod, ab at in tempora nihil magni porro alias totam"
      />
      <Alert
        type={"alert-warning"}
        icon={<CheckCheck />}
        title={"Your order has been processed"}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid quod, ab at in tempora nihil magni porro alias totam"
      />
      <Alert
        type={"alert-error"}
        icon={<Ban />}
        title={"Something went wrong"}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid quod, ab at in tempora nihil magni porro alias totam"
      />
      <Alert
        type={"alert-success"}
        icon={<AlertTriangle />}
        title={"Tips & Tricks"}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid quod, ab at in tempora nihil magni porro alias totam"
      />
    </div>
  );
}

export default App;
