import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, toggleTheme } from "../redux/appSlice";

function ComponentC() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.app.user);
  const theme = useSelector((state) => state.app.theme);
  const status = useSelector((state) => state.app.status);
  const error = useSelector((state) => state.app.error);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div style={{ marginLeft: "40px" }}>
      <h4>Component C</h4>

      <p>
        Поточна тема: <strong>{theme}</strong>
      </p>

      <button onClick={() => dispatch(toggleTheme())}>Змінити тему</button>

      <hr />

      <h4>Async user</h4>

      {status === "loading" && <p>Завантаження...</p>}

      {status === "failed" && (
        <p style={{ color: "red" }}>Помилка: {error}</p>
      )}

      {status === "succeeded" && user && (
        <p>
          Користувач: <strong>{user.name}</strong>
        </p>
      )}

      <button
        onClick={() => dispatch(fetchUser())}
        disabled={status === "loading"}
      >
        Оновити користувача
      </button>
    </div>
  );
}

export default ComponentC;