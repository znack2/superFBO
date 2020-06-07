const api = {
  get: (path, params = {}) => {
    const pathStorage = JSON.parse(localStorage.getItem(path)) || [];
    return pathStorage.filter((element) => {
      for (let key in params) {
        if (element[key] && `${element[key]}` !== `${params[key]}`)
          return false;
      }
      return true;
    });
  },
  post: (path, document) => {
    const pathStorage = JSON.parse(localStorage.getItem(path)) || [];
    let id = 1;
    if (pathStorage.length) {
      const lastElement = pathStorage
        .sort((a, b) => a.id - b.id)
        .slice(-1)
        .pop();
      id = lastElement.id++;
    }

    localStorage.setItem(
      path,
      JSON.stringify([...pathStorage, { ...document, id }])
    );
    return { ...document, id };
  },
};

export default api;
