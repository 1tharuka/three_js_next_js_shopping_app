import Sider from "../components/ui/components/cart/Sider"
import Ai from "../components/ui/components/Ai"
import HomePage from "../components/ui/components/HomePage.jsx"


export default function Home() {
  return (
    <div className="w-full h-full">
        <HomePage />  
      <div className="mt-14 w-full">
        <Sider name="All Items" link="/seall" />
      </div>
      <div className="mt-14 w-full">
        <Ai />
      </div>
    </div>
  );
}
