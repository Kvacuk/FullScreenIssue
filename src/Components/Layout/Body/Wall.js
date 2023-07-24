import { TextRow } from "./TextRow";
import './Wall.css';

const createColumns = (num) => {
    const columns = [];
  
    for (let i = 0; i < num; i++) {
      columns.push(
        <div key={i} className="column">
          <TextRow/>
        </div>
      );
    }
  
    return <>{columns}</>;
  };
  
  
export const Wall = () => {
    return <>
        {createColumns(15)}
    </>
}