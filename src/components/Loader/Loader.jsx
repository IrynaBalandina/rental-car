import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () =>{
    return(
        <div className={css.loaderWrapper}>
            <ClipLoader 
               visible={true}
               height="80"
               width="80"
                 wrapperStyle={{}}
  
            color="#36d7b7" />;
        </div>

    )
} 
export default Loader;