import MainLayout from "@components/MainLayout";
import { useRouter } from "next/router";

const Product: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout>
      <h1>Product {id}</h1>
    </MainLayout>
  );
};

export default Product;