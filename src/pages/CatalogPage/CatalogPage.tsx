import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { fetchCars, resetCars } from "../../redux/Slice/carsSlice";
import Filters from "../../components/Filters/Filters";
import CarList from "../../components/CarList/CarList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Loader from "../../components/Loader/Loader";
import { sanitizeFilters } from "../../Utils/sanitizeFilters";

import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const {
    items: cars,
    totalPages,
    isLoading,
  } = useAppSelector((state) => state.cars);

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const clean = sanitizeFilters(filters);

    const fixedFilters = {
      ...clean,
      page: page.toString(),
    };

    dispatch(fetchCars(fixedFilters));
  }, [dispatch, page, filters]);
  
  

  const handleFilter = (newFilters: typeof filters) => {
    dispatch(resetCars());
    setPage(1);
    setFilters(newFilters);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const brands = useMemo(() => {
    return [...new Set(cars.map((car) => car.brand))];
  }, [cars]);

  return (
    <div className={s.catalogPage}>
      <Filters onFilter={handleFilter} brands={brands} />
      {cars.length === 0 && !isLoading && (
        <p className={s.error}>No cars found</p>
      )}
      {isLoading && <Loader />}
      <div className={s.cardList}>
        <CarList cars={cars} />
      </div>
      <LoadMoreButton
        onClick={handleLoadMore}
        visible={!isLoading && page < totalPages && cars.length > 0}
      />
    </div>
  );
};

export default CatalogPage;
