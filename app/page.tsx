import NavBar from "./components/navBar/navbar";
import SearchBar from "./components/searchBar/searchBar";
import FiltersSection from "./components/filtersSection/filters";
import Selector from "./components/itemSelector/selector";
import CarsSection from "./components/carCardsSection/carsSection";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <FiltersSection></FiltersSection>
      <SearchBar></SearchBar>
      <Selector></Selector>
      <CarsSection></CarsSection>
    </>
  );
}
