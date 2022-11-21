import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi, PiralStoreDataEvent } from "app";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  function useValue(name: string) {
    const [val, setVal] = React.useState(() => app.getData(name));

    React.useEffect(() => {
      const handler = (ev: PiralStoreDataEvent) => {
        if (ev.name === name) {
          setVal(ev.value);
        }
      };

      app.on("store-data", handler);

      return () => {
        app.off("store_data", handler);
      };
    }, [name]);

    return val;
  }

  app.registerPage("/page", Page);

  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/page">Page</Link>);
  app.registerTile(
    () => {
      const qxz = useValue("qxz");
      return (
        <div>
          Current value of qxz: <strong>{qxz}</strong>
        </div>
      );
    },
    {
      initialColumns: 2,
      initialRows: 2,
    }
  );
}
