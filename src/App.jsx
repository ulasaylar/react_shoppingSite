import "./App.css";
import Header from "./components/Header";
import PageContainer from "./components/PageContainer";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          className="drawer"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
          anchor="right"
        >
          {products &&
            products.map((product) => {
              return (
                <div className="drawer-cont" key={product.id}>
                  <div className="drawer-left-cont">
                    <img src={product.image} width={50} height={50} />
                    <p className="drawer-second-row">{product.title}</p>
                    <p style={{ marginRight: 15 }}>({product.count})</p>
                  </div>
                  <p className="drawer-third-row">{product.price}₺</p>
                </div>
              );
            })}
          {totalAmount > 0 && (
            <div className="basket-total-cont">
              <p>Sepet Tutarı: {totalAmount.toFixed(2)}₺</p>
            </div>
          )}
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
