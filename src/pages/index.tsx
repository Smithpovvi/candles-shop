import MainLayout from "@components/MainLayout";
import exampleProducts from "@static/exampleProducts";
import type { IExampleProduct } from "@customTypes/exampleProductsDto";
import ProductCard from "@components/ProductCard";
import GridContainer from "@components/GridContainer";

export interface IHomePageProps {
  exampleProducts?: IExampleProduct[];
}

const Index: React.FC<IHomePageProps> = ({ exampleProducts }) => {
  return (
    <MainLayout>
      <GridContainer>
        {exampleProducts?.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </GridContainer>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  return { props: { exampleProducts } };
}

export default Index;
