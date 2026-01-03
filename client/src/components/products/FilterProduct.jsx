import CustomDropdown from "./CustomDropdown";

const FilterProduct = ({ brands, categories, priceRanges, filters, setFilters }) => {
  return (
    <div className="flex gap-6 flex-wrap mb-8">

      <CustomDropdown
        label="Brand"
        options={brands}
        value={filters.brand}
        onChange={(val) => setFilters({ ...filters, brand: val })}
      />

      <CustomDropdown
        label="Category"
        options={categories}
        value={filters.category}
        onChange={(val) => setFilters({ ...filters, category: val })}
      />

      <CustomDropdown
        label="Price"
        options={priceRanges}
        value={filters.price}
        onChange={(val) => setFilters({ ...filters, price: val })}
      />

    </div>
  );
};

export default FilterProduct;
