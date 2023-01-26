const { createContext, useState, useContext } = require("react");

const Context = createContext();

const Provider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const exposed = {
    value: 42,
  };

  return (
    <Context.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </Context.Provider>
  );
};

export const userMenu = () => useContext(Context);

export default Provider;
