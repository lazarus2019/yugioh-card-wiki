import classNames from "classnames/bind";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import yugiohAPI from "../../api/yugiohAPI";
import ImageList from "../../components/ImageList/ImageList";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./HomePage.module.scss";
import queryString from "query-string";

const cx = classNames.bind(styles);

const ITEMS_PER_PAGE = 24;

const filterInitialValue = {
  num: ITEMS_PER_PAGE,
  offset: 0,
};

function HomePage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({
    listCards: [],
    meta: {},
  });
  const [loading, setLoading] = useState(true);

  const filterParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      num: ITEMS_PER_PAGE,
      offset: Number.parseInt(params.offset) || 0,
      sort: params.sort,
      fname: params.fname || undefined,
      desc: params.desc || undefined,
      race: params.race,
      type: params.type,
      attribute: params.attribute,
      sortorder: params.sortorder,
      atk: Number.parseInt(params.atk) || undefined,
      def: Number.parseInt(params.def) || undefined,
      level: Number.parseInt(params.level) || undefined,
    };
  }, [location.search]);

  const currentPage = useMemo(() => {
    return filterParams.offset === 0
      ? 1
      : Math.ceil((filterParams.offset + ITEMS_PER_PAGE) / ITEMS_PER_PAGE);
  }, [filterParams.offset]);

  const totalPages = useMemo(() => {
    return Math.ceil(data.meta?.total_rows / ITEMS_PER_PAGE);
  }, [data.meta?.total_rows]);

  const fetchData = async (filter) => {
    setLoading(true);
    try {
      const res = await yugiohAPI.test({ params: filter });
      console.log(res);
      setData({
        listCards: res.data,
        meta: res.meta,
      });
    } catch (error) {
      console.log(error);
      setData({
        listCards: [],
        meta: [],
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(filterParams);
  }, [filterParams]);

  const handleSearchChange = (value) => {
    if (value && value.length > 0) {
      const newFilter = {
        ...filterParams,
        fname: value,
        desc: value,
        num: 24,
        offset: 0,
      };
      navigate(`?${queryString.stringify(newFilter)}`);
    }
    if (value === "") {
      const newFilter = {
        ...filterParams,
        fname: undefined,
        desc: undefined,
        num: 24,
      };
      navigate(`?${queryString.stringify(newFilter)}`);
    }
    if (value === undefined) {
      const newFilter = {
        ...filterParams,
        fname: undefined,
        desc: undefined,
        num: 24,
        offset: 0,
      };
      navigate(`?${queryString.stringify(newFilter)}`);
    }
  };

  const handleChangePage = (page) => {
    console.log({ page });
    if (page >= 1) {
      const newFilter = {
        ...filterParams,
        num: ITEMS_PER_PAGE,
        offset: ITEMS_PER_PAGE * (page - 1),
      };

      navigate(`?${queryString.stringify(newFilter)}`);
    }
  };

  const handleFilterChange = (value) => {
    const newFilter = {
      ...filterParams,
      ...value,
      offset: 0,
    };
    navigate(`?${queryString.stringify(newFilter)}`);
  };

  const resetFilter = () => {
    const newFilter = {
      ...filterInitialValue,
      fname: filterParams.fname,
      desc: filterParams.desc,
    };
    navigate(`?${queryString.stringify(newFilter)}`);
  };

  return (
    <div>
      <div className={cx("homepage-container")}>
        <div className={cx("homepage__content")}>
          <div className={cx("homepage__wrapper")}>
            <Sidebar
              onChange={handleFilterChange}
              onResetFilter={resetFilter}
              filters={filterParams}
            />
            <div className={cx("homepage")}>
              <SearchBar
                onChange={handleSearchChange}
                value={filterParams?.fname}
              />
              <Pagination
                totalPage={totalPages}
                totalCard={data.meta?.total_rows}
                currentPage={currentPage}
                onChange={handleChangePage}
              />
              {loading ? (
                <Loading />
              ) : (
                <>
                  {data.listCards?.length > 0 ? (
                    <ImageList data={data.listCards} />
                  ) : (
                    <h2 className={cx("homepage__notfound")}>
                      No Results Found.
                    </h2>
                  )}
                </>
              )}
              <Pagination
                totalPage={totalPages}
                totalCard={data.meta?.total_rows}
                currentPage={currentPage}
                onChange={handleChangePage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
