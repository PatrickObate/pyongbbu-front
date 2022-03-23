import React, { useState, useEffect } from "react";
import {
  getProductsByCount,
  fetchProductsByFilter,
} from "../../functions/product";
import { getCategories } from "../../functions/category";
import { useSelector, useDispatch } from "react-redux";
import { getSubs } from "../../functions/sub";
import ProductCard from "../../components/Cards/ProductCard";
import { Menu, Slider, Checkbox } from "antd";
import SearchForm from "../../components/Forms/SearchForm";
import ShopHeader from "../../components/ShopHeader";

const { SubMenu } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");

  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {
    loadAllProducts();
    // fetch categories
    getCategories().then((res) => setCategories(res.data));
    // fetch subcategories
    getSubs().then((res) => setSubs(res.data));
  }, []);

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  // 2. load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
      if (!text) {
        loadAllProducts();
      }
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  // 3. load products based on price range
  useEffect(() => {
    fetchProducts({ price });
  }, [ok, price]);

  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });

    // reset
    setCategoryIds([]);
    setPrice(value);
    setSub("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  // 4. load products based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));

  // handle check for categories
  const handleCheck = (e) => {
    // reset
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setSub("");
    // console.log(e.target.value);
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1

    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }

    setCategoryIds(inTheState);
    // console.log(inTheState);
    fetchProducts({ category: inTheState });
  };

  // 6. show products by sub category
  const showSubs = () =>
    subs.map((s) => (
      <div
        key={s._id}
        onClick={() => handleSub(s)}
        className="p-1 m-1 badge badge-secondary"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    ));

  const handleSub = (sub) => {
    // console.log("SUB", sub);
    setSub(sub);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    fetchProducts({ sub });
  };

  return (
    <>
      <ShopHeader />
      <div
        className="container-fluid pt-5 pb-5 bg-primary"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-md-3 pt-2">
            <Menu
              defaultOpenKeys={["1", "2"]}
              mode="inline"
              style={{ padding: "10px" }}
            >
              {/* price */}
              <SearchForm />
              <SubMenu key="1" title={<span className="h6">₱ Price</span>}>
                <div>
                  <Slider
                    className="ml-4 mr-4"
                    tipFormatter={(v) => `₱${v}`}
                    range
                    value={price}
                    onChange={handleSlider}
                    max="4999"
                  />
                </div>
              </SubMenu>

              {/* category */}
              <SubMenu key="2" title={<span className="h6">Categories</span>}>
                <div style={{ marginTop: "-10px" }}>{showCategories()}</div>
              </SubMenu>

              {/* sub categories */}
              <SubMenu
                key="3"
                title={<span className="h6">Sub Categories</span>}
              >
                <div style={{ marginTop: "-10px" }} className="pl-4 pr-4">
                  {showSubs()}
                </div>
              </SubMenu>
            </Menu>
          </div>

          <div className="col-md-9">
            {products.length < 1 && <p>No products found</p>}

            <div className="row pb-5">
              {products.map((p) => (
                <div key={p._id} className="col-md-4 mt-2">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
