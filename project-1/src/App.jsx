import ContactHeader from "../component/ContactHeader";
import ContectForm from "../component/ContectForm";
import Navbar from "../component/Navbar";
export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <ContactHeader />
        <ContectForm />
      </div>
    </div>
  );
}
