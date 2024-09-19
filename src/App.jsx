import FilterableProductTable from './components/FilterableProductTable'
import PRODUCTS from './products'

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
