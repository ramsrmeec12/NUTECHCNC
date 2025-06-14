import ManagingDirectorProfile from "../components/MDprofile";
import Mission from "../components/Mission";
import Navbar2 from "../components/Navbar2";

export default function ManagementTeam(){
    return(<div>
        <Navbar2></Navbar2>
        <div className="pt-20">
<ManagingDirectorProfile></ManagingDirectorProfile>
        <Mission></Mission>
        </div>
        
        
    </div>)
}